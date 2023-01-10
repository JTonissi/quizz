let app = document.getElementById("app");


fetch('https://qcm.alwayslearn.fr/api/examens').then(response=>
    response.json().then(elements=>{
        elements['hydra:member'].forEach(element => {

            let div1 = document.createElement('div');
            let div2 = document.createElement('div');
            let div3 = document.createElement('div');
            let a = document.createElement('a');

            div1.classList.add('card','mt-2');
            div2.classList.add("card-header");
            div3.classList.add("card-body");
            a.classList.add('btn', 'btn-primary');

            div1.appendChild(div2);
            div1.appendChild(div3);
            div3.appendChild(a);

            div2.innerHTML = element.title;
            a.href= "quizz.html?id="+element.id;
            a.innerHTML="Commencer";

           app.appendChild(div1);

            
        });
    })
)