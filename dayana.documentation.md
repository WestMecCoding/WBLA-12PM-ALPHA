# Project Documentation for Dayana

## Project Summary 
Our team "Alpha" made an informative page form Borcelle Coffee. 
We used a single page to contain all the information and images 
provided to use using buttons.

### Code Description

> The main div in wich all the seperate content/topics is stored.
every div has its class of 'main-divs' making it so that when a 
color or size is applied to one then it's applied to all. They 
were all given classes of 'show' and 'hidden' as well to make 
the onclick function work.

```html
   <div id="main">
            <div>
              <div class="main-divs show" id="founding-div">
                <h1 id="founding-text">Founding Story</h1>
                <p class="main-text">
                  Borcelle Coffee Roastery was established by a group of coffee
                  aficionados and culinary experts who shared a passion for
                  quality, nostalgia, and wellness. They recognize a growing
                  demand for plant-based options and a yearning for a throwback
                  dining experience, leading them to create a space where these
                  elements can harmoniously blend.
                </p>
              </div>
            </div>
            <div>
              <div class="main-divs hidden show" id="mission-div">
                <h1 id="mission-text">Our Mission & Values</h1>
                <p class="main-text">
                  The company's mission is to offer a unique dining experience
                  that promotes health and sustainability. Its vision is to
                  become a haven for coffee lovers and health conscious diners.
                  Where the past's charm meets the future's sustainability.
                </p>
              </div>
            </div>
    <div>
```

> This css I made is in its own style page, dedicated to the 
main-divs' content and classes. withe the classes I was able 
to control the color, width, border, and more of all the 
divs contained inside of the body.

```css
h1 {
    padding: .5%;
    background-color: #F2AE1C;
    text-align: center;
    color: #742D00;
    border-radius: 10px
}

.main-text{
color: #742D00;
margin: auto;
margin-top: 0%;
margin-bottom: 1.5%;
font-size: 1.7em;
font-family: 'Gliker';
}

div.show {
    display: block;
}
div.hidden {
    display: none;
}
```

> In the Javascript I put every main div as a const with an id.
With that I was able to create functions for every button, and 
made them correspend to the function names, for example; the
our mission button has a function of "appearM", wich removes
the hidden function on the "mission-div", and adds the hidden
to the rest of the divs. That way only the mission-div will 
appear.

```Javascript
const foundingDiv = document.getElementById("founding-div");
const missionDiv = document.getElementById("mission-div");
const productsDiv = document.getElementById("products-div");
const ecoDiv= document.getElementById("eco-div");

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
```
