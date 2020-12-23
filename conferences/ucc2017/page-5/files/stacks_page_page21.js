/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
var stacks = {};
stacks.jQuery = jQuery.noConflict(true);/* FlexTable javascript, Bryn Owen Design, 2014+ */

window.FlexTable_stacks_in_4904_page21_PageNumber = 1;

function FlexTable_stacks_in_4904_page21_isMobile() {
	if (document.body.clientWidth > 600) {
		return(false);
		} else {
		return(true);
		}
	}

function FlexTable_stacks_in_4904_page21_GoRotated(on) {

	var table = document.getElementById('FlexTable_stacks_in_4904_page21');
	var rtable = document.getElementById('FlexTableRot_stacks_in_4904_page21');
	if (!rtable) { return; }
	if (on) {
		table.style.display = "none";
		rtable.style.display = "table";
		FlexTable_stacks_in_4904_page21_SetRotHeader();
		} else {
		table.style.display = "table";
		rtable.style.display = "none";
		}
	FlexTable_stacks_in_4904_page21_MakePager(window.FlexTable_stacks_in_4904_page21_PageNumber);
	FlexTable_stacks_in_4904_page21_SetPage(window.FlexTable_stacks_in_4904_page21_PageNumber);
	}

function FlexTable_stacks_in_4904_page21_AllRows(on) {

	var table = document.getElementById('FlexTable_stacks_in_4904_page21');
	var rows = table.rows;
	if (1 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}
	if (on) {
		var disp = "table-row";
		} else {
		var disp = "none";
		}
	for (i=rstart; i<rows.length; i++) {
	    rows[i].style.display = disp;
		}
	}

/* build rotated table column 1 from first row of main table */
function FlexTable_stacks_in_4904_page21_SetRotHeader() {

	if (1 != 1) { return; }

	var table = document.getElementById('FlexTable_stacks_in_4904_page21');
	var rtable = document.getElementById('FlexTableRot_stacks_in_4904_page21');
	if (!table || !rtable) { return; }

	for (i=0; i<table.rows[0].cells.length; i++) {
		rtable.rows[i].cells[0].innerHTML = table.rows[0].cells[i].innerHTML;
		}
	}

