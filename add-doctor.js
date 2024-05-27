var Doctor_name=document.getElementById('Doctor-name');
var specialization=document.getElementById('specialization');
var experience=document.getElementById('experience');
var age=document.getElementById('age');
var phone=document.getElementById('phone');
var Email=document.getElementById('Email');
var gender=document.getElementById('gender')
var about_doctor=document.getElementById('about-doctor')
var address=document.getElementById('address')

if(localStorage.getItem('userId') == null){
    window.location.href = 'login.html'
}



async function addDoctor(){
    if(Doctor_name.value!="" && specialization.value!="" && experience.value!="" && age.value!="" && phone.value!="" && Email.value!="" && gender.value!="" && about_doctor.value!="" && address.value!=""){
        if(age.value>0 && age.value<100){
            var key = firebase.database().ref("doctors").push().key
        var object = {


            Doctor_name:Doctor_name.value,
            specialization:specialization.value,
            experience:experience.value,
            age:age.value,
            phone:phone.value,
            Email:Email.value,
            gender:gender.value,
            about_doctor:about_doctor.value,
            address:address.value,
            doctorKey:key
        }
       await firebase.database().ref("doctors").child(key).set(object)
        Toastify({
            text: "doctors Added",
            duration: 3000
        }).showToast();
        
    }
    else{
        Toastify({
            text: "Please enter correct age",
            duration: 3000
        }).showToast();
    }
    Doctor_name.value = ""
    specialization.value = ""
    experience.value = ""
    age.value = ""
    phone.value = ""
    Email.value
    gender.value=""
    about_doctor.value=""
    address.value=""
}

    else{
        Toastify({
            text: "Please fill all the fields",
            duration: 3000
        }).showToast();
    }
}

function logout(){
    localStorage.clear()
    window.location.href = 'login.html'
}