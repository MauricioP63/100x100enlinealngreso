function Expira()
	{
		var strTitulo = "Inactividad"
		var iAncho = 300
		var iAlto = 300
		//var jj
		//No tocar para que quede centrado
		var iArriba = (screen.height/2) - (iAncho/2)
		var iIzquierda = (screen.width/2) - (iAlto/2)
		//	jj = window.history.current;
		//	jj = 0 - jj;
	//		window.history.go(jj);
			
			parent.location.href = "logout.aspx";
			

		return ""
	}
function numbersOnly(field,event)
{
 var key,keychar;
 if (window.event)
  key = window.event.keyCode;
 else if (event)
  key = event.which;
 else
  return true;
 keychar = String.fromCharCode(key);

 if ((key==null) || (key==0) || (key==8) ||
     (key==9) || (key==13) || (key==27) )
    return true;
 else if ((("0123456789.").indexOf(keychar)>-1))
    {
     window.status="";
     return true;
    }
 else
    {
     window.status="Este campo solo acepta numeros";
     return false;
    }
}

function numbersOnly2(field,event)
{
 var key,keychar;
 if (window.event)
  key = window.event.keyCode;
 else if (event)
  key = event.which;
 else
  return true;
 keychar = String.fromCharCode(key);

 if ((key==null) || (key==0) || (key==8) ||
     (key==9) || (key==13) || (key==27) )
    return true;
 else if ((("0123456789").indexOf(keychar)>-1))
    {
     window.status="";
     return true;
    }
 else
    {
     window.status="Este campo solo acepta numeros";
     return false;
    }
}

function rannumeros0()
{
var o0,o1,o2,o3,o4,o5,o6,o7,o8;
var random=Math.round(Math.random()*9);

document.forms[0].pb1.value=random;
document.forms[0].uno.value=random;
o1=random;

random=Math.round(Math.random()*9);
while (random==o1)
{
random=Math.round(Math.random()*9);
}
document.forms[0].pb2.value=random;
document.forms[0].dos.value=random;
o2=random;


random=Math.round(Math.random()*9);
while ((random==o1)||(random==o2))
{
random=Math.round(Math.random()*9);
}
document.forms[0].pb3.value=random;
document.forms[0].tres.value=random;
o3=random;


random=Math.round(Math.random()*9);
while ((random==o1)||(random==o2)||(random==o3))
{
random=Math.round(Math.random()*9);
}
document.forms[0].pb4.value=random;
document.forms[0].cuatro.value=random;
o4=random;


random=Math.round(Math.random()*9);
while ((random==o1)||(random==o2)||(random==o3)||(random==o4))
{
random=Math.round(Math.random()*9);
}
document.forms[0].pb5.value=random;
document.forms[0].cinco.value=random;
o5=random;

random=Math.round(Math.random()*9);
while ((random==o1)||(random==o2)||(random==o3)||(random==o4)||(random==o5))
{
random=Math.round(Math.random()*9);
}
document.forms[0].pb6.value=random;
document.forms[0].seis.value=random;
o6=random;

random=Math.round(Math.random()*9);
while ((random==o1)||(random==o2)||(random==o3)||(random==o4)||(random==o5)||(random==o6))
{
random=Math.round(Math.random()*9);
}
document.forms[0].pb7.value=random;
document.forms[0].siete.value=random;
o7=random;

random=Math.round(Math.random()*9);
while ((random==o1)||(random==o2)||(random==o3)||(random==o4)||(random==o5)||(random==o6)||(random==o7))
{
random=Math.round(Math.random()*9);
}
document.forms[0].pb8.value=random;
document.forms[0].ocho.value=random
o8=random;

random=Math.round(Math.random()*9);
while ((random==o1)||(random==o2)||(random==o3)||(random==o4)||(random==o5)||(random==o6)||(random==o7)||(random==o8))
{
random=Math.round(Math.random()*9);
}
document.forms[0].pb9.value=random;
document.forms[0].nueve.value=random;
o9=random;

random=Math.round(Math.random()*9);
while ((random==o1)||(random==o2)||(random==o3)||(random==o4)||(random==o5)||(random==o6)||(random==o7)||(random==o8)||(random==o9))
{
random=Math.round(Math.random()*9);
}
document.forms[0].pb0.value=random;
document.forms[0].cero.value=random;


return true;
}