function FlexTable_stacks_in_4904_page21_RunSearch() {

	var table = document.getElementById('FlexTable_stacks_in_4904_page21');
	var rows = table.rows;
	if (1 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	var dispOn = "table-row";
	var dispOff = "none";

	var searchtext = document.getElementById('FlexTableSearch_search_stacks_in_4904_page21').value.toLowerCase();

	for (i=rstart; i<rows.length; i++) {
		rows[i].style.display = dispOff;
		for (j=0; j<rows[i].cells.length; j++) {
			ctext = rows[i].cells[j].textContent.toLowerCase();
			if (ctext.indexOf(searchtext) != -1) {
				rows[i].style.display = dispOn;
				break;
				}
			}
		}

	if (false) {
		/* old way uses - link to Reset */
		FlexTable_stacks_in_4904_page21_MakePager(0);
		FlexTable_stacks_in_4904_page21_Pager(true);
		} else {
		/* new way depends on Search tab */
		window.FlexTable_stacks_in_4904_page21_PageNumber = 1;
		FlexTable_stacks_in_4904_page21_Pager(false);
		}
	}

function FlexTable_stacks_in_4904_page21_Pager(on) {

	var table = document.getElementById('FlexTable_stacks_in_4904_page21');
	if (!table) return;

	var rows = table.rows;
	if (1 == 1) {
		var rstart = 1;
		} else {
		var rstart = 0;
		}

	var rpp = FlexTable_stacks_in_4904_page21_RPP()

	if (rpp >= (rows.length - rstart)) {
		var needed = false;
		} else {
		var needed = true;
		}

	var pager = document.getElementById('FlexTablePager_stacks_in_4904_page21');
	if ((on && needed) || (window.FlexTable_stacks_in_4904_page21_PageNumber <= 0)) {
		var disp = "inline-block";
		} else {
		var disp = "none";
		}

	if (pager) {
		pager.style.display = disp;
		}
	}

function FlexTable_stacks_in_4904_page21_Search(on) {

	var search = document.getElementById('FlexTableSearch_stacks_in_4904_page21');
	if (on) {
		var disp = "inline-block";
		} else {
		var disp = "none";
		}
	if (search) {
		search.style.display = disp;
		}
	}

/* return the number of rows per page depending on mobile */
function FlexTable_stacks_in_4904_page21_RPP() {
	var mobile = FlexTable_stacks_in_4904_page21_isMobile();
	if (mobile) {
		if ("hscroll" == "record") { return(1); }
		return(4);
		}
	return(10);
	}

/* reverse row order */
function FlexTable_stacks_in_4904_page21_Reverse() {

	var table = document.getElementById('FlexTable_stacks_in_4904_page21');
	var rows = table.rows;
	if (1 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}
	for (i=rstart; i<rows.length; i++) {
	    rows[i].parentNode.insertBefore(rows[rows.length-1], rows[i]);
		}
	}

function FlexTable_stacks_in_4904_page21_SetPage(page) {

	var table = document.getElementById('FlexTable_stacks_in_4904_page21');

	var rows = table.rows;
	if (1 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	if (table.style.display != "none") {

		/* normal table */
		var dispOn = "table-row";
		var dispOff = "none";
		var rpp = FlexTable_stacks_in_4904_page21_RPP();

		if ((0 == 1) && (rpp > 0) && (page > 0)) {
			var pages = Math.ceil((rows.length - rstart)/rpp);
			if (page > pages) { page = pages; }
			var dstart = rstart + (page - 1)*rpp;
			var dstop = dstart + rpp - 1;
			} else {
			var pages = 1;
			var dstart = rstart;
			var dstop = rows.length;
			}

		for (i=rstart; i<rows.length; i++) {
			if ((i >= dstart) && (i <= dstop)) {
				rows[i].style.display = dispOn;
				} else {
				rows[i].style.display = dispOff;
				}
			}

		} else {

		/* rotated table */

		var rtable = document.getElementById('FlexTableRot_stacks_in_4904_page21');
		if (!rtable) { return; }
		if (page > (rows - rstart)) { page = rows - rstart; }
		var rowNum = page + rstart - 1;
		for (i=0; i<table.rows[rowNum].cells.length; i++) {
			text = table.rows[rowNum].cells[i].innerHTML;
			rtable.rows[i].cells[rstart].innerHTML = text;
			}

		}

	window.FlexTable_stacks_in_4904_page21_PageNumber = page;
	FlexTable_stacks_in_4904_page21_MakePager(page);
	}

/* if page is zero show all, otherwise 1..N */
function FlexTable_stacks_in_4904_page21_MakePager(page) {

	var table = document.getElementById('FlexTable_stacks_in_4904_page21');
	if (!table) return;

	var rows = table.rows;
	if (1 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	var rpp = FlexTable_stacks_in_4904_page21_RPP();
	if (table.style.display != "none") {
		if ((0 == 1) && (rpp > 0)) {
			var pages = Math.ceil((rows.length - rstart)/rpp);
			} else {
			var pages = 1;
			}
		var showPlus = true;
		} else {
		var rtable = document.getElementById('FlexTableRot_stacks_in_4904_page21');
		if (!rtable) return;
		var pages = rows.length - rstart;
		var showPlus = false;
		}

	var pager = document.getElementById('FlexTablePager_stacks_in_4904_page21');
	if (!pager) return;

	var ddd = " &middot;&middot;&middot; ";

	/* remove entries keeping only +/-delta = 2 around the selected page, */
	/* and (delta-1) = 1 at the beginning and end */
	/* 1 ... 3 4 _5_ 6 7 ... 10 */
	if ("2" == "all") {
		var delta = pages;
		} else {
		if ("2" == "none") {
			var delta = 0;
			ddd = "";
			} else {
			var delta = 2;
			if (pages <= 3*delta) { delta = pages; }
			}
		}

	var mobile = FlexTable_stacks_in_4904_page21_isMobile();

	var delim = "";
	switch (1) {
		case 1:
			/* large triangles */
			var larr = "&#9668;";
			var rarr = "&#9658;";
			break;
		case 2:
			/* blue doubles */
			var larr = "&#9194;";
			var rarr = "&#9193;";
			break;
		case 3:
			/* thick lt/gt */
			var larr = "&#10094;";
			var rarr = "&#10095;";
			break;
		case 4:
			/* thin hollow */
			var larr = "&#5583;";
			var rarr = "&#5580;";
			break;
		default:
			var larr = "&lt;";
			var rarr = "&gt;";
			break;
		}

	if (mobile) {
		var spacer = "&nbsp;&nbsp;";
		} else {
		var spacer = "&nbsp;";
		}

	if (delim != "") { delim = spacer + delim; }

	var pstr = "";

	if (page <= 0) {
		pstr += larr + spacer + "<a title=\"Reset and show table content in pages.\" href=\"#\" onclick=\"FlexTable_stacks_in_4904_page21_SetPage(1); return false;\"><b>&minus;</b></a>" + spacer + rarr;
		} else {
		if (page <= 1) {
			if (1 == 1) {
				pstr += "<a title=\"Select the last page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_4904_page21_SetPage(" + pages + "); return false;\">" + larr + "</a>";
				} else {
				pstr += larr;
				}
			} else {
			pstr += "<a title=\"Select the previous page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_4904_page21_SetPage(" + (page-1) + "); return false;\">" + larr + "</a>";
			}

		var d1flag = false;
		var d2flag = false;
		for (i=1; i<=pages; i++) {
			if (i == page) {
				if (i > 1) { pstr += delim; }
				pstr += spacer;
				pstr += "<label title=\"Page " + i + " of the table is currently selected.\"><b>" + i + "</b></label>";
				} else {
				if ((i < delta) || ((i >= (page - delta)) && (i <= (page + delta))) || (i > (pages - delta + 1))) {
					if (i > 1) { pstr += delim; }
					pstr += spacer;
					pstr += "<a title=\"Select page " + i + " of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_4904_page21_SetPage(" + i + "); return false;\">" + i + "</a>";
					} else {
					if (!d1flag && (i < (page - delta))) {
						pstr += spacer;
						pstr += ddd;
						d1flag = true;
						}
					if (!d2flag && (i > (page + delta))) {
						pstr += spacer;
						pstr += ddd;
						d2flag = true;
						}
					}
				}
			}

		if (showPlus) {
			pstr += spacer + "<a title=\"Show all table content without pages.\" href=\"#\" onclick=\"FlexTable_stacks_in_4904_page21_SetPage(0); return false;\"><b>+</b></a>";
			}

		if (page >= pages) {
			if (1 == 1) {
				pstr += spacer + "<a title=\"Select the first page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_4904_page21_SetPage(" + 1 + "); return false;\">" + rarr + "</a>";
				} else {
				pstr += spacer + rarr;
				}
			} else {
			pstr += spacer + "<a title=\"Select the next page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_4904_page21_SetPage(" + (page+1) + "); return false;\">" + rarr + "</a>";
			}
		}

	window.FlexTable_stacks_in_4904_page21_PageNumber = page;
	pager.innerHTML = pstr;
	}

/* on dynamic screen width change call this responsive procedure */
function FlexTable_stacks_in_4904_page21_Resp() {

	var mobile = FlexTable_stacks_in_4904_page21_isMobile();
	if ((0 != 1) || (0 != 1)) {
		FlexTable_stacks_in_4904_page21_Search(false);
		} else {
		if (mobile) {
			if (1 == 1) {
				FlexTable_stacks_in_4904_page21_Search(false);
				} else {
				FlexTable_stacks_in_4904_page21_Search(true);
				}
			} else {
			FlexTable_stacks_in_4904_page21_Search(true);
			}
		}

	if ("hscroll" == "record") {
		if (mobile) {
			FlexTable_stacks_in_4904_page21_Pager(true);
			FlexTable_stacks_in_4904_page21_GoRotated(true);
			} else {
			if (0 != 1) {
				FlexTable_stacks_in_4904_page21_Pager(false);
				} else {
				FlexTable_stacks_in_4904_page21_Pager(true);
				}
			FlexTable_stacks_in_4904_page21_GoRotated(false);
			}
		} else {
		if (0 == 1) {
			FlexTable_stacks_in_4904_page21_Pager(true);
			FlexTable_stacks_in_4904_page21_MakePager(window.FlexTable_stacks_in_4904_page21_PageNumber);
			FlexTable_stacks_in_4904_page21_SetPage(window.FlexTable_stacks_in_4904_page21_PageNumber);
			} else {
			FlexTable_stacks_in_4904_page21_Pager(false);
			}
		}
	}

function FlexTable_stacks_in_4904_page21_Init() {
	if (0 == 1) {
		FlexTable_stacks_in_4904_page21_Reverse();
		}
	if (0 == 1) {
		FlexTable_stacks_in_4904_page21_Pager(true);
		if (0 == 1) {
			FlexTable_stacks_in_4904_page21_Search(true);
			} else {
			FlexTable_stacks_in_4904_page21_Search(false);
			}
		} else {
		FlexTable_stacks_in_4904_page21_Pager(false);
		FlexTable_stacks_in_4904_page21_Search(false);
		}
	FlexTable_stacks_in_4904_page21_Resp();
	}

/* form search field onfocus function */
function FlexTable_stacks_in_4904_page21_Event(field,event) {

	if ((event == 'onfocus') || (event == 'onclick')) {
		if (field.value == 'Search') {
			field.value = '';
			FlexTable_stacks_in_4904_page21_ButtonEnable(false);
			} else {
			FlexTable_stacks_in_4904_page21_ButtonEnable(true);
			}
		}
	if ((event == 'onblur') || (event == 'onchange')) {
		if (field.value == '') {
			FlexTable_stacks_in_4904_page21_Reset(field,false);
			} else {
			FlexTable_stacks_in_4904_page21_ButtonEnable(true);
			}
		}
	if (event == 'incremental') {
		if (field.value.length > 1) {
			FlexTable_stacks_in_4904_page21_ButtonEnable(true);
			FlexTable_stacks_in_4904_page21_RunSearch();
			}
		}
	if (event == 'onsearch') {
		FlexTable_stacks_in_4904_page21_Reset(field,true);
		}

	return false;
	}

/* reset the table on the onsearch event or other */
function FlexTable_stacks_in_4904_page21_ButtonEnable(enable) {
	var button = document.getElementById('FlexTableSearch_button_stacks_in_4904_page21');
	if (!button) return;
	button.disabled = !enable;
	return;
	}

/* reset the table on the onsearch event or other */
function FlexTable_stacks_in_4904_page21_Reset(field,doclick) {

	field.value = 'Search';
	FlexTable_stacks_in_4904_page21_ButtonEnable(false);
	if (doclick) { field.click(); }

	var pager = document.getElementById('FlexTablePager_stacks_in_4904_page21');
	if (!pager) return;
	if (pager.style.display == 'none') {
		FlexTable_stacks_in_4904_page21_Pager(true);
		FlexTable_stacks_in_4904_page21_SetPage(1);
		}

	return false;
	}

/* run the load function and setup responsive for resizing */

stacks.jQuery(document).ready(function() { FlexTable_stacks_in_4904_page21_Init(); });
stacks.jQuery(window).resize(function() { FlexTable_stacks_in_4904_page21_Resp(); });

/* FlexTable javascript, Bryn Owen Design, 2014+ */

window.FlexTable_stacks_in_4911_page21_PageNumber = 1;

function FlexTable_stacks_in_4911_page21_isMobile() {
	if (document.body.clientWidth > 600) {
		return(false);
		} else {
		return(true);
		}
	}

function FlexTable_stacks_in_4911_page21_GoRotated(on) {

	var table = document.getElementById('FlexTable_stacks_in_4911_page21');
	var rtable = document.getElementById('FlexTableRot_stacks_in_4911_page21');
	if (!rtable) { return; }
	if (on) {
		table.style.display = "none";
		rtable.style.display = "table";
		FlexTable_stacks_in_4911_page21_SetRotHeader();
		} else {
		table.style.display = "table";
		rtable.style.display = "none";
		}
	FlexTable_stacks_in_4911_page21_MakePager(window.FlexTable_stacks_in_4911_page21_PageNumber);
	FlexTable_stacks_in_4911_page21_SetPage(window.FlexTable_stacks_in_4911_page21_PageNumber);
	}

function FlexTable_stacks_in_4911_page21_AllRows(on) {

	var table = document.getElementById('FlexTable_stacks_in_4911_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}
	if (on) {
		var disp = "table-row";
		} else {
		var disp = "none";
		}
	for (i=rstart; i<rows.length; i++) {
	    rows[i].style.display = disp;
		}
	}

/* build rotated table column 1 from first row of main table */
function FlexTable_stacks_in_4911_page21_SetRotHeader() {

	if (0 != 1) { return; }

	var table = document.getElementById('FlexTable_stacks_in_4911_page21');
	var rtable = document.getElementById('FlexTableRot_stacks_in_4911_page21');
	if (!table || !rtable) { return; }

	for (i=0; i<table.rows[0].cells.length; i++) {
		rtable.rows[i].cells[0].innerHTML = table.rows[0].cells[i].innerHTML;
		}
	}

function FlexTable_stacks_in_4911_page21_RunSearch() {

	var table = document.getElementById('FlexTable_stacks_in_4911_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	var dispOn = "table-row";
	var dispOff = "none";

	var searchtext = document.getElementById('FlexTableSearch_search_stacks_in_4911_page21').value.toLowerCase();

	for (i=rstart; i<rows.length; i++) {
		rows[i].style.display = dispOff;
		for (j=0; j<rows[i].cells.length; j++) {
			ctext = rows[i].cells[j].textContent.toLowerCase();
			if (ctext.indexOf(searchtext) != -1) {
				rows[i].style.display = dispOn;
				break;
				}
			}
		}

	if (false) {
		/* old way uses - link to Reset */
		FlexTable_stacks_in_4911_page21_MakePager(0);
		FlexTable_stacks_in_4911_page21_Pager(true);
		} else {
		/* new way depends on Search tab */
		window.FlexTable_stacks_in_4911_page21_PageNumber = 1;
		FlexTable_stacks_in_4911_page21_Pager(false);
		}
	}

function FlexTable_stacks_in_4911_page21_Pager(on) {

	var table = document.getElementById('FlexTable_stacks_in_4911_page21');
	if (!table) return;

	var rows = table.rows;
	if (0 == 1) {
		var rstart = 1;
		} else {
		var rstart = 0;
		}

	var rpp = FlexTable_stacks_in_4911_page21_RPP()

	if (rpp >= (rows.length - rstart)) {
		var needed = false;
		} else {
		var needed = true;
		}

	var pager = document.getElementById('FlexTablePager_stacks_in_4911_page21');
	if ((on && needed) || (window.FlexTable_stacks_in_4911_page21_PageNumber <= 0)) {
		var disp = "inline-block";
		} else {
		var disp = "none";
		}

	if (pager) {
		pager.style.display = disp;
		}
	}

function FlexTable_stacks_in_4911_page21_Search(on) {

	var search = document.getElementById('FlexTableSearch_stacks_in_4911_page21');
	if (on) {
		var disp = "inline-block";
		} else {
		var disp = "none";
		}
	if (search) {
		search.style.display = disp;
		}
	}

/* return the number of rows per page depending on mobile */
function FlexTable_stacks_in_4911_page21_RPP() {
	var mobile = FlexTable_stacks_in_4911_page21_isMobile();
	if (mobile) {
		if ("hscroll" == "record") { return(1); }
		return(1);
		}
	return(1);
	}

/* reverse row order */
function FlexTable_stacks_in_4911_page21_Reverse() {

	var table = document.getElementById('FlexTable_stacks_in_4911_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}
	for (i=rstart; i<rows.length; i++) {
	    rows[i].parentNode.insertBefore(rows[rows.length-1], rows[i]);
		}
	}

function FlexTable_stacks_in_4911_page21_SetPage(page) {

	var table = document.getElementById('FlexTable_stacks_in_4911_page21');

	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	if (table.style.display != "none") {

		/* normal table */
		var dispOn = "table-row";
		var dispOff = "none";
		var rpp = FlexTable_stacks_in_4911_page21_RPP();

		if ((1 == 1) && (rpp > 0) && (page > 0)) {
			var pages = Math.ceil((rows.length - rstart)/rpp);
			if (page > pages) { page = pages; }
			var dstart = rstart + (page - 1)*rpp;
			var dstop = dstart + rpp - 1;
			} else {
			var pages = 1;
			var dstart = rstart;
			var dstop = rows.length;
			}

		for (i=rstart; i<rows.length; i++) {
			if ((i >= dstart) && (i <= dstop)) {
				rows[i].style.display = dispOn;
				} else {
				rows[i].style.display = dispOff;
				}
			}

		} else {

		/* rotated table */

		var rtable = document.getElementById('FlexTableRot_stacks_in_4911_page21');
		if (!rtable) { return; }
		if (page > (rows - rstart)) { page = rows - rstart; }
		var rowNum = page + rstart - 1;
		for (i=0; i<table.rows[rowNum].cells.length; i++) {
			text = table.rows[rowNum].cells[i].innerHTML;
			rtable.rows[i].cells[rstart].innerHTML = text;
			}

		}

	window.FlexTable_stacks_in_4911_page21_PageNumber = page;
	FlexTable_stacks_in_4911_page21_MakePager(page);
	}

/* if page is zero show all, otherwise 1..N */
function FlexTable_stacks_in_4911_page21_MakePager(page) {

	var table = document.getElementById('FlexTable_stacks_in_4911_page21');
	if (!table) return;

	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	var rpp = FlexTable_stacks_in_4911_page21_RPP();
	if (table.style.display != "none") {
		if ((1 == 1) && (rpp > 0)) {
			var pages = Math.ceil((rows.length - rstart)/rpp);
			} else {
			var pages = 1;
			}
		var showPlus = true;
		} else {
		var rtable = document.getElementById('FlexTableRot_stacks_in_4911_page21');
		if (!rtable) return;
		var pages = rows.length - rstart;
		var showPlus = false;
		}

	var pager = document.getElementById('FlexTablePager_stacks_in_4911_page21');
	if (!pager) return;

	var ddd = " &middot;&middot;&middot; ";

	/* remove entries keeping only +/-delta = 2 around the selected page, */
	/* and (delta-1) = 1 at the beginning and end */
	/* 1 ... 3 4 _5_ 6 7 ... 10 */
	if ("none" == "all") {
		var delta = pages;
		} else {
		if ("none" == "none") {
			var delta = 0;
			ddd = "";
			} else {
			var delta = none;
			if (pages <= 3*delta) { delta = pages; }
			}
		}

	var mobile = FlexTable_stacks_in_4911_page21_isMobile();

	var delim = "";
	switch (1) {
		case 1:
			/* large triangles */
			var larr = "&#9668;";
			var rarr = "&#9658;";
			break;
		case 2:
			/* blue doubles */
			var larr = "&#9194;";
			var rarr = "&#9193;";
			break;
		case 3:
			/* thick lt/gt */
			var larr = "&#10094;";
			var rarr = "&#10095;";
			break;
		case 4:
			/* thin hollow */
			var larr = "&#5583;";
			var rarr = "&#5580;";
			break;
		default:
			var larr = "&lt;";
			var rarr = "&gt;";
			break;
		}

	if (mobile) {
		var spacer = "&nbsp;&nbsp;";
		} else {
		var spacer = "&nbsp;";
		}

	if (delim != "") { delim = spacer + delim; }

	var pstr = "";

	if (page <= 0) {
		pstr += larr + spacer + "<a title=\"Reset and show table content in pages.\" href=\"#\" onclick=\"FlexTable_stacks_in_4911_page21_SetPage(1); return false;\"><b>&minus;</b></a>" + spacer + rarr;
		} else {
		if (page <= 1) {
			if (1 == 1) {
				pstr += "<a title=\"Select the last page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_4911_page21_SetPage(" + pages + "); return false;\">" + larr + "</a>";
				} else {
				pstr += larr;
				}
			} else {
			pstr += "<a title=\"Select the previous page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_4911_page21_SetPage(" + (page-1) + "); return false;\">" + larr + "</a>";
			}

		var d1flag = false;
		var d2flag = false;
		for (i=1; i<=pages; i++) {
			if (i == page) {
				if (i > 1) { pstr += delim; }
				pstr += spacer;
				pstr += "<label title=\"Page " + i + " of the table is currently selected.\"><b>" + i + "</b></label>";
				} else {
				if ((i < delta) || ((i >= (page - delta)) && (i <= (page + delta))) || (i > (pages - delta + 1))) {
					if (i > 1) { pstr += delim; }
					pstr += spacer;
					pstr += "<a title=\"Select page " + i + " of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_4911_page21_SetPage(" + i + "); return false;\">" + i + "</a>";
					} else {
					if (!d1flag && (i < (page - delta))) {
						pstr += spacer;
						pstr += ddd;
						d1flag = true;
						}
					if (!d2flag && (i > (page + delta))) {
						pstr += spacer;
						pstr += ddd;
						d2flag = true;
						}
					}
				}
			}

		if (showPlus) {
			pstr += spacer + "<a title=\"Show all table content without pages.\" href=\"#\" onclick=\"FlexTable_stacks_in_4911_page21_SetPage(0); return false;\"><b>+</b></a>";
			}

		if (page >= pages) {
			if (1 == 1) {
				pstr += spacer + "<a title=\"Select the first page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_4911_page21_SetPage(" + 1 + "); return false;\">" + rarr + "</a>";
				} else {
				pstr += spacer + rarr;
				}
			} else {
			pstr += spacer + "<a title=\"Select the next page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_4911_page21_SetPage(" + (page+1) + "); return false;\">" + rarr + "</a>";
			}
		}

	window.FlexTable_stacks_in_4911_page21_PageNumber = page;
	pager.innerHTML = pstr;
	}

/* on dynamic screen width change call this responsive procedure */
function FlexTable_stacks_in_4911_page21_Resp() {

	var mobile = FlexTable_stacks_in_4911_page21_isMobile();
	if ((1 != 1) || (1 != 1)) {
		FlexTable_stacks_in_4911_page21_Search(false);
		} else {
		if (mobile) {
			if (1 == 1) {
				FlexTable_stacks_in_4911_page21_Search(false);
				} else {
				FlexTable_stacks_in_4911_page21_Search(true);
				}
			} else {
			FlexTable_stacks_in_4911_page21_Search(true);
			}
		}

	if ("hscroll" == "record") {
		if (mobile) {
			FlexTable_stacks_in_4911_page21_Pager(true);
			FlexTable_stacks_in_4911_page21_GoRotated(true);
			} else {
			if (1 != 1) {
				FlexTable_stacks_in_4911_page21_Pager(false);
				} else {
				FlexTable_stacks_in_4911_page21_Pager(true);
				}
			FlexTable_stacks_in_4911_page21_GoRotated(false);
			}
		} else {
		if (1 == 1) {
			FlexTable_stacks_in_4911_page21_Pager(true);
			FlexTable_stacks_in_4911_page21_MakePager(window.FlexTable_stacks_in_4911_page21_PageNumber);
			FlexTable_stacks_in_4911_page21_SetPage(window.FlexTable_stacks_in_4911_page21_PageNumber);
			} else {
			FlexTable_stacks_in_4911_page21_Pager(false);
			}
		}
	}

function FlexTable_stacks_in_4911_page21_Init() {
	if (0 == 1) {
		FlexTable_stacks_in_4911_page21_Reverse();
		}
	if (1 == 1) {
		FlexTable_stacks_in_4911_page21_Pager(true);
		if (1 == 1) {
			FlexTable_stacks_in_4911_page21_Search(true);
			} else {
			FlexTable_stacks_in_4911_page21_Search(false);
			}
		} else {
		FlexTable_stacks_in_4911_page21_Pager(false);
		FlexTable_stacks_in_4911_page21_Search(false);
		}
	FlexTable_stacks_in_4911_page21_Resp();
	}

/* form search field onfocus function */
function FlexTable_stacks_in_4911_page21_Event(field,event) {

	if ((event == 'onfocus') || (event == 'onclick')) {
		if (field.value == 'Search') {
			field.value = '';
			FlexTable_stacks_in_4911_page21_ButtonEnable(false);
			} else {
			FlexTable_stacks_in_4911_page21_ButtonEnable(true);
			}
		}
	if ((event == 'onblur') || (event == 'onchange')) {
		if (field.value == '') {
			FlexTable_stacks_in_4911_page21_Reset(field,false);
			} else {
			FlexTable_stacks_in_4911_page21_ButtonEnable(true);
			}
		}
	if (event == 'incremental') {
		if (field.value.length > 1) {
			FlexTable_stacks_in_4911_page21_ButtonEnable(true);
			FlexTable_stacks_in_4911_page21_RunSearch();
			}
		}
	if (event == 'onsearch') {
		FlexTable_stacks_in_4911_page21_Reset(field,true);
		}

	return false;
	}

/* reset the table on the onsearch event or other */
function FlexTable_stacks_in_4911_page21_ButtonEnable(enable) {
	var button = document.getElementById('FlexTableSearch_button_stacks_in_4911_page21');
	if (!button) return;
	button.disabled = !enable;
	return;
	}

/* reset the table on the onsearch event or other */
function FlexTable_stacks_in_4911_page21_Reset(field,doclick) {

	field.value = 'Search';
	FlexTable_stacks_in_4911_page21_ButtonEnable(false);
	if (doclick) { field.click(); }

	var pager = document.getElementById('FlexTablePager_stacks_in_4911_page21');
	if (!pager) return;
	if (pager.style.display == 'none') {
		FlexTable_stacks_in_4911_page21_Pager(true);
		FlexTable_stacks_in_4911_page21_SetPage(1);
		}

	return false;
	}

/* run the load function and setup responsive for resizing */

stacks.jQuery(document).ready(function() { FlexTable_stacks_in_4911_page21_Init(); });
stacks.jQuery(window).resize(function() { FlexTable_stacks_in_4911_page21_Resp(); });

/* FlexTable javascript, Bryn Owen Design, 2014+ */

window.FlexTable_stacks_in_4912_page21_PageNumber = 1;

function FlexTable_stacks_in_4912_page21_isMobile() {
	if (document.body.clientWidth > 600) {
		return(false);
		} else {
		return(true);
		}
	}

function FlexTable_stacks_in_4912_page21_GoRotated(on) {

	var table = document.getElementById('FlexTable_stacks_in_4912_page21');
	var rtable = document.getElementById('FlexTableRot_stacks_in_4912_page21');
	if (!rtable) { return; }
	if (on) {
		table.style.display = "none";
		rtable.style.display = "table";
		FlexTable_stacks_in_4912_page21_SetRotHeader();
		} else {
		table.style.display = "table";
		rtable.style.display = "none";
		}
	FlexTable_stacks_in_4912_page21_MakePager(window.FlexTable_stacks_in_4912_page21_PageNumber);
	FlexTable_stacks_in_4912_page21_SetPage(window.FlexTable_stacks_in_4912_page21_PageNumber);
	}

function FlexTable_stacks_in_4912_page21_AllRows(on) {

	var table = document.getElementById('FlexTable_stacks_in_4912_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}
	if (on) {
		var disp = "table-row";
		} else {
		var disp = "none";
		}
	for (i=rstart; i<rows.length; i++) {
	    rows[i].style.display = disp;
		}
	}

/* build rotated table column 1 from first row of main table */
function FlexTable_stacks_in_4912_page21_SetRotHeader() {

	if (0 != 1) { return; }

	var table = document.getElementById('FlexTable_stacks_in_4912_page21');
	var rtable = document.getElementById('FlexTableRot_stacks_in_4912_page21');
	if (!table || !rtable) { return; }

	for (i=0; i<table.rows[0].cells.length; i++) {
		rtable.rows[i].cells[0].innerHTML = table.rows[0].cells[i].innerHTML;
		}
	}

function FlexTable_stacks_in_4912_page21_RunSearch() {

	var table = document.getElementById('FlexTable_stacks_in_4912_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	var dispOn = "table-row";
	var dispOff = "none";

	var searchtext = document.getElementById('FlexTableSearch_search_stacks_in_4912_page21').value.toLowerCase();

	for (i=rstart; i<rows.length; i++) {
		rows[i].style.display = dispOff;
		for (j=0; j<rows[i].cells.length; j++) {
			ctext = rows[i].cells[j].textContent.toLowerCase();
			if (ctext.indexOf(searchtext) != -1) {
				rows[i].style.display = dispOn;
				break;
				}
			}
		}

	if (false) {
		/* old way uses - link to Reset */
		FlexTable_stacks_in_4912_page21_MakePager(0);
		FlexTable_stacks_in_4912_page21_Pager(true);
		} else {
		/* new way depends on Search tab */
		window.FlexTable_stacks_in_4912_page21_PageNumber = 1;
		FlexTable_stacks_in_4912_page21_Pager(false);
		}
	}

function FlexTable_stacks_in_4912_page21_Pager(on) {

	var table = document.getElementById('FlexTable_stacks_in_4912_page21');
	if (!table) return;

	var rows = table.rows;
	if (0 == 1) {
		var rstart = 1;
		} else {
		var rstart = 0;
		}

	var rpp = FlexTable_stacks_in_4912_page21_RPP()

	if (rpp >= (rows.length - rstart)) {
		var needed = false;
		} else {
		var needed = true;
		}

	var pager = document.getElementById('FlexTablePager_stacks_in_4912_page21');
	if ((on && needed) || (window.FlexTable_stacks_in_4912_page21_PageNumber <= 0)) {
		var disp = "inline-block";
		} else {
		var disp = "none";
		}

	if (pager) {
		pager.style.display = disp;
		}
	}

function FlexTable_stacks_in_4912_page21_Search(on) {

	var search = document.getElementById('FlexTableSearch_stacks_in_4912_page21');
	if (on) {
		var disp = "inline-block";
		} else {
		var disp = "none";
		}
	if (search) {
		search.style.display = disp;
		}
	}

/* return the number of rows per page depending on mobile */
function FlexTable_stacks_in_4912_page21_RPP() {
	var mobile = FlexTable_stacks_in_4912_page21_isMobile();
	if (mobile) {
		if ("hscroll" == "record") { return(1); }
		return(4);
		}
	return(10);
	}

/* reverse row order */
function FlexTable_stacks_in_4912_page21_Reverse() {

	var table = document.getElementById('FlexTable_stacks_in_4912_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}
	for (i=rstart; i<rows.length; i++) {
	    rows[i].parentNode.insertBefore(rows[rows.length-1], rows[i]);
		}
	}

function FlexTable_stacks_in_4912_page21_SetPage(page) {

	var table = document.getElementById('FlexTable_stacks_in_4912_page21');

	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	if (table.style.display != "none") {

		/* normal table */
		var dispOn = "table-row";
		var dispOff = "none";
		var rpp = FlexTable_stacks_in_4912_page21_RPP();

		if ((0 == 1) && (rpp > 0) && (page > 0)) {
			var pages = Math.ceil((rows.length - rstart)/rpp);
			if (page > pages) { page = pages; }
			var dstart = rstart + (page - 1)*rpp;
			var dstop = dstart + rpp - 1;
			} else {
			var pages = 1;
			var dstart = rstart;
			var dstop = rows.length;
			}

		for (i=rstart; i<rows.length; i++) {
			if ((i >= dstart) && (i <= dstop)) {
				rows[i].style.display = dispOn;
				} else {
				rows[i].style.display = dispOff;
				}
			}

		} else {

		/* rotated table */

		var rtable = document.getElementById('FlexTableRot_stacks_in_4912_page21');
		if (!rtable) { return; }
		if (page > (rows - rstart)) { page = rows - rstart; }
		var rowNum = page + rstart - 1;
		for (i=0; i<table.rows[rowNum].cells.length; i++) {
			text = table.rows[rowNum].cells[i].innerHTML;
			rtable.rows[i].cells[rstart].innerHTML = text;
			}

		}

	window.FlexTable_stacks_in_4912_page21_PageNumber = page;
	FlexTable_stacks_in_4912_page21_MakePager(page);
	}

/* if page is zero show all, otherwise 1..N */
function FlexTable_stacks_in_4912_page21_MakePager(page) {

	var table = document.getElementById('FlexTable_stacks_in_4912_page21');
	if (!table) return;

	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	var rpp = FlexTable_stacks_in_4912_page21_RPP();
	if (table.style.display != "none") {
		if ((0 == 1) && (rpp > 0)) {
			var pages = Math.ceil((rows.length - rstart)/rpp);
			} else {
			var pages = 1;
			}
		var showPlus = true;
		} else {
		var rtable = document.getElementById('FlexTableRot_stacks_in_4912_page21');
		if (!rtable) return;
		var pages = rows.length - rstart;
		var showPlus = false;
		}

	var pager = document.getElementById('FlexTablePager_stacks_in_4912_page21');
	if (!pager) return;

	var ddd = " &middot;&middot;&middot; ";

	/* remove entries keeping only +/-delta = 2 around the selected page, */
	/* and (delta-1) = 1 at the beginning and end */
	/* 1 ... 3 4 _5_ 6 7 ... 10 */
	if ("2" == "all") {
		var delta = pages;
		} else {
		if ("2" == "none") {
			var delta = 0;
			ddd = "";
			} else {
			var delta = 2;
			if (pages <= 3*delta) { delta = pages; }
			}
		}

	var mobile = FlexTable_stacks_in_4912_page21_isMobile();

	var delim = "";
	switch (1) {
		case 1:
			/* large triangles */
			var larr = "&#9668;";
			var rarr = "&#9658;";
			break;
		case 2:
			/* blue doubles */
			var larr = "&#9194;";
			var rarr = "&#9193;";
			break;
		case 3:
			/* thick lt/gt */
			var larr = "&#10094;";
			var rarr = "&#10095;";
			break;
		case 4:
			/* thin hollow */
			var larr = "&#5583;";
			var rarr = "&#5580;";
			break;
		default:
			var larr = "&lt;";
			var rarr = "&gt;";
			break;
		}

	if (mobile) {
		var spacer = "&nbsp;&nbsp;";
		} else {
		var spacer = "&nbsp;";
		}

	if (delim != "") { delim = spacer + delim; }

	var pstr = "";

	if (page <= 0) {
		pstr += larr + spacer + "<a title=\"Reset and show table content in pages.\" href=\"#\" onclick=\"FlexTable_stacks_in_4912_page21_SetPage(1); return false;\"><b>&minus;</b></a>" + spacer + rarr;
		} else {
		if (page <= 1) {
			if (1 == 1) {
				pstr += "<a title=\"Select the last page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_4912_page21_SetPage(" + pages + "); return false;\">" + larr + "</a>";
				} else {
				pstr += larr;
				}
			} else {
			pstr += "<a title=\"Select the previous page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_4912_page21_SetPage(" + (page-1) + "); return false;\">" + larr + "</a>";
			}

		var d1flag = false;
		var d2flag = false;
		for (i=1; i<=pages; i++) {
			if (i == page) {
				if (i > 1) { pstr += delim; }
				pstr += spacer;
				pstr += "<label title=\"Page " + i + " of the table is currently selected.\"><b>" + i + "</b></label>";
				} else {
				if ((i < delta) || ((i >= (page - delta)) && (i <= (page + delta))) || (i > (pages - delta + 1))) {
					if (i > 1) { pstr += delim; }
					pstr += spacer;
					pstr += "<a title=\"Select page " + i + " of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_4912_page21_SetPage(" + i + "); return false;\">" + i + "</a>";
					} else {
					if (!d1flag && (i < (page - delta))) {
						pstr += spacer;
						pstr += ddd;
						d1flag = true;
						}
					if (!d2flag && (i > (page + delta))) {
						pstr += spacer;
						pstr += ddd;
						d2flag = true;
						}
					}
				}
			}

		if (showPlus) {
			pstr += spacer + "<a title=\"Show all table content without pages.\" href=\"#\" onclick=\"FlexTable_stacks_in_4912_page21_SetPage(0); return false;\"><b>+</b></a>";
			}

		if (page >= pages) {
			if (1 == 1) {
				pstr += spacer + "<a title=\"Select the first page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_4912_page21_SetPage(" + 1 + "); return false;\">" + rarr + "</a>";
				} else {
				pstr += spacer + rarr;
				}
			} else {
			pstr += spacer + "<a title=\"Select the next page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_4912_page21_SetPage(" + (page+1) + "); return false;\">" + rarr + "</a>";
			}
		}

	window.FlexTable_stacks_in_4912_page21_PageNumber = page;
	pager.innerHTML = pstr;
	}

/* on dynamic screen width change call this responsive procedure */
function FlexTable_stacks_in_4912_page21_Resp() {

	var mobile = FlexTable_stacks_in_4912_page21_isMobile();
	if ((0 != 1) || (0 != 1)) {
		FlexTable_stacks_in_4912_page21_Search(false);
		} else {
		if (mobile) {
			if (1 == 1) {
				FlexTable_stacks_in_4912_page21_Search(false);
				} else {
				FlexTable_stacks_in_4912_page21_Search(true);
				}
			} else {
			FlexTable_stacks_in_4912_page21_Search(true);
			}
		}

	if ("hscroll" == "record") {
		if (mobile) {
			FlexTable_stacks_in_4912_page21_Pager(true);
			FlexTable_stacks_in_4912_page21_GoRotated(true);
			} else {
			if (0 != 1) {
				FlexTable_stacks_in_4912_page21_Pager(false);
				} else {
				FlexTable_stacks_in_4912_page21_Pager(true);
				}
			FlexTable_stacks_in_4912_page21_GoRotated(false);
			}
		} else {
		if (0 == 1) {
			FlexTable_stacks_in_4912_page21_Pager(true);
			FlexTable_stacks_in_4912_page21_MakePager(window.FlexTable_stacks_in_4912_page21_PageNumber);
			FlexTable_stacks_in_4912_page21_SetPage(window.FlexTable_stacks_in_4912_page21_PageNumber);
			} else {
			FlexTable_stacks_in_4912_page21_Pager(false);
			}
		}
	}

function FlexTable_stacks_in_4912_page21_Init() {
	if (0 == 1) {
		FlexTable_stacks_in_4912_page21_Reverse();
		}
	if (0 == 1) {
		FlexTable_stacks_in_4912_page21_Pager(true);
		if (0 == 1) {
			FlexTable_stacks_in_4912_page21_Search(true);
			} else {
			FlexTable_stacks_in_4912_page21_Search(false);
			}
		} else {
		FlexTable_stacks_in_4912_page21_Pager(false);
		FlexTable_stacks_in_4912_page21_Search(false);
		}
	FlexTable_stacks_in_4912_page21_Resp();
	}

/* form search field onfocus function */
function FlexTable_stacks_in_4912_page21_Event(field,event) {

	if ((event == 'onfocus') || (event == 'onclick')) {
		if (field.value == 'Search') {
			field.value = '';
			FlexTable_stacks_in_4912_page21_ButtonEnable(false);
			} else {
			FlexTable_stacks_in_4912_page21_ButtonEnable(true);
			}
		}
	if ((event == 'onblur') || (event == 'onchange')) {
		if (field.value == '') {
			FlexTable_stacks_in_4912_page21_Reset(field,false);
			} else {
			FlexTable_stacks_in_4912_page21_ButtonEnable(true);
			}
		}
	if (event == 'incremental') {
		if (field.value.length > 1) {
			FlexTable_stacks_in_4912_page21_ButtonEnable(true);
			FlexTable_stacks_in_4912_page21_RunSearch();
			}
		}
	if (event == 'onsearch') {
		FlexTable_stacks_in_4912_page21_Reset(field,true);
		}

	return false;
	}

/* reset the table on the onsearch event or other */
function FlexTable_stacks_in_4912_page21_ButtonEnable(enable) {
	var button = document.getElementById('FlexTableSearch_button_stacks_in_4912_page21');
	if (!button) return;
	button.disabled = !enable;
	return;
	}

/* reset the table on the onsearch event or other */
function FlexTable_stacks_in_4912_page21_Reset(field,doclick) {

	field.value = 'Search';
	FlexTable_stacks_in_4912_page21_ButtonEnable(false);
	if (doclick) { field.click(); }

	var pager = document.getElementById('FlexTablePager_stacks_in_4912_page21');
	if (!pager) return;
	if (pager.style.display == 'none') {
		FlexTable_stacks_in_4912_page21_Pager(true);
		FlexTable_stacks_in_4912_page21_SetPage(1);
		}

	return false;
	}

/* run the load function and setup responsive for resizing */

stacks.jQuery(document).ready(function() { FlexTable_stacks_in_4912_page21_Init(); });
stacks.jQuery(window).resize(function() { FlexTable_stacks_in_4912_page21_Resp(); });

/* FlexTable javascript, Bryn Owen Design, 2014+ */

window.FlexTable_stacks_in_4914_page21_PageNumber = 1;

function FlexTable_stacks_in_4914_page21_isMobile() {
	if (document.body.clientWidth > 600) {
		return(false);
		} else {
		return(true);
		}
	}

function FlexTable_stacks_in_4914_page21_GoRotated(on) {

	var table = document.getElementById('FlexTable_stacks_in_4914_page21');
	var rtable = document.getElementById('FlexTableRot_stacks_in_4914_page21');
	if (!rtable) { return; }
	if (on) {
		table.style.display = "none";
		rtable.style.display = "table";
		FlexTable_stacks_in_4914_page21_SetRotHeader();
		} else {
		table.style.display = "table";
		rtable.style.display = "none";
		}
	FlexTable_stacks_in_4914_page21_MakePager(window.FlexTable_stacks_in_4914_page21_PageNumber);
	FlexTable_stacks_in_4914_page21_SetPage(window.FlexTable_stacks_in_4914_page21_PageNumber);
	}

function FlexTable_stacks_in_4914_page21_AllRows(on) {

	var table = document.getElementById('FlexTable_stacks_in_4914_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}
	if (on) {
		var disp = "table-row";
		} else {
		var disp = "none";
		}
	for (i=rstart; i<rows.length; i++) {
	    rows[i].style.display = disp;
		}
	}

/* build rotated table column 1 from first row of main table */
function FlexTable_stacks_in_4914_page21_SetRotHeader() {

	if (0 != 1) { return; }

	var table = document.getElementById('FlexTable_stacks_in_4914_page21');
	var rtable = document.getElementById('FlexTableRot_stacks_in_4914_page21');
	if (!table || !rtable) { return; }

	for (i=0; i<table.rows[0].cells.length; i++) {
		rtable.rows[i].cells[0].innerHTML = table.rows[0].cells[i].innerHTML;
		}
	}

function FlexTable_stacks_in_4914_page21_RunSearch() {

	var table = document.getElementById('FlexTable_stacks_in_4914_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	var dispOn = "table-row";
	var dispOff = "none";

	var searchtext = document.getElementById('FlexTableSearch_search_stacks_in_4914_page21').value.toLowerCase();

	for (i=rstart; i<rows.length; i++) {
		rows[i].style.display = dispOff;
		for (j=0; j<rows[i].cells.length; j++) {
			ctext = rows[i].cells[j].textContent.toLowerCase();
			if (ctext.indexOf(searchtext) != -1) {
				rows[i].style.display = dispOn;
				break;
				}
			}
		}

	if (false) {
		/* old way uses - link to Reset */
		FlexTable_stacks_in_4914_page21_MakePager(0);
		FlexTable_stacks_in_4914_page21_Pager(true);
		} else {
		/* new way depends on Search tab */
		window.FlexTable_stacks_in_4914_page21_PageNumber = 1;
		FlexTable_stacks_in_4914_page21_Pager(false);
		}
	}

function FlexTable_stacks_in_4914_page21_Pager(on) {

	var table = document.getElementById('FlexTable_stacks_in_4914_page21');
	if (!table) return;

	var rows = table.rows;
	if (0 == 1) {
		var rstart = 1;
		} else {
		var rstart = 0;
		}

	var rpp = FlexTable_stacks_in_4914_page21_RPP()

	if (rpp >= (rows.length - rstart)) {
		var needed = false;
		} else {
		var needed = true;
		}

	var pager = document.getElementById('FlexTablePager_stacks_in_4914_page21');
	if ((on && needed) || (window.FlexTable_stacks_in_4914_page21_PageNumber <= 0)) {
		var disp = "inline-block";
		} else {
		var disp = "none";
		}

	if (pager) {
		pager.style.display = disp;
		}
	}

function FlexTable_stacks_in_4914_page21_Search(on) {

	var search = document.getElementById('FlexTableSearch_stacks_in_4914_page21');
	if (on) {
		var disp = "inline-block";
		} else {
		var disp = "none";
		}
	if (search) {
		search.style.display = disp;
		}
	}

/* return the number of rows per page depending on mobile */
function FlexTable_stacks_in_4914_page21_RPP() {
	var mobile = FlexTable_stacks_in_4914_page21_isMobile();
	if (mobile) {
		if ("hscroll" == "record") { return(1); }
		return(4);
		}
	return(10);
	}

/* reverse row order */
function FlexTable_stacks_in_4914_page21_Reverse() {

	var table = document.getElementById('FlexTable_stacks_in_4914_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}
	for (i=rstart; i<rows.length; i++) {
	    rows[i].parentNode.insertBefore(rows[rows.length-1], rows[i]);
		}
	}

function FlexTable_stacks_in_4914_page21_SetPage(page) {

	var table = document.getElementById('FlexTable_stacks_in_4914_page21');

	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	if (table.style.display != "none") {

		/* normal table */
		var dispOn = "table-row";
		var dispOff = "none";
		var rpp = FlexTable_stacks_in_4914_page21_RPP();

		if ((0 == 1) && (rpp > 0) && (page > 0)) {
			var pages = Math.ceil((rows.length - rstart)/rpp);
			if (page > pages) { page = pages; }
			var dstart = rstart + (page - 1)*rpp;
			var dstop = dstart + rpp - 1;
			} else {
			var pages = 1;
			var dstart = rstart;
			var dstop = rows.length;
			}

		for (i=rstart; i<rows.length; i++) {
			if ((i >= dstart) && (i <= dstop)) {
				rows[i].style.display = dispOn;
				} else {
				rows[i].style.display = dispOff;
				}
			}

		} else {

		/* rotated table */

		var rtable = document.getElementById('FlexTableRot_stacks_in_4914_page21');
		if (!rtable) { return; }
		if (page > (rows - rstart)) { page = rows - rstart; }
		var rowNum = page + rstart - 1;
		for (i=0; i<table.rows[rowNum].cells.length; i++) {
			text = table.rows[rowNum].cells[i].innerHTML;
			rtable.rows[i].cells[rstart].innerHTML = text;
			}

		}

	window.FlexTable_stacks_in_4914_page21_PageNumber = page;
	FlexTable_stacks_in_4914_page21_MakePager(page);
	}

/* if page is zero show all, otherwise 1..N */
function FlexTable_stacks_in_4914_page21_MakePager(page) {

	var table = document.getElementById('FlexTable_stacks_in_4914_page21');
	if (!table) return;

	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	var rpp = FlexTable_stacks_in_4914_page21_RPP();
	if (table.style.display != "none") {
		if ((0 == 1) && (rpp > 0)) {
			var pages = Math.ceil((rows.length - rstart)/rpp);
			} else {
			var pages = 1;
			}
		var showPlus = true;
		} else {
		var rtable = document.getElementById('FlexTableRot_stacks_in_4914_page21');
		if (!rtable) return;
		var pages = rows.length - rstart;
		var showPlus = false;
		}

	var pager = document.getElementById('FlexTablePager_stacks_in_4914_page21');
	if (!pager) return;

	var ddd = " &middot;&middot;&middot; ";

	/* remove entries keeping only +/-delta = 2 around the selected page, */
	/* and (delta-1) = 1 at the beginning and end */
	/* 1 ... 3 4 _5_ 6 7 ... 10 */
	if ("2" == "all") {
		var delta = pages;
		} else {
		if ("2" == "none") {
			var delta = 0;
			ddd = "";
			} else {
			var delta = 2;
			if (pages <= 3*delta) { delta = pages; }
			}
		}

	var mobile = FlexTable_stacks_in_4914_page21_isMobile();

	var delim = "";
	switch (1) {
		case 1:
			/* large triangles */
			var larr = "&#9668;";
			var rarr = "&#9658;";
			break;
		case 2:
			/* blue doubles */
			var larr = "&#9194;";
			var rarr = "&#9193;";
			break;
		case 3:
			/* thick lt/gt */
			var larr = "&#10094;";
			var rarr = "&#10095;";
			break;
		case 4:
			/* thin hollow */
			var larr = "&#5583;";
			var rarr = "&#5580;";
			break;
		default:
			var larr = "&lt;";
			var rarr = "&gt;";
			break;
		}

	if (mobile) {
		var spacer = "&nbsp;&nbsp;";
		} else {
		var spacer = "&nbsp;";
		}

	if (delim != "") { delim = spacer + delim; }

	var pstr = "";

	if (page <= 0) {
		pstr += larr + spacer + "<a title=\"Reset and show table content in pages.\" href=\"#\" onclick=\"FlexTable_stacks_in_4914_page21_SetPage(1); return false;\"><b>&minus;</b></a>" + spacer + rarr;
		} else {
		if (page <= 1) {
			if (1 == 1) {
				pstr += "<a title=\"Select the last page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_4914_page21_SetPage(" + pages + "); return false;\">" + larr + "</a>";
				} else {
				pstr += larr;
				}
			} else {
			pstr += "<a title=\"Select the previous page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_4914_page21_SetPage(" + (page-1) + "); return false;\">" + larr + "</a>";
			}

		var d1flag = false;
		var d2flag = false;
		for (i=1; i<=pages; i++) {
			if (i == page) {
				if (i > 1) { pstr += delim; }
				pstr += spacer;
				pstr += "<label title=\"Page " + i + " of the table is currently selected.\"><b>" + i + "</b></label>";
				} else {
				if ((i < delta) || ((i >= (page - delta)) && (i <= (page + delta))) || (i > (pages - delta + 1))) {
					if (i > 1) { pstr += delim; }
					pstr += spacer;
					pstr += "<a title=\"Select page " + i + " of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_4914_page21_SetPage(" + i + "); return false;\">" + i + "</a>";
					} else {
					if (!d1flag && (i < (page - delta))) {
						pstr += spacer;
						pstr += ddd;
						d1flag = true;
						}
					if (!d2flag && (i > (page + delta))) {
						pstr += spacer;
						pstr += ddd;
						d2flag = true;
						}
					}
				}
			}

		if (showPlus) {
			pstr += spacer + "<a title=\"Show all table content without pages.\" href=\"#\" onclick=\"FlexTable_stacks_in_4914_page21_SetPage(0); return false;\"><b>+</b></a>";
			}

		if (page >= pages) {
			if (1 == 1) {
				pstr += spacer + "<a title=\"Select the first page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_4914_page21_SetPage(" + 1 + "); return false;\">" + rarr + "</a>";
				} else {
				pstr += spacer + rarr;
				}
			} else {
			pstr += spacer + "<a title=\"Select the next page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_4914_page21_SetPage(" + (page+1) + "); return false;\">" + rarr + "</a>";
			}
		}

	window.FlexTable_stacks_in_4914_page21_PageNumber = page;
	pager.innerHTML = pstr;
	}

/* on dynamic screen width change call this responsive procedure */
function FlexTable_stacks_in_4914_page21_Resp() {

	var mobile = FlexTable_stacks_in_4914_page21_isMobile();
	if ((0 != 1) || (0 != 1)) {
		FlexTable_stacks_in_4914_page21_Search(false);
		} else {
		if (mobile) {
			if (1 == 1) {
				FlexTable_stacks_in_4914_page21_Search(false);
				} else {
				FlexTable_stacks_in_4914_page21_Search(true);
				}
			} else {
			FlexTable_stacks_in_4914_page21_Search(true);
			}
		}

	if ("hscroll" == "record") {
		if (mobile) {
			FlexTable_stacks_in_4914_page21_Pager(true);
			FlexTable_stacks_in_4914_page21_GoRotated(true);
			} else {
			if (0 != 1) {
				FlexTable_stacks_in_4914_page21_Pager(false);
				} else {
				FlexTable_stacks_in_4914_page21_Pager(true);
				}
			FlexTable_stacks_in_4914_page21_GoRotated(false);
			}
		} else {
		if (0 == 1) {
			FlexTable_stacks_in_4914_page21_Pager(true);
			FlexTable_stacks_in_4914_page21_MakePager(window.FlexTable_stacks_in_4914_page21_PageNumber);
			FlexTable_stacks_in_4914_page21_SetPage(window.FlexTable_stacks_in_4914_page21_PageNumber);
			} else {
			FlexTable_stacks_in_4914_page21_Pager(false);
			}
		}
	}

function FlexTable_stacks_in_4914_page21_Init() {
	if (0 == 1) {
		FlexTable_stacks_in_4914_page21_Reverse();
		}
	if (0 == 1) {
		FlexTable_stacks_in_4914_page21_Pager(true);
		if (0 == 1) {
			FlexTable_stacks_in_4914_page21_Search(true);
			} else {
			FlexTable_stacks_in_4914_page21_Search(false);
			}
		} else {
		FlexTable_stacks_in_4914_page21_Pager(false);
		FlexTable_stacks_in_4914_page21_Search(false);
		}
	FlexTable_stacks_in_4914_page21_Resp();
	}

/* form search field onfocus function */
function FlexTable_stacks_in_4914_page21_Event(field,event) {

	if ((event == 'onfocus') || (event == 'onclick')) {
		if (field.value == 'Search') {
			field.value = '';
			FlexTable_stacks_in_4914_page21_ButtonEnable(false);
			} else {
			FlexTable_stacks_in_4914_page21_ButtonEnable(true);
			}
		}
	if ((event == 'onblur') || (event == 'onchange')) {
		if (field.value == '') {
			FlexTable_stacks_in_4914_page21_Reset(field,false);
			} else {
			FlexTable_stacks_in_4914_page21_ButtonEnable(true);
			}
		}
	if (event == 'incremental') {
		if (field.value.length > 1) {
			FlexTable_stacks_in_4914_page21_ButtonEnable(true);
			FlexTable_stacks_in_4914_page21_RunSearch();
			}
		}
	if (event == 'onsearch') {
		FlexTable_stacks_in_4914_page21_Reset(field,true);
		}

	return false;
	}

/* reset the table on the onsearch event or other */
function FlexTable_stacks_in_4914_page21_ButtonEnable(enable) {
	var button = document.getElementById('FlexTableSearch_button_stacks_in_4914_page21');
	if (!button) return;
	button.disabled = !enable;
	return;
	}

/* reset the table on the onsearch event or other */
function FlexTable_stacks_in_4914_page21_Reset(field,doclick) {

	field.value = 'Search';
	FlexTable_stacks_in_4914_page21_ButtonEnable(false);
	if (doclick) { field.click(); }

	var pager = document.getElementById('FlexTablePager_stacks_in_4914_page21');
	if (!pager) return;
	if (pager.style.display == 'none') {
		FlexTable_stacks_in_4914_page21_Pager(true);
		FlexTable_stacks_in_4914_page21_SetPage(1);
		}

	return false;
	}

/* run the load function and setup responsive for resizing */

stacks.jQuery(document).ready(function() { FlexTable_stacks_in_4914_page21_Init(); });
stacks.jQuery(window).resize(function() { FlexTable_stacks_in_4914_page21_Resp(); });

/* FlexTable javascript, Bryn Owen Design, 2014+ */

window.FlexTable_stacks_in_5134_page21_PageNumber = 1;

function FlexTable_stacks_in_5134_page21_isMobile() {
	if (document.body.clientWidth > 600) {
		return(false);
		} else {
		return(true);
		}
	}

function FlexTable_stacks_in_5134_page21_GoRotated(on) {

	var table = document.getElementById('FlexTable_stacks_in_5134_page21');
	var rtable = document.getElementById('FlexTableRot_stacks_in_5134_page21');
	if (!rtable) { return; }
	if (on) {
		table.style.display = "none";
		rtable.style.display = "table";
		FlexTable_stacks_in_5134_page21_SetRotHeader();
		} else {
		table.style.display = "table";
		rtable.style.display = "none";
		}
	FlexTable_stacks_in_5134_page21_MakePager(window.FlexTable_stacks_in_5134_page21_PageNumber);
	FlexTable_stacks_in_5134_page21_SetPage(window.FlexTable_stacks_in_5134_page21_PageNumber);
	}

function FlexTable_stacks_in_5134_page21_AllRows(on) {

	var table = document.getElementById('FlexTable_stacks_in_5134_page21');
	var rows = table.rows;
	if (1 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}
	if (on) {
		var disp = "table-row";
		} else {
		var disp = "none";
		}
	for (i=rstart; i<rows.length; i++) {
	    rows[i].style.display = disp;
		}
	}

/* build rotated table column 1 from first row of main table */
function FlexTable_stacks_in_5134_page21_SetRotHeader() {

	if (1 != 1) { return; }

	var table = document.getElementById('FlexTable_stacks_in_5134_page21');
	var rtable = document.getElementById('FlexTableRot_stacks_in_5134_page21');
	if (!table || !rtable) { return; }

	for (i=0; i<table.rows[0].cells.length; i++) {
		rtable.rows[i].cells[0].innerHTML = table.rows[0].cells[i].innerHTML;
		}
	}

function FlexTable_stacks_in_5134_page21_RunSearch() {

	var table = document.getElementById('FlexTable_stacks_in_5134_page21');
	var rows = table.rows;
	if (1 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	var dispOn = "table-row";
	var dispOff = "none";

	var searchtext = document.getElementById('FlexTableSearch_search_stacks_in_5134_page21').value.toLowerCase();

	for (i=rstart; i<rows.length; i++) {
		rows[i].style.display = dispOff;
		for (j=0; j<rows[i].cells.length; j++) {
			ctext = rows[i].cells[j].textContent.toLowerCase();
			if (ctext.indexOf(searchtext) != -1) {
				rows[i].style.display = dispOn;
				break;
				}
			}
		}

	if (false) {
		/* old way uses - link to Reset */
		FlexTable_stacks_in_5134_page21_MakePager(0);
		FlexTable_stacks_in_5134_page21_Pager(true);
		} else {
		/* new way depends on Search tab */
		window.FlexTable_stacks_in_5134_page21_PageNumber = 1;
		FlexTable_stacks_in_5134_page21_Pager(false);
		}
	}

function FlexTable_stacks_in_5134_page21_Pager(on) {

	var table = document.getElementById('FlexTable_stacks_in_5134_page21');
	if (!table) return;

	var rows = table.rows;
	if (1 == 1) {
		var rstart = 1;
		} else {
		var rstart = 0;
		}

	var rpp = FlexTable_stacks_in_5134_page21_RPP()

	if (rpp >= (rows.length - rstart)) {
		var needed = false;
		} else {
		var needed = true;
		}

	var pager = document.getElementById('FlexTablePager_stacks_in_5134_page21');
	if ((on && needed) || (window.FlexTable_stacks_in_5134_page21_PageNumber <= 0)) {
		var disp = "inline-block";
		} else {
		var disp = "none";
		}

	if (pager) {
		pager.style.display = disp;
		}
	}

function FlexTable_stacks_in_5134_page21_Search(on) {

	var search = document.getElementById('FlexTableSearch_stacks_in_5134_page21');
	if (on) {
		var disp = "inline-block";
		} else {
		var disp = "none";
		}
	if (search) {
		search.style.display = disp;
		}
	}

/* return the number of rows per page depending on mobile */
function FlexTable_stacks_in_5134_page21_RPP() {
	var mobile = FlexTable_stacks_in_5134_page21_isMobile();
	if (mobile) {
		if ("hscroll" == "record") { return(1); }
		return(4);
		}
	return(10);
	}

/* reverse row order */
function FlexTable_stacks_in_5134_page21_Reverse() {

	var table = document.getElementById('FlexTable_stacks_in_5134_page21');
	var rows = table.rows;
	if (1 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}
	for (i=rstart; i<rows.length; i++) {
	    rows[i].parentNode.insertBefore(rows[rows.length-1], rows[i]);
		}
	}

function FlexTable_stacks_in_5134_page21_SetPage(page) {

	var table = document.getElementById('FlexTable_stacks_in_5134_page21');

	var rows = table.rows;
	if (1 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	if (table.style.display != "none") {

		/* normal table */
		var dispOn = "table-row";
		var dispOff = "none";
		var rpp = FlexTable_stacks_in_5134_page21_RPP();

		if ((0 == 1) && (rpp > 0) && (page > 0)) {
			var pages = Math.ceil((rows.length - rstart)/rpp);
			if (page > pages) { page = pages; }
			var dstart = rstart + (page - 1)*rpp;
			var dstop = dstart + rpp - 1;
			} else {
			var pages = 1;
			var dstart = rstart;
			var dstop = rows.length;
			}

		for (i=rstart; i<rows.length; i++) {
			if ((i >= dstart) && (i <= dstop)) {
				rows[i].style.display = dispOn;
				} else {
				rows[i].style.display = dispOff;
				}
			}

		} else {

		/* rotated table */

		var rtable = document.getElementById('FlexTableRot_stacks_in_5134_page21');
		if (!rtable) { return; }
		if (page > (rows - rstart)) { page = rows - rstart; }
		var rowNum = page + rstart - 1;
		for (i=0; i<table.rows[rowNum].cells.length; i++) {
			text = table.rows[rowNum].cells[i].innerHTML;
			rtable.rows[i].cells[rstart].innerHTML = text;
			}

		}

	window.FlexTable_stacks_in_5134_page21_PageNumber = page;
	FlexTable_stacks_in_5134_page21_MakePager(page);
	}

/* if page is zero show all, otherwise 1..N */
function FlexTable_stacks_in_5134_page21_MakePager(page) {

	var table = document.getElementById('FlexTable_stacks_in_5134_page21');
	if (!table) return;

	var rows = table.rows;
	if (1 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	var rpp = FlexTable_stacks_in_5134_page21_RPP();
	if (table.style.display != "none") {
		if ((0 == 1) && (rpp > 0)) {
			var pages = Math.ceil((rows.length - rstart)/rpp);
			} else {
			var pages = 1;
			}
		var showPlus = true;
		} else {
		var rtable = document.getElementById('FlexTableRot_stacks_in_5134_page21');
		if (!rtable) return;
		var pages = rows.length - rstart;
		var showPlus = false;
		}

	var pager = document.getElementById('FlexTablePager_stacks_in_5134_page21');
	if (!pager) return;

	var ddd = " &middot;&middot;&middot; ";

	/* remove entries keeping only +/-delta = 2 around the selected page, */
	/* and (delta-1) = 1 at the beginning and end */
	/* 1 ... 3 4 _5_ 6 7 ... 10 */
	if ("2" == "all") {
		var delta = pages;
		} else {
		if ("2" == "none") {
			var delta = 0;
			ddd = "";
			} else {
			var delta = 2;
			if (pages <= 3*delta) { delta = pages; }
			}
		}

	var mobile = FlexTable_stacks_in_5134_page21_isMobile();

	var delim = "";
	switch (1) {
		case 1:
			/* large triangles */
			var larr = "&#9668;";
			var rarr = "&#9658;";
			break;
		case 2:
			/* blue doubles */
			var larr = "&#9194;";
			var rarr = "&#9193;";
			break;
		case 3:
			/* thick lt/gt */
			var larr = "&#10094;";
			var rarr = "&#10095;";
			break;
		case 4:
			/* thin hollow */
			var larr = "&#5583;";
			var rarr = "&#5580;";
			break;
		default:
			var larr = "&lt;";
			var rarr = "&gt;";
			break;
		}

	if (mobile) {
		var spacer = "&nbsp;&nbsp;";
		} else {
		var spacer = "&nbsp;";
		}

	if (delim != "") { delim = spacer + delim; }

	var pstr = "";

	if (page <= 0) {
		pstr += larr + spacer + "<a title=\"Reset and show table content in pages.\" href=\"#\" onclick=\"FlexTable_stacks_in_5134_page21_SetPage(1); return false;\"><b>&minus;</b></a>" + spacer + rarr;
		} else {
		if (page <= 1) {
			if (1 == 1) {
				pstr += "<a title=\"Select the last page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5134_page21_SetPage(" + pages + "); return false;\">" + larr + "</a>";
				} else {
				pstr += larr;
				}
			} else {
			pstr += "<a title=\"Select the previous page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5134_page21_SetPage(" + (page-1) + "); return false;\">" + larr + "</a>";
			}

		var d1flag = false;
		var d2flag = false;
		for (i=1; i<=pages; i++) {
			if (i == page) {
				if (i > 1) { pstr += delim; }
				pstr += spacer;
				pstr += "<label title=\"Page " + i + " of the table is currently selected.\"><b>" + i + "</b></label>";
				} else {
				if ((i < delta) || ((i >= (page - delta)) && (i <= (page + delta))) || (i > (pages - delta + 1))) {
					if (i > 1) { pstr += delim; }
					pstr += spacer;
					pstr += "<a title=\"Select page " + i + " of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5134_page21_SetPage(" + i + "); return false;\">" + i + "</a>";
					} else {
					if (!d1flag && (i < (page - delta))) {
						pstr += spacer;
						pstr += ddd;
						d1flag = true;
						}
					if (!d2flag && (i > (page + delta))) {
						pstr += spacer;
						pstr += ddd;
						d2flag = true;
						}
					}
				}
			}

		if (showPlus) {
			pstr += spacer + "<a title=\"Show all table content without pages.\" href=\"#\" onclick=\"FlexTable_stacks_in_5134_page21_SetPage(0); return false;\"><b>+</b></a>";
			}

		if (page >= pages) {
			if (1 == 1) {
				pstr += spacer + "<a title=\"Select the first page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5134_page21_SetPage(" + 1 + "); return false;\">" + rarr + "</a>";
				} else {
				pstr += spacer + rarr;
				}
			} else {
			pstr += spacer + "<a title=\"Select the next page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5134_page21_SetPage(" + (page+1) + "); return false;\">" + rarr + "</a>";
			}
		}

	window.FlexTable_stacks_in_5134_page21_PageNumber = page;
	pager.innerHTML = pstr;
	}

/* on dynamic screen width change call this responsive procedure */
function FlexTable_stacks_in_5134_page21_Resp() {

	var mobile = FlexTable_stacks_in_5134_page21_isMobile();
	if ((0 != 1) || (0 != 1)) {
		FlexTable_stacks_in_5134_page21_Search(false);
		} else {
		if (mobile) {
			if (1 == 1) {
				FlexTable_stacks_in_5134_page21_Search(false);
				} else {
				FlexTable_stacks_in_5134_page21_Search(true);
				}
			} else {
			FlexTable_stacks_in_5134_page21_Search(true);
			}
		}

	if ("hscroll" == "record") {
		if (mobile) {
			FlexTable_stacks_in_5134_page21_Pager(true);
			FlexTable_stacks_in_5134_page21_GoRotated(true);
			} else {
			if (0 != 1) {
				FlexTable_stacks_in_5134_page21_Pager(false);
				} else {
				FlexTable_stacks_in_5134_page21_Pager(true);
				}
			FlexTable_stacks_in_5134_page21_GoRotated(false);
			}
		} else {
		if (0 == 1) {
			FlexTable_stacks_in_5134_page21_Pager(true);
			FlexTable_stacks_in_5134_page21_MakePager(window.FlexTable_stacks_in_5134_page21_PageNumber);
			FlexTable_stacks_in_5134_page21_SetPage(window.FlexTable_stacks_in_5134_page21_PageNumber);
			} else {
			FlexTable_stacks_in_5134_page21_Pager(false);
			}
		}
	}

function FlexTable_stacks_in_5134_page21_Init() {
	if (0 == 1) {
		FlexTable_stacks_in_5134_page21_Reverse();
		}
	if (0 == 1) {
		FlexTable_stacks_in_5134_page21_Pager(true);
		if (0 == 1) {
			FlexTable_stacks_in_5134_page21_Search(true);
			} else {
			FlexTable_stacks_in_5134_page21_Search(false);
			}
		} else {
		FlexTable_stacks_in_5134_page21_Pager(false);
		FlexTable_stacks_in_5134_page21_Search(false);
		}
	FlexTable_stacks_in_5134_page21_Resp();
	}

/* form search field onfocus function */
function FlexTable_stacks_in_5134_page21_Event(field,event) {

	if ((event == 'onfocus') || (event == 'onclick')) {
		if (field.value == 'Search') {
			field.value = '';
			FlexTable_stacks_in_5134_page21_ButtonEnable(false);
			} else {
			FlexTable_stacks_in_5134_page21_ButtonEnable(true);
			}
		}
	if ((event == 'onblur') || (event == 'onchange')) {
		if (field.value == '') {
			FlexTable_stacks_in_5134_page21_Reset(field,false);
			} else {
			FlexTable_stacks_in_5134_page21_ButtonEnable(true);
			}
		}
	if (event == 'incremental') {
		if (field.value.length > 1) {
			FlexTable_stacks_in_5134_page21_ButtonEnable(true);
			FlexTable_stacks_in_5134_page21_RunSearch();
			}
		}
	if (event == 'onsearch') {
		FlexTable_stacks_in_5134_page21_Reset(field,true);
		}

	return false;
	}

/* reset the table on the onsearch event or other */
function FlexTable_stacks_in_5134_page21_ButtonEnable(enable) {
	var button = document.getElementById('FlexTableSearch_button_stacks_in_5134_page21');
	if (!button) return;
	button.disabled = !enable;
	return;
	}

/* reset the table on the onsearch event or other */
function FlexTable_stacks_in_5134_page21_Reset(field,doclick) {

	field.value = 'Search';
	FlexTable_stacks_in_5134_page21_ButtonEnable(false);
	if (doclick) { field.click(); }

	var pager = document.getElementById('FlexTablePager_stacks_in_5134_page21');
	if (!pager) return;
	if (pager.style.display == 'none') {
		FlexTable_stacks_in_5134_page21_Pager(true);
		FlexTable_stacks_in_5134_page21_SetPage(1);
		}

	return false;
	}

/* run the load function and setup responsive for resizing */

stacks.jQuery(document).ready(function() { FlexTable_stacks_in_5134_page21_Init(); });
stacks.jQuery(window).resize(function() { FlexTable_stacks_in_5134_page21_Resp(); });

/* FlexTable javascript, Bryn Owen Design, 2014+ */

window.FlexTable_stacks_in_5088_page21_PageNumber = 1;

function FlexTable_stacks_in_5088_page21_isMobile() {
	if (document.body.clientWidth > 600) {
		return(false);
		} else {
		return(true);
		}
	}

function FlexTable_stacks_in_5088_page21_GoRotated(on) {

	var table = document.getElementById('FlexTable_stacks_in_5088_page21');
	var rtable = document.getElementById('FlexTableRot_stacks_in_5088_page21');
	if (!rtable) { return; }
	if (on) {
		table.style.display = "none";
		rtable.style.display = "table";
		FlexTable_stacks_in_5088_page21_SetRotHeader();
		} else {
		table.style.display = "table";
		rtable.style.display = "none";
		}
	FlexTable_stacks_in_5088_page21_MakePager(window.FlexTable_stacks_in_5088_page21_PageNumber);
	FlexTable_stacks_in_5088_page21_SetPage(window.FlexTable_stacks_in_5088_page21_PageNumber);
	}

function FlexTable_stacks_in_5088_page21_AllRows(on) {

	var table = document.getElementById('FlexTable_stacks_in_5088_page21');
	var rows = table.rows;
	if (1 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}
	if (on) {
		var disp = "table-row";
		} else {
		var disp = "none";
		}
	for (i=rstart; i<rows.length; i++) {
	    rows[i].style.display = disp;
		}
	}

/* build rotated table column 1 from first row of main table */
function FlexTable_stacks_in_5088_page21_SetRotHeader() {

	if (1 != 1) { return; }

	var table = document.getElementById('FlexTable_stacks_in_5088_page21');
	var rtable = document.getElementById('FlexTableRot_stacks_in_5088_page21');
	if (!table || !rtable) { return; }

	for (i=0; i<table.rows[0].cells.length; i++) {
		rtable.rows[i].cells[0].innerHTML = table.rows[0].cells[i].innerHTML;
		}
	}

function FlexTable_stacks_in_5088_page21_RunSearch() {

	var table = document.getElementById('FlexTable_stacks_in_5088_page21');
	var rows = table.rows;
	if (1 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	var dispOn = "table-row";
	var dispOff = "none";

	var searchtext = document.getElementById('FlexTableSearch_search_stacks_in_5088_page21').value.toLowerCase();

	for (i=rstart; i<rows.length; i++) {
		rows[i].style.display = dispOff;
		for (j=0; j<rows[i].cells.length; j++) {
			ctext = rows[i].cells[j].textContent.toLowerCase();
			if (ctext.indexOf(searchtext) != -1) {
				rows[i].style.display = dispOn;
				break;
				}
			}
		}

	if (false) {
		/* old way uses - link to Reset */
		FlexTable_stacks_in_5088_page21_MakePager(0);
		FlexTable_stacks_in_5088_page21_Pager(true);
		} else {
		/* new way depends on Search tab */
		window.FlexTable_stacks_in_5088_page21_PageNumber = 1;
		FlexTable_stacks_in_5088_page21_Pager(false);
		}
	}

function FlexTable_stacks_in_5088_page21_Pager(on) {

	var table = document.getElementById('FlexTable_stacks_in_5088_page21');
	if (!table) return;

	var rows = table.rows;
	if (1 == 1) {
		var rstart = 1;
		} else {
		var rstart = 0;
		}

	var rpp = FlexTable_stacks_in_5088_page21_RPP()

	if (rpp >= (rows.length - rstart)) {
		var needed = false;
		} else {
		var needed = true;
		}

	var pager = document.getElementById('FlexTablePager_stacks_in_5088_page21');
	if ((on && needed) || (window.FlexTable_stacks_in_5088_page21_PageNumber <= 0)) {
		var disp = "inline-block";
		} else {
		var disp = "none";
		}

	if (pager) {
		pager.style.display = disp;
		}
	}

function FlexTable_stacks_in_5088_page21_Search(on) {

	var search = document.getElementById('FlexTableSearch_stacks_in_5088_page21');
	if (on) {
		var disp = "inline-block";
		} else {
		var disp = "none";
		}
	if (search) {
		search.style.display = disp;
		}
	}

/* return the number of rows per page depending on mobile */
function FlexTable_stacks_in_5088_page21_RPP() {
	var mobile = FlexTable_stacks_in_5088_page21_isMobile();
	if (mobile) {
		if ("hscroll" == "record") { return(1); }
		return(4);
		}
	return(10);
	}

/* reverse row order */
function FlexTable_stacks_in_5088_page21_Reverse() {

	var table = document.getElementById('FlexTable_stacks_in_5088_page21');
	var rows = table.rows;
	if (1 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}
	for (i=rstart; i<rows.length; i++) {
	    rows[i].parentNode.insertBefore(rows[rows.length-1], rows[i]);
		}
	}

function FlexTable_stacks_in_5088_page21_SetPage(page) {

	var table = document.getElementById('FlexTable_stacks_in_5088_page21');

	var rows = table.rows;
	if (1 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	if (table.style.display != "none") {

		/* normal table */
		var dispOn = "table-row";
		var dispOff = "none";
		var rpp = FlexTable_stacks_in_5088_page21_RPP();

		if ((0 == 1) && (rpp > 0) && (page > 0)) {
			var pages = Math.ceil((rows.length - rstart)/rpp);
			if (page > pages) { page = pages; }
			var dstart = rstart + (page - 1)*rpp;
			var dstop = dstart + rpp - 1;
			} else {
			var pages = 1;
			var dstart = rstart;
			var dstop = rows.length;
			}

		for (i=rstart; i<rows.length; i++) {
			if ((i >= dstart) && (i <= dstop)) {
				rows[i].style.display = dispOn;
				} else {
				rows[i].style.display = dispOff;
				}
			}

		} else {

		/* rotated table */

		var rtable = document.getElementById('FlexTableRot_stacks_in_5088_page21');
		if (!rtable) { return; }
		if (page > (rows - rstart)) { page = rows - rstart; }
		var rowNum = page + rstart - 1;
		for (i=0; i<table.rows[rowNum].cells.length; i++) {
			text = table.rows[rowNum].cells[i].innerHTML;
			rtable.rows[i].cells[rstart].innerHTML = text;
			}

		}

	window.FlexTable_stacks_in_5088_page21_PageNumber = page;
	FlexTable_stacks_in_5088_page21_MakePager(page);
	}

/* if page is zero show all, otherwise 1..N */
function FlexTable_stacks_in_5088_page21_MakePager(page) {

	var table = document.getElementById('FlexTable_stacks_in_5088_page21');
	if (!table) return;

	var rows = table.rows;
	if (1 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	var rpp = FlexTable_stacks_in_5088_page21_RPP();
	if (table.style.display != "none") {
		if ((0 == 1) && (rpp > 0)) {
			var pages = Math.ceil((rows.length - rstart)/rpp);
			} else {
			var pages = 1;
			}
		var showPlus = true;
		} else {
		var rtable = document.getElementById('FlexTableRot_stacks_in_5088_page21');
		if (!rtable) return;
		var pages = rows.length - rstart;
		var showPlus = false;
		}

	var pager = document.getElementById('FlexTablePager_stacks_in_5088_page21');
	if (!pager) return;

	var ddd = " &middot;&middot;&middot; ";

	/* remove entries keeping only +/-delta = 2 around the selected page, */
	/* and (delta-1) = 1 at the beginning and end */
	/* 1 ... 3 4 _5_ 6 7 ... 10 */
	if ("2" == "all") {
		var delta = pages;
		} else {
		if ("2" == "none") {
			var delta = 0;
			ddd = "";
			} else {
			var delta = 2;
			if (pages <= 3*delta) { delta = pages; }
			}
		}

	var mobile = FlexTable_stacks_in_5088_page21_isMobile();

	var delim = "";
	switch (1) {
		case 1:
			/* large triangles */
			var larr = "&#9668;";
			var rarr = "&#9658;";
			break;
		case 2:
			/* blue doubles */
			var larr = "&#9194;";
			var rarr = "&#9193;";
			break;
		case 3:
			/* thick lt/gt */
			var larr = "&#10094;";
			var rarr = "&#10095;";
			break;
		case 4:
			/* thin hollow */
			var larr = "&#5583;";
			var rarr = "&#5580;";
			break;
		default:
			var larr = "&lt;";
			var rarr = "&gt;";
			break;
		}

	if (mobile) {
		var spacer = "&nbsp;&nbsp;";
		} else {
		var spacer = "&nbsp;";
		}

	if (delim != "") { delim = spacer + delim; }

	var pstr = "";

	if (page <= 0) {
		pstr += larr + spacer + "<a title=\"Reset and show table content in pages.\" href=\"#\" onclick=\"FlexTable_stacks_in_5088_page21_SetPage(1); return false;\"><b>&minus;</b></a>" + spacer + rarr;
		} else {
		if (page <= 1) {
			if (1 == 1) {
				pstr += "<a title=\"Select the last page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5088_page21_SetPage(" + pages + "); return false;\">" + larr + "</a>";
				} else {
				pstr += larr;
				}
			} else {
			pstr += "<a title=\"Select the previous page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5088_page21_SetPage(" + (page-1) + "); return false;\">" + larr + "</a>";
			}

		var d1flag = false;
		var d2flag = false;
		for (i=1; i<=pages; i++) {
			if (i == page) {
				if (i > 1) { pstr += delim; }
				pstr += spacer;
				pstr += "<label title=\"Page " + i + " of the table is currently selected.\"><b>" + i + "</b></label>";
				} else {
				if ((i < delta) || ((i >= (page - delta)) && (i <= (page + delta))) || (i > (pages - delta + 1))) {
					if (i > 1) { pstr += delim; }
					pstr += spacer;
					pstr += "<a title=\"Select page " + i + " of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5088_page21_SetPage(" + i + "); return false;\">" + i + "</a>";
					} else {
					if (!d1flag && (i < (page - delta))) {
						pstr += spacer;
						pstr += ddd;
						d1flag = true;
						}
					if (!d2flag && (i > (page + delta))) {
						pstr += spacer;
						pstr += ddd;
						d2flag = true;
						}
					}
				}
			}

		if (showPlus) {
			pstr += spacer + "<a title=\"Show all table content without pages.\" href=\"#\" onclick=\"FlexTable_stacks_in_5088_page21_SetPage(0); return false;\"><b>+</b></a>";
			}

		if (page >= pages) {
			if (1 == 1) {
				pstr += spacer + "<a title=\"Select the first page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5088_page21_SetPage(" + 1 + "); return false;\">" + rarr + "</a>";
				} else {
				pstr += spacer + rarr;
				}
			} else {
			pstr += spacer + "<a title=\"Select the next page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5088_page21_SetPage(" + (page+1) + "); return false;\">" + rarr + "</a>";
			}
		}

	window.FlexTable_stacks_in_5088_page21_PageNumber = page;
	pager.innerHTML = pstr;
	}

/* on dynamic screen width change call this responsive procedure */
function FlexTable_stacks_in_5088_page21_Resp() {

	var mobile = FlexTable_stacks_in_5088_page21_isMobile();
	if ((0 != 1) || (0 != 1)) {
		FlexTable_stacks_in_5088_page21_Search(false);
		} else {
		if (mobile) {
			if (1 == 1) {
				FlexTable_stacks_in_5088_page21_Search(false);
				} else {
				FlexTable_stacks_in_5088_page21_Search(true);
				}
			} else {
			FlexTable_stacks_in_5088_page21_Search(true);
			}
		}

	if ("hscroll" == "record") {
		if (mobile) {
			FlexTable_stacks_in_5088_page21_Pager(true);
			FlexTable_stacks_in_5088_page21_GoRotated(true);
			} else {
			if (0 != 1) {
				FlexTable_stacks_in_5088_page21_Pager(false);
				} else {
				FlexTable_stacks_in_5088_page21_Pager(true);
				}
			FlexTable_stacks_in_5088_page21_GoRotated(false);
			}
		} else {
		if (0 == 1) {
			FlexTable_stacks_in_5088_page21_Pager(true);
			FlexTable_stacks_in_5088_page21_MakePager(window.FlexTable_stacks_in_5088_page21_PageNumber);
			FlexTable_stacks_in_5088_page21_SetPage(window.FlexTable_stacks_in_5088_page21_PageNumber);
			} else {
			FlexTable_stacks_in_5088_page21_Pager(false);
			}
		}
	}

function FlexTable_stacks_in_5088_page21_Init() {
	if (0 == 1) {
		FlexTable_stacks_in_5088_page21_Reverse();
		}
	if (0 == 1) {
		FlexTable_stacks_in_5088_page21_Pager(true);
		if (0 == 1) {
			FlexTable_stacks_in_5088_page21_Search(true);
			} else {
			FlexTable_stacks_in_5088_page21_Search(false);
			}
		} else {
		FlexTable_stacks_in_5088_page21_Pager(false);
		FlexTable_stacks_in_5088_page21_Search(false);
		}
	FlexTable_stacks_in_5088_page21_Resp();
	}

/* form search field onfocus function */
function FlexTable_stacks_in_5088_page21_Event(field,event) {

	if ((event == 'onfocus') || (event == 'onclick')) {
		if (field.value == 'Search') {
			field.value = '';
			FlexTable_stacks_in_5088_page21_ButtonEnable(false);
			} else {
			FlexTable_stacks_in_5088_page21_ButtonEnable(true);
			}
		}
	if ((event == 'onblur') || (event == 'onchange')) {
		if (field.value == '') {
			FlexTable_stacks_in_5088_page21_Reset(field,false);
			} else {
			FlexTable_stacks_in_5088_page21_ButtonEnable(true);
			}
		}
	if (event == 'incremental') {
		if (field.value.length > 1) {
			FlexTable_stacks_in_5088_page21_ButtonEnable(true);
			FlexTable_stacks_in_5088_page21_RunSearch();
			}
		}
	if (event == 'onsearch') {
		FlexTable_stacks_in_5088_page21_Reset(field,true);
		}

	return false;
	}

/* reset the table on the onsearch event or other */
function FlexTable_stacks_in_5088_page21_ButtonEnable(enable) {
	var button = document.getElementById('FlexTableSearch_button_stacks_in_5088_page21');
	if (!button) return;
	button.disabled = !enable;
	return;
	}

/* reset the table on the onsearch event or other */
function FlexTable_stacks_in_5088_page21_Reset(field,doclick) {

	field.value = 'Search';
	FlexTable_stacks_in_5088_page21_ButtonEnable(false);
	if (doclick) { field.click(); }

	var pager = document.getElementById('FlexTablePager_stacks_in_5088_page21');
	if (!pager) return;
	if (pager.style.display == 'none') {
		FlexTable_stacks_in_5088_page21_Pager(true);
		FlexTable_stacks_in_5088_page21_SetPage(1);
		}

	return false;
	}

/* run the load function and setup responsive for resizing */

stacks.jQuery(document).ready(function() { FlexTable_stacks_in_5088_page21_Init(); });
stacks.jQuery(window).resize(function() { FlexTable_stacks_in_5088_page21_Resp(); });

/* FlexTable javascript, Bryn Owen Design, 2014+ */

window.FlexTable_stacks_in_5093_page21_PageNumber = 1;

function FlexTable_stacks_in_5093_page21_isMobile() {
	if (document.body.clientWidth > 600) {
		return(false);
		} else {
		return(true);
		}
	}

function FlexTable_stacks_in_5093_page21_GoRotated(on) {

	var table = document.getElementById('FlexTable_stacks_in_5093_page21');
	var rtable = document.getElementById('FlexTableRot_stacks_in_5093_page21');
	if (!rtable) { return; }
	if (on) {
		table.style.display = "none";
		rtable.style.display = "table";
		FlexTable_stacks_in_5093_page21_SetRotHeader();
		} else {
		table.style.display = "table";
		rtable.style.display = "none";
		}
	FlexTable_stacks_in_5093_page21_MakePager(window.FlexTable_stacks_in_5093_page21_PageNumber);
	FlexTable_stacks_in_5093_page21_SetPage(window.FlexTable_stacks_in_5093_page21_PageNumber);
	}

function FlexTable_stacks_in_5093_page21_AllRows(on) {

	var table = document.getElementById('FlexTable_stacks_in_5093_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}
	if (on) {
		var disp = "table-row";
		} else {
		var disp = "none";
		}
	for (i=rstart; i<rows.length; i++) {
	    rows[i].style.display = disp;
		}
	}

/* build rotated table column 1 from first row of main table */
function FlexTable_stacks_in_5093_page21_SetRotHeader() {

	if (0 != 1) { return; }

	var table = document.getElementById('FlexTable_stacks_in_5093_page21');
	var rtable = document.getElementById('FlexTableRot_stacks_in_5093_page21');
	if (!table || !rtable) { return; }

	for (i=0; i<table.rows[0].cells.length; i++) {
		rtable.rows[i].cells[0].innerHTML = table.rows[0].cells[i].innerHTML;
		}
	}

function FlexTable_stacks_in_5093_page21_RunSearch() {

	var table = document.getElementById('FlexTable_stacks_in_5093_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	var dispOn = "table-row";
	var dispOff = "none";

	var searchtext = document.getElementById('FlexTableSearch_search_stacks_in_5093_page21').value.toLowerCase();

	for (i=rstart; i<rows.length; i++) {
		rows[i].style.display = dispOff;
		for (j=0; j<rows[i].cells.length; j++) {
			ctext = rows[i].cells[j].textContent.toLowerCase();
			if (ctext.indexOf(searchtext) != -1) {
				rows[i].style.display = dispOn;
				break;
				}
			}
		}

	if (false) {
		/* old way uses - link to Reset */
		FlexTable_stacks_in_5093_page21_MakePager(0);
		FlexTable_stacks_in_5093_page21_Pager(true);
		} else {
		/* new way depends on Search tab */
		window.FlexTable_stacks_in_5093_page21_PageNumber = 1;
		FlexTable_stacks_in_5093_page21_Pager(false);
		}
	}

function FlexTable_stacks_in_5093_page21_Pager(on) {

	var table = document.getElementById('FlexTable_stacks_in_5093_page21');
	if (!table) return;

	var rows = table.rows;
	if (0 == 1) {
		var rstart = 1;
		} else {
		var rstart = 0;
		}

	var rpp = FlexTable_stacks_in_5093_page21_RPP()

	if (rpp >= (rows.length - rstart)) {
		var needed = false;
		} else {
		var needed = true;
		}

	var pager = document.getElementById('FlexTablePager_stacks_in_5093_page21');
	if ((on && needed) || (window.FlexTable_stacks_in_5093_page21_PageNumber <= 0)) {
		var disp = "inline-block";
		} else {
		var disp = "none";
		}

	if (pager) {
		pager.style.display = disp;
		}
	}

function FlexTable_stacks_in_5093_page21_Search(on) {

	var search = document.getElementById('FlexTableSearch_stacks_in_5093_page21');
	if (on) {
		var disp = "inline-block";
		} else {
		var disp = "none";
		}
	if (search) {
		search.style.display = disp;
		}
	}

/* return the number of rows per page depending on mobile */
function FlexTable_stacks_in_5093_page21_RPP() {
	var mobile = FlexTable_stacks_in_5093_page21_isMobile();
	if (mobile) {
		if ("hscroll" == "record") { return(1); }
		return(1);
		}
	return(1);
	}

/* reverse row order */
function FlexTable_stacks_in_5093_page21_Reverse() {

	var table = document.getElementById('FlexTable_stacks_in_5093_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}
	for (i=rstart; i<rows.length; i++) {
	    rows[i].parentNode.insertBefore(rows[rows.length-1], rows[i]);
		}
	}

function FlexTable_stacks_in_5093_page21_SetPage(page) {

	var table = document.getElementById('FlexTable_stacks_in_5093_page21');

	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	if (table.style.display != "none") {

		/* normal table */
		var dispOn = "table-row";
		var dispOff = "none";
		var rpp = FlexTable_stacks_in_5093_page21_RPP();

		if ((1 == 1) && (rpp > 0) && (page > 0)) {
			var pages = Math.ceil((rows.length - rstart)/rpp);
			if (page > pages) { page = pages; }
			var dstart = rstart + (page - 1)*rpp;
			var dstop = dstart + rpp - 1;
			} else {
			var pages = 1;
			var dstart = rstart;
			var dstop = rows.length;
			}

		for (i=rstart; i<rows.length; i++) {
			if ((i >= dstart) && (i <= dstop)) {
				rows[i].style.display = dispOn;
				} else {
				rows[i].style.display = dispOff;
				}
			}

		} else {

		/* rotated table */

		var rtable = document.getElementById('FlexTableRot_stacks_in_5093_page21');
		if (!rtable) { return; }
		if (page > (rows - rstart)) { page = rows - rstart; }
		var rowNum = page + rstart - 1;
		for (i=0; i<table.rows[rowNum].cells.length; i++) {
			text = table.rows[rowNum].cells[i].innerHTML;
			rtable.rows[i].cells[rstart].innerHTML = text;
			}

		}

	window.FlexTable_stacks_in_5093_page21_PageNumber = page;
	FlexTable_stacks_in_5093_page21_MakePager(page);
	}

/* if page is zero show all, otherwise 1..N */
function FlexTable_stacks_in_5093_page21_MakePager(page) {

	var table = document.getElementById('FlexTable_stacks_in_5093_page21');
	if (!table) return;

	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	var rpp = FlexTable_stacks_in_5093_page21_RPP();
	if (table.style.display != "none") {
		if ((1 == 1) && (rpp > 0)) {
			var pages = Math.ceil((rows.length - rstart)/rpp);
			} else {
			var pages = 1;
			}
		var showPlus = true;
		} else {
		var rtable = document.getElementById('FlexTableRot_stacks_in_5093_page21');
		if (!rtable) return;
		var pages = rows.length - rstart;
		var showPlus = false;
		}

	var pager = document.getElementById('FlexTablePager_stacks_in_5093_page21');
	if (!pager) return;

	var ddd = " &middot;&middot;&middot; ";

	/* remove entries keeping only +/-delta = 2 around the selected page, */
	/* and (delta-1) = 1 at the beginning and end */
	/* 1 ... 3 4 _5_ 6 7 ... 10 */
	if ("none" == "all") {
		var delta = pages;
		} else {
		if ("none" == "none") {
			var delta = 0;
			ddd = "";
			} else {
			var delta = none;
			if (pages <= 3*delta) { delta = pages; }
			}
		}

	var mobile = FlexTable_stacks_in_5093_page21_isMobile();

	var delim = "";
	switch (1) {
		case 1:
			/* large triangles */
			var larr = "&#9668;";
			var rarr = "&#9658;";
			break;
		case 2:
			/* blue doubles */
			var larr = "&#9194;";
			var rarr = "&#9193;";
			break;
		case 3:
			/* thick lt/gt */
			var larr = "&#10094;";
			var rarr = "&#10095;";
			break;
		case 4:
			/* thin hollow */
			var larr = "&#5583;";
			var rarr = "&#5580;";
			break;
		default:
			var larr = "&lt;";
			var rarr = "&gt;";
			break;
		}

	if (mobile) {
		var spacer = "&nbsp;&nbsp;";
		} else {
		var spacer = "&nbsp;";
		}

	if (delim != "") { delim = spacer + delim; }

	var pstr = "";

	if (page <= 0) {
		pstr += larr + spacer + "<a title=\"Reset and show table content in pages.\" href=\"#\" onclick=\"FlexTable_stacks_in_5093_page21_SetPage(1); return false;\"><b>&minus;</b></a>" + spacer + rarr;
		} else {
		if (page <= 1) {
			if (1 == 1) {
				pstr += "<a title=\"Select the last page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5093_page21_SetPage(" + pages + "); return false;\">" + larr + "</a>";
				} else {
				pstr += larr;
				}
			} else {
			pstr += "<a title=\"Select the previous page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5093_page21_SetPage(" + (page-1) + "); return false;\">" + larr + "</a>";
			}

		var d1flag = false;
		var d2flag = false;
		for (i=1; i<=pages; i++) {
			if (i == page) {
				if (i > 1) { pstr += delim; }
				pstr += spacer;
				pstr += "<label title=\"Page " + i + " of the table is currently selected.\"><b>" + i + "</b></label>";
				} else {
				if ((i < delta) || ((i >= (page - delta)) && (i <= (page + delta))) || (i > (pages - delta + 1))) {
					if (i > 1) { pstr += delim; }
					pstr += spacer;
					pstr += "<a title=\"Select page " + i + " of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5093_page21_SetPage(" + i + "); return false;\">" + i + "</a>";
					} else {
					if (!d1flag && (i < (page - delta))) {
						pstr += spacer;
						pstr += ddd;
						d1flag = true;
						}
					if (!d2flag && (i > (page + delta))) {
						pstr += spacer;
						pstr += ddd;
						d2flag = true;
						}
					}
				}
			}

		if (showPlus) {
			pstr += spacer + "<a title=\"Show all table content without pages.\" href=\"#\" onclick=\"FlexTable_stacks_in_5093_page21_SetPage(0); return false;\"><b>+</b></a>";
			}

		if (page >= pages) {
			if (1 == 1) {
				pstr += spacer + "<a title=\"Select the first page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5093_page21_SetPage(" + 1 + "); return false;\">" + rarr + "</a>";
				} else {
				pstr += spacer + rarr;
				}
			} else {
			pstr += spacer + "<a title=\"Select the next page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5093_page21_SetPage(" + (page+1) + "); return false;\">" + rarr + "</a>";
			}
		}

	window.FlexTable_stacks_in_5093_page21_PageNumber = page;
	pager.innerHTML = pstr;
	}

/* on dynamic screen width change call this responsive procedure */
function FlexTable_stacks_in_5093_page21_Resp() {

	var mobile = FlexTable_stacks_in_5093_page21_isMobile();
	if ((1 != 1) || (1 != 1)) {
		FlexTable_stacks_in_5093_page21_Search(false);
		} else {
		if (mobile) {
			if (1 == 1) {
				FlexTable_stacks_in_5093_page21_Search(false);
				} else {
				FlexTable_stacks_in_5093_page21_Search(true);
				}
			} else {
			FlexTable_stacks_in_5093_page21_Search(true);
			}
		}

	if ("hscroll" == "record") {
		if (mobile) {
			FlexTable_stacks_in_5093_page21_Pager(true);
			FlexTable_stacks_in_5093_page21_GoRotated(true);
			} else {
			if (1 != 1) {
				FlexTable_stacks_in_5093_page21_Pager(false);
				} else {
				FlexTable_stacks_in_5093_page21_Pager(true);
				}
			FlexTable_stacks_in_5093_page21_GoRotated(false);
			}
		} else {
		if (1 == 1) {
			FlexTable_stacks_in_5093_page21_Pager(true);
			FlexTable_stacks_in_5093_page21_MakePager(window.FlexTable_stacks_in_5093_page21_PageNumber);
			FlexTable_stacks_in_5093_page21_SetPage(window.FlexTable_stacks_in_5093_page21_PageNumber);
			} else {
			FlexTable_stacks_in_5093_page21_Pager(false);
			}
		}
	}

function FlexTable_stacks_in_5093_page21_Init() {
	if (0 == 1) {
		FlexTable_stacks_in_5093_page21_Reverse();
		}
	if (1 == 1) {
		FlexTable_stacks_in_5093_page21_Pager(true);
		if (1 == 1) {
			FlexTable_stacks_in_5093_page21_Search(true);
			} else {
			FlexTable_stacks_in_5093_page21_Search(false);
			}
		} else {
		FlexTable_stacks_in_5093_page21_Pager(false);
		FlexTable_stacks_in_5093_page21_Search(false);
		}
	FlexTable_stacks_in_5093_page21_Resp();
	}

/* form search field onfocus function */
function FlexTable_stacks_in_5093_page21_Event(field,event) {

	if ((event == 'onfocus') || (event == 'onclick')) {
		if (field.value == 'Search') {
			field.value = '';
			FlexTable_stacks_in_5093_page21_ButtonEnable(false);
			} else {
			FlexTable_stacks_in_5093_page21_ButtonEnable(true);
			}
		}
	if ((event == 'onblur') || (event == 'onchange')) {
		if (field.value == '') {
			FlexTable_stacks_in_5093_page21_Reset(field,false);
			} else {
			FlexTable_stacks_in_5093_page21_ButtonEnable(true);
			}
		}
	if (event == 'incremental') {
		if (field.value.length > 1) {
			FlexTable_stacks_in_5093_page21_ButtonEnable(true);
			FlexTable_stacks_in_5093_page21_RunSearch();
			}
		}
	if (event == 'onsearch') {
		FlexTable_stacks_in_5093_page21_Reset(field,true);
		}

	return false;
	}

/* reset the table on the onsearch event or other */
function FlexTable_stacks_in_5093_page21_ButtonEnable(enable) {
	var button = document.getElementById('FlexTableSearch_button_stacks_in_5093_page21');
	if (!button) return;
	button.disabled = !enable;
	return;
	}

/* reset the table on the onsearch event or other */
function FlexTable_stacks_in_5093_page21_Reset(field,doclick) {

	field.value = 'Search';
	FlexTable_stacks_in_5093_page21_ButtonEnable(false);
	if (doclick) { field.click(); }

	var pager = document.getElementById('FlexTablePager_stacks_in_5093_page21');
	if (!pager) return;
	if (pager.style.display == 'none') {
		FlexTable_stacks_in_5093_page21_Pager(true);
		FlexTable_stacks_in_5093_page21_SetPage(1);
		}

	return false;
	}

/* run the load function and setup responsive for resizing */

stacks.jQuery(document).ready(function() { FlexTable_stacks_in_5093_page21_Init(); });
stacks.jQuery(window).resize(function() { FlexTable_stacks_in_5093_page21_Resp(); });

/* FlexTable javascript, Bryn Owen Design, 2014+ */

window.FlexTable_stacks_in_5094_page21_PageNumber = 1;

function FlexTable_stacks_in_5094_page21_isMobile() {
	if (document.body.clientWidth > 600) {
		return(false);
		} else {
		return(true);
		}
	}

function FlexTable_stacks_in_5094_page21_GoRotated(on) {

	var table = document.getElementById('FlexTable_stacks_in_5094_page21');
	var rtable = document.getElementById('FlexTableRot_stacks_in_5094_page21');
	if (!rtable) { return; }
	if (on) {
		table.style.display = "none";
		rtable.style.display = "table";
		FlexTable_stacks_in_5094_page21_SetRotHeader();
		} else {
		table.style.display = "table";
		rtable.style.display = "none";
		}
	FlexTable_stacks_in_5094_page21_MakePager(window.FlexTable_stacks_in_5094_page21_PageNumber);
	FlexTable_stacks_in_5094_page21_SetPage(window.FlexTable_stacks_in_5094_page21_PageNumber);
	}

function FlexTable_stacks_in_5094_page21_AllRows(on) {

	var table = document.getElementById('FlexTable_stacks_in_5094_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}
	if (on) {
		var disp = "table-row";
		} else {
		var disp = "none";
		}
	for (i=rstart; i<rows.length; i++) {
	    rows[i].style.display = disp;
		}
	}

/* build rotated table column 1 from first row of main table */
function FlexTable_stacks_in_5094_page21_SetRotHeader() {

	if (0 != 1) { return; }

	var table = document.getElementById('FlexTable_stacks_in_5094_page21');
	var rtable = document.getElementById('FlexTableRot_stacks_in_5094_page21');
	if (!table || !rtable) { return; }

	for (i=0; i<table.rows[0].cells.length; i++) {
		rtable.rows[i].cells[0].innerHTML = table.rows[0].cells[i].innerHTML;
		}
	}

function FlexTable_stacks_in_5094_page21_RunSearch() {

	var table = document.getElementById('FlexTable_stacks_in_5094_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	var dispOn = "table-row";
	var dispOff = "none";

	var searchtext = document.getElementById('FlexTableSearch_search_stacks_in_5094_page21').value.toLowerCase();

	for (i=rstart; i<rows.length; i++) {
		rows[i].style.display = dispOff;
		for (j=0; j<rows[i].cells.length; j++) {
			ctext = rows[i].cells[j].textContent.toLowerCase();
			if (ctext.indexOf(searchtext) != -1) {
				rows[i].style.display = dispOn;
				break;
				}
			}
		}

	if (false) {
		/* old way uses - link to Reset */
		FlexTable_stacks_in_5094_page21_MakePager(0);
		FlexTable_stacks_in_5094_page21_Pager(true);
		} else {
		/* new way depends on Search tab */
		window.FlexTable_stacks_in_5094_page21_PageNumber = 1;
		FlexTable_stacks_in_5094_page21_Pager(false);
		}
	}

function FlexTable_stacks_in_5094_page21_Pager(on) {

	var table = document.getElementById('FlexTable_stacks_in_5094_page21');
	if (!table) return;

	var rows = table.rows;
	if (0 == 1) {
		var rstart = 1;
		} else {
		var rstart = 0;
		}

	var rpp = FlexTable_stacks_in_5094_page21_RPP()

	if (rpp >= (rows.length - rstart)) {
		var needed = false;
		} else {
		var needed = true;
		}

	var pager = document.getElementById('FlexTablePager_stacks_in_5094_page21');
	if ((on && needed) || (window.FlexTable_stacks_in_5094_page21_PageNumber <= 0)) {
		var disp = "inline-block";
		} else {
		var disp = "none";
		}

	if (pager) {
		pager.style.display = disp;
		}
	}

function FlexTable_stacks_in_5094_page21_Search(on) {

	var search = document.getElementById('FlexTableSearch_stacks_in_5094_page21');
	if (on) {
		var disp = "inline-block";
		} else {
		var disp = "none";
		}
	if (search) {
		search.style.display = disp;
		}
	}

/* return the number of rows per page depending on mobile */
function FlexTable_stacks_in_5094_page21_RPP() {
	var mobile = FlexTable_stacks_in_5094_page21_isMobile();
	if (mobile) {
		if ("hscroll" == "record") { return(1); }
		return(4);
		}
	return(10);
	}

/* reverse row order */
function FlexTable_stacks_in_5094_page21_Reverse() {

	var table = document.getElementById('FlexTable_stacks_in_5094_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}
	for (i=rstart; i<rows.length; i++) {
	    rows[i].parentNode.insertBefore(rows[rows.length-1], rows[i]);
		}
	}

function FlexTable_stacks_in_5094_page21_SetPage(page) {

	var table = document.getElementById('FlexTable_stacks_in_5094_page21');

	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	if (table.style.display != "none") {

		/* normal table */
		var dispOn = "table-row";
		var dispOff = "none";
		var rpp = FlexTable_stacks_in_5094_page21_RPP();

		if ((0 == 1) && (rpp > 0) && (page > 0)) {
			var pages = Math.ceil((rows.length - rstart)/rpp);
			if (page > pages) { page = pages; }
			var dstart = rstart + (page - 1)*rpp;
			var dstop = dstart + rpp - 1;
			} else {
			var pages = 1;
			var dstart = rstart;
			var dstop = rows.length;
			}

		for (i=rstart; i<rows.length; i++) {
			if ((i >= dstart) && (i <= dstop)) {
				rows[i].style.display = dispOn;
				} else {
				rows[i].style.display = dispOff;
				}
			}

		} else {

		/* rotated table */

		var rtable = document.getElementById('FlexTableRot_stacks_in_5094_page21');
		if (!rtable) { return; }
		if (page > (rows - rstart)) { page = rows - rstart; }
		var rowNum = page + rstart - 1;
		for (i=0; i<table.rows[rowNum].cells.length; i++) {
			text = table.rows[rowNum].cells[i].innerHTML;
			rtable.rows[i].cells[rstart].innerHTML = text;
			}

		}

	window.FlexTable_stacks_in_5094_page21_PageNumber = page;
	FlexTable_stacks_in_5094_page21_MakePager(page);
	}

/* if page is zero show all, otherwise 1..N */
function FlexTable_stacks_in_5094_page21_MakePager(page) {

	var table = document.getElementById('FlexTable_stacks_in_5094_page21');
	if (!table) return;

	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	var rpp = FlexTable_stacks_in_5094_page21_RPP();
	if (table.style.display != "none") {
		if ((0 == 1) && (rpp > 0)) {
			var pages = Math.ceil((rows.length - rstart)/rpp);
			} else {
			var pages = 1;
			}
		var showPlus = true;
		} else {
		var rtable = document.getElementById('FlexTableRot_stacks_in_5094_page21');
		if (!rtable) return;
		var pages = rows.length - rstart;
		var showPlus = false;
		}

	var pager = document.getElementById('FlexTablePager_stacks_in_5094_page21');
	if (!pager) return;

	var ddd = " &middot;&middot;&middot; ";

	/* remove entries keeping only +/-delta = 2 around the selected page, */
	/* and (delta-1) = 1 at the beginning and end */
	/* 1 ... 3 4 _5_ 6 7 ... 10 */
	if ("2" == "all") {
		var delta = pages;
		} else {
		if ("2" == "none") {
			var delta = 0;
			ddd = "";
			} else {
			var delta = 2;
			if (pages <= 3*delta) { delta = pages; }
			}
		}

	var mobile = FlexTable_stacks_in_5094_page21_isMobile();

	var delim = "";
	switch (1) {
		case 1:
			/* large triangles */
			var larr = "&#9668;";
			var rarr = "&#9658;";
			break;
		case 2:
			/* blue doubles */
			var larr = "&#9194;";
			var rarr = "&#9193;";
			break;
		case 3:
			/* thick lt/gt */
			var larr = "&#10094;";
			var rarr = "&#10095;";
			break;
		case 4:
			/* thin hollow */
			var larr = "&#5583;";
			var rarr = "&#5580;";
			break;
		default:
			var larr = "&lt;";
			var rarr = "&gt;";
			break;
		}

	if (mobile) {
		var spacer = "&nbsp;&nbsp;";
		} else {
		var spacer = "&nbsp;";
		}

	if (delim != "") { delim = spacer + delim; }

	var pstr = "";

	if (page <= 0) {
		pstr += larr + spacer + "<a title=\"Reset and show table content in pages.\" href=\"#\" onclick=\"FlexTable_stacks_in_5094_page21_SetPage(1); return false;\"><b>&minus;</b></a>" + spacer + rarr;
		} else {
		if (page <= 1) {
			if (1 == 1) {
				pstr += "<a title=\"Select the last page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5094_page21_SetPage(" + pages + "); return false;\">" + larr + "</a>";
				} else {
				pstr += larr;
				}
			} else {
			pstr += "<a title=\"Select the previous page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5094_page21_SetPage(" + (page-1) + "); return false;\">" + larr + "</a>";
			}

		var d1flag = false;
		var d2flag = false;
		for (i=1; i<=pages; i++) {
			if (i == page) {
				if (i > 1) { pstr += delim; }
				pstr += spacer;
				pstr += "<label title=\"Page " + i + " of the table is currently selected.\"><b>" + i + "</b></label>";
				} else {
				if ((i < delta) || ((i >= (page - delta)) && (i <= (page + delta))) || (i > (pages - delta + 1))) {
					if (i > 1) { pstr += delim; }
					pstr += spacer;
					pstr += "<a title=\"Select page " + i + " of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5094_page21_SetPage(" + i + "); return false;\">" + i + "</a>";
					} else {
					if (!d1flag && (i < (page - delta))) {
						pstr += spacer;
						pstr += ddd;
						d1flag = true;
						}
					if (!d2flag && (i > (page + delta))) {
						pstr += spacer;
						pstr += ddd;
						d2flag = true;
						}
					}
				}
			}

		if (showPlus) {
			pstr += spacer + "<a title=\"Show all table content without pages.\" href=\"#\" onclick=\"FlexTable_stacks_in_5094_page21_SetPage(0); return false;\"><b>+</b></a>";
			}

		if (page >= pages) {
			if (1 == 1) {
				pstr += spacer + "<a title=\"Select the first page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5094_page21_SetPage(" + 1 + "); return false;\">" + rarr + "</a>";
				} else {
				pstr += spacer + rarr;
				}
			} else {
			pstr += spacer + "<a title=\"Select the next page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5094_page21_SetPage(" + (page+1) + "); return false;\">" + rarr + "</a>";
			}
		}

	window.FlexTable_stacks_in_5094_page21_PageNumber = page;
	pager.innerHTML = pstr;
	}

/* on dynamic screen width change call this responsive procedure */
function FlexTable_stacks_in_5094_page21_Resp() {

	var mobile = FlexTable_stacks_in_5094_page21_isMobile();
	if ((0 != 1) || (0 != 1)) {
		FlexTable_stacks_in_5094_page21_Search(false);
		} else {
		if (mobile) {
			if (1 == 1) {
				FlexTable_stacks_in_5094_page21_Search(false);
				} else {
				FlexTable_stacks_in_5094_page21_Search(true);
				}
			} else {
			FlexTable_stacks_in_5094_page21_Search(true);
			}
		}

	if ("hscroll" == "record") {
		if (mobile) {
			FlexTable_stacks_in_5094_page21_Pager(true);
			FlexTable_stacks_in_5094_page21_GoRotated(true);
			} else {
			if (0 != 1) {
				FlexTable_stacks_in_5094_page21_Pager(false);
				} else {
				FlexTable_stacks_in_5094_page21_Pager(true);
				}
			FlexTable_stacks_in_5094_page21_GoRotated(false);
			}
		} else {
		if (0 == 1) {
			FlexTable_stacks_in_5094_page21_Pager(true);
			FlexTable_stacks_in_5094_page21_MakePager(window.FlexTable_stacks_in_5094_page21_PageNumber);
			FlexTable_stacks_in_5094_page21_SetPage(window.FlexTable_stacks_in_5094_page21_PageNumber);
			} else {
			FlexTable_stacks_in_5094_page21_Pager(false);
			}
		}
	}

function FlexTable_stacks_in_5094_page21_Init() {
	if (0 == 1) {
		FlexTable_stacks_in_5094_page21_Reverse();
		}
	if (0 == 1) {
		FlexTable_stacks_in_5094_page21_Pager(true);
		if (0 == 1) {
			FlexTable_stacks_in_5094_page21_Search(true);
			} else {
			FlexTable_stacks_in_5094_page21_Search(false);
			}
		} else {
		FlexTable_stacks_in_5094_page21_Pager(false);
		FlexTable_stacks_in_5094_page21_Search(false);
		}
	FlexTable_stacks_in_5094_page21_Resp();
	}

/* form search field onfocus function */
function FlexTable_stacks_in_5094_page21_Event(field,event) {

	if ((event == 'onfocus') || (event == 'onclick')) {
		if (field.value == 'Search') {
			field.value = '';
			FlexTable_stacks_in_5094_page21_ButtonEnable(false);
			} else {
			FlexTable_stacks_in_5094_page21_ButtonEnable(true);
			}
		}
	if ((event == 'onblur') || (event == 'onchange')) {
		if (field.value == '') {
			FlexTable_stacks_in_5094_page21_Reset(field,false);
			} else {
			FlexTable_stacks_in_5094_page21_ButtonEnable(true);
			}
		}
	if (event == 'incremental') {
		if (field.value.length > 1) {
			FlexTable_stacks_in_5094_page21_ButtonEnable(true);
			FlexTable_stacks_in_5094_page21_RunSearch();
			}
		}
	if (event == 'onsearch') {
		FlexTable_stacks_in_5094_page21_Reset(field,true);
		}

	return false;
	}

/* reset the table on the onsearch event or other */
function FlexTable_stacks_in_5094_page21_ButtonEnable(enable) {
	var button = document.getElementById('FlexTableSearch_button_stacks_in_5094_page21');
	if (!button) return;
	button.disabled = !enable;
	return;
	}

/* reset the table on the onsearch event or other */
function FlexTable_stacks_in_5094_page21_Reset(field,doclick) {

	field.value = 'Search';
	FlexTable_stacks_in_5094_page21_ButtonEnable(false);
	if (doclick) { field.click(); }

	var pager = document.getElementById('FlexTablePager_stacks_in_5094_page21');
	if (!pager) return;
	if (pager.style.display == 'none') {
		FlexTable_stacks_in_5094_page21_Pager(true);
		FlexTable_stacks_in_5094_page21_SetPage(1);
		}

	return false;
	}

/* run the load function and setup responsive for resizing */

stacks.jQuery(document).ready(function() { FlexTable_stacks_in_5094_page21_Init(); });
stacks.jQuery(window).resize(function() { FlexTable_stacks_in_5094_page21_Resp(); });

/* FlexTable javascript, Bryn Owen Design, 2014+ */

window.FlexTable_stacks_in_5096_page21_PageNumber = 1;

function FlexTable_stacks_in_5096_page21_isMobile() {
	if (document.body.clientWidth > 600) {
		return(false);
		} else {
		return(true);
		}
	}

function FlexTable_stacks_in_5096_page21_GoRotated(on) {

	var table = document.getElementById('FlexTable_stacks_in_5096_page21');
	var rtable = document.getElementById('FlexTableRot_stacks_in_5096_page21');
	if (!rtable) { return; }
	if (on) {
		table.style.display = "none";
		rtable.style.display = "table";
		FlexTable_stacks_in_5096_page21_SetRotHeader();
		} else {
		table.style.display = "table";
		rtable.style.display = "none";
		}
	FlexTable_stacks_in_5096_page21_MakePager(window.FlexTable_stacks_in_5096_page21_PageNumber);
	FlexTable_stacks_in_5096_page21_SetPage(window.FlexTable_stacks_in_5096_page21_PageNumber);
	}

function FlexTable_stacks_in_5096_page21_AllRows(on) {

	var table = document.getElementById('FlexTable_stacks_in_5096_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}
	if (on) {
		var disp = "table-row";
		} else {
		var disp = "none";
		}
	for (i=rstart; i<rows.length; i++) {
	    rows[i].style.display = disp;
		}
	}

/* build rotated table column 1 from first row of main table */
function FlexTable_stacks_in_5096_page21_SetRotHeader() {

	if (0 != 1) { return; }

	var table = document.getElementById('FlexTable_stacks_in_5096_page21');
	var rtable = document.getElementById('FlexTableRot_stacks_in_5096_page21');
	if (!table || !rtable) { return; }

	for (i=0; i<table.rows[0].cells.length; i++) {
		rtable.rows[i].cells[0].innerHTML = table.rows[0].cells[i].innerHTML;
		}
	}

function FlexTable_stacks_in_5096_page21_RunSearch() {

	var table = document.getElementById('FlexTable_stacks_in_5096_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	var dispOn = "table-row";
	var dispOff = "none";

	var searchtext = document.getElementById('FlexTableSearch_search_stacks_in_5096_page21').value.toLowerCase();

	for (i=rstart; i<rows.length; i++) {
		rows[i].style.display = dispOff;
		for (j=0; j<rows[i].cells.length; j++) {
			ctext = rows[i].cells[j].textContent.toLowerCase();
			if (ctext.indexOf(searchtext) != -1) {
				rows[i].style.display = dispOn;
				break;
				}
			}
		}

	if (false) {
		/* old way uses - link to Reset */
		FlexTable_stacks_in_5096_page21_MakePager(0);
		FlexTable_stacks_in_5096_page21_Pager(true);
		} else {
		/* new way depends on Search tab */
		window.FlexTable_stacks_in_5096_page21_PageNumber = 1;
		FlexTable_stacks_in_5096_page21_Pager(false);
		}
	}

function FlexTable_stacks_in_5096_page21_Pager(on) {

	var table = document.getElementById('FlexTable_stacks_in_5096_page21');
	if (!table) return;

	var rows = table.rows;
	if (0 == 1) {
		var rstart = 1;
		} else {
		var rstart = 0;
		}

	var rpp = FlexTable_stacks_in_5096_page21_RPP()

	if (rpp >= (rows.length - rstart)) {
		var needed = false;
		} else {
		var needed = true;
		}

	var pager = document.getElementById('FlexTablePager_stacks_in_5096_page21');
	if ((on && needed) || (window.FlexTable_stacks_in_5096_page21_PageNumber <= 0)) {
		var disp = "inline-block";
		} else {
		var disp = "none";
		}

	if (pager) {
		pager.style.display = disp;
		}
	}

function FlexTable_stacks_in_5096_page21_Search(on) {

	var search = document.getElementById('FlexTableSearch_stacks_in_5096_page21');
	if (on) {
		var disp = "inline-block";
		} else {
		var disp = "none";
		}
	if (search) {
		search.style.display = disp;
		}
	}

/* return the number of rows per page depending on mobile */
function FlexTable_stacks_in_5096_page21_RPP() {
	var mobile = FlexTable_stacks_in_5096_page21_isMobile();
	if (mobile) {
		if ("hscroll" == "record") { return(1); }
		return(4);
		}
	return(10);
	}

/* reverse row order */
function FlexTable_stacks_in_5096_page21_Reverse() {

	var table = document.getElementById('FlexTable_stacks_in_5096_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}
	for (i=rstart; i<rows.length; i++) {
	    rows[i].parentNode.insertBefore(rows[rows.length-1], rows[i]);
		}
	}

function FlexTable_stacks_in_5096_page21_SetPage(page) {

	var table = document.getElementById('FlexTable_stacks_in_5096_page21');

	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	if (table.style.display != "none") {

		/* normal table */
		var dispOn = "table-row";
		var dispOff = "none";
		var rpp = FlexTable_stacks_in_5096_page21_RPP();

		if ((0 == 1) && (rpp > 0) && (page > 0)) {
			var pages = Math.ceil((rows.length - rstart)/rpp);
			if (page > pages) { page = pages; }
			var dstart = rstart + (page - 1)*rpp;
			var dstop = dstart + rpp - 1;
			} else {
			var pages = 1;
			var dstart = rstart;
			var dstop = rows.length;
			}

		for (i=rstart; i<rows.length; i++) {
			if ((i >= dstart) && (i <= dstop)) {
				rows[i].style.display = dispOn;
				} else {
				rows[i].style.display = dispOff;
				}
			}

		} else {

		/* rotated table */

		var rtable = document.getElementById('FlexTableRot_stacks_in_5096_page21');
		if (!rtable) { return; }
		if (page > (rows - rstart)) { page = rows - rstart; }
		var rowNum = page + rstart - 1;
		for (i=0; i<table.rows[rowNum].cells.length; i++) {
			text = table.rows[rowNum].cells[i].innerHTML;
			rtable.rows[i].cells[rstart].innerHTML = text;
			}

		}

	window.FlexTable_stacks_in_5096_page21_PageNumber = page;
	FlexTable_stacks_in_5096_page21_MakePager(page);
	}

/* if page is zero show all, otherwise 1..N */
function FlexTable_stacks_in_5096_page21_MakePager(page) {

	var table = document.getElementById('FlexTable_stacks_in_5096_page21');
	if (!table) return;

	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	var rpp = FlexTable_stacks_in_5096_page21_RPP();
	if (table.style.display != "none") {
		if ((0 == 1) && (rpp > 0)) {
			var pages = Math.ceil((rows.length - rstart)/rpp);
			} else {
			var pages = 1;
			}
		var showPlus = true;
		} else {
		var rtable = document.getElementById('FlexTableRot_stacks_in_5096_page21');
		if (!rtable) return;
		var pages = rows.length - rstart;
		var showPlus = false;
		}

	var pager = document.getElementById('FlexTablePager_stacks_in_5096_page21');
	if (!pager) return;

	var ddd = " &middot;&middot;&middot; ";

	/* remove entries keeping only +/-delta = 2 around the selected page, */
	/* and (delta-1) = 1 at the beginning and end */
	/* 1 ... 3 4 _5_ 6 7 ... 10 */
	if ("2" == "all") {
		var delta = pages;
		} else {
		if ("2" == "none") {
			var delta = 0;
			ddd = "";
			} else {
			var delta = 2;
			if (pages <= 3*delta) { delta = pages; }
			}
		}

	var mobile = FlexTable_stacks_in_5096_page21_isMobile();

	var delim = "";
	switch (1) {
		case 1:
			/* large triangles */
			var larr = "&#9668;";
			var rarr = "&#9658;";
			break;
		case 2:
			/* blue doubles */
			var larr = "&#9194;";
			var rarr = "&#9193;";
			break;
		case 3:
			/* thick lt/gt */
			var larr = "&#10094;";
			var rarr = "&#10095;";
			break;
		case 4:
			/* thin hollow */
			var larr = "&#5583;";
			var rarr = "&#5580;";
			break;
		default:
			var larr = "&lt;";
			var rarr = "&gt;";
			break;
		}

	if (mobile) {
		var spacer = "&nbsp;&nbsp;";
		} else {
		var spacer = "&nbsp;";
		}

	if (delim != "") { delim = spacer + delim; }

	var pstr = "";

	if (page <= 0) {
		pstr += larr + spacer + "<a title=\"Reset and show table content in pages.\" href=\"#\" onclick=\"FlexTable_stacks_in_5096_page21_SetPage(1); return false;\"><b>&minus;</b></a>" + spacer + rarr;
		} else {
		if (page <= 1) {
			if (1 == 1) {
				pstr += "<a title=\"Select the last page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5096_page21_SetPage(" + pages + "); return false;\">" + larr + "</a>";
				} else {
				pstr += larr;
				}
			} else {
			pstr += "<a title=\"Select the previous page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5096_page21_SetPage(" + (page-1) + "); return false;\">" + larr + "</a>";
			}

		var d1flag = false;
		var d2flag = false;
		for (i=1; i<=pages; i++) {
			if (i == page) {
				if (i > 1) { pstr += delim; }
				pstr += spacer;
				pstr += "<label title=\"Page " + i + " of the table is currently selected.\"><b>" + i + "</b></label>";
				} else {
				if ((i < delta) || ((i >= (page - delta)) && (i <= (page + delta))) || (i > (pages - delta + 1))) {
					if (i > 1) { pstr += delim; }
					pstr += spacer;
					pstr += "<a title=\"Select page " + i + " of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5096_page21_SetPage(" + i + "); return false;\">" + i + "</a>";
					} else {
					if (!d1flag && (i < (page - delta))) {
						pstr += spacer;
						pstr += ddd;
						d1flag = true;
						}
					if (!d2flag && (i > (page + delta))) {
						pstr += spacer;
						pstr += ddd;
						d2flag = true;
						}
					}
				}
			}

		if (showPlus) {
			pstr += spacer + "<a title=\"Show all table content without pages.\" href=\"#\" onclick=\"FlexTable_stacks_in_5096_page21_SetPage(0); return false;\"><b>+</b></a>";
			}

		if (page >= pages) {
			if (1 == 1) {
				pstr += spacer + "<a title=\"Select the first page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5096_page21_SetPage(" + 1 + "); return false;\">" + rarr + "</a>";
				} else {
				pstr += spacer + rarr;
				}
			} else {
			pstr += spacer + "<a title=\"Select the next page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5096_page21_SetPage(" + (page+1) + "); return false;\">" + rarr + "</a>";
			}
		}

	window.FlexTable_stacks_in_5096_page21_PageNumber = page;
	pager.innerHTML = pstr;
	}

/* on dynamic screen width change call this responsive procedure */
function FlexTable_stacks_in_5096_page21_Resp() {

	var mobile = FlexTable_stacks_in_5096_page21_isMobile();
	if ((0 != 1) || (0 != 1)) {
		FlexTable_stacks_in_5096_page21_Search(false);
		} else {
		if (mobile) {
			if (1 == 1) {
				FlexTable_stacks_in_5096_page21_Search(false);
				} else {
				FlexTable_stacks_in_5096_page21_Search(true);
				}
			} else {
			FlexTable_stacks_in_5096_page21_Search(true);
			}
		}

	if ("hscroll" == "record") {
		if (mobile) {
			FlexTable_stacks_in_5096_page21_Pager(true);
			FlexTable_stacks_in_5096_page21_GoRotated(true);
			} else {
			if (0 != 1) {
				FlexTable_stacks_in_5096_page21_Pager(false);
				} else {
				FlexTable_stacks_in_5096_page21_Pager(true);
				}
			FlexTable_stacks_in_5096_page21_GoRotated(false);
			}
		} else {
		if (0 == 1) {
			FlexTable_stacks_in_5096_page21_Pager(true);
			FlexTable_stacks_in_5096_page21_MakePager(window.FlexTable_stacks_in_5096_page21_PageNumber);
			FlexTable_stacks_in_5096_page21_SetPage(window.FlexTable_stacks_in_5096_page21_PageNumber);
			} else {
			FlexTable_stacks_in_5096_page21_Pager(false);
			}
		}
	}

function FlexTable_stacks_in_5096_page21_Init() {
	if (0 == 1) {
		FlexTable_stacks_in_5096_page21_Reverse();
		}
	if (0 == 1) {
		FlexTable_stacks_in_5096_page21_Pager(true);
		if (0 == 1) {
			FlexTable_stacks_in_5096_page21_Search(true);
			} else {
			FlexTable_stacks_in_5096_page21_Search(false);
			}
		} else {
		FlexTable_stacks_in_5096_page21_Pager(false);
		FlexTable_stacks_in_5096_page21_Search(false);
		}
	FlexTable_stacks_in_5096_page21_Resp();
	}

/* form search field onfocus function */
function FlexTable_stacks_in_5096_page21_Event(field,event) {

	if ((event == 'onfocus') || (event == 'onclick')) {
		if (field.value == 'Search') {
			field.value = '';
			FlexTable_stacks_in_5096_page21_ButtonEnable(false);
			} else {
			FlexTable_stacks_in_5096_page21_ButtonEnable(true);
			}
		}
	if ((event == 'onblur') || (event == 'onchange')) {
		if (field.value == '') {
			FlexTable_stacks_in_5096_page21_Reset(field,false);
			} else {
			FlexTable_stacks_in_5096_page21_ButtonEnable(true);
			}
		}
	if (event == 'incremental') {
		if (field.value.length > 1) {
			FlexTable_stacks_in_5096_page21_ButtonEnable(true);
			FlexTable_stacks_in_5096_page21_RunSearch();
			}
		}
	if (event == 'onsearch') {
		FlexTable_stacks_in_5096_page21_Reset(field,true);
		}

	return false;
	}

/* reset the table on the onsearch event or other */
function FlexTable_stacks_in_5096_page21_ButtonEnable(enable) {
	var button = document.getElementById('FlexTableSearch_button_stacks_in_5096_page21');
	if (!button) return;
	button.disabled = !enable;
	return;
	}

/* reset the table on the onsearch event or other */
function FlexTable_stacks_in_5096_page21_Reset(field,doclick) {

	field.value = 'Search';
	FlexTable_stacks_in_5096_page21_ButtonEnable(false);
	if (doclick) { field.click(); }

	var pager = document.getElementById('FlexTablePager_stacks_in_5096_page21');
	if (!pager) return;
	if (pager.style.display == 'none') {
		FlexTable_stacks_in_5096_page21_Pager(true);
		FlexTable_stacks_in_5096_page21_SetPage(1);
		}

	return false;
	}

/* run the load function and setup responsive for resizing */

stacks.jQuery(document).ready(function() { FlexTable_stacks_in_5096_page21_Init(); });
stacks.jQuery(window).resize(function() { FlexTable_stacks_in_5096_page21_Resp(); });

/* FlexTable javascript, Bryn Owen Design, 2014+ */

window.FlexTable_stacks_in_5334_page21_PageNumber = 1;

function FlexTable_stacks_in_5334_page21_isMobile() {
	if (document.body.clientWidth > 600) {
		return(false);
		} else {
		return(true);
		}
	}

function FlexTable_stacks_in_5334_page21_GoRotated(on) {

	var table = document.getElementById('FlexTable_stacks_in_5334_page21');
	var rtable = document.getElementById('FlexTableRot_stacks_in_5334_page21');
	if (!rtable) { return; }
	if (on) {
		table.style.display = "none";
		rtable.style.display = "table";
		FlexTable_stacks_in_5334_page21_SetRotHeader();
		} else {
		table.style.display = "table";
		rtable.style.display = "none";
		}
	FlexTable_stacks_in_5334_page21_MakePager(window.FlexTable_stacks_in_5334_page21_PageNumber);
	FlexTable_stacks_in_5334_page21_SetPage(window.FlexTable_stacks_in_5334_page21_PageNumber);
	}

function FlexTable_stacks_in_5334_page21_AllRows(on) {

	var table = document.getElementById('FlexTable_stacks_in_5334_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}
	if (on) {
		var disp = "table-row";
		} else {
		var disp = "none";
		}
	for (i=rstart; i<rows.length; i++) {
	    rows[i].style.display = disp;
		}
	}

/* build rotated table column 1 from first row of main table */
function FlexTable_stacks_in_5334_page21_SetRotHeader() {

	if (0 != 1) { return; }

	var table = document.getElementById('FlexTable_stacks_in_5334_page21');
	var rtable = document.getElementById('FlexTableRot_stacks_in_5334_page21');
	if (!table || !rtable) { return; }

	for (i=0; i<table.rows[0].cells.length; i++) {
		rtable.rows[i].cells[0].innerHTML = table.rows[0].cells[i].innerHTML;
		}
	}

function FlexTable_stacks_in_5334_page21_RunSearch() {

	var table = document.getElementById('FlexTable_stacks_in_5334_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	var dispOn = "table-row";
	var dispOff = "none";

	var searchtext = document.getElementById('FlexTableSearch_search_stacks_in_5334_page21').value.toLowerCase();

	for (i=rstart; i<rows.length; i++) {
		rows[i].style.display = dispOff;
		for (j=0; j<rows[i].cells.length; j++) {
			ctext = rows[i].cells[j].textContent.toLowerCase();
			if (ctext.indexOf(searchtext) != -1) {
				rows[i].style.display = dispOn;
				break;
				}
			}
		}

	if (false) {
		/* old way uses - link to Reset */
		FlexTable_stacks_in_5334_page21_MakePager(0);
		FlexTable_stacks_in_5334_page21_Pager(true);
		} else {
		/* new way depends on Search tab */
		window.FlexTable_stacks_in_5334_page21_PageNumber = 1;
		FlexTable_stacks_in_5334_page21_Pager(false);
		}
	}

function FlexTable_stacks_in_5334_page21_Pager(on) {

	var table = document.getElementById('FlexTable_stacks_in_5334_page21');
	if (!table) return;

	var rows = table.rows;
	if (0 == 1) {
		var rstart = 1;
		} else {
		var rstart = 0;
		}

	var rpp = FlexTable_stacks_in_5334_page21_RPP()

	if (rpp >= (rows.length - rstart)) {
		var needed = false;
		} else {
		var needed = true;
		}

	var pager = document.getElementById('FlexTablePager_stacks_in_5334_page21');
	if ((on && needed) || (window.FlexTable_stacks_in_5334_page21_PageNumber <= 0)) {
		var disp = "inline-block";
		} else {
		var disp = "none";
		}

	if (pager) {
		pager.style.display = disp;
		}
	}

function FlexTable_stacks_in_5334_page21_Search(on) {

	var search = document.getElementById('FlexTableSearch_stacks_in_5334_page21');
	if (on) {
		var disp = "inline-block";
		} else {
		var disp = "none";
		}
	if (search) {
		search.style.display = disp;
		}
	}

/* return the number of rows per page depending on mobile */
function FlexTable_stacks_in_5334_page21_RPP() {
	var mobile = FlexTable_stacks_in_5334_page21_isMobile();
	if (mobile) {
		if ("hscroll" == "record") { return(1); }
		return(4);
		}
	return(10);
	}

/* reverse row order */
function FlexTable_stacks_in_5334_page21_Reverse() {

	var table = document.getElementById('FlexTable_stacks_in_5334_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}
	for (i=rstart; i<rows.length; i++) {
	    rows[i].parentNode.insertBefore(rows[rows.length-1], rows[i]);
		}
	}

function FlexTable_stacks_in_5334_page21_SetPage(page) {

	var table = document.getElementById('FlexTable_stacks_in_5334_page21');

	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	if (table.style.display != "none") {

		/* normal table */
		var dispOn = "table-row";
		var dispOff = "none";
		var rpp = FlexTable_stacks_in_5334_page21_RPP();

		if ((0 == 1) && (rpp > 0) && (page > 0)) {
			var pages = Math.ceil((rows.length - rstart)/rpp);
			if (page > pages) { page = pages; }
			var dstart = rstart + (page - 1)*rpp;
			var dstop = dstart + rpp - 1;
			} else {
			var pages = 1;
			var dstart = rstart;
			var dstop = rows.length;
			}

		for (i=rstart; i<rows.length; i++) {
			if ((i >= dstart) && (i <= dstop)) {
				rows[i].style.display = dispOn;
				} else {
				rows[i].style.display = dispOff;
				}
			}

		} else {

		/* rotated table */

		var rtable = document.getElementById('FlexTableRot_stacks_in_5334_page21');
		if (!rtable) { return; }
		if (page > (rows - rstart)) { page = rows - rstart; }
		var rowNum = page + rstart - 1;
		for (i=0; i<table.rows[rowNum].cells.length; i++) {
			text = table.rows[rowNum].cells[i].innerHTML;
			rtable.rows[i].cells[rstart].innerHTML = text;
			}

		}

	window.FlexTable_stacks_in_5334_page21_PageNumber = page;
	FlexTable_stacks_in_5334_page21_MakePager(page);
	}

/* if page is zero show all, otherwise 1..N */
function FlexTable_stacks_in_5334_page21_MakePager(page) {

	var table = document.getElementById('FlexTable_stacks_in_5334_page21');
	if (!table) return;

	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	var rpp = FlexTable_stacks_in_5334_page21_RPP();
	if (table.style.display != "none") {
		if ((0 == 1) && (rpp > 0)) {
			var pages = Math.ceil((rows.length - rstart)/rpp);
			} else {
			var pages = 1;
			}
		var showPlus = true;
		} else {
		var rtable = document.getElementById('FlexTableRot_stacks_in_5334_page21');
		if (!rtable) return;
		var pages = rows.length - rstart;
		var showPlus = false;
		}

	var pager = document.getElementById('FlexTablePager_stacks_in_5334_page21');
	if (!pager) return;

	var ddd = " &middot;&middot;&middot; ";

	/* remove entries keeping only +/-delta = 2 around the selected page, */
	/* and (delta-1) = 1 at the beginning and end */
	/* 1 ... 3 4 _5_ 6 7 ... 10 */
	if ("2" == "all") {
		var delta = pages;
		} else {
		if ("2" == "none") {
			var delta = 0;
			ddd = "";
			} else {
			var delta = 2;
			if (pages <= 3*delta) { delta = pages; }
			}
		}

	var mobile = FlexTable_stacks_in_5334_page21_isMobile();

	var delim = "";
	switch (1) {
		case 1:
			/* large triangles */
			var larr = "&#9668;";
			var rarr = "&#9658;";
			break;
		case 2:
			/* blue doubles */
			var larr = "&#9194;";
			var rarr = "&#9193;";
			break;
		case 3:
			/* thick lt/gt */
			var larr = "&#10094;";
			var rarr = "&#10095;";
			break;
		case 4:
			/* thin hollow */
			var larr = "&#5583;";
			var rarr = "&#5580;";
			break;
		default:
			var larr = "&lt;";
			var rarr = "&gt;";
			break;
		}

	if (mobile) {
		var spacer = "&nbsp;&nbsp;";
		} else {
		var spacer = "&nbsp;";
		}

	if (delim != "") { delim = spacer + delim; }

	var pstr = "";

	if (page <= 0) {
		pstr += larr + spacer + "<a title=\"Reset and show table content in pages.\" href=\"#\" onclick=\"FlexTable_stacks_in_5334_page21_SetPage(1); return false;\"><b>&minus;</b></a>" + spacer + rarr;
		} else {
		if (page <= 1) {
			if (1 == 1) {
				pstr += "<a title=\"Select the last page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5334_page21_SetPage(" + pages + "); return false;\">" + larr + "</a>";
				} else {
				pstr += larr;
				}
			} else {
			pstr += "<a title=\"Select the previous page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5334_page21_SetPage(" + (page-1) + "); return false;\">" + larr + "</a>";
			}

		var d1flag = false;
		var d2flag = false;
		for (i=1; i<=pages; i++) {
			if (i == page) {
				if (i > 1) { pstr += delim; }
				pstr += spacer;
				pstr += "<label title=\"Page " + i + " of the table is currently selected.\"><b>" + i + "</b></label>";
				} else {
				if ((i < delta) || ((i >= (page - delta)) && (i <= (page + delta))) || (i > (pages - delta + 1))) {
					if (i > 1) { pstr += delim; }
					pstr += spacer;
					pstr += "<a title=\"Select page " + i + " of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5334_page21_SetPage(" + i + "); return false;\">" + i + "</a>";
					} else {
					if (!d1flag && (i < (page - delta))) {
						pstr += spacer;
						pstr += ddd;
						d1flag = true;
						}
					if (!d2flag && (i > (page + delta))) {
						pstr += spacer;
						pstr += ddd;
						d2flag = true;
						}
					}
				}
			}

		if (showPlus) {
			pstr += spacer + "<a title=\"Show all table content without pages.\" href=\"#\" onclick=\"FlexTable_stacks_in_5334_page21_SetPage(0); return false;\"><b>+</b></a>";
			}

		if (page >= pages) {
			if (1 == 1) {
				pstr += spacer + "<a title=\"Select the first page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5334_page21_SetPage(" + 1 + "); return false;\">" + rarr + "</a>";
				} else {
				pstr += spacer + rarr;
				}
			} else {
			pstr += spacer + "<a title=\"Select the next page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5334_page21_SetPage(" + (page+1) + "); return false;\">" + rarr + "</a>";
			}
		}

	window.FlexTable_stacks_in_5334_page21_PageNumber = page;
	pager.innerHTML = pstr;
	}

/* on dynamic screen width change call this responsive procedure */
function FlexTable_stacks_in_5334_page21_Resp() {

	var mobile = FlexTable_stacks_in_5334_page21_isMobile();
	if ((0 != 1) || (0 != 1)) {
		FlexTable_stacks_in_5334_page21_Search(false);
		} else {
		if (mobile) {
			if (1 == 1) {
				FlexTable_stacks_in_5334_page21_Search(false);
				} else {
				FlexTable_stacks_in_5334_page21_Search(true);
				}
			} else {
			FlexTable_stacks_in_5334_page21_Search(true);
			}
		}

	if ("hscroll" == "record") {
		if (mobile) {
			FlexTable_stacks_in_5334_page21_Pager(true);
			FlexTable_stacks_in_5334_page21_GoRotated(true);
			} else {
			if (0 != 1) {
				FlexTable_stacks_in_5334_page21_Pager(false);
				} else {
				FlexTable_stacks_in_5334_page21_Pager(true);
				}
			FlexTable_stacks_in_5334_page21_GoRotated(false);
			}
		} else {
		if (0 == 1) {
			FlexTable_stacks_in_5334_page21_Pager(true);
			FlexTable_stacks_in_5334_page21_MakePager(window.FlexTable_stacks_in_5334_page21_PageNumber);
			FlexTable_stacks_in_5334_page21_SetPage(window.FlexTable_stacks_in_5334_page21_PageNumber);
			} else {
			FlexTable_stacks_in_5334_page21_Pager(false);
			}
		}
	}

function FlexTable_stacks_in_5334_page21_Init() {
	if (0 == 1) {
		FlexTable_stacks_in_5334_page21_Reverse();
		}
	if (0 == 1) {
		FlexTable_stacks_in_5334_page21_Pager(true);
		if (0 == 1) {
			FlexTable_stacks_in_5334_page21_Search(true);
			} else {
			FlexTable_stacks_in_5334_page21_Search(false);
			}
		} else {
		FlexTable_stacks_in_5334_page21_Pager(false);
		FlexTable_stacks_in_5334_page21_Search(false);
		}
	FlexTable_stacks_in_5334_page21_Resp();
	}

/* form search field onfocus function */
function FlexTable_stacks_in_5334_page21_Event(field,event) {

	if ((event == 'onfocus') || (event == 'onclick')) {
		if (field.value == 'Search') {
			field.value = '';
			FlexTable_stacks_in_5334_page21_ButtonEnable(false);
			} else {
			FlexTable_stacks_in_5334_page21_ButtonEnable(true);
			}
		}
	if ((event == 'onblur') || (event == 'onchange')) {
		if (field.value == '') {
			FlexTable_stacks_in_5334_page21_Reset(field,false);
			} else {
			FlexTable_stacks_in_5334_page21_ButtonEnable(true);
			}
		}
	if (event == 'incremental') {
		if (field.value.length > 1) {
			FlexTable_stacks_in_5334_page21_ButtonEnable(true);
			FlexTable_stacks_in_5334_page21_RunSearch();
			}
		}
	if (event == 'onsearch') {
		FlexTable_stacks_in_5334_page21_Reset(field,true);
		}

	return false;
	}

/* reset the table on the onsearch event or other */
function FlexTable_stacks_in_5334_page21_ButtonEnable(enable) {
	var button = document.getElementById('FlexTableSearch_button_stacks_in_5334_page21');
	if (!button) return;
	button.disabled = !enable;
	return;
	}

/* reset the table on the onsearch event or other */
function FlexTable_stacks_in_5334_page21_Reset(field,doclick) {

	field.value = 'Search';
	FlexTable_stacks_in_5334_page21_ButtonEnable(false);
	if (doclick) { field.click(); }

	var pager = document.getElementById('FlexTablePager_stacks_in_5334_page21');
	if (!pager) return;
	if (pager.style.display == 'none') {
		FlexTable_stacks_in_5334_page21_Pager(true);
		FlexTable_stacks_in_5334_page21_SetPage(1);
		}

	return false;
	}

/* run the load function and setup responsive for resizing */

stacks.jQuery(document).ready(function() { FlexTable_stacks_in_5334_page21_Init(); });
stacks.jQuery(window).resize(function() { FlexTable_stacks_in_5334_page21_Resp(); });

/* FlexTable javascript, Bryn Owen Design, 2014+ */

window.FlexTable_stacks_in_5389_page21_PageNumber = 1;

function FlexTable_stacks_in_5389_page21_isMobile() {
	if (document.body.clientWidth > 600) {
		return(false);
		} else {
		return(true);
		}
	}

function FlexTable_stacks_in_5389_page21_GoRotated(on) {

	var table = document.getElementById('FlexTable_stacks_in_5389_page21');
	var rtable = document.getElementById('FlexTableRot_stacks_in_5389_page21');
	if (!rtable) { return; }
	if (on) {
		table.style.display = "none";
		rtable.style.display = "table";
		FlexTable_stacks_in_5389_page21_SetRotHeader();
		} else {
		table.style.display = "table";
		rtable.style.display = "none";
		}
	FlexTable_stacks_in_5389_page21_MakePager(window.FlexTable_stacks_in_5389_page21_PageNumber);
	FlexTable_stacks_in_5389_page21_SetPage(window.FlexTable_stacks_in_5389_page21_PageNumber);
	}

function FlexTable_stacks_in_5389_page21_AllRows(on) {

	var table = document.getElementById('FlexTable_stacks_in_5389_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}
	if (on) {
		var disp = "table-row";
		} else {
		var disp = "none";
		}
	for (i=rstart; i<rows.length; i++) {
	    rows[i].style.display = disp;
		}
	}

/* build rotated table column 1 from first row of main table */
function FlexTable_stacks_in_5389_page21_SetRotHeader() {

	if (0 != 1) { return; }

	var table = document.getElementById('FlexTable_stacks_in_5389_page21');
	var rtable = document.getElementById('FlexTableRot_stacks_in_5389_page21');
	if (!table || !rtable) { return; }

	for (i=0; i<table.rows[0].cells.length; i++) {
		rtable.rows[i].cells[0].innerHTML = table.rows[0].cells[i].innerHTML;
		}
	}

function FlexTable_stacks_in_5389_page21_RunSearch() {

	var table = document.getElementById('FlexTable_stacks_in_5389_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	var dispOn = "table-row";
	var dispOff = "none";

	var searchtext = document.getElementById('FlexTableSearch_search_stacks_in_5389_page21').value.toLowerCase();

	for (i=rstart; i<rows.length; i++) {
		rows[i].style.display = dispOff;
		for (j=0; j<rows[i].cells.length; j++) {
			ctext = rows[i].cells[j].textContent.toLowerCase();
			if (ctext.indexOf(searchtext) != -1) {
				rows[i].style.display = dispOn;
				break;
				}
			}
		}

	if (false) {
		/* old way uses - link to Reset */
		FlexTable_stacks_in_5389_page21_MakePager(0);
		FlexTable_stacks_in_5389_page21_Pager(true);
		} else {
		/* new way depends on Search tab */
		window.FlexTable_stacks_in_5389_page21_PageNumber = 1;
		FlexTable_stacks_in_5389_page21_Pager(false);
		}
	}

function FlexTable_stacks_in_5389_page21_Pager(on) {

	var table = document.getElementById('FlexTable_stacks_in_5389_page21');
	if (!table) return;

	var rows = table.rows;
	if (0 == 1) {
		var rstart = 1;
		} else {
		var rstart = 0;
		}

	var rpp = FlexTable_stacks_in_5389_page21_RPP()

	if (rpp >= (rows.length - rstart)) {
		var needed = false;
		} else {
		var needed = true;
		}

	var pager = document.getElementById('FlexTablePager_stacks_in_5389_page21');
	if ((on && needed) || (window.FlexTable_stacks_in_5389_page21_PageNumber <= 0)) {
		var disp = "inline-block";
		} else {
		var disp = "none";
		}

	if (pager) {
		pager.style.display = disp;
		}
	}

function FlexTable_stacks_in_5389_page21_Search(on) {

	var search = document.getElementById('FlexTableSearch_stacks_in_5389_page21');
	if (on) {
		var disp = "inline-block";
		} else {
		var disp = "none";
		}
	if (search) {
		search.style.display = disp;
		}
	}

/* return the number of rows per page depending on mobile */
function FlexTable_stacks_in_5389_page21_RPP() {
	var mobile = FlexTable_stacks_in_5389_page21_isMobile();
	if (mobile) {
		if ("hscroll" == "record") { return(1); }
		return(1);
		}
	return(1);
	}

/* reverse row order */
function FlexTable_stacks_in_5389_page21_Reverse() {

	var table = document.getElementById('FlexTable_stacks_in_5389_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}
	for (i=rstart; i<rows.length; i++) {
	    rows[i].parentNode.insertBefore(rows[rows.length-1], rows[i]);
		}
	}

function FlexTable_stacks_in_5389_page21_SetPage(page) {

	var table = document.getElementById('FlexTable_stacks_in_5389_page21');

	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	if (table.style.display != "none") {

		/* normal table */
		var dispOn = "table-row";
		var dispOff = "none";
		var rpp = FlexTable_stacks_in_5389_page21_RPP();

		if ((1 == 1) && (rpp > 0) && (page > 0)) {
			var pages = Math.ceil((rows.length - rstart)/rpp);
			if (page > pages) { page = pages; }
			var dstart = rstart + (page - 1)*rpp;
			var dstop = dstart + rpp - 1;
			} else {
			var pages = 1;
			var dstart = rstart;
			var dstop = rows.length;
			}

		for (i=rstart; i<rows.length; i++) {
			if ((i >= dstart) && (i <= dstop)) {
				rows[i].style.display = dispOn;
				} else {
				rows[i].style.display = dispOff;
				}
			}

		} else {

		/* rotated table */

		var rtable = document.getElementById('FlexTableRot_stacks_in_5389_page21');
		if (!rtable) { return; }
		if (page > (rows - rstart)) { page = rows - rstart; }
		var rowNum = page + rstart - 1;
		for (i=0; i<table.rows[rowNum].cells.length; i++) {
			text = table.rows[rowNum].cells[i].innerHTML;
			rtable.rows[i].cells[rstart].innerHTML = text;
			}

		}

	window.FlexTable_stacks_in_5389_page21_PageNumber = page;
	FlexTable_stacks_in_5389_page21_MakePager(page);
	}

/* if page is zero show all, otherwise 1..N */
function FlexTable_stacks_in_5389_page21_MakePager(page) {

	var table = document.getElementById('FlexTable_stacks_in_5389_page21');
	if (!table) return;

	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	var rpp = FlexTable_stacks_in_5389_page21_RPP();
	if (table.style.display != "none") {
		if ((1 == 1) && (rpp > 0)) {
			var pages = Math.ceil((rows.length - rstart)/rpp);
			} else {
			var pages = 1;
			}
		var showPlus = true;
		} else {
		var rtable = document.getElementById('FlexTableRot_stacks_in_5389_page21');
		if (!rtable) return;
		var pages = rows.length - rstart;
		var showPlus = false;
		}

	var pager = document.getElementById('FlexTablePager_stacks_in_5389_page21');
	if (!pager) return;

	var ddd = " &middot;&middot;&middot; ";

	/* remove entries keeping only +/-delta = 2 around the selected page, */
	/* and (delta-1) = 1 at the beginning and end */
	/* 1 ... 3 4 _5_ 6 7 ... 10 */
	if ("none" == "all") {
		var delta = pages;
		} else {
		if ("none" == "none") {
			var delta = 0;
			ddd = "";
			} else {
			var delta = none;
			if (pages <= 3*delta) { delta = pages; }
			}
		}

	var mobile = FlexTable_stacks_in_5389_page21_isMobile();

	var delim = "";
	switch (1) {
		case 1:
			/* large triangles */
			var larr = "&#9668;";
			var rarr = "&#9658;";
			break;
		case 2:
			/* blue doubles */
			var larr = "&#9194;";
			var rarr = "&#9193;";
			break;
		case 3:
			/* thick lt/gt */
			var larr = "&#10094;";
			var rarr = "&#10095;";
			break;
		case 4:
			/* thin hollow */
			var larr = "&#5583;";
			var rarr = "&#5580;";
			break;
		default:
			var larr = "&lt;";
			var rarr = "&gt;";
			break;
		}

	if (mobile) {
		var spacer = "&nbsp;&nbsp;";
		} else {
		var spacer = "&nbsp;";
		}

	if (delim != "") { delim = spacer + delim; }

	var pstr = "";

	if (page <= 0) {
		pstr += larr + spacer + "<a title=\"Reset and show table content in pages.\" href=\"#\" onclick=\"FlexTable_stacks_in_5389_page21_SetPage(1); return false;\"><b>&minus;</b></a>" + spacer + rarr;
		} else {
		if (page <= 1) {
			if (1 == 1) {
				pstr += "<a title=\"Select the last page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5389_page21_SetPage(" + pages + "); return false;\">" + larr + "</a>";
				} else {
				pstr += larr;
				}
			} else {
			pstr += "<a title=\"Select the previous page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5389_page21_SetPage(" + (page-1) + "); return false;\">" + larr + "</a>";
			}

		var d1flag = false;
		var d2flag = false;
		for (i=1; i<=pages; i++) {
			if (i == page) {
				if (i > 1) { pstr += delim; }
				pstr += spacer;
				pstr += "<label title=\"Page " + i + " of the table is currently selected.\"><b>" + i + "</b></label>";
				} else {
				if ((i < delta) || ((i >= (page - delta)) && (i <= (page + delta))) || (i > (pages - delta + 1))) {
					if (i > 1) { pstr += delim; }
					pstr += spacer;
					pstr += "<a title=\"Select page " + i + " of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5389_page21_SetPage(" + i + "); return false;\">" + i + "</a>";
					} else {
					if (!d1flag && (i < (page - delta))) {
						pstr += spacer;
						pstr += ddd;
						d1flag = true;
						}
					if (!d2flag && (i > (page + delta))) {
						pstr += spacer;
						pstr += ddd;
						d2flag = true;
						}
					}
				}
			}

		if (showPlus) {
			pstr += spacer + "<a title=\"Show all table content without pages.\" href=\"#\" onclick=\"FlexTable_stacks_in_5389_page21_SetPage(0); return false;\"><b>+</b></a>";
			}

		if (page >= pages) {
			if (1 == 1) {
				pstr += spacer + "<a title=\"Select the first page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5389_page21_SetPage(" + 1 + "); return false;\">" + rarr + "</a>";
				} else {
				pstr += spacer + rarr;
				}
			} else {
			pstr += spacer + "<a title=\"Select the next page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5389_page21_SetPage(" + (page+1) + "); return false;\">" + rarr + "</a>";
			}
		}

	window.FlexTable_stacks_in_5389_page21_PageNumber = page;
	pager.innerHTML = pstr;
	}

/* on dynamic screen width change call this responsive procedure */
function FlexTable_stacks_in_5389_page21_Resp() {

	var mobile = FlexTable_stacks_in_5389_page21_isMobile();
	if ((1 != 1) || (1 != 1)) {
		FlexTable_stacks_in_5389_page21_Search(false);
		} else {
		if (mobile) {
			if (1 == 1) {
				FlexTable_stacks_in_5389_page21_Search(false);
				} else {
				FlexTable_stacks_in_5389_page21_Search(true);
				}
			} else {
			FlexTable_stacks_in_5389_page21_Search(true);
			}
		}

	if ("hscroll" == "record") {
		if (mobile) {
			FlexTable_stacks_in_5389_page21_Pager(true);
			FlexTable_stacks_in_5389_page21_GoRotated(true);
			} else {
			if (1 != 1) {
				FlexTable_stacks_in_5389_page21_Pager(false);
				} else {
				FlexTable_stacks_in_5389_page21_Pager(true);
				}
			FlexTable_stacks_in_5389_page21_GoRotated(false);
			}
		} else {
		if (1 == 1) {
			FlexTable_stacks_in_5389_page21_Pager(true);
			FlexTable_stacks_in_5389_page21_MakePager(window.FlexTable_stacks_in_5389_page21_PageNumber);
			FlexTable_stacks_in_5389_page21_SetPage(window.FlexTable_stacks_in_5389_page21_PageNumber);
			} else {
			FlexTable_stacks_in_5389_page21_Pager(false);
			}
		}
	}

function FlexTable_stacks_in_5389_page21_Init() {
	if (0 == 1) {
		FlexTable_stacks_in_5389_page21_Reverse();
		}
	if (1 == 1) {
		FlexTable_stacks_in_5389_page21_Pager(true);
		if (1 == 1) {
			FlexTable_stacks_in_5389_page21_Search(true);
			} else {
			FlexTable_stacks_in_5389_page21_Search(false);
			}
		} else {
		FlexTable_stacks_in_5389_page21_Pager(false);
		FlexTable_stacks_in_5389_page21_Search(false);
		}
	FlexTable_stacks_in_5389_page21_Resp();
	}

/* form search field onfocus function */
function FlexTable_stacks_in_5389_page21_Event(field,event) {

	if ((event == 'onfocus') || (event == 'onclick')) {
		if (field.value == 'Search') {
			field.value = '';
			FlexTable_stacks_in_5389_page21_ButtonEnable(false);
			} else {
			FlexTable_stacks_in_5389_page21_ButtonEnable(true);
			}
		}
	if ((event == 'onblur') || (event == 'onchange')) {
		if (field.value == '') {
			FlexTable_stacks_in_5389_page21_Reset(field,false);
			} else {
			FlexTable_stacks_in_5389_page21_ButtonEnable(true);
			}
		}
	if (event == 'incremental') {
		if (field.value.length > 1) {
			FlexTable_stacks_in_5389_page21_ButtonEnable(true);
			FlexTable_stacks_in_5389_page21_RunSearch();
			}
		}
	if (event == 'onsearch') {
		FlexTable_stacks_in_5389_page21_Reset(field,true);
		}

	return false;
	}

/* reset the table on the onsearch event or other */
function FlexTable_stacks_in_5389_page21_ButtonEnable(enable) {
	var button = document.getElementById('FlexTableSearch_button_stacks_in_5389_page21');
	if (!button) return;
	button.disabled = !enable;
	return;
	}

/* reset the table on the onsearch event or other */
function FlexTable_stacks_in_5389_page21_Reset(field,doclick) {

	field.value = 'Search';
	FlexTable_stacks_in_5389_page21_ButtonEnable(false);
	if (doclick) { field.click(); }

	var pager = document.getElementById('FlexTablePager_stacks_in_5389_page21');
	if (!pager) return;
	if (pager.style.display == 'none') {
		FlexTable_stacks_in_5389_page21_Pager(true);
		FlexTable_stacks_in_5389_page21_SetPage(1);
		}

	return false;
	}

/* run the load function and setup responsive for resizing */

stacks.jQuery(document).ready(function() { FlexTable_stacks_in_5389_page21_Init(); });
stacks.jQuery(window).resize(function() { FlexTable_stacks_in_5389_page21_Resp(); });

/* FlexTable javascript, Bryn Owen Design, 2014+ */

window.FlexTable_stacks_in_5390_page21_PageNumber = 1;

function FlexTable_stacks_in_5390_page21_isMobile() {
	if (document.body.clientWidth > 600) {
		return(false);
		} else {
		return(true);
		}
	}

function FlexTable_stacks_in_5390_page21_GoRotated(on) {

	var table = document.getElementById('FlexTable_stacks_in_5390_page21');
	var rtable = document.getElementById('FlexTableRot_stacks_in_5390_page21');
	if (!rtable) { return; }
	if (on) {
		table.style.display = "none";
		rtable.style.display = "table";
		FlexTable_stacks_in_5390_page21_SetRotHeader();
		} else {
		table.style.display = "table";
		rtable.style.display = "none";
		}
	FlexTable_stacks_in_5390_page21_MakePager(window.FlexTable_stacks_in_5390_page21_PageNumber);
	FlexTable_stacks_in_5390_page21_SetPage(window.FlexTable_stacks_in_5390_page21_PageNumber);
	}

function FlexTable_stacks_in_5390_page21_AllRows(on) {

	var table = document.getElementById('FlexTable_stacks_in_5390_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}
	if (on) {
		var disp = "table-row";
		} else {
		var disp = "none";
		}
	for (i=rstart; i<rows.length; i++) {
	    rows[i].style.display = disp;
		}
	}

/* build rotated table column 1 from first row of main table */
function FlexTable_stacks_in_5390_page21_SetRotHeader() {

	if (0 != 1) { return; }

	var table = document.getElementById('FlexTable_stacks_in_5390_page21');
	var rtable = document.getElementById('FlexTableRot_stacks_in_5390_page21');
	if (!table || !rtable) { return; }

	for (i=0; i<table.rows[0].cells.length; i++) {
		rtable.rows[i].cells[0].innerHTML = table.rows[0].cells[i].innerHTML;
		}
	}

function FlexTable_stacks_in_5390_page21_RunSearch() {

	var table = document.getElementById('FlexTable_stacks_in_5390_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	var dispOn = "table-row";
	var dispOff = "none";

	var searchtext = document.getElementById('FlexTableSearch_search_stacks_in_5390_page21').value.toLowerCase();

	for (i=rstart; i<rows.length; i++) {
		rows[i].style.display = dispOff;
		for (j=0; j<rows[i].cells.length; j++) {
			ctext = rows[i].cells[j].textContent.toLowerCase();
			if (ctext.indexOf(searchtext) != -1) {
				rows[i].style.display = dispOn;
				break;
				}
			}
		}

	if (false) {
		/* old way uses - link to Reset */
		FlexTable_stacks_in_5390_page21_MakePager(0);
		FlexTable_stacks_in_5390_page21_Pager(true);
		} else {
		/* new way depends on Search tab */
		window.FlexTable_stacks_in_5390_page21_PageNumber = 1;
		FlexTable_stacks_in_5390_page21_Pager(false);
		}
	}

function FlexTable_stacks_in_5390_page21_Pager(on) {

	var table = document.getElementById('FlexTable_stacks_in_5390_page21');
	if (!table) return;

	var rows = table.rows;
	if (0 == 1) {
		var rstart = 1;
		} else {
		var rstart = 0;
		}

	var rpp = FlexTable_stacks_in_5390_page21_RPP()

	if (rpp >= (rows.length - rstart)) {
		var needed = false;
		} else {
		var needed = true;
		}

	var pager = document.getElementById('FlexTablePager_stacks_in_5390_page21');
	if ((on && needed) || (window.FlexTable_stacks_in_5390_page21_PageNumber <= 0)) {
		var disp = "inline-block";
		} else {
		var disp = "none";
		}

	if (pager) {
		pager.style.display = disp;
		}
	}

function FlexTable_stacks_in_5390_page21_Search(on) {

	var search = document.getElementById('FlexTableSearch_stacks_in_5390_page21');
	if (on) {
		var disp = "inline-block";
		} else {
		var disp = "none";
		}
	if (search) {
		search.style.display = disp;
		}
	}

/* return the number of rows per page depending on mobile */
function FlexTable_stacks_in_5390_page21_RPP() {
	var mobile = FlexTable_stacks_in_5390_page21_isMobile();
	if (mobile) {
		if ("hscroll" == "record") { return(1); }
		return(4);
		}
	return(10);
	}

/* reverse row order */
function FlexTable_stacks_in_5390_page21_Reverse() {

	var table = document.getElementById('FlexTable_stacks_in_5390_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}
	for (i=rstart; i<rows.length; i++) {
	    rows[i].parentNode.insertBefore(rows[rows.length-1], rows[i]);
		}
	}

function FlexTable_stacks_in_5390_page21_SetPage(page) {

	var table = document.getElementById('FlexTable_stacks_in_5390_page21');

	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	if (table.style.display != "none") {

		/* normal table */
		var dispOn = "table-row";
		var dispOff = "none";
		var rpp = FlexTable_stacks_in_5390_page21_RPP();

		if ((0 == 1) && (rpp > 0) && (page > 0)) {
			var pages = Math.ceil((rows.length - rstart)/rpp);
			if (page > pages) { page = pages; }
			var dstart = rstart + (page - 1)*rpp;
			var dstop = dstart + rpp - 1;
			} else {
			var pages = 1;
			var dstart = rstart;
			var dstop = rows.length;
			}

		for (i=rstart; i<rows.length; i++) {
			if ((i >= dstart) && (i <= dstop)) {
				rows[i].style.display = dispOn;
				} else {
				rows[i].style.display = dispOff;
				}
			}

		} else {

		/* rotated table */

		var rtable = document.getElementById('FlexTableRot_stacks_in_5390_page21');
		if (!rtable) { return; }
		if (page > (rows - rstart)) { page = rows - rstart; }
		var rowNum = page + rstart - 1;
		for (i=0; i<table.rows[rowNum].cells.length; i++) {
			text = table.rows[rowNum].cells[i].innerHTML;
			rtable.rows[i].cells[rstart].innerHTML = text;
			}

		}

	window.FlexTable_stacks_in_5390_page21_PageNumber = page;
	FlexTable_stacks_in_5390_page21_MakePager(page);
	}

/* if page is zero show all, otherwise 1..N */
function FlexTable_stacks_in_5390_page21_MakePager(page) {

	var table = document.getElementById('FlexTable_stacks_in_5390_page21');
	if (!table) return;

	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	var rpp = FlexTable_stacks_in_5390_page21_RPP();
	if (table.style.display != "none") {
		if ((0 == 1) && (rpp > 0)) {
			var pages = Math.ceil((rows.length - rstart)/rpp);
			} else {
			var pages = 1;
			}
		var showPlus = true;
		} else {
		var rtable = document.getElementById('FlexTableRot_stacks_in_5390_page21');
		if (!rtable) return;
		var pages = rows.length - rstart;
		var showPlus = false;
		}

	var pager = document.getElementById('FlexTablePager_stacks_in_5390_page21');
	if (!pager) return;

	var ddd = " &middot;&middot;&middot; ";

	/* remove entries keeping only +/-delta = 2 around the selected page, */
	/* and (delta-1) = 1 at the beginning and end */
	/* 1 ... 3 4 _5_ 6 7 ... 10 */
	if ("2" == "all") {
		var delta = pages;
		} else {
		if ("2" == "none") {
			var delta = 0;
			ddd = "";
			} else {
			var delta = 2;
			if (pages <= 3*delta) { delta = pages; }
			}
		}

	var mobile = FlexTable_stacks_in_5390_page21_isMobile();

	var delim = "";
	switch (1) {
		case 1:
			/* large triangles */
			var larr = "&#9668;";
			var rarr = "&#9658;";
			break;
		case 2:
			/* blue doubles */
			var larr = "&#9194;";
			var rarr = "&#9193;";
			break;
		case 3:
			/* thick lt/gt */
			var larr = "&#10094;";
			var rarr = "&#10095;";
			break;
		case 4:
			/* thin hollow */
			var larr = "&#5583;";
			var rarr = "&#5580;";
			break;
		default:
			var larr = "&lt;";
			var rarr = "&gt;";
			break;
		}

	if (mobile) {
		var spacer = "&nbsp;&nbsp;";
		} else {
		var spacer = "&nbsp;";
		}

	if (delim != "") { delim = spacer + delim; }

	var pstr = "";

	if (page <= 0) {
		pstr += larr + spacer + "<a title=\"Reset and show table content in pages.\" href=\"#\" onclick=\"FlexTable_stacks_in_5390_page21_SetPage(1); return false;\"><b>&minus;</b></a>" + spacer + rarr;
		} else {
		if (page <= 1) {
			if (1 == 1) {
				pstr += "<a title=\"Select the last page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5390_page21_SetPage(" + pages + "); return false;\">" + larr + "</a>";
				} else {
				pstr += larr;
				}
			} else {
			pstr += "<a title=\"Select the previous page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5390_page21_SetPage(" + (page-1) + "); return false;\">" + larr + "</a>";
			}

		var d1flag = false;
		var d2flag = false;
		for (i=1; i<=pages; i++) {
			if (i == page) {
				if (i > 1) { pstr += delim; }
				pstr += spacer;
				pstr += "<label title=\"Page " + i + " of the table is currently selected.\"><b>" + i + "</b></label>";
				} else {
				if ((i < delta) || ((i >= (page - delta)) && (i <= (page + delta))) || (i > (pages - delta + 1))) {
					if (i > 1) { pstr += delim; }
					pstr += spacer;
					pstr += "<a title=\"Select page " + i + " of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5390_page21_SetPage(" + i + "); return false;\">" + i + "</a>";
					} else {
					if (!d1flag && (i < (page - delta))) {
						pstr += spacer;
						pstr += ddd;
						d1flag = true;
						}
					if (!d2flag && (i > (page + delta))) {
						pstr += spacer;
						pstr += ddd;
						d2flag = true;
						}
					}
				}
			}

		if (showPlus) {
			pstr += spacer + "<a title=\"Show all table content without pages.\" href=\"#\" onclick=\"FlexTable_stacks_in_5390_page21_SetPage(0); return false;\"><b>+</b></a>";
			}

		if (page >= pages) {
			if (1 == 1) {
				pstr += spacer + "<a title=\"Select the first page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5390_page21_SetPage(" + 1 + "); return false;\">" + rarr + "</a>";
				} else {
				pstr += spacer + rarr;
				}
			} else {
			pstr += spacer + "<a title=\"Select the next page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5390_page21_SetPage(" + (page+1) + "); return false;\">" + rarr + "</a>";
			}
		}

	window.FlexTable_stacks_in_5390_page21_PageNumber = page;
	pager.innerHTML = pstr;
	}

/* on dynamic screen width change call this responsive procedure */
function FlexTable_stacks_in_5390_page21_Resp() {

	var mobile = FlexTable_stacks_in_5390_page21_isMobile();
	if ((0 != 1) || (0 != 1)) {
		FlexTable_stacks_in_5390_page21_Search(false);
		} else {
		if (mobile) {
			if (1 == 1) {
				FlexTable_stacks_in_5390_page21_Search(false);
				} else {
				FlexTable_stacks_in_5390_page21_Search(true);
				}
			} else {
			FlexTable_stacks_in_5390_page21_Search(true);
			}
		}

	if ("hscroll" == "record") {
		if (mobile) {
			FlexTable_stacks_in_5390_page21_Pager(true);
			FlexTable_stacks_in_5390_page21_GoRotated(true);
			} else {
			if (0 != 1) {
				FlexTable_stacks_in_5390_page21_Pager(false);
				} else {
				FlexTable_stacks_in_5390_page21_Pager(true);
				}
			FlexTable_stacks_in_5390_page21_GoRotated(false);
			}
		} else {
		if (0 == 1) {
			FlexTable_stacks_in_5390_page21_Pager(true);
			FlexTable_stacks_in_5390_page21_MakePager(window.FlexTable_stacks_in_5390_page21_PageNumber);
			FlexTable_stacks_in_5390_page21_SetPage(window.FlexTable_stacks_in_5390_page21_PageNumber);
			} else {
			FlexTable_stacks_in_5390_page21_Pager(false);
			}
		}
	}

function FlexTable_stacks_in_5390_page21_Init() {
	if (0 == 1) {
		FlexTable_stacks_in_5390_page21_Reverse();
		}
	if (0 == 1) {
		FlexTable_stacks_in_5390_page21_Pager(true);
		if (0 == 1) {
			FlexTable_stacks_in_5390_page21_Search(true);
			} else {
			FlexTable_stacks_in_5390_page21_Search(false);
			}
		} else {
		FlexTable_stacks_in_5390_page21_Pager(false);
		FlexTable_stacks_in_5390_page21_Search(false);
		}
	FlexTable_stacks_in_5390_page21_Resp();
	}

/* form search field onfocus function */
function FlexTable_stacks_in_5390_page21_Event(field,event) {

	if ((event == 'onfocus') || (event == 'onclick')) {
		if (field.value == 'Search') {
			field.value = '';
			FlexTable_stacks_in_5390_page21_ButtonEnable(false);
			} else {
			FlexTable_stacks_in_5390_page21_ButtonEnable(true);
			}
		}
	if ((event == 'onblur') || (event == 'onchange')) {
		if (field.value == '') {
			FlexTable_stacks_in_5390_page21_Reset(field,false);
			} else {
			FlexTable_stacks_in_5390_page21_ButtonEnable(true);
			}
		}
	if (event == 'incremental') {
		if (field.value.length > 1) {
			FlexTable_stacks_in_5390_page21_ButtonEnable(true);
			FlexTable_stacks_in_5390_page21_RunSearch();
			}
		}
	if (event == 'onsearch') {
		FlexTable_stacks_in_5390_page21_Reset(field,true);
		}

	return false;
	}

/* reset the table on the onsearch event or other */
function FlexTable_stacks_in_5390_page21_ButtonEnable(enable) {
	var button = document.getElementById('FlexTableSearch_button_stacks_in_5390_page21');
	if (!button) return;
	button.disabled = !enable;
	return;
	}

/* reset the table on the onsearch event or other */
function FlexTable_stacks_in_5390_page21_Reset(field,doclick) {

	field.value = 'Search';
	FlexTable_stacks_in_5390_page21_ButtonEnable(false);
	if (doclick) { field.click(); }

	var pager = document.getElementById('FlexTablePager_stacks_in_5390_page21');
	if (!pager) return;
	if (pager.style.display == 'none') {
		FlexTable_stacks_in_5390_page21_Pager(true);
		FlexTable_stacks_in_5390_page21_SetPage(1);
		}

	return false;
	}

/* run the load function and setup responsive for resizing */

stacks.jQuery(document).ready(function() { FlexTable_stacks_in_5390_page21_Init(); });
stacks.jQuery(window).resize(function() { FlexTable_stacks_in_5390_page21_Resp(); });

/* FlexTable javascript, Bryn Owen Design, 2014+ */

window.FlexTable_stacks_in_5392_page21_PageNumber = 1;

function FlexTable_stacks_in_5392_page21_isMobile() {
	if (document.body.clientWidth > 600) {
		return(false);
		} else {
		return(true);
		}
	}

function FlexTable_stacks_in_5392_page21_GoRotated(on) {

	var table = document.getElementById('FlexTable_stacks_in_5392_page21');
	var rtable = document.getElementById('FlexTableRot_stacks_in_5392_page21');
	if (!rtable) { return; }
	if (on) {
		table.style.display = "none";
		rtable.style.display = "table";
		FlexTable_stacks_in_5392_page21_SetRotHeader();
		} else {
		table.style.display = "table";
		rtable.style.display = "none";
		}
	FlexTable_stacks_in_5392_page21_MakePager(window.FlexTable_stacks_in_5392_page21_PageNumber);
	FlexTable_stacks_in_5392_page21_SetPage(window.FlexTable_stacks_in_5392_page21_PageNumber);
	}

function FlexTable_stacks_in_5392_page21_AllRows(on) {

	var table = document.getElementById('FlexTable_stacks_in_5392_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}
	if (on) {
		var disp = "table-row";
		} else {
		var disp = "none";
		}
	for (i=rstart; i<rows.length; i++) {
	    rows[i].style.display = disp;
		}
	}

/* build rotated table column 1 from first row of main table */
function FlexTable_stacks_in_5392_page21_SetRotHeader() {

	if (0 != 1) { return; }

	var table = document.getElementById('FlexTable_stacks_in_5392_page21');
	var rtable = document.getElementById('FlexTableRot_stacks_in_5392_page21');
	if (!table || !rtable) { return; }

	for (i=0; i<table.rows[0].cells.length; i++) {
		rtable.rows[i].cells[0].innerHTML = table.rows[0].cells[i].innerHTML;
		}
	}

function FlexTable_stacks_in_5392_page21_RunSearch() {

	var table = document.getElementById('FlexTable_stacks_in_5392_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	var dispOn = "table-row";
	var dispOff = "none";

	var searchtext = document.getElementById('FlexTableSearch_search_stacks_in_5392_page21').value.toLowerCase();

	for (i=rstart; i<rows.length; i++) {
		rows[i].style.display = dispOff;
		for (j=0; j<rows[i].cells.length; j++) {
			ctext = rows[i].cells[j].textContent.toLowerCase();
			if (ctext.indexOf(searchtext) != -1) {
				rows[i].style.display = dispOn;
				break;
				}
			}
		}

	if (false) {
		/* old way uses - link to Reset */
		FlexTable_stacks_in_5392_page21_MakePager(0);
		FlexTable_stacks_in_5392_page21_Pager(true);
		} else {
		/* new way depends on Search tab */
		window.FlexTable_stacks_in_5392_page21_PageNumber = 1;
		FlexTable_stacks_in_5392_page21_Pager(false);
		}
	}

function FlexTable_stacks_in_5392_page21_Pager(on) {

	var table = document.getElementById('FlexTable_stacks_in_5392_page21');
	if (!table) return;

	var rows = table.rows;
	if (0 == 1) {
		var rstart = 1;
		} else {
		var rstart = 0;
		}

	var rpp = FlexTable_stacks_in_5392_page21_RPP()

	if (rpp >= (rows.length - rstart)) {
		var needed = false;
		} else {
		var needed = true;
		}

	var pager = document.getElementById('FlexTablePager_stacks_in_5392_page21');
	if ((on && needed) || (window.FlexTable_stacks_in_5392_page21_PageNumber <= 0)) {
		var disp = "inline-block";
		} else {
		var disp = "none";
		}

	if (pager) {
		pager.style.display = disp;
		}
	}

function FlexTable_stacks_in_5392_page21_Search(on) {

	var search = document.getElementById('FlexTableSearch_stacks_in_5392_page21');
	if (on) {
		var disp = "inline-block";
		} else {
		var disp = "none";
		}
	if (search) {
		search.style.display = disp;
		}
	}

/* return the number of rows per page depending on mobile */
function FlexTable_stacks_in_5392_page21_RPP() {
	var mobile = FlexTable_stacks_in_5392_page21_isMobile();
	if (mobile) {
		if ("hscroll" == "record") { return(1); }
		return(4);
		}
	return(10);
	}

/* reverse row order */
function FlexTable_stacks_in_5392_page21_Reverse() {

	var table = document.getElementById('FlexTable_stacks_in_5392_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}
	for (i=rstart; i<rows.length; i++) {
	    rows[i].parentNode.insertBefore(rows[rows.length-1], rows[i]);
		}
	}

function FlexTable_stacks_in_5392_page21_SetPage(page) {

	var table = document.getElementById('FlexTable_stacks_in_5392_page21');

	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	if (table.style.display != "none") {

		/* normal table */
		var dispOn = "table-row";
		var dispOff = "none";
		var rpp = FlexTable_stacks_in_5392_page21_RPP();

		if ((0 == 1) && (rpp > 0) && (page > 0)) {
			var pages = Math.ceil((rows.length - rstart)/rpp);
			if (page > pages) { page = pages; }
			var dstart = rstart + (page - 1)*rpp;
			var dstop = dstart + rpp - 1;
			} else {
			var pages = 1;
			var dstart = rstart;
			var dstop = rows.length;
			}

		for (i=rstart; i<rows.length; i++) {
			if ((i >= dstart) && (i <= dstop)) {
				rows[i].style.display = dispOn;
				} else {
				rows[i].style.display = dispOff;
				}
			}

		} else {

		/* rotated table */

		var rtable = document.getElementById('FlexTableRot_stacks_in_5392_page21');
		if (!rtable) { return; }
		if (page > (rows - rstart)) { page = rows - rstart; }
		var rowNum = page + rstart - 1;
		for (i=0; i<table.rows[rowNum].cells.length; i++) {
			text = table.rows[rowNum].cells[i].innerHTML;
			rtable.rows[i].cells[rstart].innerHTML = text;
			}

		}

	window.FlexTable_stacks_in_5392_page21_PageNumber = page;
	FlexTable_stacks_in_5392_page21_MakePager(page);
	}

/* if page is zero show all, otherwise 1..N */
function FlexTable_stacks_in_5392_page21_MakePager(page) {

	var table = document.getElementById('FlexTable_stacks_in_5392_page21');
	if (!table) return;

	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	var rpp = FlexTable_stacks_in_5392_page21_RPP();
	if (table.style.display != "none") {
		if ((0 == 1) && (rpp > 0)) {
			var pages = Math.ceil((rows.length - rstart)/rpp);
			} else {
			var pages = 1;
			}
		var showPlus = true;
		} else {
		var rtable = document.getElementById('FlexTableRot_stacks_in_5392_page21');
		if (!rtable) return;
		var pages = rows.length - rstart;
		var showPlus = false;
		}

	var pager = document.getElementById('FlexTablePager_stacks_in_5392_page21');
	if (!pager) return;

	var ddd = " &middot;&middot;&middot; ";

	/* remove entries keeping only +/-delta = 2 around the selected page, */
	/* and (delta-1) = 1 at the beginning and end */
	/* 1 ... 3 4 _5_ 6 7 ... 10 */
	if ("2" == "all") {
		var delta = pages;
		} else {
		if ("2" == "none") {
			var delta = 0;
			ddd = "";
			} else {
			var delta = 2;
			if (pages <= 3*delta) { delta = pages; }
			}
		}

	var mobile = FlexTable_stacks_in_5392_page21_isMobile();

	var delim = "";
	switch (1) {
		case 1:
			/* large triangles */
			var larr = "&#9668;";
			var rarr = "&#9658;";
			break;
		case 2:
			/* blue doubles */
			var larr = "&#9194;";
			var rarr = "&#9193;";
			break;
		case 3:
			/* thick lt/gt */
			var larr = "&#10094;";
			var rarr = "&#10095;";
			break;
		case 4:
			/* thin hollow */
			var larr = "&#5583;";
			var rarr = "&#5580;";
			break;
		default:
			var larr = "&lt;";
			var rarr = "&gt;";
			break;
		}

	if (mobile) {
		var spacer = "&nbsp;&nbsp;";
		} else {
		var spacer = "&nbsp;";
		}

	if (delim != "") { delim = spacer + delim; }

	var pstr = "";

	if (page <= 0) {
		pstr += larr + spacer + "<a title=\"Reset and show table content in pages.\" href=\"#\" onclick=\"FlexTable_stacks_in_5392_page21_SetPage(1); return false;\"><b>&minus;</b></a>" + spacer + rarr;
		} else {
		if (page <= 1) {
			if (1 == 1) {
				pstr += "<a title=\"Select the last page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5392_page21_SetPage(" + pages + "); return false;\">" + larr + "</a>";
				} else {
				pstr += larr;
				}
			} else {
			pstr += "<a title=\"Select the previous page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5392_page21_SetPage(" + (page-1) + "); return false;\">" + larr + "</a>";
			}

		var d1flag = false;
		var d2flag = false;
		for (i=1; i<=pages; i++) {
			if (i == page) {
				if (i > 1) { pstr += delim; }
				pstr += spacer;
				pstr += "<label title=\"Page " + i + " of the table is currently selected.\"><b>" + i + "</b></label>";
				} else {
				if ((i < delta) || ((i >= (page - delta)) && (i <= (page + delta))) || (i > (pages - delta + 1))) {
					if (i > 1) { pstr += delim; }
					pstr += spacer;
					pstr += "<a title=\"Select page " + i + " of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5392_page21_SetPage(" + i + "); return false;\">" + i + "</a>";
					} else {
					if (!d1flag && (i < (page - delta))) {
						pstr += spacer;
						pstr += ddd;
						d1flag = true;
						}
					if (!d2flag && (i > (page + delta))) {
						pstr += spacer;
						pstr += ddd;
						d2flag = true;
						}
					}
				}
			}

		if (showPlus) {
			pstr += spacer + "<a title=\"Show all table content without pages.\" href=\"#\" onclick=\"FlexTable_stacks_in_5392_page21_SetPage(0); return false;\"><b>+</b></a>";
			}

		if (page >= pages) {
			if (1 == 1) {
				pstr += spacer + "<a title=\"Select the first page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5392_page21_SetPage(" + 1 + "); return false;\">" + rarr + "</a>";
				} else {
				pstr += spacer + rarr;
				}
			} else {
			pstr += spacer + "<a title=\"Select the next page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5392_page21_SetPage(" + (page+1) + "); return false;\">" + rarr + "</a>";
			}
		}

	window.FlexTable_stacks_in_5392_page21_PageNumber = page;
	pager.innerHTML = pstr;
	}

/* on dynamic screen width change call this responsive procedure */
function FlexTable_stacks_in_5392_page21_Resp() {

	var mobile = FlexTable_stacks_in_5392_page21_isMobile();
	if ((0 != 1) || (0 != 1)) {
		FlexTable_stacks_in_5392_page21_Search(false);
		} else {
		if (mobile) {
			if (1 == 1) {
				FlexTable_stacks_in_5392_page21_Search(false);
				} else {
				FlexTable_stacks_in_5392_page21_Search(true);
				}
			} else {
			FlexTable_stacks_in_5392_page21_Search(true);
			}
		}

	if ("hscroll" == "record") {
		if (mobile) {
			FlexTable_stacks_in_5392_page21_Pager(true);
			FlexTable_stacks_in_5392_page21_GoRotated(true);
			} else {
			if (0 != 1) {
				FlexTable_stacks_in_5392_page21_Pager(false);
				} else {
				FlexTable_stacks_in_5392_page21_Pager(true);
				}
			FlexTable_stacks_in_5392_page21_GoRotated(false);
			}
		} else {
		if (0 == 1) {
			FlexTable_stacks_in_5392_page21_Pager(true);
			FlexTable_stacks_in_5392_page21_MakePager(window.FlexTable_stacks_in_5392_page21_PageNumber);
			FlexTable_stacks_in_5392_page21_SetPage(window.FlexTable_stacks_in_5392_page21_PageNumber);
			} else {
			FlexTable_stacks_in_5392_page21_Pager(false);
			}
		}
	}

function FlexTable_stacks_in_5392_page21_Init() {
	if (0 == 1) {
		FlexTable_stacks_in_5392_page21_Reverse();
		}
	if (0 == 1) {
		FlexTable_stacks_in_5392_page21_Pager(true);
		if (0 == 1) {
			FlexTable_stacks_in_5392_page21_Search(true);
			} else {
			FlexTable_stacks_in_5392_page21_Search(false);
			}
		} else {
		FlexTable_stacks_in_5392_page21_Pager(false);
		FlexTable_stacks_in_5392_page21_Search(false);
		}
	FlexTable_stacks_in_5392_page21_Resp();
	}

/* form search field onfocus function */
function FlexTable_stacks_in_5392_page21_Event(field,event) {

	if ((event == 'onfocus') || (event == 'onclick')) {
		if (field.value == 'Search') {
			field.value = '';
			FlexTable_stacks_in_5392_page21_ButtonEnable(false);
			} else {
			FlexTable_stacks_in_5392_page21_ButtonEnable(true);
			}
		}
	if ((event == 'onblur') || (event == 'onchange')) {
		if (field.value == '') {
			FlexTable_stacks_in_5392_page21_Reset(field,false);
			} else {
			FlexTable_stacks_in_5392_page21_ButtonEnable(true);
			}
		}
	if (event == 'incremental') {
		if (field.value.length > 1) {
			FlexTable_stacks_in_5392_page21_ButtonEnable(true);
			FlexTable_stacks_in_5392_page21_RunSearch();
			}
		}
	if (event == 'onsearch') {
		FlexTable_stacks_in_5392_page21_Reset(field,true);
		}

	return false;
	}

/* reset the table on the onsearch event or other */
function FlexTable_stacks_in_5392_page21_ButtonEnable(enable) {
	var button = document.getElementById('FlexTableSearch_button_stacks_in_5392_page21');
	if (!button) return;
	button.disabled = !enable;
	return;
	}

/* reset the table on the onsearch event or other */
function FlexTable_stacks_in_5392_page21_Reset(field,doclick) {

	field.value = 'Search';
	FlexTable_stacks_in_5392_page21_ButtonEnable(false);
	if (doclick) { field.click(); }

	var pager = document.getElementById('FlexTablePager_stacks_in_5392_page21');
	if (!pager) return;
	if (pager.style.display == 'none') {
		FlexTable_stacks_in_5392_page21_Pager(true);
		FlexTable_stacks_in_5392_page21_SetPage(1);
		}

	return false;
	}

/* run the load function and setup responsive for resizing */

stacks.jQuery(document).ready(function() { FlexTable_stacks_in_5392_page21_Init(); });
stacks.jQuery(window).resize(function() { FlexTable_stacks_in_5392_page21_Resp(); });

/* FlexTable javascript, Bryn Owen Design, 2014+ */

window.FlexTable_stacks_in_5394_page21_PageNumber = 1;

function FlexTable_stacks_in_5394_page21_isMobile() {
	if (document.body.clientWidth > 600) {
		return(false);
		} else {
		return(true);
		}
	}

function FlexTable_stacks_in_5394_page21_GoRotated(on) {

	var table = document.getElementById('FlexTable_stacks_in_5394_page21');
	var rtable = document.getElementById('FlexTableRot_stacks_in_5394_page21');
	if (!rtable) { return; }
	if (on) {
		table.style.display = "none";
		rtable.style.display = "table";
		FlexTable_stacks_in_5394_page21_SetRotHeader();
		} else {
		table.style.display = "table";
		rtable.style.display = "none";
		}
	FlexTable_stacks_in_5394_page21_MakePager(window.FlexTable_stacks_in_5394_page21_PageNumber);
	FlexTable_stacks_in_5394_page21_SetPage(window.FlexTable_stacks_in_5394_page21_PageNumber);
	}

function FlexTable_stacks_in_5394_page21_AllRows(on) {

	var table = document.getElementById('FlexTable_stacks_in_5394_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}
	if (on) {
		var disp = "table-row";
		} else {
		var disp = "none";
		}
	for (i=rstart; i<rows.length; i++) {
	    rows[i].style.display = disp;
		}
	}

/* build rotated table column 1 from first row of main table */
function FlexTable_stacks_in_5394_page21_SetRotHeader() {

	if (0 != 1) { return; }

	var table = document.getElementById('FlexTable_stacks_in_5394_page21');
	var rtable = document.getElementById('FlexTableRot_stacks_in_5394_page21');
	if (!table || !rtable) { return; }

	for (i=0; i<table.rows[0].cells.length; i++) {
		rtable.rows[i].cells[0].innerHTML = table.rows[0].cells[i].innerHTML;
		}
	}

function FlexTable_stacks_in_5394_page21_RunSearch() {

	var table = document.getElementById('FlexTable_stacks_in_5394_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	var dispOn = "table-row";
	var dispOff = "none";

	var searchtext = document.getElementById('FlexTableSearch_search_stacks_in_5394_page21').value.toLowerCase();

	for (i=rstart; i<rows.length; i++) {
		rows[i].style.display = dispOff;
		for (j=0; j<rows[i].cells.length; j++) {
			ctext = rows[i].cells[j].textContent.toLowerCase();
			if (ctext.indexOf(searchtext) != -1) {
				rows[i].style.display = dispOn;
				break;
				}
			}
		}

	if (false) {
		/* old way uses - link to Reset */
		FlexTable_stacks_in_5394_page21_MakePager(0);
		FlexTable_stacks_in_5394_page21_Pager(true);
		} else {
		/* new way depends on Search tab */
		window.FlexTable_stacks_in_5394_page21_PageNumber = 1;
		FlexTable_stacks_in_5394_page21_Pager(false);
		}
	}

function FlexTable_stacks_in_5394_page21_Pager(on) {

	var table = document.getElementById('FlexTable_stacks_in_5394_page21');
	if (!table) return;

	var rows = table.rows;
	if (0 == 1) {
		var rstart = 1;
		} else {
		var rstart = 0;
		}

	var rpp = FlexTable_stacks_in_5394_page21_RPP()

	if (rpp >= (rows.length - rstart)) {
		var needed = false;
		} else {
		var needed = true;
		}

	var pager = document.getElementById('FlexTablePager_stacks_in_5394_page21');
	if ((on && needed) || (window.FlexTable_stacks_in_5394_page21_PageNumber <= 0)) {
		var disp = "inline-block";
		} else {
		var disp = "none";
		}

	if (pager) {
		pager.style.display = disp;
		}
	}

function FlexTable_stacks_in_5394_page21_Search(on) {

	var search = document.getElementById('FlexTableSearch_stacks_in_5394_page21');
	if (on) {
		var disp = "inline-block";
		} else {
		var disp = "none";
		}
	if (search) {
		search.style.display = disp;
		}
	}

/* return the number of rows per page depending on mobile */
function FlexTable_stacks_in_5394_page21_RPP() {
	var mobile = FlexTable_stacks_in_5394_page21_isMobile();
	if (mobile) {
		if ("hscroll" == "record") { return(1); }
		return(4);
		}
	return(10);
	}

/* reverse row order */
function FlexTable_stacks_in_5394_page21_Reverse() {

	var table = document.getElementById('FlexTable_stacks_in_5394_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}
	for (i=rstart; i<rows.length; i++) {
	    rows[i].parentNode.insertBefore(rows[rows.length-1], rows[i]);
		}
	}

function FlexTable_stacks_in_5394_page21_SetPage(page) {

	var table = document.getElementById('FlexTable_stacks_in_5394_page21');

	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	if (table.style.display != "none") {

		/* normal table */
		var dispOn = "table-row";
		var dispOff = "none";
		var rpp = FlexTable_stacks_in_5394_page21_RPP();

		if ((0 == 1) && (rpp > 0) && (page > 0)) {
			var pages = Math.ceil((rows.length - rstart)/rpp);
			if (page > pages) { page = pages; }
			var dstart = rstart + (page - 1)*rpp;
			var dstop = dstart + rpp - 1;
			} else {
			var pages = 1;
			var dstart = rstart;
			var dstop = rows.length;
			}

		for (i=rstart; i<rows.length; i++) {
			if ((i >= dstart) && (i <= dstop)) {
				rows[i].style.display = dispOn;
				} else {
				rows[i].style.display = dispOff;
				}
			}

		} else {

		/* rotated table */

		var rtable = document.getElementById('FlexTableRot_stacks_in_5394_page21');
		if (!rtable) { return; }
		if (page > (rows - rstart)) { page = rows - rstart; }
		var rowNum = page + rstart - 1;
		for (i=0; i<table.rows[rowNum].cells.length; i++) {
			text = table.rows[rowNum].cells[i].innerHTML;
			rtable.rows[i].cells[rstart].innerHTML = text;
			}

		}

	window.FlexTable_stacks_in_5394_page21_PageNumber = page;
	FlexTable_stacks_in_5394_page21_MakePager(page);
	}

/* if page is zero show all, otherwise 1..N */
function FlexTable_stacks_in_5394_page21_MakePager(page) {

	var table = document.getElementById('FlexTable_stacks_in_5394_page21');
	if (!table) return;

	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	var rpp = FlexTable_stacks_in_5394_page21_RPP();
	if (table.style.display != "none") {
		if ((0 == 1) && (rpp > 0)) {
			var pages = Math.ceil((rows.length - rstart)/rpp);
			} else {
			var pages = 1;
			}
		var showPlus = true;
		} else {
		var rtable = document.getElementById('FlexTableRot_stacks_in_5394_page21');
		if (!rtable) return;
		var pages = rows.length - rstart;
		var showPlus = false;
		}

	var pager = document.getElementById('FlexTablePager_stacks_in_5394_page21');
	if (!pager) return;

	var ddd = " &middot;&middot;&middot; ";

	/* remove entries keeping only +/-delta = 2 around the selected page, */
	/* and (delta-1) = 1 at the beginning and end */
	/* 1 ... 3 4 _5_ 6 7 ... 10 */
	if ("2" == "all") {
		var delta = pages;
		} else {
		if ("2" == "none") {
			var delta = 0;
			ddd = "";
			} else {
			var delta = 2;
			if (pages <= 3*delta) { delta = pages; }
			}
		}

	var mobile = FlexTable_stacks_in_5394_page21_isMobile();

	var delim = "";
	switch (1) {
		case 1:
			/* large triangles */
			var larr = "&#9668;";
			var rarr = "&#9658;";
			break;
		case 2:
			/* blue doubles */
			var larr = "&#9194;";
			var rarr = "&#9193;";
			break;
		case 3:
			/* thick lt/gt */
			var larr = "&#10094;";
			var rarr = "&#10095;";
			break;
		case 4:
			/* thin hollow */
			var larr = "&#5583;";
			var rarr = "&#5580;";
			break;
		default:
			var larr = "&lt;";
			var rarr = "&gt;";
			break;
		}

	if (mobile) {
		var spacer = "&nbsp;&nbsp;";
		} else {
		var spacer = "&nbsp;";
		}

	if (delim != "") { delim = spacer + delim; }

	var pstr = "";

	if (page <= 0) {
		pstr += larr + spacer + "<a title=\"Reset and show table content in pages.\" href=\"#\" onclick=\"FlexTable_stacks_in_5394_page21_SetPage(1); return false;\"><b>&minus;</b></a>" + spacer + rarr;
		} else {
		if (page <= 1) {
			if (1 == 1) {
				pstr += "<a title=\"Select the last page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5394_page21_SetPage(" + pages + "); return false;\">" + larr + "</a>";
				} else {
				pstr += larr;
				}
			} else {
			pstr += "<a title=\"Select the previous page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5394_page21_SetPage(" + (page-1) + "); return false;\">" + larr + "</a>";
			}

		var d1flag = false;
		var d2flag = false;
		for (i=1; i<=pages; i++) {
			if (i == page) {
				if (i > 1) { pstr += delim; }
				pstr += spacer;
				pstr += "<label title=\"Page " + i + " of the table is currently selected.\"><b>" + i + "</b></label>";
				} else {
				if ((i < delta) || ((i >= (page - delta)) && (i <= (page + delta))) || (i > (pages - delta + 1))) {
					if (i > 1) { pstr += delim; }
					pstr += spacer;
					pstr += "<a title=\"Select page " + i + " of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5394_page21_SetPage(" + i + "); return false;\">" + i + "</a>";
					} else {
					if (!d1flag && (i < (page - delta))) {
						pstr += spacer;
						pstr += ddd;
						d1flag = true;
						}
					if (!d2flag && (i > (page + delta))) {
						pstr += spacer;
						pstr += ddd;
						d2flag = true;
						}
					}
				}
			}

		if (showPlus) {
			pstr += spacer + "<a title=\"Show all table content without pages.\" href=\"#\" onclick=\"FlexTable_stacks_in_5394_page21_SetPage(0); return false;\"><b>+</b></a>";
			}

		if (page >= pages) {
			if (1 == 1) {
				pstr += spacer + "<a title=\"Select the first page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5394_page21_SetPage(" + 1 + "); return false;\">" + rarr + "</a>";
				} else {
				pstr += spacer + rarr;
				}
			} else {
			pstr += spacer + "<a title=\"Select the next page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5394_page21_SetPage(" + (page+1) + "); return false;\">" + rarr + "</a>";
			}
		}

	window.FlexTable_stacks_in_5394_page21_PageNumber = page;
	pager.innerHTML = pstr;
	}

/* on dynamic screen width change call this responsive procedure */
function FlexTable_stacks_in_5394_page21_Resp() {

	var mobile = FlexTable_stacks_in_5394_page21_isMobile();
	if ((0 != 1) || (0 != 1)) {
		FlexTable_stacks_in_5394_page21_Search(false);
		} else {
		if (mobile) {
			if (1 == 1) {
				FlexTable_stacks_in_5394_page21_Search(false);
				} else {
				FlexTable_stacks_in_5394_page21_Search(true);
				}
			} else {
			FlexTable_stacks_in_5394_page21_Search(true);
			}
		}

	if ("hscroll" == "record") {
		if (mobile) {
			FlexTable_stacks_in_5394_page21_Pager(true);
			FlexTable_stacks_in_5394_page21_GoRotated(true);
			} else {
			if (0 != 1) {
				FlexTable_stacks_in_5394_page21_Pager(false);
				} else {
				FlexTable_stacks_in_5394_page21_Pager(true);
				}
			FlexTable_stacks_in_5394_page21_GoRotated(false);
			}
		} else {
		if (0 == 1) {
			FlexTable_stacks_in_5394_page21_Pager(true);
			FlexTable_stacks_in_5394_page21_MakePager(window.FlexTable_stacks_in_5394_page21_PageNumber);
			FlexTable_stacks_in_5394_page21_SetPage(window.FlexTable_stacks_in_5394_page21_PageNumber);
			} else {
			FlexTable_stacks_in_5394_page21_Pager(false);
			}
		}
	}

function FlexTable_stacks_in_5394_page21_Init() {
	if (0 == 1) {
		FlexTable_stacks_in_5394_page21_Reverse();
		}
	if (0 == 1) {
		FlexTable_stacks_in_5394_page21_Pager(true);
		if (0 == 1) {
			FlexTable_stacks_in_5394_page21_Search(true);
			} else {
			FlexTable_stacks_in_5394_page21_Search(false);
			}
		} else {
		FlexTable_stacks_in_5394_page21_Pager(false);
		FlexTable_stacks_in_5394_page21_Search(false);
		}
	FlexTable_stacks_in_5394_page21_Resp();
	}

/* form search field onfocus function */
function FlexTable_stacks_in_5394_page21_Event(field,event) {

	if ((event == 'onfocus') || (event == 'onclick')) {
		if (field.value == 'Search') {
			field.value = '';
			FlexTable_stacks_in_5394_page21_ButtonEnable(false);
			} else {
			FlexTable_stacks_in_5394_page21_ButtonEnable(true);
			}
		}
	if ((event == 'onblur') || (event == 'onchange')) {
		if (field.value == '') {
			FlexTable_stacks_in_5394_page21_Reset(field,false);
			} else {
			FlexTable_stacks_in_5394_page21_ButtonEnable(true);
			}
		}
	if (event == 'incremental') {
		if (field.value.length > 1) {
			FlexTable_stacks_in_5394_page21_ButtonEnable(true);
			FlexTable_stacks_in_5394_page21_RunSearch();
			}
		}
	if (event == 'onsearch') {
		FlexTable_stacks_in_5394_page21_Reset(field,true);
		}

	return false;
	}

/* reset the table on the onsearch event or other */
function FlexTable_stacks_in_5394_page21_ButtonEnable(enable) {
	var button = document.getElementById('FlexTableSearch_button_stacks_in_5394_page21');
	if (!button) return;
	button.disabled = !enable;
	return;
	}

/* reset the table on the onsearch event or other */
function FlexTable_stacks_in_5394_page21_Reset(field,doclick) {

	field.value = 'Search';
	FlexTable_stacks_in_5394_page21_ButtonEnable(false);
	if (doclick) { field.click(); }

	var pager = document.getElementById('FlexTablePager_stacks_in_5394_page21');
	if (!pager) return;
	if (pager.style.display == 'none') {
		FlexTable_stacks_in_5394_page21_Pager(true);
		FlexTable_stacks_in_5394_page21_SetPage(1);
		}

	return false;
	}

/* run the load function and setup responsive for resizing */

stacks.jQuery(document).ready(function() { FlexTable_stacks_in_5394_page21_Init(); });
stacks.jQuery(window).resize(function() { FlexTable_stacks_in_5394_page21_Resp(); });

/* FlexTable javascript, Bryn Owen Design, 2014+ */

window.FlexTable_stacks_in_5632_page21_PageNumber = 1;

function FlexTable_stacks_in_5632_page21_isMobile() {
	if (document.body.clientWidth > 600) {
		return(false);
		} else {
		return(true);
		}
	}

function FlexTable_stacks_in_5632_page21_GoRotated(on) {

	var table = document.getElementById('FlexTable_stacks_in_5632_page21');
	var rtable = document.getElementById('FlexTableRot_stacks_in_5632_page21');
	if (!rtable) { return; }
	if (on) {
		table.style.display = "none";
		rtable.style.display = "table";
		FlexTable_stacks_in_5632_page21_SetRotHeader();
		} else {
		table.style.display = "table";
		rtable.style.display = "none";
		}
	FlexTable_stacks_in_5632_page21_MakePager(window.FlexTable_stacks_in_5632_page21_PageNumber);
	FlexTable_stacks_in_5632_page21_SetPage(window.FlexTable_stacks_in_5632_page21_PageNumber);
	}

function FlexTable_stacks_in_5632_page21_AllRows(on) {

	var table = document.getElementById('FlexTable_stacks_in_5632_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}
	if (on) {
		var disp = "table-row";
		} else {
		var disp = "none";
		}
	for (i=rstart; i<rows.length; i++) {
	    rows[i].style.display = disp;
		}
	}

/* build rotated table column 1 from first row of main table */
function FlexTable_stacks_in_5632_page21_SetRotHeader() {

	if (0 != 1) { return; }

	var table = document.getElementById('FlexTable_stacks_in_5632_page21');
	var rtable = document.getElementById('FlexTableRot_stacks_in_5632_page21');
	if (!table || !rtable) { return; }

	for (i=0; i<table.rows[0].cells.length; i++) {
		rtable.rows[i].cells[0].innerHTML = table.rows[0].cells[i].innerHTML;
		}
	}

function FlexTable_stacks_in_5632_page21_RunSearch() {

	var table = document.getElementById('FlexTable_stacks_in_5632_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	var dispOn = "table-row";
	var dispOff = "none";

	var searchtext = document.getElementById('FlexTableSearch_search_stacks_in_5632_page21').value.toLowerCase();

	for (i=rstart; i<rows.length; i++) {
		rows[i].style.display = dispOff;
		for (j=0; j<rows[i].cells.length; j++) {
			ctext = rows[i].cells[j].textContent.toLowerCase();
			if (ctext.indexOf(searchtext) != -1) {
				rows[i].style.display = dispOn;
				break;
				}
			}
		}

	if (false) {
		/* old way uses - link to Reset */
		FlexTable_stacks_in_5632_page21_MakePager(0);
		FlexTable_stacks_in_5632_page21_Pager(true);
		} else {
		/* new way depends on Search tab */
		window.FlexTable_stacks_in_5632_page21_PageNumber = 1;
		FlexTable_stacks_in_5632_page21_Pager(false);
		}
	}

function FlexTable_stacks_in_5632_page21_Pager(on) {

	var table = document.getElementById('FlexTable_stacks_in_5632_page21');
	if (!table) return;

	var rows = table.rows;
	if (0 == 1) {
		var rstart = 1;
		} else {
		var rstart = 0;
		}

	var rpp = FlexTable_stacks_in_5632_page21_RPP()

	if (rpp >= (rows.length - rstart)) {
		var needed = false;
		} else {
		var needed = true;
		}

	var pager = document.getElementById('FlexTablePager_stacks_in_5632_page21');
	if ((on && needed) || (window.FlexTable_stacks_in_5632_page21_PageNumber <= 0)) {
		var disp = "inline-block";
		} else {
		var disp = "none";
		}

	if (pager) {
		pager.style.display = disp;
		}
	}

function FlexTable_stacks_in_5632_page21_Search(on) {

	var search = document.getElementById('FlexTableSearch_stacks_in_5632_page21');
	if (on) {
		var disp = "inline-block";
		} else {
		var disp = "none";
		}
	if (search) {
		search.style.display = disp;
		}
	}

/* return the number of rows per page depending on mobile */
function FlexTable_stacks_in_5632_page21_RPP() {
	var mobile = FlexTable_stacks_in_5632_page21_isMobile();
	if (mobile) {
		if ("hscroll" == "record") { return(1); }
		return(4);
		}
	return(10);
	}

/* reverse row order */
function FlexTable_stacks_in_5632_page21_Reverse() {

	var table = document.getElementById('FlexTable_stacks_in_5632_page21');
	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}
	for (i=rstart; i<rows.length; i++) {
	    rows[i].parentNode.insertBefore(rows[rows.length-1], rows[i]);
		}
	}

function FlexTable_stacks_in_5632_page21_SetPage(page) {

	var table = document.getElementById('FlexTable_stacks_in_5632_page21');

	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	if (table.style.display != "none") {

		/* normal table */
		var dispOn = "table-row";
		var dispOff = "none";
		var rpp = FlexTable_stacks_in_5632_page21_RPP();

		if ((0 == 1) && (rpp > 0) && (page > 0)) {
			var pages = Math.ceil((rows.length - rstart)/rpp);
			if (page > pages) { page = pages; }
			var dstart = rstart + (page - 1)*rpp;
			var dstop = dstart + rpp - 1;
			} else {
			var pages = 1;
			var dstart = rstart;
			var dstop = rows.length;
			}

		for (i=rstart; i<rows.length; i++) {
			if ((i >= dstart) && (i <= dstop)) {
				rows[i].style.display = dispOn;
				} else {
				rows[i].style.display = dispOff;
				}
			}

		} else {

		/* rotated table */

		var rtable = document.getElementById('FlexTableRot_stacks_in_5632_page21');
		if (!rtable) { return; }
		if (page > (rows - rstart)) { page = rows - rstart; }
		var rowNum = page + rstart - 1;
		for (i=0; i<table.rows[rowNum].cells.length; i++) {
			text = table.rows[rowNum].cells[i].innerHTML;
			rtable.rows[i].cells[rstart].innerHTML = text;
			}

		}

	window.FlexTable_stacks_in_5632_page21_PageNumber = page;
	FlexTable_stacks_in_5632_page21_MakePager(page);
	}

/* if page is zero show all, otherwise 1..N */
function FlexTable_stacks_in_5632_page21_MakePager(page) {

	var table = document.getElementById('FlexTable_stacks_in_5632_page21');
	if (!table) return;

	var rows = table.rows;
	if (0 == 1) {
		rstart = 1;
		} else {
		rstart = 0;
		}

	var rpp = FlexTable_stacks_in_5632_page21_RPP();
	if (table.style.display != "none") {
		if ((0 == 1) && (rpp > 0)) {
			var pages = Math.ceil((rows.length - rstart)/rpp);
			} else {
			var pages = 1;
			}
		var showPlus = true;
		} else {
		var rtable = document.getElementById('FlexTableRot_stacks_in_5632_page21');
		if (!rtable) return;
		var pages = rows.length - rstart;
		var showPlus = false;
		}

	var pager = document.getElementById('FlexTablePager_stacks_in_5632_page21');
	if (!pager) return;

	var ddd = " &middot;&middot;&middot; ";

	/* remove entries keeping only +/-delta = 2 around the selected page, */
	/* and (delta-1) = 1 at the beginning and end */
	/* 1 ... 3 4 _5_ 6 7 ... 10 */
	if ("2" == "all") {
		var delta = pages;
		} else {
		if ("2" == "none") {
			var delta = 0;
			ddd = "";
			} else {
			var delta = 2;
			if (pages <= 3*delta) { delta = pages; }
			}
		}

	var mobile = FlexTable_stacks_in_5632_page21_isMobile();

	var delim = "";
	switch (1) {
		case 1:
			/* large triangles */
			var larr = "&#9668;";
			var rarr = "&#9658;";
			break;
		case 2:
			/* blue doubles */
			var larr = "&#9194;";
			var rarr = "&#9193;";
			break;
		case 3:
			/* thick lt/gt */
			var larr = "&#10094;";
			var rarr = "&#10095;";
			break;
		case 4:
			/* thin hollow */
			var larr = "&#5583;";
			var rarr = "&#5580;";
			break;
		default:
			var larr = "&lt;";
			var rarr = "&gt;";
			break;
		}

	if (mobile) {
		var spacer = "&nbsp;&nbsp;";
		} else {
		var spacer = "&nbsp;";
		}

	if (delim != "") { delim = spacer + delim; }

	var pstr = "";

	if (page <= 0) {
		pstr += larr + spacer + "<a title=\"Reset and show table content in pages.\" href=\"#\" onclick=\"FlexTable_stacks_in_5632_page21_SetPage(1); return false;\"><b>&minus;</b></a>" + spacer + rarr;
		} else {
		if (page <= 1) {
			if (1 == 1) {
				pstr += "<a title=\"Select the last page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5632_page21_SetPage(" + pages + "); return false;\">" + larr + "</a>";
				} else {
				pstr += larr;
				}
			} else {
			pstr += "<a title=\"Select the previous page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5632_page21_SetPage(" + (page-1) + "); return false;\">" + larr + "</a>";
			}

		var d1flag = false;
		var d2flag = false;
		for (i=1; i<=pages; i++) {
			if (i == page) {
				if (i > 1) { pstr += delim; }
				pstr += spacer;
				pstr += "<label title=\"Page " + i + " of the table is currently selected.\"><b>" + i + "</b></label>";
				} else {
				if ((i < delta) || ((i >= (page - delta)) && (i <= (page + delta))) || (i > (pages - delta + 1))) {
					if (i > 1) { pstr += delim; }
					pstr += spacer;
					pstr += "<a title=\"Select page " + i + " of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5632_page21_SetPage(" + i + "); return false;\">" + i + "</a>";
					} else {
					if (!d1flag && (i < (page - delta))) {
						pstr += spacer;
						pstr += ddd;
						d1flag = true;
						}
					if (!d2flag && (i > (page + delta))) {
						pstr += spacer;
						pstr += ddd;
						d2flag = true;
						}
					}
				}
			}

		if (showPlus) {
			pstr += spacer + "<a title=\"Show all table content without pages.\" href=\"#\" onclick=\"FlexTable_stacks_in_5632_page21_SetPage(0); return false;\"><b>+</b></a>";
			}

		if (page >= pages) {
			if (1 == 1) {
				pstr += spacer + "<a title=\"Select the first page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5632_page21_SetPage(" + 1 + "); return false;\">" + rarr + "</a>";
				} else {
				pstr += spacer + rarr;
				}
			} else {
			pstr += spacer + "<a title=\"Select the next page of the table.\" href=\"#\" onclick=\"FlexTable_stacks_in_5632_page21_SetPage(" + (page+1) + "); return false;\">" + rarr + "</a>";
			}
		}

	window.FlexTable_stacks_in_5632_page21_PageNumber = page;
	pager.innerHTML = pstr;
	}

/* on dynamic screen width change call this responsive procedure */
function FlexTable_stacks_in_5632_page21_Resp() {

	var mobile = FlexTable_stacks_in_5632_page21_isMobile();
	if ((0 != 1) || (0 != 1)) {
		FlexTable_stacks_in_5632_page21_Search(false);
		} else {
		if (mobile) {
			if (1 == 1) {
				FlexTable_stacks_in_5632_page21_Search(false);
				} else {
				FlexTable_stacks_in_5632_page21_Search(true);
				}
			} else {
			FlexTable_stacks_in_5632_page21_Search(true);
			}
		}

	if ("hscroll" == "record") {
		if (mobile) {
			FlexTable_stacks_in_5632_page21_Pager(true);
			FlexTable_stacks_in_5632_page21_GoRotated(true);
			} else {
			if (0 != 1) {
				FlexTable_stacks_in_5632_page21_Pager(false);
				} else {
				FlexTable_stacks_in_5632_page21_Pager(true);
				}
			FlexTable_stacks_in_5632_page21_GoRotated(false);
			}
		} else {
		if (0 == 1) {
			FlexTable_stacks_in_5632_page21_Pager(true);
			FlexTable_stacks_in_5632_page21_MakePager(window.FlexTable_stacks_in_5632_page21_PageNumber);
			FlexTable_stacks_in_5632_page21_SetPage(window.FlexTable_stacks_in_5632_page21_PageNumber);
			} else {
			FlexTable_stacks_in_5632_page21_Pager(false);
			}
		}
	}

function FlexTable_stacks_in_5632_page21_Init() {
	if (0 == 1) {
		FlexTable_stacks_in_5632_page21_Reverse();
		}
	if (0 == 1) {
		FlexTable_stacks_in_5632_page21_Pager(true);
		if (0 == 1) {
			FlexTable_stacks_in_5632_page21_Search(true);
			} else {
			FlexTable_stacks_in_5632_page21_Search(false);
			}
		} else {
		FlexTable_stacks_in_5632_page21_Pager(false);
		FlexTable_stacks_in_5632_page21_Search(false);
		}
	FlexTable_stacks_in_5632_page21_Resp();
	}

/* form search field onfocus function */
function FlexTable_stacks_in_5632_page21_Event(field,event) {

	if ((event == 'onfocus') || (event == 'onclick')) {
		if (field.value == 'Search') {
			field.value = '';
			FlexTable_stacks_in_5632_page21_ButtonEnable(false);
			} else {
			FlexTable_stacks_in_5632_page21_ButtonEnable(true);
			}
		}
	if ((event == 'onblur') || (event == 'onchange')) {
		if (field.value == '') {
			FlexTable_stacks_in_5632_page21_Reset(field,false);
			} else {
			FlexTable_stacks_in_5632_page21_ButtonEnable(true);
			}
		}
	if (event == 'incremental') {
		if (field.value.length > 1) {
			FlexTable_stacks_in_5632_page21_ButtonEnable(true);
			FlexTable_stacks_in_5632_page21_RunSearch();
			}
		}
	if (event == 'onsearch') {
		FlexTable_stacks_in_5632_page21_Reset(field,true);
		}

	return false;
	}

/* reset the table on the onsearch event or other */
function FlexTable_stacks_in_5632_page21_ButtonEnable(enable) {
	var button = document.getElementById('FlexTableSearch_button_stacks_in_5632_page21');
	if (!button) return;
	button.disabled = !enable;
	return;
	}

/* reset the table on the onsearch event or other */
function FlexTable_stacks_in_5632_page21_Reset(field,doclick) {

	field.value = 'Search';
	FlexTable_stacks_in_5632_page21_ButtonEnable(false);
	if (doclick) { field.click(); }

	var pager = document.getElementById('FlexTablePager_stacks_in_5632_page21');
	if (!pager) return;
	if (pager.style.display == 'none') {
		FlexTable_stacks_in_5632_page21_Pager(true);
		FlexTable_stacks_in_5632_page21_SetPage(1);
		}

	return false;
	}

/* run the load function and setup responsive for resizing */

stacks.jQuery(document).ready(function() { FlexTable_stacks_in_5632_page21_Init(); });
stacks.jQuery(window).resize(function() { FlexTable_stacks_in_5632_page21_Resp(); });

