




document.querySelector("#copyClip").onclick = function () {
    alert('Your secure generated password has been copied to your clipboard');
}


document.querySelector("#newPwd").onclick = function () {
    var text = "";
    // crbtemp
    var pLen = document.getElementById("pwdLength").value;
    console.log("=== User Entered Password Length is " + pLen);
    if (isNaN(pLen)) {
        text = "You must enter a number between 8 and 128";
    } else if (pLen < 8) {
        text = "You password length does not meet the minimum required length";
    } else if (pLen > 128) {
        text = "You password length has exceeded the maximum required length";
    }

    // crbtemp
    var chkNum = false;
    var chkUp = false;
    var chkLow = false;
    var chkSpec = false;


    var msgTxt = "";

    bNum = document.getElementById("chkNumeric").checked;
    console.log("Numeric Checkbox is: " + bNum);
    bUpper = document.getElementById("chkUpper").checked;
    console.log("Uppercase Checkbox is: " + bUpper);
    bLower = document.getElementById("chkLower").checked;
    console.log("Lowercase Checkbox is: " + bLower);
    bSpecial = document.getElementById("chkSpecial").checked;
    console.log("Special Character Checkbox is: " + bSpecial);

    if (!bNum && !bLower && !bUpper && !bSpecial) {
        text += "\n";
        text += "You must check at least one of the provided checkboxes";
    }

    if (text != "") {
        alert(text);
        return
    }

    // create an array of allowable characters
    var allowable = [];

    if (bNum) {
        // Ascii for 0 is 48  and 9 is 57
        for (var i = 48; i < 58; i++) {
            // console.log(String.fromCharCode(i));
            allowable.push(String.fromCharCode(i));
        }
    }
    // console.log(" log After bNum Loop " + allowable.length);

    if (bUpper) {
        // Ascii for A is 65 and Z is 90
        for (var i = 65; i < 91; i++) {
            // console.log(String.fromCharCode(i));
            allowable.push(String.fromCharCode(i));
        }
        // console.log(" log After bUpper Loop " + allowable.length);

    }

    if (bLower) {
        // Ascii for a is 97 and z is 122
        for (var i = 97; i < 123; i++) {
            // console.log(String.fromCharCode(i));
            allowable.push(String.fromCharCode(i));
        }
        // console.log(" log After bLower Loop " + allowable.length);
    }

    if (bSpecial) {
        // Ascii for a space is 32 (we won't include spaces) DEL is 127 (don't include DEL)
        // Ascii for other special characters ranges (33-47) (58-64) (91-96) (123-126)
        for (var i = 33; i < 48; i++) {
            // console.log(String.fromCharCode(i));
            allowable.push(String.fromCharCode(i));
        }
        for (var i = 58; i < 65; i++) {
            // console.log(String.fromCharCode(i));
            allowable.push(String.fromCharCode(i));
        }
        for (var i = 91; i < 97; i++) {
            // console.log(String.fromCharCode(i));
            allowable.push(String.fromCharCode(i));
        }
        for (var i = 123; i < 127; i++) {
            // console.log(String.fromCharCode(i));
            allowable.push(String.fromCharCode(i));
        }
        // console.log(" log After bSpecial Loop " + allowable.length);

    }

    // allowable.forEach(item => console.log(item));
    allowable.forEach(item => msgTxt += item);

    // for (var i = 0; i < allowable.length; i++) {
    //     msgTxt += allowable[i];
    //     console.log(allowable[i]);
    // }

    // alert('Your array has grown to ' + allowable.length);
    // alert('The first item in your array is ' + allowable[0]);
    // alert('The last item in your array is ' + allowable[allowable.length - 1]);

    // alert(msgTxt);
    // Build new password using randow characters up to requested length
    var newPwd = "";
    for (var i = 0; i < pLen; i++) {
        // Generate a random number between 0 and 1
        // Math.floor will round down, meaning we would get a number between 0 and 9
        var num = getRandomnIntInclusive(0, allowable.length - 1);
        console.log(num);
        newPwd += allowable[num];
    }
    // alert(newPwd);

    //crbtemp
    // a = document.getElementById(...);
    // a.setAttribute("href", "somelink url");
    // console.log(window.location.href);
    // console.log("BEFORE href"+newPwd);
    // alert("BEFORE href"+newPwd);
    //THIS WILL CLOSE MY MODAL WINDOW
    // SINCE THERE IS A BOOKMARK, THE PAGE IS NOT RELOADED( CLEARING OUT MY VARS)
    window.location.href = "#closeModalPopUp";
    // console.log("AFTER href"+newPwd);
    // alert("AFTER href"+newPwd);
 

    document.querySelector("#securePwd").value = newPwd;

    // now we need to display this new password in the other window ????
}
// This function generates a randomn number. The max is inclusive and the minimum is inclusive. From: developer.mozilla.org
function getRandomnIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