function rannumeros()
{
var o1,o2,o3,o4,o5,o6,o7,o8;
var random=Math.round(Math.random()*8);

document.forms[0].pb1.value=random+1;
document.forms[0].uno.value=random+1;
o1=random;

random=Math.round(Math.random()*8);
while (random==o1)
{
random=Math.round(Math.random()*8);
}
document.forms[0].pb2.value=random+1;
document.forms[0].dos.value=random+1;
o2=random;


random=Math.round(Math.random()*8);
while ((random==o1)||(random==o2))
{
random=Math.round(Math.random()*8);
}
document.forms[0].pb3.value=random+1;
document.forms[0].tres.value=random+1;
o3=random;


random=Math.round(Math.random()*8);
while ((random==o1)||(random==o2)||(random==o3))
{
random=Math.round(Math.random()*8);
}
document.forms[0].pb4.value=random+1;
document.forms[0].cuatro.value=random+1;
o4=random;


random=Math.round(Math.random()*8);
while ((random==o1)||(random==o2)||(random==o3)||(random==o4))
{
random=Math.round(Math.random()*8);
}
document.forms[0].pb5.value=random+1;
document.forms[0].cinco.value=random+1;
o5=random;

random=Math.round(Math.random()*8);
while ((random==o1)||(random==o2)||(random==o3)||(random==o4)||(random==o5))
{
random=Math.round(Math.random()*8);
}
document.forms[0].pb6.value=random+1;
document.forms[0].seis.value=random+1;
o6=random;

random=Math.round(Math.random()*8);
while ((random==o1)||(random==o2)||(random==o3)||(random==o4)||(random==o5)||(random==o6))
{
random=Math.round(Math.random()*8);
}
document.forms[0].pb7.value=random+1;
document.forms[0].siete.value=random+1;
o7=random;

random=Math.round(Math.random()*8);
while ((random==o1)||(random==o2)||(random==o3)||(random==o4)||(random==o5)||(random==o6)||(random==o7))
{
random=Math.round(Math.random()*8);
}
document.forms[0].pb8.value=random+1;
document.forms[0].ocho.value=random+1;
o8=random;

random=Math.round(Math.random()*8);
while ((random==o1)||(random==o2)||(random==o3)||(random==o4)||(random==o5)||(random==o6)||(random==o7)||(random==o8))
{
random=Math.round(Math.random()*8);
}
document.forms[0].pb9.value=random+1;
document.forms[0].nueve.value=random+1;




return true;
}
// SCC-2015-0045 | 2015-11-30 | COA
var seperator = "/";
function DateFormat(txt, keyCode, maxleng) {
    if ((keyCode >= 48 && keyCode <= 57) || keyCode == 8 ||
         keyCode <= 37 || keyCode <= 39 ||
         (keyCode >= 96 && keyCode <= 105)) {
        if ((txt.value.length == 2 || txt.value.length == 5) && keyCode != 8) {
            if (typeof maxleng != 'undefined') {
                if (txt.value.length <= maxleng) {
                    txt.value += seperator;
                }
            } else {
                txt.value += seperator;
            }
        }
        return true;
    }
    else {
        return false;
    }
}
var once_per_browser = 0

///No need to edit beyond here///

var ns4 = document.layers
var ie4 = document.all
var ns6 = document.getElementById && !document.all

if (ns4)
    crossobj = document.layers.postit
else if (ie4 || ns6)
    crossobj = ns6 ? document.getElementById("postitotp") : document.all.postit


