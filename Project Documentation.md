# Summary of the Project:
This project has been developed using HTML, CSS, and JavaScript. This website is a drawing or paint website that holds many functionalities such as drawing using a different sized and colored brush and selecting a variety of shapes where the shapes can be with fill or without. Additionally, the size of the shapes and colors can be changed as well. There is also an eraser option to erase a specific draw from the canvas. Furthermore, the website provides the ability to clear all the canvas drawings, in addition, to save the drawing as an image.

# Explanation of the Project:

# HTML:

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

# CSS:
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
```CSS
.option :where(span, label){
    cursor: pointer;
    color: darkslategray;
    padding-left: 10px;
}

.option #fill-color{
    cursor: pointer;
    height: 16px;
    width: 16px;
}

.fill{
    padding-left: 1.1rem;
}
```
In these properties, the ```:where``` is a pseudo-class function that takes a selector list as its argument, and selects any element that can be selected by one of the selectors in that list. Both ```span```, and ```label``` classes is selelcted as arguments to style them only rather than styling the whole class that hold them. And for the other properties, other styling changes has been made to meet the suitable requirements for this drawing website such as changing the color, height, and width of the seleced HTML tag. 

```css
.row:first-child{
    text-align: center;
    border: 1px solid lightblue;
    border-radius: 3px;
}

.row:nth-child(2){
    text-align: center;
    border: 1px solid lightblue;
    border-radius: 3px;
}

.row:nth-child(3){
    text-align: center;
    border: 1px solid lightblue;
    border-radius: 3px;
}

```

In the above code, ```:first-child``` is a property to style only the first item in the class ```row``` and same goes to ```.row:nth-child(2)``` and ```.row:nth-child(3)``` where they are used to style the second and third ones. 

```CSS
.option:is(:hover) img{
    filter: invert(17%) sepia(90%) saturate(3000%) hue-rotate(900deg) brightness(100%) contrast(100%);
}

.option:is(:hover, .active) :where(span, label){
    color: blue;
}

#fill-color:checked ~ label{
    color: blue;
}
```
Moving on to another property in CSS which is the hover. The ```hover``` is used to style a specific element once the mouse is hovered into it. For example, if the user hovered into the brush image, the brush will color will be changed indicating that it is under hover. ```.active``` class is used to change the hover setting only if the current item is selected. Thus, one the item is selected from the list such as the brush, the color will be change to blue as specified in the second propriety.

```CSS
#fill-color:checked ~ label{
    color: blue;
}

.option #size-slider{
    width: 100;
    height: 5px;
    margin-top: 10px;
}

.colors .option{
    height: 20px;
    width: 20px;
    border-radius: 50%;
    margin-top: 3px;
    position: relative;
}

.colors .options{
    display: flex;
    justify-content: space-between;
}

.colors .option.selected:before{
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    height: 12px;
    width: 12px;
    background: inherit;
    border-radius: inherit;
    border: 2px solid white;
    transform: translate(-50%, -50%);
}

.colors .option:first-child.selected::before{
    border-color: wheat;
}

.colors .option:nth-child(1){
    background-color: white;
    border: 1px solid lightgray;
}

.colors .option:nth-child(2){
    background-color: black;
}

.colors .option:nth-child(3){
    background-color: red;
}

.colors .option:nth-child(4){
    background-color: green;
}

.colors .option:nth-child(5){
    background-image: linear-gradient(to left top, red, blue, green, yellow, purple, lime, maroon, gray, brown,gold);
}

.buttons button{
    width: 100%;
    color: aliceblue;
    border: none;
    outline: none;
    padding: 11px 0;
    margin-bottom: 13px;
    background: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.5s ease;
    font-size: 0.9rem;
}

.icons{
    width: 22px;
}

.shapes{
    width: 2px;
}

.buttons .clear-canvas{
    color: darkblue;
    border: 1px solid burlywood;
}

.buttons .save-img{
    color: darkblue;
    border: 1px solid burlywood;
}

.clear-canvas:hover{
    background: lightskyblue;
    color: black;
}

.buttons .save-img:hover{
    background: lightskyblue;
    color: black;
}

.option #color-picker{
    opacity: 0;
    cursor: pointer;
}

.drawing-board canvas{
    width: 100%;
    height: 100%;
}
```
There are many similar properties in the classes in the code above which used to style each class or some combined classes in the website. The ```checked``` property in ```fill-color``` will change the color from balck to blue once the fill-color option is checked(selected). ```space-between``` in ```justify-content``` will add space between all the color items evenly. ```position: relative``` places an element relative to its current position without changing the layout around it. ```transition``` is used to make some timed transitions while preforming the styling such as the background color duration transition once it got hovered. The ```inherit``` keyword is used to inherit its parent value styling setting such as background and border-radius keywords that the parent class possess.The ```transform``` property applies a 2D transformation to an element which allows to rotate or scale the element. The other properties have similar styling that have been used many times or used prepreviously throughout the CSS code in order to give the required website styling result. 



