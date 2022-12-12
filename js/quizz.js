// ces 3 premières lignes servent à récupérer l'ID dans URL.
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
// on récupere la balise app dans le fichier html et on va chercher le titre aussi.
let app = document.getElementById("app");
// dom = structure de la page HTML
let titlefromdom = document.getElementById("title");
let queryset = undefined;

// fetch = requête VERS et non pas DEMANDE - id = on retourne un examen (sur la liste des examens) - then > on retourne une promesse en cas de succès de la requête
fetch('https://qcm.alwayslearn.fr/api/examens/'+id).then(response=>{
    // le format json : converti une chaine de caractère en objet ou l'inverse > il converti un objet en chaîne de caractère. (suivant la convention json)
    response.json().then(examen=>{
        queryset = examen;
        //  la variable (ou balise) titlefromdom dans
        titlefromdom.innerHTML = examen.title;
        // {c'est un OBJET} [c'est un TABLEAU]
        let questions = examen.question;
        console.log(questions);
        questions.forEach((question, question_id) => {
            let div1 = document.createElement('div');
            div1.classList.add('jumbotron', 'mb-4');
            // ici je crée la question
            let p = document.createElement('p');
            // question.question = intitulé de la question
            p.innerHTML = question.question;
            // je change question.options par question_choices
            div1.appendChild(p);
            let question_choices = question.options;
            console.log(question_choices);
            // je crée une boucle pour récuperer l'adresse dans la liste des maisons
            for (const choice_id in question_choices) {
                console.log(`${choice_id}: ${question_choices[choice_id]}`);
                // je déclare la variable une maison initialisé avec l'objet de mon tableau question_choices à l'index choice_id
                let choice_object = question_choices[choice_id]
                let choice_label = choice_object.option;
                console.log(choice_label);



                // Je crée un bouton style radio
                let input1 = document.createElement('input');
                input1.type = 'radio';
                input1.name = 'fav_language' + question.id;
                input1.value = 'HTML';
                input1.setAttribute("idquestion", question_id);
                input1.setAttribute("id_choice", choice_id);

                // Ici je déclare les choix de réponse dans le label
                let label1 = document.createElement('label');
                label1.innerText = choice_label;
                let br1 = document.createElement('br');
        
                
                // Je crée plusieurs nœuds qui relient aux parents spécifié (div mère)
                div1.appendChild(input1);
                div1.appendChild(label1);
                div1.appendChild(br1);
                app.appendChild(div1)


            };
            
           
            
        });
       
        
    })
})

let form = document.querySelector('form');
form.addEventListener("submit", function(event){
    event.preventDefault();
    let note = 0;
    let nombredequestion = queryset.question.length;
    let resultat = form.getElementsByTagName("input");
    for(let element of resultat) {
        if(element.checked){
            let qid = element.getAttribute("idquestion");
            let cid = element.getAttribute("id_choice");
            if(queryset.question[qid].options[cid].isCorrect)
                note += 1;
        }
    }
    console.log(note);
});

// fonction = function fullname(){}
// calculer la note ensuite l'afficher sur une autre page (voir index début)