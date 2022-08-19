const infoForm = document.getElementById("contactme");
const fname = document.getElementById("name");
const email = document.getElementById("email");
const address = document.getElementById("address");
const city = document.getElementById("city");
const postal = document.getElementById("postal");
const message = document.getElementById("message");

infoForm.onsubmit = function () {
  var flag = false;

  if (validName()) {
    if (validEmail()) {
      if (validAddress()) {
        if (validCity()) {
          if (validPostal()) {
            if (validMessage()) {
              flag = true;
            }
          }
        }
      }
    }
  } else {
    alert("Fill in all the blanks!");
  }
  return flag;
};

function validName() {
  return fname.value !== "" && fname.value != null;
}
function validEmail() {
  var flag = false;
  if (email.value !== "" && email.value != null) {
    var regEmail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    flag = regEmail.test(email.value);
  }
  return flag;
}
function validAddress() {
  return address.value !== "" && address.value != null;
}
function validCity() {
  return city.value !== "" && city.value != null;
}
function validPostal() {
  var flag = false;
  if (postal.value !== "" && postal.value != null) {
    var regPost =
      /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
    flag = regPost.test(postal.value);
  }
  return flag;
}
function validMessage() {
  return message.value !== "" && message.value != null;
}

function visible() {
  if (document.getElementById("contactme").options.value == "Hiring") {
    document.getElementById("appear").style.display = "unset";
  } else {
    document.getElementById("appear").style.display = "none";
  }
}
