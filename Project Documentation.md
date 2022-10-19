# Summary of the Project:
This project has been developed using HTML, CSS, and JavaScript. This website is a drawing or paint website that holds many functionalities such as drawing using a different sized and colored brush and selecting a variety of shapes where the shapes can be with fill or without. Additionally, the size of the shapes and colors can be changed as well. There is also an eraser option to erase a specific draw from the canvas. Furthermore, the website provides the ability to clear all the canvas drawings, in addition, to save the drawing as an image.

# Explanation of the Project:

## HTML:

The __HTML__ is used to display the documents or details needed in a web browser. As a result, it is the main important part of this project as it holds the base structure for this website and holds the tags and classes that will be used in the **Cascading Style Sheets and Javascript languages** in order to design and add the needed functionaliies to the website accordingly. 

```HTML
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
    <meta charset="utf-8">
    <title>Drawing Website</title>
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="script.js" defer></script>
    <script src="main.js" defer></script>
    <link rel="icon" type="image/x-icon" href="assets/icons/icon.png">
</html> 
```
In the code snippet above, the decoding type has been declared to manifests as a short string of markup that conforms to a particular syntax so that ensures the website is parsed the same way by different web browsers. In addtion, the language of the webbage and dictionary neutral text has been declared which both are necessary for the website but not compulsory to declare.  Meanwhile, for the head tag, charest used to specifies the character encoding for the HTML which is UTF-8 (UCS Transformation Format 8). Also, title tag is used to add a tittle for the webbage, and link is used to link the CSS and JS document to the website so they can be all functional together. Meta is used to define the width and salce of the website to fit the device's screen width, and the code in line 20 is used to add an icon to the website.

```HTML
<body>
   <div class="container">
       <section class="tools-board">
          <div class="row">
              <label class="title">Shapes</label>
              <ul class="options">
                  <li class="option tool" id="rectangle">
                      <img class="icons" src="assets/icons/rectangle.png"  alt="">
                          <span>Rectangle</span>
                      </li>

                      <li class="option tool" id="circle">
                          <img class="icons" src="assets/icons/circle.png"  alt="">
                          <span>Circle</span>
                      </li>

                      <li class="option tool" id="triangle">
                          <img class="icons" src="assets/icons/triangle.png" alt="">
                          <span>Triangle</span>
                      </li>

                      <li class="option tool" id="line">
                          <img class="icons" src="assets/icons/line.png" alt="">
                          <span>Line</span>
                      </li>

                      <li class="option">
                          <input type="checkbox" id="fill-color">
                          <label class="fill" for="fill-color">Fill Color</label>
                      </li>
                  </ul>
    </div>
```
Firstly, we need a ```div``` tag then intilizing a class to it and name the class 'contianer'. This div tag will contain all of the itmes on the web page so it will be  called later in CSS as the class will help to only design the specific part needed. Then, a ```section``` is created which will be utlized to hold all the tools that we need for this drawing website. Inside the the section tag,  there will be the list of options that will appearin the left side of the webstie. For that there will be a need to create another ``` div ```  and initializing a class to it that will be named as a row in order to use t in the CSS to desing the layout of the list. The first row will hold multiple lists that will contain the shapes and the options to fill the shapes.  As shown in the code above, each shape has been created in a list and created a class and an id for each one. For the class it is the same for all shapes as the class will be used to desing the website in the CSS. Meanwhile for the Id, it is an imporatnt for creating the needed funtion to draw the needed shape using JavaScript. Additionally,  ```img``` and ```label``` tags are added to add the icons and names of the shapes in the website. Laslty, the fill option is an ```input``` type which holds the value of ```"checkbox"``` so when checked it will fill the shape. The ```span``` is used  to create an inline container to mark up the needed text. 

