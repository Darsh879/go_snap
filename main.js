function addUser()
{
    user_name = document.getElementById("name").value;

    localStorage.setItem("user_name", user_name);

    window.location="go_snap.html";
}

var firebaseConfig = {
    apiKey: "AIzaSyDutxtajFSdGr_4efAoP-BsRWYqysuKA7k",
    authDomain: "gosnap-c9d92.firebaseapp.com",
    projectId: "gosnap-c9d92",
    storageBucket: "gosnap-c9d92.appspot.com",
    messagingSenderId: "679487785278",
    appId: "1:679487785278:web:c4dbf486b193e325a8046f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addRoom()
  {
      room_name = document.getElementById("add_room").value;
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
  }