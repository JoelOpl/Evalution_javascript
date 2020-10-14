var form = document.createElement("form");
form.id = "formulaire1";

//PHONE Number
var labal3 = document.createElement("label");
var text4 = document.createTextNode("PhoneNumber ");
var smal = document.createElement("small");
labal3.setAttribute("for", "Mail");

var input3 = document.createElement("input");
input3.type = "text";
input3.name = "Mail";

form.appendChild(labal3);
form.appendChild(input3);
labal3.appendChild(text4);
form.appendChild(smal);
document.body.appendChild(form);

var select = document.querySelector("#formulaire1");
//LISTENER
select.Mail.addEventListener("change", function () {
  checkmail(this);
});
//CHECK
var checkmail = function (inputmail) {
  var mailRegEx = new RegExp(
    "^0[1-7]{1}(([0-9]{2}){4})|((s[0-9]{2}){4})|((-[0-9]{2}){4})$",
    "g"
  );
  var testmail = mailRegEx.test(inputmail.value);
  var small = inputmail.nextElementSibling;
  if (testmail) {
    small.innerHTML = "Numéro Valide";
  } else {
    small.innerHTML = "Numéro Non Valide";
  }
};
