// My Library
// dfb



/* to run a function called setUpPage() when page finishes loading
*  addEvent(window, "load", setUpPage);
*/
function addEvent(obj, evt, fnName) {
	if (obj.addEventListener) {
	  obj.addEventListener(evt, fnName, false);
	} else if (obj.attachEvent)  {
	  obj.attachEvent("on" + evt, fnName);
	}
}//end function addEvent

function removeEvent(obj, evt, fnName) {
	if (obj.removeEventListener) {
	  obj.removeEventListener(evt, fnName, false);
	} else if (obj.detatchEvent)  {
	  obj.detatchEvent("on" + evt, fnName);
	}
}//end function removeEvent



function writeCookie(cName, cValue, expDate, cPath, cDomain, cSecure) {

  if (cName && cValue != "") {
     var cString = cName + "=" + escape(cValue);
     if (expDate)
        cString += ";expires=" + expDate.toGMTString();

     if (cPath) cString += ";path=" + cPath;
     if (cDomain) cString += ";domain=" + cDomain;
     if (cSecure) cString += ";secure";


     document.cookie = cString;
  }
}//end function writeCookie




function setCookie(cookieName, cookievalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));

	var expires = "expires=" + d.toGMTString();
	document.cookie = cookieName+ "=" + cookievalue+ "; " + expires;
}


function getCookie(cookieName) {

	if(document.cookie) {
		var cookiesArray = document.cookie.split("; ");
		for(var i = 0; i < cookiesArray.length; i++) {
			if(cookiesArray[i].split("=")[0] == cookieName) {
				 return unescape(cookiesArray[i].split("=")[1]);
			}
		}

	}
}

function clearCookies() {
	var cookieString = document.cookie;
	var cookieArray = cookieString.split("; ");
	var expiresDate = new Date();

	expiresDate.setDate(expiresDate.getDate() - 7);
	for(var i = 0; i < cookieArray.length; i++) {
		document.cookie = cookieArray[i] + "; expires=" + expiresDate.toUTCString();
	}
}
