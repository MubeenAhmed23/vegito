function getData(){
    var a = document.getElementsByClassName('email')[0].value
  console.log(a)
  var b = document.getElementsByClassName('password')[0].value
  console.log(b)
  if (a === "" || b === ""){
    alert("First complete the info in order to proceed to next page.")    
} else if (localStorage.getItem('email0') !== a || localStorage.getItem('password0') !== b){
    alert("Sorry, But it look like Your Email or Passowrd is invalid.");
} else{
    // var email = document.getElementById('email').value
    // var pass = document.getElementById('password').value
    localStorage.setItem('email1', a)
    localStorage.setItem('password1', b)
    var a = document.getElementsByClassName('sign-button')[0].parentElement.action = "./Vegito.pk.html"
    console.log(a)
}
}
