//if the local storage have not patientKey then it go to the allPatient.html

// Path: about-patient.js
var tobody=document.getElementById('tbody')
if(localStorage.getItem('patientKey') == null){
    window.location.href = 'patients.html'
}

if(localStorage.getItem('userId') == null){
    window.location.href = 'login.html'
}


function setPatient(){
    var patientKey = localStorage.getItem('patientKey')
    firebase.database().ref("patients").child(patientKey).on('value',(data)=>{
        var patientData = data.val()
        var patient_name = patientData.patient_name
        var dob = patientData.dob
        var age = patientData.age
        var phone = patientData.phone
        var money = patientData.money
        var key = patientData.patientKey
        var gender=patientData.gender
        var address=patientData.address

        console.log(patientData)
        tobody.innerHTML = `
        <tr>											
											<td><strong>Name</strong></td>
											<td>${patient_name}</td>
										</tr>
										<tr>
											<td><strong>Date Of Birth</strong> </td>
											<td>${dob}</td>
										</tr>
										<tr>
											<td><strong>Gender</strong></td>
											<td>${gender}</td>
										</tr>
										<tr>
											<td><strong>Address</strong></td>
											<td>${address}</td>
										</tr>
										<tr>
											<td><strong>Phone </strong></td>
											<td>${phone}</td>
										</tr>
										<tr>
											<td><strong>Payment</strong></td>
											<td>Rs.${money}</td>
                                        </tr>	
                                        `
                                        document.getElementById('btns').innerHTML=`<button type="button" id='${patientKey}' class="btn btn-danger mb-3" onclick='deletePatient(this)' ><span class="ti-trash"></span> Delete Patient</button>
                                                                                   <button type="button" class="btn btn-info mb-3" onclick='printfun()'><span class="ti-arrow-down"></span> Print File</button>`

       
    })
        
}

setPatient()





async function deletePatient(e){
    await firebase.database().ref("patients").child(e.id).remove()
    localStorage.removeItem('patientKey')
    window.location.href = 'patients.html'
}






function logout(){
    localStorage.clear()
    window.location.href = 'login.html'
}

var printArea = document.getElementById('printArea');



function printfun(){
    print();
}