# JavaScript:

Now moving on to a major important part for this website as without JavaScript, the website will have no life because no behaviors or functionalities are programmed in order for our elements to behave the way it should. In other words, Without JavaScript, the website is just a piece of HTML structure and CSS design, that is why Javascript is important to add the needed functions accordingly. 

```JavaScript
const canvas = document.querySelector("canvas"),
toolBtns = document.querySelectorAll(".tool"), 
fillColor = document.querySelector("#fill-color"),
sizeSlider = document.querySelector("#size-slider"),
colors = document.querySelectorAll(".colors .option"),
colorPicker = document.querySelector("#color-picker"),
clearCanvas = document.querySelector(".clear-canvas"),
saveImage = document.querySelector(".save-img"),
ctx = canvas.getContext("2d");
```
Firstly, for adding the functions to the website elements, some variables need to be initiliazed in order to do so. In the code above, there are a list of const virables declared. Const virable is a virable that cannot be redeclared or reassigned. In other words, const virable will be used only in the block it is defined in.  First virable in the list is named as "canvas"  which equal to ```document.querySelector("canvas")```. ```document.querySelector``` is used to  find first element that matches the given selector or the set of selectors which is  returned by the querySelector() function. Null is returned if no matches were discovered. In this website case, canvas is the element selected to get the query to find which will be used in the canvas board which has been defind in the HTML file.

The ```canvas``` const variable will help to define a function that will allow for drawing in the website's canvas acording to the mouse pointer. ```toolBtns``` is another const vairable used to get all the queries from the ```.tool``` HTML class which then will be used to create a function accordingly. Only one element can be accessed using the ```querySelector()``` function, however all elements can be accessed using the ```querySelectorAll()``` method. Thus, ```querySelectorAll()``` is used in this case. Same goes to the other const define virables which all will be needed once the sepcific HTML elemetns need to be rpogrammed to add a behavior to add once clicked. The hash ```(#)``` in ```fill-color``` refers to  an element with a specific id attribute unlike the dot "(.)"  which refers to a class name. ```ctx``` const virable is defind to get or return a drawing by using the context method ```getContext("2d")``` in the website's canvas.

```JS
let prevMouseX, prevMouseY, snapshot, 
isDrawing = false,
selectedTool = "brush",
brushWidth = 5,
selectedColor = "#000";
```
Now moving on to another variable declaration type which is ```let```. ```let``` permits to declare variables that are only applicable to the block of code or expression that it is utilised in unlike the const variable type which is the opposite. In this website case, the virables will only need to be used in a scoped block of code that is why let variable is used. Firstly, two variable declared and they are ```prevMouseX```, ```prevMouseY```. These two virables will  help while getting the height and width for the shapes by passing  previous mouse X axis and the previous mouse Y axis.  ```snapshot``` is defind to be used when getting the element pixels data. ```isDrawing``` is a variable defind to initialize a statment to it which is by default making equal to false as initially nothing should be drawing in the website canvas unless the brush or one of the shapes is selected. ```selectedTool``` defind to change the defult selected tool from "brush" to the tool that the user chooses. ```brushWidth``` created to change the brush width/size when the slider option is changed. For now, the defult value for it is set to "5". Lastly,```selectedColor``` is defind to help to change the color from the defult color which is black to the color that the user chooses.

