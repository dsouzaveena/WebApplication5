/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function validateEmail(inputText){
    var mailFormat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(.\w{2,3})+$/;
    if(inputText.value.match(mailFormat))
    {
        document.form1.text1.focus();
        return true;
    }
    else
    {
        alert("You have entered an invalid email address");
        document.form1.text1.focus();
        return false;
    }
}
