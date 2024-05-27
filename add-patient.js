var patient_name=document.getElementById('patient-name');
var dob=document.getElementById('dob');
var age=document.getElementById('age');
var phone=document.getElementById('phone');
var money=document.getElementById('Email');
var gender=document.getElementById('gender');
var exampleFormControlTextarea1=document.getElementById('exampleFormControlTextarea1');
const currentDate = new Date();

const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so we add 1
const day = String(currentDate.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;

if(localStorage.getItem('userId') == null){
    window.location.href = 'login.html'
}

dob.value = formattedDate;
async function addPatient(){
    if(patient_name.value!="" && dob.value!="" && age.value!="" && phone.value!=""  && gender.value!="" && exampleFormControlTextarea1.value!=""){
        if(age.value>0 && age.value<100 ){
            if(money.value>0 && money.value<100000000){
            var key = firebase.database().ref("patients").push().key
        var object = {
            patient_name:patient_name.value,
            dob:dob.value,
            age:age.value,
            phone:phone.value,
            money:money.value,
            gender:gender.value,
            address:exampleFormControlTextarea1.value,
            patientKey:key
        }
       await firebase.database().ref("patients").child(key).set(object)
        Toastify({
            text: "Patient Added",
            duration: 3000
        }).showToast();
        
    }
    else{
        Toastify({
            text: "Please enter correct money between 1 to 100000000",
            duration: 3000
        }).showToast();
    
    }
}
    else{
        Toastify({
            text: "Please enter correct age",
            duration: 3000
        }).showToast();
    }
    patient_name.value = ""
    
    age.value = ""
    phone.value = ""
    money.value=""
    exampleFormControlTextarea1.value=""
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