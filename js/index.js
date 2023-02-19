function ValidMail() {
    let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    let myMail = document.getElementById('email').value;
    let valid = re.test(myMail);
    if (valid) output = 'Адрес эл. почты введен правильно!';
    else output = 'Адрес электронной почты введен неправильно!';
    console.log(output);
    //document.getElementById('message').innerHTML = output;
    return valid;
}
 
function ValidPhone() {
    let re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    let myPhone = document.getElementById('phone').value;
    let valid = re.test(myPhone);
    if (valid) output = 'Номер телефона введен правильно!';
    else output = 'Номер телефона введен неправильно!';
    console.log(output);
    //document.getElementById('message').innerHTML = document.getElementById('message').innerHTML/*+'<br />'+output*/;
    return valid;
}

function send() {
    if (ValidPhone() && ValidMail()) {
        let fName = document.getElementById("first-name").value;
        let lName = document.getElementById("last-name").value;
        let eMail = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let uni = document.getElementById("inst").value;
        let ar = [fName, lName, eMail, phone, uni];
        let msg = "<html><h2>Заявка</h2><p>" + fName + "</p><p>" + lName + "</p><p>" + phone + "</p><p>" + uni + "</p>" + "</html>";
        console.log(ar);
        Email.send({
            SecureToken : "7f6c2f27-30e0-4ab7-afb7-559180faf83a",
            To : eMail,
            From : "b0ne7228@gmail.com",
            Subject : "This is the subject",
            Body : msg
        }).then(
          message => alert('asdaw')
        );
    } 
    
    
}


//41F14202EEF4865723F5365C9EBE9F277BBD  smpt pass
//Your security token is 7f6c2f27-30e0-4ab7-afb7-559180faf83a Please take note of this.