function closeit() {
    if (ie4 || ns6)
        crossobj.style.visibility = "hidden"
    else if (ns4)
        crossobj.visibility = "hide"
}
var rannpass = [];
function dltpass(pass) {
    document.getElementById(pass).value = "";
}
function randkey() {
    var random;
    while (rannpass.length <= 9) {
        random = Math.round(Math.random() * 9);
        if (rannpass.indexOf(random) === -1) {
            rannpass.push(random);
        }
    }
    unmaskBtn();
}
function maskBtn(idn) {
    var key, btn;
    if (typeof idn === 'undefined') {
        key = document.getElementsByName("keyboard");
    } else {
        key = idn.parentNode.parentNode.parentNode;
    }
    if (typeof key.length === 'undefined') {
        btn = key.getElementsByTagName('input');
        for (a = 0; a < btn.length; a++) {
            if (btn[a].type == "button" && btn[a].name != "borrar") {
                btn[a].value = '*';
            }
        }
    } else {
        for (i = 0; i < key.length; i++) {
            btn = key[i].getElementsByTagName('input');
            for (a = 0; a < btn.length; a++) {
                if (btn[a].type == "button" && btn[a].name != "borrar") {
                    btn[a].value = '*';
                }
            }
        }
    }
}
function unmaskBtn(idn) {
    var btn;
    var key = new Array();
    var item = new Array();
    if (typeof idn === 'undefined') {
        item = document.getElementsByTagName("table");
        for (i = 0; i < item.length; i++) {
            if (item[i].parentNode.getAttribute('name') == "keyboard") {
                key.push(item[i]);
            }
        }
    } else {
        key = idn.parentNode.parentNode.parentNode.parentNode;
    }
    if (typeof key != 'undefined') {
        if (typeof key.length === 'undefined') {
            btn = key.getElementsByTagName('input');
            for (a = 0; a < btn.length; a++) {
                if (btn[a].type == "button" && btn[a].name != "borrar") {
                    btn[a].value = rannpass[a];
                }
            }
        } else {
            for (i = 0; i < key.length; i++) {

                btn = key[i].getElementsByTagName('input');
                for (a = 0; a < btn.length; a++) {
                    if (btn[a].type == "button" && btn[a].name != "borrar") {
                        btn[a].value = rannpass[a];
                    }
                }
            }
        }
    }
}
function setVal(idn, pass, lng) {
    var key = idn.parentNode.parentNode.parentNode;
    var btn = key.getElementsByTagName('input');
    var valtxt = document.getElementById(pass);
    var long;
    if (typeof lng === 'undefined') {
        long = 20
    } else {
        long = lng
    }
    for (a = 0; a < btn.length; a++) {
        if (typeof valtxt != 'undefined') {
            if (btn[a].id == idn.id) {
                if (idn.id.substring(0, 2) == "pa" || idn.id.substring(0, 2) == "pb" || idn.id.substring(0, 2) == "pc") {
                    if (valtxt.value.length < long) {
                        valtxt.value += rannpass[a];
                    }
                } else if (idn.id.substring(0, 2) != "pa" || idn.id.substring(0, 2) != "pb" || idn.id.substring(0, 2) != "pc") {
                    if (valtxt.value.length < long) {
                        valtxt.value += idn.value;
                    }
                }
            }
        }
    }
}
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement /*, fromIndex */) {
        'use strict';
        if (this == null) {
            throw new TypeError();
        }
        var n, k, t = Object(this),
        len = t.length >>> 0;

        if (len === 0) {
            return -1;
        }
        n = 0;
        if (arguments.length > 1) {
            n = Number(arguments[1]);
            if (n != n) { // shortcut for verifying if it's NaN
                n = 0;
            } else if (n != 0 && n != Infinity && n != -Infinity) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }
        if (n >= len) {
            return -1;
        }
        for (k = n >= 0 ? n : Math.max(len - Math.abs(n), 0); k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    };
}

function cleardata(dataclear) {
    var textinput = dataclear.parentNode.getElementsByTagName('input')[0];
    if (typeof textinput != 'undefined') {
        textinput.value = "";
    }
}
// SCC-2015-0045 | 2015-11-30 | COA
