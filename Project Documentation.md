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
Firstly, we need a ```div``` tag then intilizing a class to it and name the class 'contianer'. This div tag will contain all of the itmes on the web page so it will be easier to desing later in CSS by calling the created class. Then, a ```section``` is created which will be utlized to hold all the tools that we need for this drawing website. Inside the the section tag,  there will be the list of options that will appearin the left side of the webstie. For that there will be a need to create another ``` div ```  and initializing a class to it that will be named as a row in order to use t in the CSS to desing the layout of the list. The first row will hold multiple lists that will contain the shapes and the options to fill the shapes.  As shown in the code above, each shape has been created in a list and created a class and an id for each one. For the class it is the same for all shapes as the class will be used to desing the website in the CSS. Meanwhile for the Id, it is an imporatnt for creating the needed funtion to draw the needed shape using JavaScript. Additionally,  ```img``` and ```label``` tags are added to add the icons and names of the shapes in the website. Laslty, the fill option is an ```input``` type which holds the value of ```"checkbox"``` so when checked it will fill the shape. 

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
The code snippet above shows the second option which holds three main items and they are the brush, eraser, and slider which is for changing the size of the brush, shapes, and eraser. Same as the previos code, the ```class``` and ```id``` will be created in order to desing and add the needed function to the option. For the last list in this option which is the slider, it has an input type of range. Thus, in the website the user can slide to increase or decrease the size of the brush, eraser, or shapes. Id has been created to be used in the JavaScript code, and ```min = "1"``` is for makign the minimum size of brush, eraser, and shape to 1. ```max = "45"``` is for setting the maximum size to 45, and the ```value``` is for making the default size of the brush, eraser, and shapes to 10.  

## CSS:

...........


## JavaScript:

..............

# Conclusion:
...........
