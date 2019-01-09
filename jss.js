var form = document.getElementById("form_id");

document.getElementById("bttn").addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { 
        form.submit;
    }
});