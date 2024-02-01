# Project Documentation for Juan Plascencia

## Project Summary

We're ALPHA and we created a website for a coffee brewery called Borcelle's Coffee. My role is to administrate the layout of the website and I helped create and re-create the structure of the webpage and I also assisted with fonts, images and file organization.

                        ,     ,
                        |\---/|
                       /  , , |
                  __.-'|  / \ /
         __ ___.-'        ._O|
      .-'  '        :      _/
     / ,    .        .     |
    :  ;    :        :   _/
    |  |   .'     __:   /
    |  :   /'----'| \  |
    \  |\  |      | /| |
     '.'| /       || \ |
     | /|.'       '.l \\_
    || ||             '-'
     '-''-'


### Code Description
> HTML Structure: This is how the structure is laid out.
```html
<body>
    <div id="wrapper">
        <div id="logo-header">
            <img>
        </div>
        
        <div id="content">
            <div id="nav"></div>
            <div id="header-image-container">
                <div id="header-image"></div>
                <div id="about-us-div"></div>
                <div id="main"></div>
            </div>
        </div>
        <div id="footer"></div>
    </div>
    <script></script>
</body>
```
>CSS of HTML Structure: This is how the CSS of the HTML structure looks.

```css
html {
    margin: 5px;
    padding: 0;
    height: 100%;
}
body {
    margin: 5px;
    padding: 0;
    height: 100%;
    background-color: #742D00;
    background-image: url();
    background-size: 240px;
}

div#wrapper {
    margin: auto;
    background-color: #F4E9DD;
    min-height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
    border: 5px solid #742D00;
    box-shadow: 0 6px 4px 4px black;
    border-radius:2rem;
}

div#logo-header {
    height: 200px;
    background-color: #F4E9DD;
    background-image: url();
    background-size: cover;
    background-repeat: no-repeat;
    border-radius:2rem 2rem 0 0;
    overflow: hidden;
    margin-top:10px;
}

div#content {
    flex: 1;
    display: flex;
    flex-direction: row;
}

div#nav {
    padding: .5%;
    flex: 1;
    display: grid;
    grid-template-rows: (1,2fr);
    background-color: #D35E17;
    border-radius: 0 2rem 2rem 0;
    box-shadow: 0 2px 3px 2px black inset;
}

div#main {
    padding: 2%;
    flex: 1;
    background-color: #F4E9DD;
}

div#footer {
    display: flex;
    width: 100%;
    height: 10vh;
    box-sizing: border-box;
    color: #000000;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-weight: 2em;
    font-size: 2rem;
    background-size:250px;
    font-family: "Genty Demo Regular";
}


```