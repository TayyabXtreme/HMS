var tbody=document.getElementById('tbody');
if(localStorage.getItem('userId') == null){
    window.location.href = 'login.html'
}


async function getDoctor(){
    
    await firebase.database().ref("doctors").get()
    .then((snap)=>{
        console.log(snap.val())
        var Categorydata = Object.values(snap.val())
        tbody.innerHTML = ""
        for(var data of Categorydata){
          
          console.log(data)
           var Doctor_name = data.Doctor_name
            var specialization = data.specialization
            var experience = data.experience
            var age = data.age
            var phone = data.phone
            var Email = data.Email
            var key = data.doctorKey
            var a=1;

            tbody.innerHTML += `
            <tr >
											
											<td>${a++}</td>
											<td>${Doctor_name}</td>
											<td>${experience}</td>
											<td>${phone}</td>
											<td>${specialization}</td>
											<td>
												<button type="button" id='${key}' class="btn btn-danger mt-3 mb-0" onClick='deletePatient(this)'><span class="ti-trash"></span> DELETE</button>
												
											</td>
										</tr>
            `



        }
       
        
        


    })
    .catch((e)=>{
        console.log(e)
    })


}

getDoctor()

deletePatient=async(e)=>{
  
    await firebase.database().ref("doctors").child(e.id).remove()
    
    getDoctor()
}


function logout(){
    localStorage.clear()
    window.location.href = 'login.html'
}

