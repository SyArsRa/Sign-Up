const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");
const btn = document.getElementById("subBtn");
const form = document.getElementById("form");
const warning = document.getElementById("warning")

btn.addEventListener("click",function(e){
  if (password.value == confirmpassword.value){
    form.submit();
  }
  else{
    warning.style.visibility = 'visible'
  }
});
