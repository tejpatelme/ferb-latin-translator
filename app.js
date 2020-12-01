var txtInput = document.querySelector("#txtInput");
var txtOutput = document.querySelector("#txtOutput");
var btnTranslate = document.querySelector("#btnTranslate");

serverURL = "https://api.funtranslations.com/translate/ferb-latin.json";

function getTraslationURL(inputText) {
    return serverURL + "?text=" + inputText;
}

function errorHandler(error) {
    console.log("error" , error);
    alert("There is something wrong with the server, please try again after some time.")
}

function btnClickHandler() {
    inputText = txtInput.value;
    fetch(getTraslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        txtOutput.innerHTML = json.contents.translated;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", btnClickHandler);