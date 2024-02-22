const firebaseConfig = {
  apiKey: "AIzaSyBwS9kmIxLzz6oev-Xzim3BO7HNhirrJ5s",
  authDomain: "authform-edb08.firebaseapp.com",
  databaseURL: "https://authform-edb08-default-rtdb.firebaseio.com",
  projectId: "authform-edb08",
  storageBucket: "authform-edb08.appspot.com",
  messagingSenderId: "565111279275",
  appId: "1:565111279275:web:42be7c917c792f3ad9b1ee"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

 console.log(auth)



let signOutButton = document.getElementById("signout")
signOutButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault()
  console.log("clicked")
  
  auth.signOut()
  alert("Redirecting To Shopping Cart")
  window.location = "https://tayyab84.github.io/banoqabiladdtocart/";
})
