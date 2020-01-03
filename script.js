document.querySelector("#copyClip").onclick = function() {
    alert("Your secure generated password has been copied to your clipboard");
  };
  
  document.querySelector("#newPwd").onclick = function() {
    var text = "";
    var pLen = document.getElementById("pwdLength").value;
    console.log("=== User Entered Password Length is " + pLen);
    if (isNaN(pLen)) {
      text = "You must enter a number between 8 and 128";
    } else if (pLen < 8) {
      text = "You password length does not meet the minimum required length";
    } else if (pLen > 128) {
      text = "You password length has exceeded the maximum required length";
    }
  
    var chkNum = false;
    var chkUp = false;
    var chkLow = false;
    var chkSpec = false;
  
    var msgTxt = "";
  
    bNum = document.getElementById("chkNumeric").checked;
    bUpper = document.getElementById("chkUpper").checked;
    bLower = document.getElementById("chkLower").checked;
    bSpecial = document.getElementById("chkSpecial").checked;
  
    if (!bNum && !bLower && !bUpper && !bSpecial) {
      text += "\n";
      text += "You must check at least one of the provided checkboxes";
    }
  
    if (text != "") {
      alert(text);
      return;
    }
  
    var allowable = [];
  
    if (bNum) {
      for (var i = 48; i < 58; i++) {
        allowable.push(String.fromCharCode(i));
      }
    }
  
    if (bUpper) {
      for (var i = 65; i < 91; i++) {
        allowable.push(String.fromCharCode(i));
      }
    }
  
    if (bLower) {
      for (var i = 97; i < 123; i++) {
        allowable.push(String.fromCharCode(i));
      }
    }
  
    if (bSpecial) {
      for (var i = 33; i < 48; i++) {
        allowable.push(String.fromCharCode(i));
      }
      for (var i = 58; i < 65; i++) {
        allowable.push(String.fromCharCode(i));
      }
      for (var i = 91; i < 97; i++) {
        allowable.push(String.fromCharCode(i));
      }
      for (var i = 123; i < 127; i++) {
        allowable.push(String.fromCharCode(i));
      }
    }
    allowable.forEach(item => (msgTxt += item));
  
    var newPwd = "";
    for (var i = 0; i < pLen; i++) {
      var num = getRandomnIntInclusive(0, allowable.length - 1);
      console.log(num);
      newPwd += allowable[num];
    }
  
    window.location.href = "#closeModalPopUp";
  
    document.querySelector("#securePwd").value = newPwd;
  };
  function getRandomnIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  