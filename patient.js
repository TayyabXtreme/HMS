var tbody=document.getElementById('tbody');


if(localStorage.getItem('userId') == null){
    window.location.href = 'login.html'
}


async function getPatients(){
    
    await firebase.database().ref("patients").get()
    .then((snap)=>{
        console.log(snap.val())
        var Categorydata = Object.values(snap.val())
        tbody.innerHTML = ""
        for(var data of Categorydata){
          
          console.log(data)
            var patient_name = data.patient_name
            var dob = data.dob
            var age = data.age
            var phone = data.phone
            var money = data.money
            var key = data.patientKey

            tbody.innerHTML += `
            <tr>
            <td>
                <div class="custom-control custom-checkbox">
                    <input class="custom-control-input" type="checkbox" id="1">
                    <label class="custom-control-label" for="1"></label>
                </div>
            </td>
            <td>${1}</td>
            <td>${patient_name}</td>
            <td>${age}</td>
            <td>Rs. ${money}</td>
            <td>${dob}</td>
            <td>
                <button type="button" id='${key}' class="btn btn-danger mt-3 mb-0" onClick='deletePatient(this)'><span class="ti-trash"></span> DELETE</button>
                <button type="button" id='${key}' class="btn btn-success mt-3 mb-0" onClick='viewPatient(this)'><span class="ti-trash"></span> View Patient</button>
                
            </td>
        </tr>

            `



        }
       
        
        


    })
    .catch((e)=>{
        console.log(e)
    })


}

getPatients()

deletePatient=async(e)=>{
   // console.log(e.parentNode.parentNode)
    await firebase.database().ref("patients").child(e.id).remove()
    
    getPatients()
}

function viewPatient(e){
    console.log(e.id)
    localStorage.setItem('patientKey',e.id)
    window.location.href = 'about-patient.html'
}

function logout(){
    localStorage.clear()
    window.location.href = 'login.html'
}


