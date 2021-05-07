// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;
  console.log(email,password);

  //sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred =>{
    console.log(cred.user)    
  })
});


//logout
/*const logout = document.querySelector('#logout');
logout.addEventListener('submit', (e) => {
  e.preventDefault();
  auth.signOut().then(()=>{
    console.log('usuario desloguiado');
  });
});*/

//login
const loginform = document.querySelector('#login-form');
loginform.addEventListener('submit', (e => {
  e.preventDefault();

  //get user info
  const email = loginform['login-email'].value;
  const password = loginform['login-password'].value;

  auth.signInWithEmailAndPassword(email,password).then(cred => {
    console.log(cred.user.email);
    if(cred.user.email == 'idarivis123@gmail.com'){
        location.href ="index.html";
    }else{
        console.log("usuario admin")
    }
    
  })
}));

