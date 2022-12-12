// 
let prenom = document.getElementById("prenom");
let form = document.getElementById("form");

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    if(prenom.value){
        localStorage.setItem('prenom', prenom.value);
        window.location.href="exams.html"
    }
})