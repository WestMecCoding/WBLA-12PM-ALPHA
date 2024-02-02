# Project Documentation for Jacob Ploog

## Project Summary
ALPHA team's project was a basic coffee website for the company "Borcelle Coffee", my contribution consisted of creating the overall final presentation powerpoint as well as creating the assets and making sure they were consistent throughout the page, I also did basic help through-out the entire page. For example, me and Jordy collaborated on creating the presentation as well as getting feedback from our team members through out the creation. Within my work on the page I generally assisted with creating the background tile image, as well as imputting the images for the site. Continuing, I also helped by creating the grid system on the nav bar in order to make them be in the center as well as being the same disance from each other. I also collaborated with JP in order to create the layout for the basic website, however, JP did do most of the work.

```
⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡔⠒⠒⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢧⠿⣶⢤⣀⠀⠀⠀⠀⠀⡿⠀⢠⣆⠘⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠈⣷⠈⠻⣦⠑⢲⣤⣤⣠⡇⠀⣿⣿⡆⠈⣿⣆⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠸⡦⠀⠙⢳⡾⠃⠀⣸⣷⣄⢹⣿⠃⠀⢸⣿⡘⢦⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢱⢀⠔⠋⠀⣠⣾⠃⠀⠉⠺⠃⠀⠀⠀⠘⡇⠀⠙⡦⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣏⠞⢹⢠⠋⠉⠁⠀⡀⠀⠀⠀⠀⠀⠀⠹⡄⠀⠀⢼⣦⣀⠀⠀⠀
⠀⠀⠀⢨⡏⠀⡞⢸⡔⢐⡆⠀⠈⠲⣤⠀⠀⠀⠀⠀⢹⡄⠀⠀⠹⣿⠓⠀⠀
⠀⠀⠀⢘⣷⣤⠇⢸⠁⢒⡶⠦⡶⢤⡈⠑⠀⠀⠀⠀⠘⡇⠀⠀⠀⢸⡄⠀⠈
⠀⠀⠀⠘⣿⠏⠀⠀⣳⠟⠛⠋⠀⠀⣿⠓⠶⢤⠀⠀⠀⠙⠀⠀⠀⠈⡅⠀⠀
⠀⠀⠀⡠⠃⠀⠀⢀⡳⠴⣄⣵⡆⢶⣿⡄⠀⣸⠀⠀⠀⠀⡀⠀⠀⠀⡇⠀⠀
⠀⠀⡔⢁⡄⠀⠀⠁⠀⠀⠀⠀⠀⠈⠛⠻⢲⣿⠀⠀⠀⠀⠆⠀⠀⢀⠃⠀⠀
⣠⠊⡠⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠔⢿⡇⠀⠀⠀⢰⠀⠀⠀⢸⠁⠀⠀
⢷⣾⣿⡿⠁⠀⠀⠀⠀⡠⠎⣀⡴⠏⠁⠀⠀⠇⠀⠀⢀⡌⠀⠀⠀⠀⠀⠀⠀
⠀⠙⠿⣁⣀⣀⣤⣴⠞⠚⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⡘⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠉⠙⣏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢹⡦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠸⡗⠀⠀⠀
```
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
## Code Descriptions
>I was not apart of helping with the final JS for the project so there will be no example here.

>HTML Code Example, in this code I helped with creating the nav bar and putting in the header logo image:
```
    <div id="wrapper">
      <div id="logo-header">
        <img
          src="Assets/images/borcelle-logo.PNG"
          alt="Logo"
          width="100%"
          height="100%"
        />
      </div>
      <div id="content">
        <div id="nav">
          <button class="buttons" type="button" onclick="(function(){appearF()})();">
            Founding Story
          </button>
          <button class="buttons" type="button" onclick="(function(){appearM()})();">
            Mission & Values
          </button>
          <button class="buttons" type="button" onclick="(function(){appearP()})();">
            Products & Services
          </button>
          <button class="buttons" type="button" onclick="(function(){appearE()})();">
            Eco-Friendly Practices
          </button>
          <!-- <button class="buttons" type="button" id="lorem">lorem</button>
                <button class="buttons" type="button" id="lorem">lorem</button>
                <button class="buttons" type="button" id="lorem">lorem</button> -->
        </div>
```

>CSS Example 3, in this code I created the grid that the nav buttons and created the logo header with assistance from Jordy:
```
div#logo-header {
    /* margin: auto;
    width: 60%; */
    height: 200px;
    background-color: #F4E9DD;
    background-image: url("../Assets/images/logobg.PNG");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius:2rem 2rem 0 0;
    overflow: hidden;
    margin-top:10px;
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
```