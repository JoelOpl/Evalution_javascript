/*** @author Joel  */

var form = document.createElement("form");
form.id = "formulaire1";

//titre
var title = document.createElement("h1");
var text = document.createTextNode("Mon formulaire");
var select = document.querySelector("h1");

//nom
var labal1 = document.createElement("label");
var text2 = document.createTextNode("Nom ");
labal1.setAttribute("for", "name");

var input1 = document.createElement("input");
input1.type = "text";
input1.name = "name";
//Prenom
var labal2 = document.createElement("label");
var text3 = document.createTextNode("Prenon ");
labal2.setAttribute("for", "lastnam");

var input2 = document.createElement("input");
input2.type = "text";
input2.name = "lastnam";
//Mail
var labal3 = document.createElement("label");
var text4 = document.createTextNode("Mail ");
var smal = document.createElement("small");
labal3.setAttribute("for", "Mail");

var input3 = document.createElement("input");
input3.type = "text";
input3.name = "Mail";

//Passoword
var labal4 = document.createElement("label");
var text5 = document.createTextNode("Password ");
labal4.setAttribute("for", "Password");

var input4 = document.createElement("input");
var smal1 = document.createElement("small");
input4.type = "text";
input4.name = "Password";

//Button
var btn = document.createElement("button");
//STYLE CSS
btn.style.height = "30px";
btn.style.width = "50px";
btn.style.marginTop = "40px";
btn.style.marginLeft = "70px";
//
var br = document.createElement("br");
var br2 = document.createElement("br");
var br3 = document.createElement("br");
var br4 = document.createElement("br");
var br5 = document.createElement("br");
var br6 = document.createElement("br");
//APPENDCHILD
labal4.appendChild(text5);
labal3.appendChild(text4);
labal2.appendChild(text3);
labal1.appendChild(text2);
title.appendChild(text);

form.appendChild(title);

form.appendChild(labal2);
form.appendChild(input2);
form.appendChild(br3);
form.appendChild(br4);
form.appendChild(labal1);
form.appendChild(input1);
form.appendChild(br);
form.appendChild(br2);
form.appendChild(labal3);
form.appendChild(input3);
form.appendChild(smal);
form.appendChild(br5);
form.appendChild(br6);
form.appendChild(labal4);
form.appendChild(input4);
form.appendChild(smal1);

document.body.appendChild(form);
document.body.appendChild(btn);

var select = document.querySelector("#formulaire1");
//LISTENER
select.Mail.addEventListener("change", function () {
  checkmail(this);
});

select.Password.addEventListener("change", function () {
  checkpassword(this);
});
select.addEventListener("sbmit", function (e) {
  e.preventDefault();
  if (checkmail(select.Mail)) {
    console.log("mail valide");
  } else {
    console.log("mail non valide ");
  }
});
//CHECK
var checkmail = function (inputmail) {
  var mailRegEx = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );
  var testmail = mailRegEx.test(inputmail.value);
  var small = inputmail.nextElementSibling;
  if (testmail) {
    small.innerHTML = "Adresse Valide";
  } else {
    small.innerHTML = "Adresse  Non Valide";
  }
};

var checkpassword = function (inputpassword) {
  var msg;
  var valid = false;
  if (inputpassword.value.length < 2) {
    msg = "le mot de passe doit contenir 3 caractére";
  } else if (!/[A-Z]/.test(inputpassword)) {
    msg = "le mot de passe doit contenir 1 majuscule";
  } else if (!/[a-z]/.test(inputpassword)) {
    msg = "le mot de passe doit contenir 1 minuscule";
  } else {
    msg = "le mot de passe est valide";
    valid = true;
  }

  var small = inputpassword.nextElementSibling;
  if (valid) {
    small.innerHTML = " mot de passe Valide";
    return true;
  } else {
    small.innerHTML = msg;
    return false;
  }
};
