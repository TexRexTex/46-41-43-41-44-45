function loadCSS() {
  var css=localStorage.getItem("css");
  if(css==null){
    localStorage.setItem("css", "BlackBlue.css");
    css=localStorage.getItem("css");
  }
  window.onload= document.getElementById("Style").setAttribute("href", css);
}

function CTH() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function theme(buttonElement) {
  var css;
  var buttonClickedId = buttonElement.id;
  if (buttonClickedId === 'btn1') {
    var css = "BlackBlue.css";
  } else if (buttonClickedId === 'btn2') {
    var css = "purple.css";
  }
  localStorage.setItem("css", css);
  document.getElementById("Style").setAttribute("href", css);
}

function jsa() {
  var cp = prompt("Write javascript code");
  eval(cp);
  $.notify("Run code " + cp, "success");
}

function DF() {
  var DF = prompt("DEFAULT FACADE\n0=classrooms\n1=MathsWhizz\n2=Google\n3=sketchnation\n4=Google Drive", "");
  localStorage.setItem("defaultFacade", DF);
  $.notify("Changed Default Facade To " + localStorage.getItem("defaultFacade"), "success");
}

function delacces() {
  var ls = localStorage.getItem("pass");
  localStorage.removeItem("pass");
  localStorage.removeItem("defaultFacade");
  window.location.replace("/46-41-43-41-44-45/");
  getinclude();
}
var ls = localStorage.getItem("pass");
if (ls == null) {
  window.location.replace("/46-41-43-41-44-45/");
}

var ls = localStorage.getItem("pass");
if (ls == "no") {
  window.location.replace("/46-41-43-41-44-45/");
}

//make sure that it doesn't reaload 
window.onbeforeunload = function() {
  return " are you sure! you want to leave this page";
}
setTimeout(function() {
  //checking for default facade
  var d = localStorage.getItem("defaultFacade");
  if (d == null) {
    var DF = prompt("DEFAULT FACADE\n0=classrooms\n1=MathsWhizz\n2=Google\n3=sketchnation\n4=Google Drive", "");
    localStorage.setItem("defaultFacade", DF);
    $.notify("Changed Default Facade", "success");
    getinclude();
  }
  //Change Title
  var t = prompt("Title");
  if (t != null) {
    var t = "New Tab";
  }
  document.title = t;
  console.log(t);
  //Change favicon
  var NF = prompt("link for page favicon =", "");
  var NF = "https://www.google.com/s2/favicons?domain=" + NF;
  (function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = NF;
    document.getElementsByTagName('head')[0].appendChild(link);
  })();
}, 1000);
//button changing title/favicon
function CT() {
  var t = prompt("Title");
  document.title = t;
  document.getElementsByTagName("button")[0].setAttribute("title", t);
  console.log(t);
  var NF = prompt("link for page favicon =", "");
  var NF = "https://www.google.com/s2/favicons?domain=" + NF;
  (function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = NF;
    document.getElementsByTagName('head')[0].appendChild(link);
  })();
  if (t == null) {
    $.notify("An Error occurred Changing The Title", "error");
  } else {
    $.notify("Changed Title", "success");
  }
  if (NF == "https://www.google.com/s2/favicons?domain=null") {
    $.notify("An Error occurred Changing The Favicon", "error");
  } else {
    $.notify("Changed Favicon", "success");
  }
}
//password
"Password = HeHe"
//console
function consol() {
  $.notify("Login", "info");
  console.log("CONSOLE");
  var cpw = prompt("Type In The Password");
  if (cpw == "HaPaRa") {
    $.notify("Access granted", "success");
  } else {
    $.notify("INCORRECT PASSWORD", "error");
  }
}
//changing the page you want to go to
function AP() {
  var cp = prompt("What page do you want to go to?", "https://example.com");
  xhttpGet(cp,"frame");
  var ss = "https://www.google.com/s2/favicons?domain=" + cp;
  document.getElementsByTagName("img")[0].setAttribute("src", ss);
  $.notify("Chosen Page " + cp, "success");
}
