var pressed = false;
function loadDoc() {
      
    if(pressed == false){
      
    if(document.getElementById("inp_name").value == "new")
    {
        create_input("id1");
      
    }
    else{
        
  var xhttp;
  if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "file.php?name="+document.getElementById("inp_name").value, true);
  
  xhttp.send();

}

    pressed = true;
}
    
}
function create_input(id1)
{
    var y = document.createElement("LABEL");
    y.innerHTML="parola";
    var x = document.createElement("INPUT");
    x.setAttribute("type","text");
    x.id = id1;
    var theDiv = document.getElementById("demo");
     theDiv.appendChild(y);
    theDiv.appendChild(x);
}