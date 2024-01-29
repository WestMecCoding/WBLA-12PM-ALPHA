
// const aboutDiv = document.getElementById("about-us-div");
const foundingDiv = document.getElementById("founding-div");
const missionDiv = document.getElementById("mission-div");
const productsDiv = document.getElementById("products-div");
const ecoDiv= document.getElementById("eco-div");

// console.log("Hello");

function appearF() {
    foundingDiv.classList.remove('hidden');
    missionDiv.classList.add('hidden');
    productsDiv.classList.add('hidden');
    ecoDiv.classList.add('hidden');
    
}

function appearM() {
    foundingDiv.classList.add('hidden');
    missionDiv.classList.remove('hidden');
    productsDiv.classList.add('hidden');
    ecoDiv.classList.add('hidden');
}

function appearP () {
    foundingDiv.classList.add('hidden');
    missionDiv.classList.add('hidden');
    productsDiv.classList.remove('hidden'); 
    ecoDiv.classList.add('hidden');
}
function appearE() {
    foundingDiv.classList.add('hidden');
    missionDiv.classList.add('hidden');
    productsDiv.classList.add('hidden');
    ecoDiv.classList.remove('hidden');

} 



