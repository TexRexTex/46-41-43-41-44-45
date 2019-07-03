var d = localStorage.getItem("defaultFacade");
var include;
switch (d) {
  case 0:
    include = "Classroomsf.html";
    break;
  case 1:
    include = "Mathswhizzf.html";
    break;
  case 2:
     include = "Googlef.html";
    break;
  case 3:
    include = "Sketchnationf.html";
    break;
  case 4:
    include = "Drivef.html";
    break;
  default:
      var d = localStorage.getItem("defaultFacade");
  if (d == null) {
    var DF = prompt("DEFAULT FACADE\n0=classrooms\n1=MathsWhizz\n2=Google\n3=sketchnation\n4=Google Drive", "");
    localStorage.setItem("defaultFacade", DF);
    $.notify("Changed Default Facade", "success");}
}

document.onkeydown = function(e) {
  if (e.ctrlKey && e.shiftKey && e.which == 121) {
    includeHTML();
  }
};


function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};
