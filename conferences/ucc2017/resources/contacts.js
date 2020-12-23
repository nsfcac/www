/**
 * Created by youssif on 2/26/17.
 */

function contactEmail(name)
{
    var n=name.split('ox@xo');
    window.location.href='mailto:'+n[0]+'@'+n[1];
}

function contact(elemID,imgSource, name, title, address1, address2, address3, phone, emailUser, emailDomain)
{
    var elem=document.getElementById(elemID);
    var tbl=document.createElement("table");
    tbl.setAttribute("width","330px");
    tbl.setAttribute("class","contact-card");
    tbl.setAttribute("style","border:1px solid black; margin: 5px 5px 5px 0px; padding: 5px 5px 5px 5px;");
    var trow=document.createElement("tr");
    var tcell=document.createElement("td");
    if (imgSource==="") {
        tcell.innerHTML='<img class="contactImageSource" src="" width="100px" style="padding: 5px 5px 5px 5px;">';
    }
    else
    {
        tcell.innerHTML='<img src="'+imgSource+'" width="100px" style="padding: 5px 5px 5px 5px;">';
    }

    tcell.setAttribute("rowspan","7");
    tcell.setAttribute("style","vertical-align: middle;");
    tcell.setAttribute("width","110px");
    trow.appendChild(tcell);
    tcell=document.createElement("td");
    tcell.innerHTML="&nbsp;";
    tcell.setAttribute("rowspan","7");
    tcell.setAttribute("width","1px");
    trow.appendChild(tcell);
    tcell=document.createElement("td");
    tcell.setAttribute("class","contact-name");
    tcell.innerHTML=name;
    trow.appendChild(tcell);
    tbl.appendChild(trow);

    trow=document.createElement("tr");
    tcell=document.createElement("td");
    tcell.setAttribute("class","contact-title");
    tcell.innerHTML=title;
    trow.appendChild(tcell);
    tbl.appendChild(trow);



    trow=document.createElement("tr");
    tcell=document.createElement("td");
    tcell.setAttribute("class","contact-address");
    if (address1==="") {
        tcell.innerHTML = "&nbsp;";
    }
    else
    {
        tcell.innerHTML = address1;
    }
    trow.appendChild(tcell);
    tbl.appendChild(trow);



    trow=document.createElement("tr");
    tcell=document.createElement("td");
    tcell.setAttribute("class","contact-address");
    if (address2==="") {
        tcell.innerHTML = "&nbsp;";
    }
    else
    {
        tcell.innerHTML = address2;
    }
    trow.appendChild(tcell);
    tbl.appendChild(trow);



    trow=document.createElement("tr");
    tcell=document.createElement("td");
    tcell.setAttribute("class","contact-address");
    if (address3==="") {
        tcell.innerHTML = "&nbsp;";
    }
    else
    {
        tcell.innerHTML = address3;
    }
    trow.appendChild(tcell);
    tbl.appendChild(trow);




    trow=document.createElement("tr");
    tcell=document.createElement("td");
    tcell.setAttribute("class","contact-phone");
    if (phone==="") {
        tcell.innerHTML = "&nbsp;";
    }
    else
    {
        tcell.innerHTML = '<span class="contact-phone-field">Phone:&nbsp;</span>'+phone;
    }
    trow.appendChild(tcell);
    tbl.appendChild(trow);




    trow=document.createElement("tr");
    tcell=document.createElement("td");
    tcell.setAttribute("class","contact-email");
    if (emailUser==="") {
        tcell.innerHTML = "&nbsp;";
    }
    else
    {
        tcell.innerHTML = '<span class="contact-email-field">Email:&nbsp;</span><a href="javascript:contactEmail(\''+emailUser+'ox@xo'+emailDomain+'\')">'+emailUser+" (<i>at</i>) "+emailDomain+"</a>";
    }
    trow.appendChild(tcell);
    tbl.appendChild(trow);

    elem.appendChild(tbl);
}


function contact2(elemID,imgSource, name, title, address1, address2, address3, phone, emailUser, emailDomain)
{
    var elem=document.getElementById(elemID);
    var tbl=document.createElement("table");
    tbl.setAttribute("width","350px");
    tbl.setAttribute("class","contact-card");
    tbl.setAttribute("style","border:1px solid black; margin: 5px 5px 5px 5px; padding: 5px 5px 5px 5px;");
    var trow=document.createElement("tr");
    var tcell=document.createElement("td");
    if (imgSource==="") {
        tcell.innerHTML='<img class="contactImageSource" src="" width="32px" style="padding: 5px 5px 5px 5px;">';
    }
    else
    {
        tcell.innerHTML='<img src="'+imgSource+'" width="32px" style="padding: 5px 5px 5px 5px;">';
    }

    tcell.setAttribute("rowspan","3");
    tcell.setAttribute("style","vertical-align: middle;border-bottom:1px solid black;");
    tcell.setAttribute("width","110px");
    trow.appendChild(tcell);
    tcell=document.createElement("td");
    tcell.innerHTML="&nbsp;";
    tcell.setAttribute("rowspan","7");
    tcell.setAttribute("width","1px");
    trow.appendChild(tcell);
    tcell=document.createElement("td");
    tcell.setAttribute("class","contact-name");
    tcell.innerHTML=name;
    trow.appendChild(tcell);
    tbl.appendChild(trow);


    trow=document.createElement("tr");
    tcell=document.createElement("td");
    tcell.setAttribute("class","contact-address");
    if (address2==="") {
        tcell.innerHTML = "&nbsp;";
    }
    else
    {
        tcell.innerHTML = address2;
    }
    trow.appendChild(tcell);
    tbl.appendChild(trow);



    trow=document.createElement("tr");
    tcell=document.createElement("td");
    tcell.setAttribute("class","contact-email");
    if (emailUser==="") {
        tcell.innerHTML = "&nbsp;";
    }
    else
    {
        tcell.innerHTML = '<span class="contact-email-field">Email:&nbsp;</span><a href="javascript:contactEmail(\''+emailUser+'ox@xo'+emailDomain+'\')">'+emailUser+" (<i>at</i>) "+emailDomain+"</a>";
    }
    tcell.setAttribute("style","border-bottom:1px solid black;");
    trow.appendChild(tcell);
    tbl.appendChild(trow);

    elem.appendChild(tbl);
    //elem.appendChild(document.createElement("br"));
}
