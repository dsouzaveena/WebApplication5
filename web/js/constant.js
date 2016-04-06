/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


 $(function(){
                $('.ui.dropdown').dropdown();
            });
 $ (function(){
     $('.ui.radio.checkbox').checkbox();
 }); 
function validate(){
    var a=document.forms["register"]["fname"].value;
    var b=document.forms["register"]["lname"].value;
    var c=document.forms["register"]["street"].value;
    var d=document.forms["register"]["aptno"].value;
    var e=document.forms["register"]["city"].value;
    var f=document.forms["register"]["zip"].value;
    var g=document.forms["register"]["phone"].value;
    var h=document.forms["register"]["dob"].value;
    var i=document.forms["register"]["email"].value;
    var j=document.forms["register"]["state"].value;
    var alphaExp=/^[a-zA-Z]+$/;
    var numCheck = /^\d+$/;
    var dateCheck=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    var mailCheck=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    //if(a!=alphaExp || b!=alphaExp || c!=alphaExp || d!=alphaExp || e!=alphaExp || j!=alphaExp)
    //{
      //  if()
        //return false;
    //}
    /*if(a!=alphaExp)
    {
        alert("First name Error");
        return true;
    }
    else
        if(b!=alphaExp)
    {
        alert("Last Name Error");
        return false;
    }
    else
        if(c!=alphaExp)
    {
        alert("Street Error");
        return false;
    }
    else
        if(d!=alphaExp)
    {
        alert("AptNo Error");
        return false;
    }
    else
        if(e!=alphaExp)
    {
        alert("City Name Error");
        return false;
    }
    else
        if(j!=alphaExp)
    {
        alert("State Name Error");
        return false;
    }
    else
        if(f!=numCheck || g!=numCheck)
    {
        alert("Invalid Entry Detected");
        return false;
    }
    else
        if(f.toString().length()!=6 || g.toString().length()!=10)
    {
        return false;
    }
    else
        if(h!=dateCheck)
    {
        return false;
    }
    else
        if(i!=mailCheck)
    {
        return false;
    }
    else*/
        return true;
}
function validateLogin(){
    var email=document.forms["login"]["userName"].value;
    var passWord=document.forms["login"]["passWord"].value;
    var mailCheck=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!email)
    {
        alert("Please Fill Out The Username Field");
        return false;
    }
    if(!passWord)
    {
        alert("Please Fill Out The Password ");
        return false
    }
    else
        return true;
}

function scorePassword(pass) {
    var score = 0;
    if (!pass)
        return score;

    // award every unique letter until 5 repetitions
    var letters = new Object();
    for (var i=0; i<pass.length; i++) {
        letters[pass[i]] = (letters[pass[i]] || 0) + 1;
        score += 5.0 / letters[pass[i]];
    }

    // bonus points for mixing it up
    var variations = {
        digits: /\d/.test(pass),
        lower: /[a-z]/.test(pass),
        upper: /[A-Z]/.test(pass),
        nonWords: /\W/.test(pass),
    }

    variationCount = 0;
    for (var check in variations) {
        variationCount += (variations[check] == true) ? 1 : 0;
    }
    score += (variationCount - 1) * 10;

    return parseInt(score);
}
function checkPassStrength(pass) {
    var score = scorePassword(pass);
    if (score > 80)
        return "strong";
    if (score > 60)
        return "good";
    if (score >= 30)
        return "weak";

    return "";
}
