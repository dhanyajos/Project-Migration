
function cap() {
  var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V'
    , 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '+'];
  var a = alpha[Math.floor(Math.random() * 71)];
  var b = alpha[Math.floor(Math.random() * 71)];
  var c = alpha[Math.floor(Math.random() * 71)];
  var d = alpha[Math.floor(Math.random() * 71)];
  var e = alpha[Math.floor(Math.random() * 71)];
  var f = alpha[Math.floor(Math.random() * 71)];

  var final = a + b + c + d + e + f;
  document.getElementById("capt").value = final;
}


function validcap() {
  var stg1 = document.getElementById('capt').value;
  var stg2 = document.getElementById('textinput').value;
  if (stg1 == stg2) {

    return true;
  } else {

    return false;
  }
}


function validation() {

  var regexp = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/;
  var error = document.getElementById("error")
  var x = document.getElementById("aadhar").value;
  if (regexp.test(x)) {
    return true;

  }
  else {
    return false;
  }
}



function getdate() {

  
            // let dateObj = new Date();
            // let month = String(dateObj.getMonth() + 1).padStart(2, '0');
            // let day = String(dateObj.getDate()).padStart(2, '0');
            // let year = dateObj.getFullYear();
            // let output = day + '/' + month + '/' + year;
            // document.querySelector("#DateofPoliceStatus") = output;
            const input = document.querySelector('#DateofPoliceStatus');
            DateofPoliceStatus.valueAsDate = new Date();
  
  
}