(function() {

const txtEmail = document.getElementById('txtEmail')
const txtPassword = document.getElementById('txtPassword')
const btnLogin = document.getElementById('btnLogin')
const btnSignUp = document.getElementById('btnSignUp')
const btnLogout = document.getElementById('btnLogout')

btnLogin.addEventListener('click', e => {
 const email = txtEmail.value
 const pass = txtPassword.value
 const auth = firebase.auth()//key function!!
 console.log("clicked on login button!")
 const promise = auth.signInWithEmailAndPassword(email, pass)
 promise.catch(e => console.log(e.message))
 console.log("promies fulfilled and now signed in")
})

btnSignUp.addEventListener('click', e=> {
 const email = txtEmail.value
 const pass = txtPassword.value
 const auth = firebase.auth()//key function!!
 
 const promise = auth.createUserWithEmailAndPassword(email, pass)
 promise.catch(e => console.log(e.message))
})

//add a realtime listener to check for someone signed in:
firebase.auth().onAuthStateChanged(firebaseUser => {
 if(firebaseUser) {
  console.log(firebaseUser)
  document.getElementById('btnLogout').style.display = 'block'
 } else {
    console.log("not logged in!")
    document.getElementById('btnLogout').style.display = 'none'
   }
})


btnLogout.addEventListener('click', e => {
 firebase.auth().signOut() 
 console.log('logged out!')
})



}())
