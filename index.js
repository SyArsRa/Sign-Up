const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");
const btn = document.getElementById("subBtn");
const form = document.getElementById("form");
const warning = document.getElementById("warning")

btn.addEventListener("click",function(e){
  if (password.value != confirmpassword.value){
    e.preventDefault();
    warning.style.visibility = 'visible';
  }
  else{
    warning.style.visibility = 'hidden';
  }
});
