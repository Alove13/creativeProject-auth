angular.module('mainApp',["firebase"] )
.controller('mainCtrl', ['$scope', '$http', '$firebaseArray', function($scope, $http, $firebaseArray){
 $scope.accountType = '';
 console.log($scope.accountType)
 document.getElementById('btnLocations').style.display = 'none'
//(function() {//TODO: WHAT IS THIS??
//Initialize Firebase:
var config = {
    apiKey: "AIzaSyAAVvqjuXYwen64PqU2Ew7j7RBcxHg-Puk",
    authDomain: "creativeproject6-7c484.firebaseapp.com",
    databaseURL: "https://creativeproject6-7c484.firebaseio.com",
    projectId: "creativeproject6-7c484",
    storageBucket: "",
    messagingSenderId: "731772572269"
  };
  firebase.initializeApp(config);
//-----------set up database for firebase!---------

 var ref = firebase.database().ref()//.child("messages");
 $scope.accounts = $firebaseArray(ref);


const txtEmail = document.getElementById('txtEmail')
const txtPassword = document.getElementById('txtPassword')
const btnLogin = document.getElementById('btnLogin')
const btnSignUp = document.getElementById('btnSignUp')
const btnLogout = document.getElementById('btnLogout')

//btnLogin.addEventListener('click', e => {
$scope.loginCouple = function() {
 console.log('in loginCouple()')
 const email = txtEmail.value
 const pass = txtPassword.value
 const auth = firebase.auth()//key function!!
 const promise = auth.signInWithEmailAndPassword(email, pass)
 promise.catch(e => console.log(e.message))
 document.getElementById('btnLocations').style.display = 'block'
}

$scope.loginLocation = function() {
 console.log('in loginLocation()')
 const email = txtEmail.value
 const pass = txtPassword.value
 const auth = firebase.auth()//key function!!
 const promise = auth.signInWithEmailAndPassword(email, pass)
 promise.catch(e => console.log(e.message))
 document.getElementById('btnLocations').style.display = 'block'
}

//btnSignUp.addEventListener('click', e=> {
$scope.signUpCouple = function() {
 console.log('in signUpCouple()')
 const email = txtEmail.value
 const pass = txtPassword.value
 const auth = firebase.auth()//key function!!
 $scope.accountType = 'couple';
 console.log('accountType: ', $scope.accountType)

//save info into normal firebase DB--------------------------
 var newAccount = {type: $scope.accountTypei, email: email, password: pass};
 console.log(newAccount);
 $scope.accounts.$add(newAccount);

//-----------save to authorization DB-----------------
 const promise = auth.createUserWithEmailAndPassword(email, pass)
 promise.catch(e => console.log(e.message))
 $scope.accountType = '';
 //---show button to move on---
 document.getElementById('btnLocations').style.display = "block"
}

//btnSignUp.addEventListener('click', e=> {
$scope.signUpLocation = function() {
 console.log('in signUpLocation()')
 const email = txtEmail.value
 const pass = txtPassword.value
 const auth = firebase.auth()//key function!!
 $scope.accountType = 'location';
 console.log('accountType: ', $scope.accountType)
//save info into normal firebase DB--------------------------
 var newAccount = {type: $scope.accountType, email: email, password: pass};
 console.log(newAccount);
 $scope.accounts.$add(newAccount);
//-----------save to authorization DB-----------------
 const promise = auth.createUserWithEmailAndPassword(email, pass)
 promise.catch(e => console.log(e.message))
 $scope.accountType = '';
  //now can display button to move on
 document.getElementById('btnLocations').style.display = "block"
}

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

//btnLogout.addEventListener('click', e => {
$scope.logoutCouple = function() {
 firebase.auth().signOut() 
 console.log('logged out of Couple Account!')
 document.getElementById('btnLocations').style.display = 'none'
}

$scope.logoutLocation = function() {
 firebase.auth().signOut() 
 console.log('logged out of Location Account!')
 document.getElementById('btnLocations').style.display = 'none'
}

//}())//TODO: MATCHES WITH FUNCTION SOMEHOW
}])//end of mainCtrl
