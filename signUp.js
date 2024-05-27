var userName=document.getElementById("userName");
var email=document.getElementById("email");
var password=document.getElementById("password");
var confirmPassword=document.getElementById("cpassword");

async function SignUp(){
if(userName.value!="" && email.value!="" && password.value!="" && confirmPassword.value!="" && password.value==confirmPassword.value){
    await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then(async (snap) => {
        console.log(snap.user.uid)
        let userId = snap.user.uid 

        var object = {
            email:email.value,
            password:password.value,
            userName:userName.value,
            userType:"user",
            userId,

        }

       await  firebase.database().ref("users").child(snap.user.uid)
        .set(object)
        


        Toastify({

            text: "Account create and save db",

            duration: 3000

        }).showToast();
        setTimeout(() => {
            window.location.href = "login.html"
        }, 3000);

    })


    .catch((e) => {
        Toastify({

            text: e.code,

            duration: 3000

        }).showToast();

    })
    email.value = ""
    password.value = ""
    userName.value = ""
    confirmPassword.value = ""

}
}