```HTML
<div class="row">
       <label class="title ">Options</label>
       <ul class="options">
           <li class="option active tool" id="brush">
               <img class="icons" src="assets/icons/brush.png" alt="">
               <span>Brush</span>
           </li>
           <li class="option tool" id="eraser">
               <img class="icons" src="assets/icons/eraser.png"alt="">
               <span>Eraser</span>
           </li>
           <li class="option">
               <input type="range" id="size-slider" min="1" max="45" value="10">
           </li>
       </ul>
</div>
```
The code snippet above shows the second option which holds three main items and they are the brush, eraser, and slider which is for changing the size of the brush, shapes, and eraser. Same as the previos code, the ```class``` and ```id``` will be created in order to design and add the needed function to the option. For the last list in this option which is the slider, it has an input type of range. Thus, in the website the user can slide to increase or decrease the size of the brush, eraser, or shapes. Id has been created to be used in the JavaScript code, and ```min = "1"``` is for making the minimum size of brush, eraser, and shape to 1. ```max = "45"``` is for setting the maximum size to 45, and the ```value``` is for making the default size of the brush, eraser, and shapes to 10.  

```HTML
<div class="row colors">
        <label class="title">Colors</label>
    <ul class="options">
            <li class="option"></li>
            <li class="option selected"></li>
            <li class="option "></li>
            <li class="option"></li>
            <li class="option">
                <input type="color" id="color-picker" value="blue">
            </li>
        </ul>
</div>

<div class="row buttons">
    <button class="clear-canvas">Clear Canvas</button>
    <button class="save-img">Save as Image</button>
</div>
```
in the code above, there are two rows created in the first section and they are ```row colors``` and ```row buttons```. From their names, one row is used to hold the list of colors, and the other one is for the two buttons that will be used to clear the drawing in the canvans or saving the drawing in the canvas as an imag. For the colors, the list one is an input type which will be as a color picker, and for this the id is initialized in order to create the need function for that in the JavaScript. ```'option selected'``` class is used to put the thrid color option as the defult one. Moreover, for the color picker, the value is sued to but the devult color for it as blue.

```HTML
 <section class="drawing-board">
     <canvas></canvas>
 </section>
```
Finally, in the HTML code, the last created section is used for the drawing board. The ```<canvas>``` tag in HTML is used to draw graphics on the web page using JavaScript.

## CSS:
Now moving on to the CSS part after finsihing the HTML part and create the structur of the drawing website. The CSS will be used to style the webstie by using the classes that has been create. Each class will be called in CSS to syle the sections and rows as required accordingly. 

```CSS
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: lightblue;
}
```

Firstly, the font has been customized and in order to that, there is a need to import the chosen fonts from the particular website. After that, the ```margin```, ```padding```, ```box-sizing```, and ```font-family``` properties has been set to style our font as needed.  Furthermore, some properties are needed to style the whole website which is in ```body``` tag. Thus, the display set to flex so this will arrange the elements automatically in a responsive manner. Also, the items and contents have been styled to be in the center. Height and background color is also set to meet the needed requirements style for this website.

```CSS
section{
    background: whitesmoke;
    border-radius: 7px;
}

.tools-board{
    width: 210px;
    padding: 15px 22px 0 ;
}

.tools-board .row{
    margin-bottom: 20px;
}

.row .options{
    list-style: none;
    margin: 10px 0 0 5px;
}

.row .options .option{
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}
```
in the code above, there are four style properties. The first property is the section which hold all the shapes, options, colors, and buttons. The background color of the section is changed to whitesmoke and some spacing has been done using ```padding```. ```padding``` is used to create some space between the elements inside a tag so it looks more organized and appealing. The ```px``` is a sizing unit usually used for small adjustments. There are three elemetns padding in the section, the top padding is ```15px``` the right padding is ```22px``` and the bottom padding is ```0```.  The second property is for the tools-board, which holds only the shapes and fill tools. The ```width``` has been change to 210px and the ```padding``` (spacing) has been adjusted as well. The thrid property is a combination of two html tags for the ```section``` and ```row```, and that is how to combine two properties to style or design them both at once instead of a separate design for each. The ```margin``` is  used to create space around elements, outside of any defined borders. In this, the margin only used to space the bottom part which is change to 20px. The last two properties are used to style the row, options, and option. ```list-style``` is used to define the style of the list since the options or tools are put in a ```li``` tags as seen in the HTML code. In the case of this website , it is set to none as there is no need to put them as a style such as crile or square list. The ```cursor``` property specifies the mouse cursor to be displayed when pointing over an element, and for this the pointer mouse shape is used.


## JavaScript:

..............

# Conclusion:
...........
