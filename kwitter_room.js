
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCVYKjQRymxF3YOi_w8nevSmGtrwKsGGco",
      authDomain: "kwitter-2edbc.firebaseapp.com",
      databaseURL: "https://kwitter-2edbc-default-rtdb.firebaseio.com",
      projectId: "kwitter-2edbc",
      storageBucket: "kwitter-2edbc.appspot.com",
      messagingSenderId: "179009805489",
      appId: "1:179009805489:web:2c0179e4355c9ae2be1690"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"😃";

    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"not adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location="kwitter_page.html";
    }

function getData() {
      firebase.database().ref("/").on('value', function(snapshot){document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot){childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code
            console.log("Room name - "+Room_names);
            row = "<div class='room_name' id="+ Room_names +"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML += row;
      //End code
      });
});
}
getData();

function redirectToRoomName(name){ 
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}