```JS 
const startDraw = (e) =>{
    isDrawing = true;
    prevMouseX = e.offsetX; 
    prevMouseY = e.offsetY; 
    ctx.beginPath(); 
    ctx.lineWidth = brushWidth; 

    ctx.strokeStyle = selectedColor;
    ctx.fillStyle = selectedColor;

    snapshot = ctx.getImageData(0,0, canvas.width, canvas.height);
}
```
Now after defining the essential variables that will be used throught this JavaScript, it is time to add other virables that will be as functions for the tools needed in the website. ```const startDraw``` is a const virable assigned to a fucntion that will trigger an event to start drawing. The ```startDraw``` is a const virable declared as a function that will allow drawing in the website's canvas. The function passes a trigger event "e" as a parameter, which will trigger the fucntion to run the event once triggered. Then, ```isDrawing``` virable will be equal to true to be able to start drawing. ```prevMouseX``` and ```prevMouseY``` is for passing the current mouse X axis and Y axis positions  as prevMouseX and prevMouseY values. ```ctx.beginPath()``` is used for creating new bath to path in the canvas. ```ctx.lineWidth``` is for passing the brush size as the line width. ```ctx.strokeStyle = selectedColor``` and ```ctx.fillStyle = selectedColor;``` are for passing the selected color as the brush's or shape's color and fill. Meanwhile, for ```snapshot``` it is utlized to return the image data object which copis the pixel data using the ```getImageData``` method by passing the ```canvas``` width and height as parameters.

```JS
window.addEventListener("load", () =>{
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    setCanvasBackground();
});
```

Now with the current JavaScript code, the canvas will be cabable of drawing a line (after calling the ```startDraw``` and ```drawing``` functions which will be done later), but as the width and height is not defined, the drawing will not be proper. Thus, Event Listener will be added to set the height and width of the canvas as shown in the code snippet above. The ```addEventListener``` is a built-in JavaScript function that accepts an event to listen for and a second parameter that will be invoked whenever the specified event occurs. After setting the ```canvas``` width and height, the website will be able to draw a proper line after setting the ```offsetWidth``` and ```offsetHeight``` which are  measurements in pixels of the element's CSS width. ```setCanvasBackground();``` is a const defind function that will be created later to set the canvas background color to white when downlaoding the drawing as an image. Thus, the function has been called in here to change the background color with the exact height and width of the canvas.

```JS
const drawRect = (e) => {
    if(!fillColor.checked){
        return  ctx.strokeRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
    }
    ctx.fillRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
    
}
```
Now after defining the const function drawing a line, it it time to define other const functions to draw the shapes one by one beginning with the rectangle shape. First a const function called ```drawRect``` has been defined, and simliar to the previous const function ```e``` has been passed as trigger event parameter. The fucntion has two conditions, if the **"fill color"** option is not checked, the shape will be drawn without a fill, else if it is checked, the shape will be filled with the chosen color that will be as will programmed to do so later. The ```!fillColor.checked``` method is used to check if the checkbox of color fill is not checked so as to retun the needed method of drawing a rectangle accordingly.  ```ctx.strokeRect``` method is used to draw a rectanglerectangle by passing the needed mouse positions as showshown in the code snippet above. Similarly, if the fill color box is chekced, the ```ctx.fillRect``` method will be called to create a filled rectangle. The rectangle will be drawn based on x-cordination, y-cordination, width, and height which is defind on ```ctx.strokeRect``` and ```ctx.fillRect```, and same goes to the other shapes which the passed parameters will be changed according to the shape needed.
```JS
const drawCircle = (e) =>{
    ctx.beginPath();
    let radius = Math.sqrt(Math.pow((prevMouseX - e.offsetX), 2) + Math.pow((prevMouseY - e.offsetY), 2));
    ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI);
    ctx.stroke();
    fillColor.checked ? ctx.fill(): ctx.stroke();
}
```
The second cosnt function needed to be created is ```drawCicle``` const function which from it is name for drawing a circle shape. ```ctx.beginPath();``` method is used to begin a path, or reset the current path. ``` let radius``` is a defind variable to get the radius of the circle which will be calculated using ```Math.sqrt``` method to return the square root number which will allow to draw the circle according to the coordinations needed. The ```ctx.arc``` method creates an arc or curve which is used to create circles or parts of circles. Then ```ctx.stroke();``` method is called to start drawing the circle, and ```fillColor.checked ? ctx.fill(): ctx.stroke();``` is the method to check if color fill is checked, the cirlce will be filled, else the circle will be Drawn without a fill. 

