const form = document.getElementById('form');
const userName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordd = document.getElementById("passwordd");
const nameEro = document.getElementById("nameEro");
const emailEro = document.getElementById("emailEro");
const passEro = document.getElementById("passEro");
const paassEro = document.getElementById("paassEro");


form.addEventListener('submit', function(e){
    e.preventDefault();
    if ( userName.value === ""){
        
        nameEro.innerText = "you shod add your name";
    }

   // if (password.value === ""  ){
      //  passEro.innerText = "your  must enter your password";   
   // }
    if (password.value.length <=6){
        passEro.innerText = "your password must containe mor than 6 diget"; 
    }    
    if (passwordd.value !== password.value){
        paassEro.innerText = "your password dosnt matsh";
    }
        
    
})
