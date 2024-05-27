var totalPatient=document.getElementById('totalPatient');
var money=document.getElementById('money');

if(localStorage.getItem('userId') == null){
    window.location.href = 'login.html'
}


function  setValues(){
    firebase.database().ref("patients").get()
    .then((snap)=>{
        var Categorydata = Object.values(snap.val())
        totalPatient.innerHTML = Categorydata.length
        money.innerHTML = ""    
        var payment=0
        for (var data of Categorydata){
            var payment=payment+parseInt(data.money)
            money.innerHTML = "Rs "+payment
        }
    })
    .catch((e)=>{
        console.log(e)
    })
}

setValues()

function logout(){
    localStorage.clear()
    window.location.href = 'login.html'
}
