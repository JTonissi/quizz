let prenom = document.getElementById("prenom");
let form = document.getElementById("form");
let height = window.innerHeight;
console.log(prenom);
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    if(prenom.value){
        localStorage.setItem('prenom', prenom.value);
        window.location.href="exams.html"
    }
})

// création du loader
let loader = document.createElement("div");
let div1 = document.createElement("div");
let div2 = document.createElement("div");
let animation = setInterval(() => {
// on transforme la hauteur de la div1
    let position = parseInt(div1.style.top);
// position += 2 "égale" position = position +2;    
    position = position + 2;
// top = position en haut
// signe = assignation (tirelire (div1) > la pièce (position))
    div1.style.top = position + "px";
    let heightloader = loader.offsetHeight / 2;
    if(position > height / 2 - heightloader)
        clearInterval(animation);
    console.log (position);    
}, 30);
// mettre des commentaires sur chaque lignes.


// vh = correspond à la hauteur de l'écran (mobile ect...)
loader.style.height = "100vh";
loader.style.backgroundColor = "black";
div1.style.backgroundColor = "yellow";
div2.style.backgroundColor = "white";
div2.innerHTML = "Bienvenue sur le loader";
div2.style.color = "purple";
div2.style.fontSize = "30px";
div2.style.textAlign = "center";
div2.style.fontWeight = "bold";
loader.style.display = "flex";
loader.style.alignItems = "center";
loader.style.justifyContent = "center";
div1.style.position = "absolute";
div1.style.top = "-50px";



// aller chercher le body dans le document (tag = nom de la balise)
// assigner une variable au body - element = un objet / elementS = un tableau d'objets
let body = document.getElementsByTagName("body")[0];
// "" = chaîne de caractère / sans "" = variable
console.log (body);
// ajouter dans le body, le loader qu'on viens de crer
loader.append(div1);
div1.append(div2);
body.append(loader);
//div2 = div 1 /div = loader