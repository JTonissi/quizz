// ces 5 premières lignes servent à récupérer l'ID dans URL, 
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
let app = document.getElementById("app");
let title = document.getElementById("title");


fetch('https://qcm.alwayslearn.fr/api/examens/'+id).then(response=>{
    response.json().then(element=>{
        title.innerHTML= element.title;
        console.log(element);

        element.question.forEach(question => {
            let div1 = document.createElement('div');
            div1.classList.add('jumbotron', 'mb-4');
            // ici je crée la question
            let p = document.createElement('p');
            p.innerHTML = question.question;
            // je change question.options par listemaisons
            let listemaisons = question.options;
            // je crée une boucle pour récuperer l'adresse dans la liste des maisons
            for (const adresse in listemaisons) {
                console.log(`${adresse}: ${listemaisons[adresse]}`);
                // je déclare la variable une maison initialisé avec l'objet de mon tableau listemaisons à l'index adresse
                let unemaison = listemaisons[adresse]
                let nomdelapiece = unemaison.option



                // Je crée un bouton style radio
                let input1 = document.createElement('input');
                input1.type = 'radio';
                //input1.id = 'html';
                input1.name = 'fav_language';
                input1.value = 'HTML';
                
                // Ici je déclare les choix de réponse dans le label
                let label1 = document.createElement('label');
                //label1.for = 'html';
                label1.innerHTML = nomdelapiece
                let br1 = document.createElement('br');
        
                
                // Je crée plusieurs nœuds qui relient aux parents spécifié (div mère)
                div1.appendChild(p);
                div1.appendChild(input1);
                div1.appendChild(label1);
                div1.appendChild(br1);
               
                app.appendChild(div1)


            };
            
           
            
        });
       
        
    })
})

/*
comprendre la balise label et input / label , input de type radio (quel est la relation), renommer les variables pour qu'elles soient compréhensibles .
*/



