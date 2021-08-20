
const translateButton = document.querySelector("#btn-translate");
const outputMsg = document.querySelector("#output");
const inputField=document.getElementById("txt-input");

var serverURL="https://api.funtranslations.com/translate/ferblatin.json"

function getTranslationURL(text){
    return serverURL+"?"+"text="+text
}

function errorHandler(error){
    console.log("error occured", error);
    alert("error occured, try again")
}

function clickHandler(){
    var input = inputField.value;
    console.log('input is ',input)
   
    if(input===""){
        alert("Type something to translate");
        return;
    }

    fetch(getTranslationURL(input))
    .then(response=>{return response.json()})
    .then(json=>{
        console.log(json.contents.translated)
        outputMsg.innerText=json.contents.translated
    })
    .catch(errorHandler);
}

translateButton.addEventListener("click",clickHandler)
