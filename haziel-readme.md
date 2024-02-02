# Project Documentation for Haziel

# Project Summary

### As Javascript and Design Assistant, I helped oversee the design of the project with Dominique on how it looked, as well as assisting Dayana with the creation of the JavaScript. I assisted and helped edit bits of other pieces of code devopled by other members after they were finished, creating slight corrections to fit the aesthetic of the wireframe.
        _
       / \      _-'
     _/|  \-''- _ /
__-' { |          \
    /             \
    /       "o.  |o }
    |            \ ;
                  ',
       \_         __\
         ''-_    \.//
           / '-____'
          /
        _'
      _-'


# Code Example

 ## Section One: assistance towards main page
 ### In terms of helping with the look of the page, I assisted with styling the main images. I didn't wanted to interfere with other members work, espically since it would take too much time to understand how they were trying to approach their section of the project. I've decided I would start to implement my own section, bringing less weight on other members. I would also edit peices of other members code to try and match the theme of the wireframe.

 ### In this example, I centered the images through the use of flexbox, and left notes for other members towards what else might need adjustment to match the wireframe.

<div id="header-image">
    <img src="./Assets/Images/images/borcelle-img-2.PNG" id="photos" alt="" width="150px">
    <img src="./Assets/Images/images/unnamed.png" id="photos" alt=""         width="300px">
    <img src="./Assets/Images/images/borcelle-img-3.PNG" id="photos" alt="" width = "150px">
</div>

                #header-image-container {
    font-family: "Genty Demo Regular";
    flex: 3;
    display: flex;
    flex-direction:column;
    
}
div#header-image {
    display: flex;
    justify-content: space-evenly;
}

#header-image{
    margin: auto;
    width: 100%;
    flex: .5;
    /* use this color rgb(200, 21, 200)or header and main */
    background-color: #F4E9DD;
}

## Section Two: Javascript
### Helping with the Javascript was tricky, since we both has different approaches towards how we wanted to fix the problem. in the end, we chose Dayana's since it was easier to understand and quicker. Initally I wanted to create a single function to change the attributes through a if-else statement, but it was proving to be difficult since it would place the wrong attributes to the wrong properties. Dayana's design was more eaiser to understand, so we've decided to go with hers instead. In the javascript, we would remove the 'hidden' attribute on the button that was clicked, revealing the button that was interacted. we would then add a 'hidden' attribute to every other div, hiding the rest of the text. we did all of this through an onclick fucntion,

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

## section 3: Canvas
### Although it wasn't part of coding, it did help with what we envision for the project. We would use this as a basis towards our project. The canva wireframe was designed by me and Dominique, we aimed to design a aesthetically pleasing outline for the client. This helped create direction within the project.

### here is the link: https://www.canva.com/design/DAF6o40Jlpw/dt3y3I_zHuxACdh_eSpw5g/edit?utm_content=DAF6o40Jlpw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton