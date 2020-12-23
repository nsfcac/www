<?php

// FlexTable table support procedures
// Copyright Bryn Owen Design, 2014+

// call to table generator - pass in all necessary information:
function tableScan($fileName, $maxCols, $numbering, $skipCols, $maxRows, $unlimitedRows, $matchType, $matchValue, $boldCol1, $boldRow1, $titleRow, $autoLinks, $id = "id", $delimiter = ",", $cchar = "#", $mac2utf8 = 0, $markdown = 0, $assetPath = "", $allowFewerCols = 0, $debug = false) {

	// load markdown if requested:
	if ($markdown != 0) {
		$assetProcs = $assetPath . '/Parsedown.php';
		if (file_exists($assetProcs)) {
			if ($debug) { printf("<!-- FlexTable: loading Markdown code from %s -->\n", $assetProcs); }
			include_once $assetProcs;
			$Parsedown = new Parsedown();
			}
		}

	// image file extensions supported:
	$imgExts = array("jpg", "jpeg", "gif", "png", "bmp", "tif", "tiff", "JPG", "JPEG", "GIF", "PNG", "BMP", "TIF", "TIFF");

	if ($numbering == 1) { $maxCols -= 1; }
	if ($maxCols < 1) { $maxCols = 1; }
	$lastCol = $maxCols + $skipCols - 1;

	$rlines = 0;
	if ($unlimitedRows == 1) { $maxRows = 100000; }

	// handle a variety of line endings from Save As CSV formats:
	ini_set('auto_detect_line_endings',TRUE);
	// setlocale(LC_ALL, 'en_US.UTF-8');

	// search for exact file, then up one, two, three dirs in case your page moves down the hierarchy:
	$fp = false;
	if ((strrpos($fileName,"http:") === false) && (strrpos($fileName,"https:") === false)) {
		if (!file_exists($fileName)) { $fileName = "../" . $fileName; }
		if (!file_exists($fileName)) { $fileName = "../" . $fileName; }
		if (!file_exists($fileName)) { $fileName = "../" . $fileName; }
		if (file_exists($fileName)) {
			$fp = fopen($fileName,"r");
			}
		} else {
		$fp = fopen($fileName,"r");
		}

	if ($fp === false) {
		printf("<!-- FlexTable: error, could not open variations of %s -->\n", $fileName);
		} else {
		if ($unlimitedRows == 1) {
			printf("<!-- FlexTable: reading %u columns x unlimited rows from %s when %s %s -->\n", $maxCols, $fileName, $matchType, $matchValue);
			} else {
			printf("<!-- FlexTable: reading %u columns x %u rows from %s when %s %s -->\n", $maxCols, $maxRows, $fileName, $matchType, $matchValue);
			}

		while (($tokens = fgetcsv($fp, 2048, $delimiter, "\"")) != FALSE) {

			// correct characters:
			if ($mac2utf8 == 1) {
				$tokens = array_map("tokenConvert", $tokens);
				}

			// get index of last non-blank column in tokens array, or -1 which indicates a blank or comment line:
			$lastNB = tokenCount($tokens,$cchar,$markdown,$debug);

			// only continue on non-blank, non-comment lines, with at least the required number of columns to get data:
			// if ((sizeof($tokens) > $lastCol) && ($allBlank === false)) {
			if (($lastNB >= $lastCol) || (($allowFewerCols == 1) && ($lastNB > 0))) {

				// if matching is enabled then match first before printing:
				$matched = false;
				switch ($matchType) {
					case "1Is":				if ($tokens[0] == $matchValue) { $matched = true; }
											break;
					case "1IsNot":			if ($tokens[0] != $matchValue) { $matched = true; }
											break;
					case "1Contains":		if (strrpos($tokens[0],$matchValue) !== false) { $matched = true; }
											break;
					case "1NotContains":	if (strrpos($tokens[0],$matchValue) === false) { $matched = true; }
											break;
					case "1Less":			if (floatval($tokens[0]) < floatval($matchValue)) { $matched = true; }
											break;
					case "1More":			if (floatval($tokens[0]) > floatval($matchValue)) { $matched = true; }
											break;

					case "2Is":				if ($tokens[1] == $matchValue) { $matched = true; }
											break;
					case "2IsNot":			if ($tokens[1] != $matchValue) { $matched = true; }
											break;
					case "2Contains":		if (strrpos($tokens[1],$matchValue) !== false) { $matched = true; }
											break;
					case "2NotContains":	if (strrpos($tokens[1],$matchValue) === false) { $matched = true; }
											break;
					case "2Less":			if (floatval($tokens[1]) < floatval($matchValue)) { $matched = true; }
											break;
					case "2More":			if (floatval($tokens[1]) > floatval($matchValue)) { $matched = true; }
											break;

					case "nIs":				if ($tokens[$lastCol] == $matchValue) { $matched = true; }
											break;
					case "nIsNot":			if ($tokens[$lastCol] != $matchValue) { $matched = true; }
											break;
					case "nContains":		if (strrpos($tokens[$lastCol],$matchValue) !== false) { $matched = true; }
											break;
					case "nNotContains":	if (strrpos($tokens[$lastCol],$matchValue) === false) { $matched = true; }
											break;
					case "nLess":			if (floatval($tokens[$lastCol]) < floatval($matchValue)) { $matched = true; }
											break;
					case "nMore":			if (floatval($tokens[$lastCol]) > floatval($matchValue)) { $matched = true; }
											break;

					default:				$matched = true;
											break;
					}

				// only output if matched:
				if ($matched) {

					$rlines += 1;
					if ($rlines > $maxRows) { break; }

					if ($numbering == 1) {
						printf("<tr id=\"FlexTableR1_%s\">",$id);
						} else {
						printf("<tr>");
						}
					if ($numbering == 1) {
						if (($boldCol1 == 1) || (($boldRow1 == 1) && ($titleRow == 0) && ($rlines == 1))) {
							printf("<td><strong>%d</strong></td>",$rlines);
							} else {
							printf("<td>%d</td>",$rlines);
							}
						}

					for ($i=$skipCols; $i<$maxCols+$skipCols; $i++) {

						$colStr = $tokens[$i];

						if ($markdown != 0) {

							// parse markdown and be done:
							$newStr = $Parsedown->text($colStr);
							$colStr = $newStr;

							} else {

							if ($autoLinks == 1) {

								// split multiple addresses on space, comma, semicolon:
								$ltokens = preg_split("/[\s,;]+/",$colStr,-1,PREG_SPLIT_NO_EMPTY);
								$nchange = false;
								$newStr = "";

								// assume blank delimiter in case we reconstruct the line, unless the original contained no blanks:
								$ndelim = " ";
								if (strrpos($colStr," ") === false) {
									$ndelim = ", ";
									}

								$lmax = sizeof($ltokens) - 1;
								$lindex = 0;

								foreach ($ltokens as $ltoken) {

									$ntoken = $ltoken;

									// 1. check for email addresses first:
									if ((strrpos($ltoken, "@") >= 1) && (strrpos($ltoken, ".") >= 3)) {

										$ntoken = sprintf("<a href=\"mailto:%s\">%s</a>",$ltoken,$ltoken);
										$nchange = true;

										} else {

										// get file extension once here and check below:
										$lext = pathinfo($ltoken, PATHINFO_EXTENSION);

										// 2. check for local images like resources/image.png:
										if ((in_array($lext,$imgExts)) && (strrpos($ltoken, "/") !== false)) {

											$ntoken = sprintf("<img src=\"%s\">",$ltoken);
											$nchange = true;

											} else {

											// 3. check for web addresses that may or may not start with http but at least contain www.
											//    and check for images as well
											if (strrpos($ltoken, "www.") !== false) {

												if ((strrpos($ltoken, "http:") !== false) || (strrpos($ltoken, "https:") !== false)) {
													if (in_array($lext,$imgExts)) {
														$ntoken = sprintf("<img src=\"%s\">",$ltoken);
														} else {
														$ntoken = sprintf("<a href=\"%s\">%s</a>",$ltoken,$ltoken);
														}
													} else {
													if (in_array($lext,$imgExts)) {
														$ntoken = sprintf("<img src=\"http://%s\">",$ltoken);
														} else {
														$ntoken = sprintf("<a href=\"http://%s\">%s</a>",$ltoken,$ltoken);
														}
													}

												$nchange = true;

												} else {

												// 4. check for any web address (not just www.) as long as it starts with http or https:
												//    and check for images as well
												if ((strrpos($ltoken, "http:") !== false) || (strrpos($ltoken, "https:") !== false)) {
													if (in_array($lext,$imgExts)) {
														$ntoken = sprintf("<img src=\"%s\">",$ltoken);
														} else {
														$ntoken = sprintf("<a href=\"%s\">%s</a>",$ltoken,$ltoken);
														}
													$nchange = true;
													}

												}
											}
										}

									// build a new string from the modified token above:
									$newStr .= $ntoken;
									if ($lindex < $lmax) { $newStr .= $ndelim; }
									$lindex += 1;
									}

								// update the string to be used if it contained autolink changes from above:
								if ($nchange) {
									$colStr = $newStr;
									}

								// done handling autolinks
								}

							// done not markdown
							}

						// at this point we have a valid column string, whether the original or autolink processed:
						if ((($i == $skipCols) && ($boldCol1 == 1) && ($numbering != 1)) || (($boldRow1 == 1) && ($titleRow == 0) && ($rlines == 1))) {
							printf("<td><strong>%s</strong></td>", $colStr);
							} else {
							printf("<td>%s</td>", $colStr);
							}

						// end of handling original line tokens colStr
						}

					// end of a matched line
					printf("</tr>\n");
					}

				// end of finding a line with enough tokens and not a comment
				}

			// end of master while loop on fgetcsv tokens
			}

		// end of valid file pointer if
		fclose($fp);
		}

	// end of function
	}

