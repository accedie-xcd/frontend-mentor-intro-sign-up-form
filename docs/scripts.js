const fName = document.forms["form"]["fName"].value;
const lName = document.getElementById("lName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener('click', () => {
  check();
})

function validate(){
  if (fName == "");
    alert(" ");
}