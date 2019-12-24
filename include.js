var data = "";

function getinclude(){
var d = localStorage.getItem("defaultFacade");
var include;
console.log(d);
switch (d) {
  case "null":
      var include = "Googlef.html";
    break;
  case 0:
    var include = "Classroomsf.html";
    break;
  case 1:
    var include = "Mathswhizzf.html";
    break;
  case 2:
     var include = "Googlef.html";
    break;
  case 3:
    var include = "Sketchnationf.html";
    break;
  case 4:
    var include = "Drivef.html";
    break;
  default:
      var d = localStorage.getItem("defaultFacade");
  if (d == null) {
    var DF = prompt("DEFAULT FACADE\n0=classrooms\n1=MathsWhizz\n2=Google\n3=sketchnation\n4=Google Drive", "");
    localStorage.setItem("defaultFacade", DF);
    $.notify("Changed Default Facade", "success");}
    document.getElementById("include").src=include;
}
document.getElementById("include").src=include;
}


function xhttpGet(url, REPLACEMENTID) {
  data = "";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      if (REPLACEMENTID) {
        document.getElementById(REPLACEMENTID).innerHTML = xhttp.responseText;
      } else {
        document.body.innerHTML = xhttp.responseText;
      }
    }
  };
  xhttp.open("GET", "https://cors-anywhere.herokuapp.com/" + url, true);
  xhttp.send();
}





getinclude();
