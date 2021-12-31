const firebaseConfig = {
    apiKey: "AIzaSyCQ1Wiefal-VmZHleT5T9whg4gvf5CivuM",
    authDomain: "kwittwe-prohjecy.firebaseapp.com",
    projectId: "kwittwe-prohjecy",
    storageBucket: "kwittwe-prohjecy.appspot.com",
    messagingSenderId: "431462203877",
    appId: "1:431462203877:web:02bc43f79ee63870822f0c"
};

firebase.initializeApp(firebaseConfig);

function adduser(){
    user_name=document.getElementById("user_name").value;

    firebase.database().ref("/").child(user_name).update({
        purpose:"add user"
    });
}

//Start code

   //End code