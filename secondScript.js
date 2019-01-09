var opt = 0;
function me(){

    if(document.getElementById("view").checked && opt == 3)
        {
            opt = 5;
        }
    
    if(document.getElementById("delete").checked && opt !=1)
    {
        if ( opt == 2)
            {
                
             document.getElementById("insertLabel").remove();
                    document.getElementById("insertPassword").remove();
                    document.getElementById("insertInputPass").remove();
                    document.getElementById("insertInputLabel").remove();
                    document.getElementById("insertBr").remove();
                    
                
            }
    if ( opt == 3 )
                {
                    document.getElementById("ans").style.visibility = "hidden";
                }
        if ( opt == 4){
                    document.getElementById("updateLabel").remove();
                    document.getElementById("updateInput").remove();
            }
        var y = document.createElement("label");
        y.innerHTML = "username";
        y.id = "deleteLabel";
     var x = document.createElement("INPUT");
    x.setAttribute("type","text");
    x.id = "deleteInput";
    var theDiv = document.getElementById("deleteDiv");
     theDiv.appendChild(y);
    theDiv.appendChild(x);
        opt = 1;
    }
    
     else
        if(document.getElementById("insert").checked && opt!=2){
            if ( opt == 1){
                    document.getElementById("deleteLabel").remove();
                    document.getElementById("deleteInput").remove();
            }
            if ( opt == 3 )
                {
                    document.getElementById("ans").style.visibility = "hidden";
                }
            if ( opt == 4){
                    document.getElementById("updateLabel").remove();
                    document.getElementById("updateInput").remove();
            }
            
          linebreak = document.createElement("br"); 
            linebreak.id = "insertBr";
            var y = document.createElement("label");
        y.innerHTML = "username";
        y.id = "insertLabel";
            var q = document.createElement("label");
        q.innerHTML = "password";
        q.id = "insertPassword";    
     var x = document.createElement("INPUT");
    x.setAttribute("type","text");
    x.id = "insertInputLabel";
    var t = document.createElement("INPUT");
    t.setAttribute("type","text");
    t.id = "insertInputPass";
    var theDiv = document.getElementById("insertDiv");
     theDiv.appendChild(y);
    theDiv.appendChild(x);
    theDiv.appendChild(linebreak);
    theDiv.appendChild(q);
    theDiv.appendChild(t);      
            opt = 2;     
        }
    else
        if(document.getElementById("select").checked){
            if ( opt == 1){
                    document.getElementById("deleteLabel").remove();
                    document.getElementById("deleteInput").remove();
            }
             if ( opt == 2)
            {
                    document.getElementById("insertLabel").remove();
                    document.getElementById("insertPassword").remove();
                    document.getElementById("insertInputPass").remove();
                    document.getElementById("insertInputLabel").remove();
                    document.getElementById("insertBr").remove();            
            }
            
            if ( opt == 4){
                    document.getElementById("updateLabel").remove();
                    document.getElementById("updateInput").remove();
            }
            
             
            
            
            
            
            opt = 3;     
        }
    else
        if(document.getElementById("update").checked && opt != 4 ){
         
            if ( opt == 1){
                    document.getElementById("deleteLabel").remove();
                    document.getElementById("deleteInput").remove();
            }
             if ( opt == 2)
            {         
             document.getElementById("insertLabel").remove();
                    document.getElementById("insertPassword").remove();
                    document.getElementById("insertInputPass").remove();
                    document.getElementById("insertInputLabel").remove();
                    document.getElementById("insertBr").remove();         
            }
            
            if ( opt == 3 )
                {
                    document.getElementById("ans").style.visibility = "hidden";
                }
            
            var y = document.createElement("label");
        y.innerHTML = "password";
        y.id = "updateLabel";
     var x = document.createElement("INPUT");
    x.setAttribute("type","text");
    x.id = "updateInput";
    var theDiv = document.getElementById("updateDiv");
     theDiv.appendChild(y);
    theDiv.appendChild(x);
            opt = 4;
        }
}   
function main()
{
//console.log(opt);
    if ( opt == 3 )
        {
            document.getElementById("ans").style.visibility = "visible";
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
      document.getElementById("ans").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "select.php", true);
  
  xhttp.send();
            
        }
    else 
        if ( opt == 1)
            {
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
      document.getElementById("ans").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "delete.php?name="+document.getElementById("deleteInput").value, true);
  
  xhttp.send();
            }
    else
        if(opt == 2)
            {
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
      document.getElementById("ans").innerHTML = this.responseText;
    }
  };
                console.log(document.getElementById("insertInputLabel"));
  xhttp.open("GET", "insert.php?name="+document.getElementById("insertInputLabel").value+"&pass="+document.getElementById("insertInputPass").value, true);
  
  xhttp.send();
            }
    if(opt == 4)
        {
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
      document.getElementById("ans").innerHTML = this.responseText;
    }
  };
                console.log(document.getElementById("updateInput").value);
  xhttp.open("GET", "update.php?name="+document.getElementById("updateInput").value, true);
  
  xhttp.send();
        }
    if ( opt == 5 )
        {
            window.location.href="me.html";
        }
}