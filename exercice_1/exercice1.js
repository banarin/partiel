let input1 = document.getElementById('infoName')
let input2 = document.getElementById('cart-info')
let input3 = document.getElementById('add')
let btn = document.getElementById('btn')
let alert1 = document.getElementById('alt1')
let alert2 = document.getElementById('alt2')
let alert3 = document.getElementById('alt3')
let input1value = input1.value
let input2value = input2.value
let input3value = input3.value
function verif(){
    if (input1value != "" && input2value!= "") {
       text = "Inscription réussie avec succès"+"Voici vos informations :"+"Nom & Prenom : " + input1value+"CIN : " + input2value+"Address e-mail :" + input3value+
       alert(text);
    }
    else{
        alert1.innerText =  'veuillez renseigner le Nom & Prenom';
        alert2.innerText = 'le champ CIN est obligatoire';
        alert3.innerHTML = 'le champ email est obligatoire';
    }
}