```JS
const drawTriangle = (e) =>{
    ctx.beginPath();
    ctx.moveTo(prevMouseX, prevMouseY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY);
    ctx.closePath();
    fillColor.checked ? ctx.fill(): ctx.stroke();
}
```
The third shape is the tringle shape which is defind as ```drawTriangle``` const function. As usual, ```ctx.beginPath();``` method is needed to create a drawing path, ```ctx.moveTo``` method begins a new sub-path at the point specified by the given (x, y) coordinates which are ```prevMouseX``` and ```prevMouseY```.  The ```ctx.lineTo``` method is used to method adds a new point and creates a line to that point from the last specified point in the canvas which mentioned in the last code line which will draw half of the triangle shape. ```ctx.lineTo``` method will be called again to draw the other half of the tringle by passing the (x, y) coordinates as in the code snippet above which are specific coordinates for drawing the reminang half of the trinalge. ```ctx.closePath();``` is used to close the drawing path. Lastly, if the color fill check box is chekced, ```ctx.fill()``` method will be called to draw a filled trinalge, else the tringle will be without fill. 

```JS
const drawLine = (e) =>{
    ctx.beginPath();
    ctx.moveTo(prevMouseX, prevMouseY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}
```
The list shape in the shapes options is "line". A const fucntion called ```drawLine``` is defind for drawing a line. Similar to the previous shape, ```ctx.moveTo``` begins a new sub-path at the point specified by the given as ```prevMouseX``` and ```prevMouseY```, and ```ctx.lineTo``` will draw a straight line using the ```e.offsetX``` ```e.offsetY``` coordinates. Lastly, ```ctx.stroke();``` is needed to be called to start drawing the straight line. Now after defining all the needed shapes, it is time pass all the shapes to a const fucntion called ```drawing``` which will hold the conditions which will specifiy which shape should be drawn in the canvas based on the option selected. And for that, event listeners are needed to do so which mentioned before, and will be done in the next steps accordingly. 

```JS
const drawing = (e) => {
    if(!isDrawing) return;
    ctx.putImageData(snapshot, 0 , 0);
    if(selectedTool === "brush" || selectedTool === "eraser"){
        ctx.strokeStyle = selectedTool === "eraser" ? "#f5f5f5" : selectedColor;
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    } else if (selectedTool === "rectangle"){
        drawRect(e); 
    } else if (selectedTool === "circle"){
        drawCircle(e);
                
    } else if (selectedTool === "triangle")  {
        drawTriangle(e);
    } else if (selectedTool === "line") {
        drawLine(e);
    }
}
```
Now it is time to create a const virable named as ```drawing```. This const virable will drigger the events of the shape options including the eraser option once one of them is choosed. Then, if one if the condition is true, the specific shape const function will be called to draw the shape or use the eareser option accordingly. The first condition is ```!isDrawing``` which indicate that if the option is not drawing, then return false as the ```isDrawing``` must be selected to start drawing. The ```ctx.putImageData(snapshot, 0 , 0);``` method is used to add the canva's copied data on the canvas (paints data from the given ImageData object(snapshot) onto the canvas). The other conditon is if the selected tool is ```"brush"``` based on the id created on ```HTML``` file, or if the selected tool is ```"eraser"``` which is also based on the creatd id on ```HTML```. Thus, based on the chosen tool, it will draw or earse the drawing. ```ctx.strokeStyle``` method of the Canvas specifies the color, gradient, or pattern to use which already been specified and been specified for teh earser as well to be same as the canvas background color which is ```#f5f5f5``` or ```white smoke```. ```ctx.lineTo(e.offsetX, e.offsetY)``` as mentioned previously is used to draw a line based on the mouse positon (coordinates) given.  ```ctx.stroke();``` is called to strokes (outlines) the current or given path with the current stroke style. 

Then, if the chosen shape is other than brush or erase, the selected shape based on the given id that has been created in the HTML file, const function will be called accordingly. For example, if the selected shape is tringle, the ```drawTrianlge``` const function will be called and the ```e``` passed event will be trigger to draw the shape correspondingly. And same goes on for the other shape that will be called based on the id created in the HTML and the const function that has been created as shown in the code snippet above.


# Conclusion:
In conclusion, This Paint Website mainly utilizes three languages to fully operate and run as it should. The HTML language used to bulid the structure of the website, the CSS language utlized to style the website application to make it appealing and in a proper design. And the last language utilized is JavaScript. JavaScript language in this paint website plays a major role of adding the needed functaionlites of the website as without the JavaScritp code, no behaviors will be seen in the website just a website with a desing will be seen. Overall, the website mostly utilizes The JavaScript  because of the tools that needed to add fucntions to them. Meanwhile, for HTML and CSS 
