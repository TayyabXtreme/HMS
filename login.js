var email = document.getElementById("email");
var password = document.getElementById("password");

var login = async () => {
    console.log(firebase)

    await firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then(async (snap) => {
            console.log(snap.user.uid)
            let userId = snap.user.uid

            await firebase.database().ref("users").child(userId).get()
                .then((snapshot) => {
                    console.log(snapshot.val()["userName"])
                    console.log(snapshot.val()["userType"]+"userType")
                    if (snapshot.val() != undefined && snapshot.val()["userType"] == "user") {
                       localStorage.setItem("userId",userId)
                       localStorage.setItem("username",JSON.stringify(snapshot.val()["userName"]) )
                        window.location.replace("./index.html")

                    }
                    else if (snapshot.val() != undefined && snapshot.val()["userType"] == "admin") {
                        window.location.replace("./index.html")

                    }
                })

            Toastify({
                text: "Account Login",
                duration: 3000

            }).showToast();
        })


        .catch((e) => {
            Toastify({

                text: e.code,

                duration: 3000

            }).showToast();

        })
        email.value = ""
        password.value = ""
    }