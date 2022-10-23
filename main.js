
const canvas = document.querySelector("canvas"),
toolBtns = document.querySelectorAll(".tool"), 
fillColor = document.querySelector("#fill-color"),
sizeSlider = document.querySelector("#size-slider"),
colors = document.querySelectorAll(".colors .option"),
colorPicker = document.querySelector("#color-picker"),
clearCanvas = document.querySelector(".clear-canvas"),
saveImage = document.querySelector(".save-img"),
ctx = canvas.getContext("2d");


let prevMouseX, prevMouseY, snapshot, 
isDrawing = false,
selectedTool = "brush",
brushWidth = 5,
selectedColor = "#000";


const startDraw = (e) =>{
    isDrawing = true;
    prevMouseX = e.offsetX; // passing current mouseX position as prevMouseX value
    prevMouseY = e.offsetY; // passing current mouseY position as prevMouseY value

    ctx.beginPath(); // To create new path so the drawing will not start from the pervious point
    ctx.lineWidth = brushWidth; // passing the created virable to change the width (size) of the line.

    ctx.strokeStyle = selectedColor;
    ctx.fillStyle = selectedColor;

    snapshot = ctx.getImageData(0,0, canvas.width, canvas.height);
}

//setting the width and height of the canvas so as to be able to draw in a proper way. 
window.addEventListener("load", () =>{
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    setCanvasBackground();
});

const drawRect = (e) => {
    if(!fillColor.checked){
        return  ctx.strokeRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
    }
    ctx.fillRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
    
}

const drawCircle = (e) =>{
    ctx.beginPath();
    let radius = Math.sqrt(Math.pow((prevMouseX - e.offsetX), 2) + Math.pow((prevMouseY - e.offsetY), 2));
    ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI);
    ctx.stroke();
    fillColor.checked ? ctx.fill(): ctx.stroke();
}

const drawTriangle = (e) =>{
    ctx.beginPath();
    ctx.moveTo(prevMouseX, prevMouseY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY);
    ctx.closePath();
    fillColor.checked ? ctx.fill(): ctx.stroke();
}

const drawLine = (e) =>{
    ctx.beginPath();
    ctx.moveTo(prevMouseX, prevMouseY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}

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

toolBtns.forEach(btn => {
    btn.addEventListener("click", () => { // adding click event to all tool option
        // removing active class from the previous option and adding on current clicked option
        document.querySelector(".options .active").classList.remove("active");
        btn.classList.add("active");
        selectedTool = btn.id;
        console.log(selectedTool);
    });
});

sizeSlider.addEventListener("change", () => brushWidth = sizeSlider.value);

colors.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".options .selected").classList.remove("selected");
        btn.classList.add("selected");
        selectedColor = (window.getComputedStyle(btn).getPropertyValue("background-color"));
    });

});

colorPicker.addEventListener("change", () => {
    colorPicker.parentElement.style.background = colorPicker.value;
    colorPicker.parentElement.click();
});

clearCanvas.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setCanvasBackground();
})

const setCanvasBackground = () =>{
    ctx.fillStyle = "#f5f5f5"; // changing the background color when downloading the image so it won't be transparent
    ctx.fillRect(0, 0, canvas.width, canvas.height); // filling it to the width of the canvas
    ctx.fillStyle = selectedColor; //returning the fillStyle to the selected color which is the same as the brush color.
}


saveImage.addEventListener("click", () => {
    const link = document.createElement("a"); // Creating the <a> element/tag
    link.download = `${Date.now()}.png`; // saving as a (png) format image file
    link.href = canvas.toDataURL(); // to return the data URL of the image.
    link.click(); // once the button is clicked, the image will be downloaded. 
})

canvas.addEventListener("mousedown", startDraw); // drawing when clicking in the mouse
canvas.addEventListener("mousemove", drawing); // drawing when moving the mouse
canvas.addEventListener("mouseup", () => isDrawing = false); // stop drawing when not clicking on the mouse

//Done.
