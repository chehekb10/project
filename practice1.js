  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBVm52gpyDGpCt-ja3u0CEF07j3BFVhJ_k",
    authDomain: "practice1-76395.firebaseapp.com",
    projectId: "practice1-76395",
    storageBucket: "practice1-76395.appspot.com",
    messagingSenderId: "649052334163",
    appId: "1:649052334163:web:90e9249e9bfc92432f3ea6",
    measurementId: "G-KEYCSK6X9C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
//ADD YOUR FIREBASE LINKS
function addUser()
{
    username= document.getElementById("user_name1").value;
    firebase.database().ref("/").child(username).update(
        {
             food: "sushi"
        }
    );
}