// return 0..N-1, the highest numbered column index where a non-blank entry exists
// or return -1 for an all-blank line, or line whose first non-blank column starts with a comment char:
function tokenCount($tokens, $cchar = "#", $markdown = 0, $debug = false) {

	// create a cleaned up line with excess whitespace removed:
	$lline = trim(implode("|", explode(" ", str_replace(array(" ","\t","\n","\r"), " ", implode(" ",$tokens)))));

	if ($debug) { printf("<!-- FlexTable: read line: |%s| -->\n", $lline); }

	// return on essentially blank line:
	if (($lline == "") || ($lline == " ")) { return(-1); }

	// get first non-blank token and return if comment
	if ($lline[0] == $cchar) { return(-1); }

	// find the last good token:
	$lastNB = -1;
	for ($i=0; $i<sizeof($tokens); $i++) {
		$token = $tokens[$i];
		$ntoken = implode(" ", explode(" ", str_replace(array(",",";","\t","\n","\r"), " ", $token)));
		if (($ntoken != "") && ($ntoken != " ")) {
			$lastNB = $i;
			}
		}

	// returns index of last non-blank column in passed array:
	if ($debug) { printf("<!-- FlexTable: good line with %u tokens, last non-blank is %d -->\n", sizeof($tokens), $lastNB); }
	return($lastNB);
	}

// handle extended chars:
function tokenConvert($token) {
	return( iconv("macintosh", "UTF-8", $token) );
	}

?>
