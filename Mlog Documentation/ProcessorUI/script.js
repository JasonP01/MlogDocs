//####################################################################################################################################
// add instruction function
//####################################################################################################################################
const buttons = document.querySelectorAll('.addItems');
buttons.forEach(button => {
    button.addEventListener('click', () => addInstruction(button))
});
    
function addInstruction(button){
    if (typeof button == 'string'){
        buttons.forEach(bbuton => {
            if (bbuton.textContent == button){
                button = bbuton
            }
        })

    }
    buttonText = button.textContent;
    divParent = button.parentElement;
    // console.log('divParent')
    // console.log(divParent)
    type = divParent.classList[0];
    // console.log('type')
    // console.log(type)
    closeWizard();
    
    //Switch for every instruction type
    switch (buttonText) {
        case 'Read':
            code = `<span>read</span>
                    <span class="editable iNo" contenteditable="true">result</span>
                    <span>=</span>
                    <span class="editable iNo" contenteditable="true">cell1</span>
                    <span>at</span>
                    <span class="editable iNo" contenteditable="true">0</span>`
            break;
        case 'Write':
            code = `<span>write</span>
                    <span class="editable iNo" contenteditable="true">result</span>
                    <span>=</span>
                    <span class="editable iNo" contenteditable="true">cell1</span>
                    <span>at</span>
                    <span class="editable iNo" contenteditable="true">0</span>`
            break;
        case 'Draw':
            code = `<span class="editable iNo" contenteditable="true" onclick="popUpMenu(event,'drawMenu')">clear</span>
                    <span class="toggleableField" id="field1" style=display:block;>r</span>
                    <span class="editable iNo toggleableField" id="field1Value" contenteditable="true" style=display:block;>0</span>
                    <span class="toggleableField" id="field2" style=display:block;>g</span>
                    <span class="editable iNo toggleableField" id="field2Value" contenteditable="true" style=display:block;>0</span>
                    <span class="toggleableField" id="field3" style=display:block;>b</span>
                    <span class="editable iNo toggleableField" id="field3Value" contenteditable="true" style=display:block;>0</span>
                    <span class="toggleableField" id="field4">a</span>
                    <span class="editable iNo toggleableField" id="field4Value" contenteditable="true">0</span>
                    <span class="toggleableField" id="field5">a</span>
                    <span class="editable iNo toggleableField" id="field5Value" contenteditable="true">0</span>
                    <span class="toggleableField" id="field6">a</span>
                    <span class="editable iNo toggleableField" id="field6Value" contenteditable="true">0</span>`
            break;
        case 'Print':
            code = `<span class="editable iNo" contenteditable="true">"frog"</span>`
            break;
        case 'Format':
            code = `<span class="editable iNo" contenteditable="true">"frog"</span>`
            break;
        case 'Draw Flush':
            code = `<span>to</span>
                    <span class="editable blockControl" contenteditable="true">display1</span>`
            break;
        case 'Print Flush':
            code = `<span>to</span>
                    <span class="editable blockControl" contenteditable="true">message1</span>`
            break;
        case 'Get Link':
            code = `<span class="editable blockControl" contenteditable="true">result</span>
                    <span>= link#</span>
                    <span class="editable blockControl" contenteditable="true">0</span>`
            break;
        case 'Control':
            code = `<span>set</span>
                    <span class="editable blockControl" contenteditable="true" onclick="popUpMenu(event,'controlMenu')">enabled</span>
                    <span id="field1">of</span>
                    <span class="editable blockControl" id="field1Value" contenteditable="true">block1</span>
                    <span class="toggleableField" id="field2" style=display:block;>to</span>
                    <span class="editable blockControl toggleableField" id="field2Value" contenteditable="true" style=display:block;>0</span>
                    <span class="toggleableField" id="field3">y</span>
                    <span class="editable blockControl toggleableField" id="field3Value" contenteditable="true">0</span>
                    <span class="toggleableField" id="field4">to</span>
                    <span class="editable blockControl toggleableField" id="field4Value" contenteditable="true">0</span>`
            break;
        case 'Radar':
            code = `<span>from</span>
                    <span class="editable blockControl" contenteditable="true" id="field1Value">turret1</span>
                    <span>target</span>
                    <span class="editable blockControl" contenteditable="true" id="field2Value" onclick="popUpMenu(event,'radarMenuTarget')">enemy</span>
                    <span>and</span>
                    <span class="editable blockControl" contenteditable="true" id="field3Value" onclick="popUpMenu(event,'radarMenuTarget')">any</span>
                    <span>and</span>
                    <span class="editable blockControl" contenteditable="true" id="field4Value" onclick="popUpMenu(event,'radarMenuTarget')">any</span>
                    <span>order</span>
                    <span class="editable blockControl" contenteditable="true" id="field5Value">1</span>
                    <span>sort</span>
                    <span class="editable blockControl" contenteditable="true" id="field6Value" onclick="popUpMenu(event,'radarMenuSort')">distance</span>
                    <span>output</span>
                    <span class="editable blockControl" contenteditable="true" id="field7Value">result</span>`
            break;
        case 'Sensor':
            code = `<span class="editable blockControl" contenteditable="true">result</span>
                    <span>=</span>
                    <span class="editable blockControl dontInclude" contenteditable="true">@copper</span>
                    <img src="image/pencil.png" alt="" onclick="popUpMenu(event,'sensorMenu')" class="pencilMenu">
                    <span>in</span>
                    <span class="editable blockControl" contenteditable="true">block1</span>`
            break;
        case 'Set':
            code = `<span class="editable operation" contenteditable="true">result</span>
                    <span>=</span>
                    <span class="editable operation" contenteditable="true">a</span>`
            break;
        case 'Operation':
            code = `<span class="editable operation" contenteditable="true">result</span>
                    <span>=</span>
                    <span class="editable operation" contenteditable="true">a</span>
                    <span class="editable operation dontInclude" contenteditable="true" onclick="popUpMenu(event,'opMenu')">*</span>
                    <span class="editable operation" contenteditable="true">b</span>`
            break;
        case 'Lookup':
            code = `<span class="editable operation" contenteditable="true" id="field1Value">result</span>
                    <span>=</span>
                    <span>lookup</span>
                    <span class="editable operation" contenteditable="true" id="field2Value" onclick="popUpMenu(event,'lookupMenu')">item</span>
                    <span>#</span>
                    <span class="editable operation" contenteditable="true" id="field3Value">0</span>`

            break;
        case 'Pack Color':
            code = `<span class="editable operation" contenteditable="true">result</span>
                    <span>=</span>
                    <span>pack</span>
                    <span class="editable operation" contenteditable="true">1</span>
                    <span class="editable operation" contenteditable="true">0</span>
                    <span class="editable operation" contenteditable="true">0</span>
                    <span class="editable operation" contenteditable="true">1</span>`
            break;
        case 'Wait':
            code = `<span class="editable flowControl" contenteditable="true">result</span>
                    <span>sec</span>`
            break;
        case 'Stop':
            code = ``
            break;
        case 'End':
            code = ``
            break;
        case 'Jump':
            code = `<span>if</span>
                    <span class="editable flowControl toggleableField" id="field2Value" contenteditable="true" style=display:block;>x</span>
                    <span class="editable flowControl dontInclude" id="field3Value" onclick="popUpMenu(event,'jumpMenu')">not</span>
                    <span class="editable flowControl toggleableField" id="field4Value" contenteditable="true" style=display:block;>false</span>
                    <div class="jumpTo">
                        <span>Jump To</span>
                        <span class="editable flowControl dontInclude" id="field1Value" contenteditable="true" draggable="false">-1</span>
                    </div>
                    <canvas class="jumpArrow" width=60></canvas>
                    <img src="image/logic-node.png" alt="" class="jumpArrowTriangle" draggable="false">`
            break;
        case 'Unit Bind':
            code = `<span>type</span>
                    <span class="editable unitControl" contenteditable="true" onclick="popUpMenu(event,'ubindMenu')">@poly</span>`
            break;
        case 'Unit Control':
            code = `<span class="editable unitControl" contenteditable="true" onclick="popUpMenu(event,'ucontrolMenu')">move</span>
                    <span class="toggleableField" id="field1" style=display:block;>x</span>
                    <span class="editable unitControl toggleableField" id="field1Value" contenteditable="true" style=display:block;>0</span>
                    <span class="toggleableField" id="field2" style=display:block;>y</span>
                    <span class="editable unitControl toggleableField" id="field2Value" contenteditable="true" style=display:block;>0</span>
                    <span class="toggleableField" id="field3">x</span>
                    <span class="editable unitControl toggleableField" id="field3Value" contenteditable="true">0</span>
                    <span class="toggleableField" id="field4">y</span>
                    <span class="editable unitControl toggleableField" id="field4Value" contenteditable="true">0</span>
                    <span class="toggleableField" id="field5">y</span>
                    <span class="editable unitControl toggleableField" id="field5Value" contenteditable="true">0</span>`
            break;
        case 'Unit Radar':
            code = `<span>target</span>
                    <span class="editable unitControl" contenteditable="true" id="field2Value" onclick="popUpMenu(event,'radarMenuTarget')">enemy</span>
                    <span>and</span>
                    <span class="editable unitControl" contenteditable="true" id="field3Value" onclick="popUpMenu(event,'radarMenuTarget')">any</span>
                    <span>and</span>
                    <span class="editable unitControl" contenteditable="true" id="field4Value" onclick="popUpMenu(event,'radarMenuTarget')">any</span>
                    <span>order</span>
                    <span class="editable unitControl" contenteditable="true" id="field5Value">1</span>
                    <span>sort</span>
                    <span class="editable unitControl" contenteditable="true" id="field6Value" onclick="popUpMenu(event,'radarMenuSort')">distance</span>
                    <span>output</span>
                    <span class="editable unitControl" contenteditable="true" id="field7Value">result</span>`
            break;
        case 'Unit Locate':
            code = `<span>find</span>
                    <span class="editable unitControl" contenteditable="true" onclick="popUpMenu(event,'ulocateFindMenu')">building</span>
                    <span class="toggleableField" id="field1" style=display:block;>group</span>
                    <span class="editable unitControl toggleableField" contenteditable="true" id="field1Value" style=display:block; onclick="popUpMenu(event,'ulocateGroupMenu')">core</span>
                    <span class="toggleableField" id="field2" style=display:block;>enemy</span>
                    <span class="editable unitControl toggleableField" contenteditable="true" id="field2Value" style=display:block;>true</span>
                    <span class="toggleableField" id="field3">ore</span>
                    <span class="editable unitControl toggleableField" id="field3Value" contenteditable="true">@copper</span>
                    <img src="image/pencil.png" alt="" id="field3" onclick="popUpMenu(event,'sensorMenu')" class="pencilMenu toggleableField">
                    <span>outX</span>
                    <span class="editable unitControl" contenteditable="true">outx</span>
                    <span>outY</span>
                    <span class="editable unitControl" contenteditable="true">outy</span>
                    <span>found</span>
                    <span class="editable unitControl" contenteditable="true">found</span>
                    <span>building</span>
                    <span class="editable unitControl" contenteditable="true">building</span>`
            break;
        default:
            code = `<span>if you see this that means something went 
                    wrong, refresh or contact me</span>`
    }
    
    if (document.querySelector('.container')){
        containers = document.querySelectorAll('.container')
    }else {
        containers = document.querySelectorAll('.placeHolder')
    }
    const lastContainer = containers[containers.length - 1];
    lastContainer.insertAdjacentHTML('afterend', `
        <div class="container">
            <div class="${type}-container">
                <div class="block-header">
                    <span class="headerText">${buttonText}</span>
                    <div class="controls">
                        <span id="lineNumber">1</span>
                        <img src="image/copy.png" alt="" onclick="copy(event)" class="copyButton">
                        <span class="close" onclick="Delete(event)">&times;</span>
                    </div>
                </div>
                <div class="block-content">
                    <div class="code">
                        ${code}
                    </div>
                </div>
            </div>
        </div>`
    );
    updateLineNumber();

    };

//count and update line number on instruction

function updateLineNumber() {
    let jumpIns = [];
    containers = document.querySelectorAll('.container');
    containers.forEach((containerr, index) => {
        const lineNumberElement = containerr.querySelector('#lineNumber');
        if (lineNumberElement) {
            lineNumberElement.textContent = index;
        }
        if (!containerr.hasDown){
            MouseDown(containerr.querySelector('.block-header'),containerr)
        }
        if (!containerr.hasDownJump && containerr.querySelector('.jumpTo')){
            MouseDown(containerr.querySelector('.jumpArrowTriangle'),containerr)
        }
        if ((containerr.querySelector('.headerText')).textContent == 'Jump'){
            jumpIns.push(containerr)
        }
    });
    updateJumpArrow(jumpIns)
    // console.log(jumpIns);
}

    // JUMP ARROW VISUAL (WIP)
function updateJumpArrow(jumpIns) {
    jumpIns.forEach(jump => {
        const canvas = jump.querySelector('.jumpArrow');
        // console.log(canvas);

        const ctx = canvas.getContext('2d');
        const containerrRect = (jump.closest('.container')).getBoundingClientRect();
        const destinations = document.querySelectorAll('#lineNumber');
        let destinationTarget; 
        destinations.forEach(destination => {
            if (destination.textContent == (jump.querySelector('#field1Value')).textContent) {
                destinationTarget = destination.closest('.container')
            }
        })
        const desRect = destinationTarget?.getBoundingClientRect(); 
        let distance = (containerrRect.top + containerrRect.height / 2) - (desRect?.top + desRect?.height / 2)
        const containerrY = containerrRect.height / 3; 
        if (distance > 0){
            canvas.style.bottom = `10%`
            canvas.style.top = ''
        }else {
            canvas.style.top = `10%`
            canvas.style.bottom = ''
        }
        canvas.style.left = ''
        distance = Math.abs(distance)
        canvas.height = distance+20
        canvas.width = 100

        // im so lazy so optimize this, point is it works
        ctx.strokeStyle = 'white'
        ctx.lineWidth = 5
        if (canvas.style.bottom === ''){
            ctx.beginPath()
            ctx.moveTo(10, distance+10)
            ctx.bezierCurveTo(100, distance/0.95, 100, distance/1024, 0, 10)
            ctx.stroke()
            ctx.closePath()
            ctx.beginPath()
            const bottom = distance+20
            ctx.moveTo(15,bottom - 5)
            ctx.lineTo(15,bottom - 15)
            ctx.lineTo(5,bottom - 10)
            ctx.closePath()
            ctx.fillStyle = 'white';
            ctx.fill()
            ctx.stroke();
        } else {
            ctx.beginPath()
            ctx.moveTo(0, distance + 10)
            ctx.bezierCurveTo(100, distance/1.05, 100, distance/1024, 10, 10)
            ctx.stroke()
            ctx.closePath()
            ctx.beginPath()
            ctx.moveTo(15,5)
            ctx.lineTo(15,15)
            ctx.lineTo(5,10)
            ctx.closePath()
            ctx.fillStyle = 'white';
            ctx.fill()
            ctx.stroke();
        }
    // ctx.quadraticCurveTo(100, distance/2, 0, 0);
    })
}
    
//####################################################################################################################################
// instructions controls function
//####################################################################################################################################
function Delete(e) {
    const parentContainer = e.target.closest('.container');
    if (parentContainer) {
        parentContainer.remove();
    }
    updateLineNumber();
}

function copy(e) {
    const parentContainer = e.target.closest('.container');
    if (parentContainer) {
        const copyCode = parentContainer.outerHTML; 
        parentContainer.insertAdjacentHTML('afterend', copyCode)
    }
    updateLineNumber();
}

//####################################################################################################################################
// wizard function 
//####################################################################################################################################
function closeWizard() {
    document.getElementById('wizardMenu').style.display = 'none';
}

function openWizard() {
    document.getElementById('wizardMenu').style.display = 'flex';
}

function openHelpWizard() {
    document.getElementById('helpMenu').style.display = 'flex';
}

function closeHelpWizard() {
    document.getElementById('helpMenu').style.display = 'none';
}

//####################################################################################################################################
// Keybinds
//####################################################################################################################################
keybindMap = {
    '1': 'Read',
    '2': 'Write',
    '3': 'Draw',
    '4': 'Print',
    '5': 'Format',
    'q': 'Draw Flush',
    'w': 'Print Flush',
    'e': 'Get Link',
    'r': 'Control',
    't': 'Radar',
    'y': 'Sensor',
    'a': 'Set',
    's': 'Operation',
    'd': 'Lookup',
    'f': 'Pack Color',
    'z': 'Wait',
    'x': 'Stop',
    'c': 'End',
    'v': 'Jump',
    'u': 'Unit Bind',
    'i': 'Unit Control',
    'o': 'Unit Radar',
    'p': 'Unit Locate',
}
document.addEventListener('keydown',(e) =>{
    const wizardMenu = document.getElementById('wizardMenu');
    const helpMenu = document.getElementById('helpMenu');
    const isVisible = wizardMenu.style.display === 'flex' || helpMenu.style.display === 'flex';
    if ((e.key === 'Escape' && isVisible) || (isVisible && e.key === 'F2')) {
        closeWizard();
        closeHelpWizard();
        // console.log('work');
    }else if (e.key === 'F2' && !isVisible) {
        document.activeElement.blur();
        // console.log('work1');
        openWizard();
    }else if (isVisible) {
        if (keybindMap[e.key]){
            addInstruction(keybindMap[e.key])
        }
    }
    if (e.key === 'Enter') {
        e.preventDefault
        document.activeElement.blur();
    }
    if (!isVisible) {
        if (e.ctrlKey && e.altKey && e.key === 's'){
            EnableCursor();
        }else if (cursorContainer){
            if ((e.key === 'ArrowUp' || e.key === 'ArrowDown') && !e.altKey){
                e.preventDefault();
                document.activeElement.blur();
                moveCursor(e);
            }else if (e.shiftKey){
                selectContainer();
            }else if (e.key === 'Escape'){
                document.activeElement.blur();
                deselectContainer();
            }else if (e.key === 'Tab' ||(e.altKey && (e.key === 'ArrowRight' || e.key === 'ArrowLeft'))){
                e.preventDefault();
                focusNextField(e.key);
            }else if (e.key === 'Delete' && document.activeElement.tagName == 'BODY'){
                document.activeElement.blur();
                deleteContainer();
            }else if (e.ctrlKey && e.key === 'c'){
                document.activeElement.blur();
                copyContainer();
            }else if (e.ctrlKey && e.key === 'v'){
                document.activeElement.blur();
                pasteContainer();
            }else if (e.ctrlKey && e.key === 'x'){
                document.activeElement.blur();
                cutContainer();
            }else if (e.ctrlKey && e.key === 'a' && document.activeElement.tagName == 'BODY'){
                deselectContainer();
                e.preventDefault();
                document.activeElement.blur();
                selectAllContainers();
            }else if(e.altKey && (e.key === 'ArrowUp' || e.key === 'ArrowDown')){
                console.log('work');
                document.activeElement.blur();
                moveContainer(e.key);
            }
        }
    }
})


//####################################################################################################################################
// instruction and jump arrow Drag Event,
//####################################################################################################################################
let elementDragged;
let closestContainer = null;
let offsetX, offsetY, isDragging, isDraggingJump = false;
let counter = 0;
let lastX;
let lastY;

function getMouseCoords(e) {
    if (e.type === 'mousemove' || e.type === 'mousedown' || e.type === 'mouseup') {
        x = e.clientX;
        y = e.clientY;
    } else if (e.type === 'touchmove' || e.type === 'touchstart' || e.type === 'touchend') {
        try {
            x = e.touches[0].clientX;
            y = e.touches[0].clientY;
            lastX = x;
            lastY = y;
        } catch(error) {
            x = lastX
            y = lastY
        }
    }
    sy = y + window.scrollY
    return {x, y, sy}
}

let isScrollingUp = false;
let isScrollingDown = false;

function scrollPage() {
    if (isScrollingUp && (isDragging || isDraggingJump)) {
        window.scrollBy(0, -10);
        requestAnimationFrame(scrollPage);
    }
    if (isScrollingDown  && (isDragging || isDraggingJump)) {
        window.scrollBy(0, 10);
        requestAnimationFrame(scrollPage);
    }
}

function isScroll(y){
    if (y < 100) {
        if (!isScrollingUp) {
            isScrollingUp = true;
            scrollPage();
        }
    } else {
        isScrollingUp = false;
    }
    if (y > (window.innerHeight - 100)) {
        if (!isScrollingDown) {
            isScrollingDown = true;
            scrollPage();
        }
    } else {
        isScrollingDown = false;
    }
}

const handleMove = (e) => {
    (document.getElementById('debugText2')).textContent = isDragging;
    if (isDragging) {
        let {x, y, sy} = getMouseCoords(e)
        
        isScroll(y)
        
        closestContainer = null;
        let nY = y - 10;
        
        while (!closestContainer && nY > 0) {
            const elements = document.elementsFromPoint(window.innerWidth / 2, nY);
            for (const tes of elements) {
                if (tes !== elementDragged && tes.classList.contains('container')) {
                    closestContainer = tes;
                    break; 
                }
            }
            nY -= 30;
        }
        if (!closestContainer){
            closestContainer = document.querySelector('.placeHolder')
        }
        
        (document.getElementById('debugText8')).textContent = closestContainer?.textContent;
        let preview = closestContainer.nextSibling
        if (preview.className !== 'placementPreview'){
            (document.querySelector('.placementPreview'))?.remove();
            closestContainer.insertAdjacentHTML('afterend', `<div class="placementPreview" style=height:${(elementDragged.offsetHeight-40)}px;></div>`)
        }

        (document.getElementById('debugText6')).textContent = x;
        (document.getElementById('debugText7')).textContent = y;
        elementDragged.style.left = `${x - offsetX}px`;
        elementDragged.style.top = `${sy - offsetY}px`;
        elementDragged.style.position = 'absolute'
        elementDragged.style.zIndex = '2';
        let canvas = elementDragged.querySelector('.jumpArrow')
        if (canvas){
            ctx = elementDragged.querySelector('.jumpArrow').getContext('2d')
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }else if (isDraggingJump) {
        let {x, y, sy} = getMouseCoords(e)

        isScroll(y)
        
        elementDragged.style.left = `${x - offsetX}px`;
        elementDragged.style.top = `${sy - offsetY}px`;
        elementDragged.style.position = 'absolute'
        elementDragged.style.zIndex = '2';
        elementDragged.style.transform = 'rotate(180deg)'
        
        jump = elementDragged.closest('.container')
        arrow = jump.querySelector('.jumpArrowTriangle')
        canvas = jump.querySelector('.jumpArrow')
        
        jumpRect = jump.getBoundingClientRect()
        arrowRect = arrow.getBoundingClientRect()
        arrowX = arrowRect.left + arrowRect.width / 2
        arrowY = arrowRect.top + arrowRect.height / 2
        jumpRectRight = jumpRect.right
        jumpRectLeft = jumpRect.left
        jumpRectMiddle = jumpRect.bottom - jumpRect.height / 2
        canvasWidth = arrowX - jumpRectRight
        AcanvasWidth = Math.abs(canvasWidth)
        // console.log(x);
        // console.log(jumpRectRight);
        canvasHeight = arrowY - jumpRectMiddle
        AcanvasHeight = Math.abs(canvasHeight)
        let curveTo;
        let moveTo;
        let plus = 0
        let q3 = false
        if (canvasHeight < 0) {
            canvas.style.bottom = `5%`
            canvas.style.top = ''
            moveTo = [
                0, AcanvasHeight + 20
            ]
            curveTo = [
                70, AcanvasHeight - 20,
                AcanvasWidth + 70, 20,
                AcanvasWidth + 10, 10
            ]
            plus = 40
        } else {
            
            if (canvasWidth > 0) {
                moveTo = [
                    0, 10
                ]
                curveTo = [
                    70 , 20,
                    AcanvasWidth + 70, AcanvasHeight + 20,
                    AcanvasWidth + 10, AcanvasHeight
                ]
                plus = 40
            } else {
                q3 = true
                moveTo = [
                    AcanvasWidth + 5, 10
                ]
                curveTo = [
                    AcanvasWidth + 70, 20,
                    70, AcanvasHeight + 20, 
                    15, AcanvasHeight
                ]
                plus = 0
            }
            canvas.style.top = `5%`
            canvas.style.bottom = ''

        }
        canvas.height = Math.abs(canvasHeight) + 30

        if  (canvasWidth < 0){
            canvas.style.right = '-60px'
            canvas.style.left = 'auto'
            if (q3 == false){
                moveTo = [
                    AcanvasWidth + 5, AcanvasHeight + 20
                ]
                curveTo = [
                    AcanvasWidth + 70, AcanvasHeight - 20,
                    70, 0,
                    10, 10
                ]
                plus = 0
            }
        }else {
            canvas.style.left = `100%`
            canvas.style.right = ''

        }
        canvas.width = Math.abs(canvasWidth) + 60
        const ctx = canvas.getContext('2d');
        
        ctx.strokeStyle = 'white'
        ctx.lineWidth = 5

        ctx.beginPath()
        ctx.moveTo(moveTo[0],moveTo[1])
        ctx.bezierCurveTo(curveTo[0], curveTo[1], 
                        curveTo[2], curveTo[3],
                        curveTo[4], curveTo[5])
        ctx.stroke()
        ctx.closePath()

    }
}; 
document.addEventListener('mousemove', handleMove)
document.addEventListener('touchmove', handleMove)
    


function MouseDown(blocks,parent) {
    const handleStart = (e) => {
        const {x, y, sy} = getMouseCoords(e)
        if (document.elementFromPoint(x, y) == blocks){
            isDragging = true;
            deselectContainer();
            elementDragged = e.target.closest('.container')
            offsetX = x - elementDragged.offsetLeft;
            offsetY = sy - elementDragged.offsetTop;
            // blocks.style.cursor = 'grabbing';
        }
    };
    const handleStartJump = (e) => {
        const {x, y, sy} = getMouseCoords(e)
        if (document.elementFromPoint(x, y) == blocks){
            isDraggingJump = true;
            deselectContainer();
            elementDragged = e.target.closest('.jumpArrowTriangle')
            offsetX = x - elementDragged.offsetLeft;
            offsetY = sy - elementDragged.offsetTop;
        }
    };
    if (blocks.tagName == 'DIV') {
        parent.hasDown = true;
        blocks.addEventListener('mousedown', handleStart)
        blocks.addEventListener('touchstart', handleStart)
    } else if (blocks.tagName == 'IMG') {
        parent.hasDownJump = true;
        blocks.addEventListener('mousedown', handleStartJump)
        blocks.addEventListener('touchstart', handleStartJump)
    }
}

const handleEnd = (e) => {
    const pfstart = performance.now();
    if (isDragging || isDraggingJump) {
        if (elementDragged) {
            elementDragged.style.position = ''
            if (isDragging) {
                elementDragged.style.zIndex = '';
            }else {
                elementDragged.style.zIndex = '6';
            }
            elementDragged.style.transform = ''
            if (isDragging == true) {
                isDragging = false;
                const previews = document.querySelectorAll('.placementPreview')
                previews.forEach(preview => {
                    preview.remove();
                })
                document.body.insertBefore(elementDragged, (closestContainer)?.nextSibling);
            } else {
                isDraggingJump = false;
                elementDragged.style.top = 'auto'
                elementDragged.style.left = 'auto'
                const {x, y} = getMouseCoords(e)
                const elements = document.elementsFromPoint(x, y);
                let element;
                for (const elemen of elements) {
                    if (elemen.classList.contains('container')) {
                        element = elemen
                        break;
                    }
                }
                const container = element?.closest('.container')
                lineNumberElement = container?.querySelector('#lineNumber')
                lineNumber = lineNumberElement?.textContent
                parent = elementDragged.closest('.container')
                thisLineNumber = parent.querySelector('#field1Value')
                thisLineNumber.textContent = lineNumber
            }
            elementDragged = null;
            updateLineNumber();
        }
        const pfend = performance.now();
        (document.getElementById('debugText5')).textContent = (`drag performance: ${pfend - pfstart} milliseconds`);
    }
};

document.addEventListener('mouseup',handleEnd)
document.addEventListener('touchend',handleEnd)


//####################################################################################################################################
// instruction fields popupmenu
//####################################################################################################################################
var clickedMenu;
var bgclickedMenu;
var popUpMenuElement;
var performanceStart;
var performanceEnd;
function positionPopUpMenu(event, id, ignoreCursor) {
    const menu = document.getElementById(id);
    const menuWidth = menu.offsetWidth;
    const menuHeight = menu.offsetHeight;
    if (!ignoreCursor) {
        const posX = event.clientX;
        const posY = event.clientY;
        menu.style.top = `${posY - menuHeight / 2}px`;
        menu.style.left = `${posX - menuWidth / 2}px`;
    }
    const poprect = menu.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    if (poprect.left < 0) menu.style.left = '0px';
    if (poprect.top < 0) menu.style.top = '0px';
    if (poprect.right > viewportWidth) menu.style.left = `${viewportWidth - poprect.width}px`;
    if (poprect.bottom > viewportHeight) menu.style.top = `${viewportHeight - poprect.height}px`;
}
function popUpMenu(event,id){

    popUpMenuElement = document.getElementById(id);

    // console.log(sensorMenu)
    bgclickedMenu = popUpMenuElement.parentElement
    popUpMenuElement.style.display = 'block';
    bgclickedMenu.style.display = 'flex'
    clickedMenu = event.target;

    positionPopUpMenu(event, id);

    if (!popUpMenuElement.hasClick) {
        popUpMenuElement.addEventListener('click', function(event) {
            selectOption(event,id); 
        });
        popUpMenuElement.hasClick = true;
    }
}

function subSensorMenu(type,event){
    variables = document.getElementById('variables')
    items = document.getElementById('items')
    liquids = document.getElementById('liquids')
    switch (type){
        case 0:
            variables.style.display = 'block'
            items.style.display = 'none'
            liquids.style.display = 'none'
            break;
        case 1:
            variables.style.display = 'none'
            items.style.display = 'block'
            liquids.style.display = 'none'
            break;
        case 2:
            variables.style.display = 'none'
            items.style.display = 'none'
            liquids.style.display = 'block'
            break;
    }
    positionPopUpMenu(event, 'sensorMenu', true)
}

const clickHandler = (event) => popUpMenu(event, 'drawMenuAlign');
function selectOption(event,id) {
    performanceStart = performance.now();
    event.stopPropagation();
    let span;
    if (clickedMenu.tagName == 'IMG'){
        span = clickedMenu.previousElementSibling
    } else {
        span = clickedMenu
    }

    let targetId = event.target.id
    
    if (event.target.tagName == 'IMG' || event.target.className == "popUpMenu") {
        return
        }
    
    const option = event.target.textContent
    span.textContent = option;
    console.log(event.target);

    const fields = clickedMenu.parentElement.querySelectorAll('.toggleableField')

    // Draw instruction related function
    function rbgaFieldText(field) {
        // if (['field1', 'field1Value', 'field2', 'field2Value', 'field3', 'field3Value', 'field4', 'field4Value'].includes(field.id)){
            switch (field.id){
                case 'field1':
                    field.textContent = 'r'
                    break;
                case 'field2':
                    field.textContent = 'g'
                    break;
                case 'field3':
                    field.textContent = 'b'
                    break;
                case 'field4':
                    field.textContent = 'a'
                    break;}}
    function removeField3Event(field) {
        field.hasEvent = false;
        field.removeEventListener('click', (clickHandler));
    }
    if (id == "drawMenu" && option != "print") {
        removeField3Event((clickedMenu.parentElement.querySelector('#field3Value')));
    }

    // Switch case for every pop up menu context that changes its instruction fields 
    //(there might be a better way but unless its performance is not >10ms its fine)
    switch (option){
        case 'enabled':
        case 'config':
            fields.forEach(field => {
                if (['field2', 'field2Value'].includes(field.id)){
                    switch (field.id){
                        case 'field2':
                            field.textContent = "to"
                    }
                    field.style.display = 'block';
                } else {
                    field.style.display = 'none';
                }
            })
            break;
        case 'shoot':
            fields.forEach(field => {
                if (['field2', 'field2Value', 
                    'field3', 'field3Value', 
                    'field4', 'field4Value'].includes(field.id)){
                    switch (field.id){
                        case 'field2':
                            field.textContent = "x"
                            break;
                        case 'field3':
                            field.textContent = "y"
                            break;
                        case 'field4':
                            field.textContent = "shoot"
                    }
                    field.style.display = 'block';
                } else {
                    field.style.display = 'none';
                }
            })
            break;
        case 'shootp':
            fields.forEach(field => {
                if (['field2', 'field2Value', 
                    'field3', 'field3Value',].includes(field.id)){
                    switch (field.id){
                        case 'field2':
                            field.textContent = "unit"
                            break;
                        case 'field3':
                            field.textContent = "shoot"
                            break;
                    }
                    field.style.display = 'block';
                } else {
                    field.style.display = 'none';
                }
            })
            break;
        case 'clear':
            fields.forEach(field => {
                if (['field1', 'field2', 
                    'field3', 'field1Value', 
                    'field2Value', 'field3Value'].includes(field.id)){
                    rbgaFieldText(field);
                    field.style.display = 'block';
                } else {
                    field.style.display = 'none';
                }
            })
            break;
        case 'color':
            // Since there are 2 'color'
            if (targetId) {
                switch (targetId){
                    case 'controlColor':
                        fields.forEach(field => {
                            if (['field2', 'field2Value'].includes(field.id)){
                                switch (field.id){
                                    case 'field2':
                                        field.textContent = "to"
                                }
                                field.style.display = 'block';
                            } else {
                                field.style.display = 'none';
                            }
                        })
                        break;
                    case 'drawColor':
                    fields.forEach(field => {
                        if (['field1', 'field2', 
                            'field3', 'field4', 
                            'field1Value', 'field2Value', 
                            'field3Value', 'field4Value'].includes(field.id)){
                            rbgaFieldText(field);
                            field.style.display = 'block';
                        } else {
                            field.style.display = 'none';
                        }
                    })
                }
            }
            break;
        case 'col':
            fields.forEach(field => {
                if (['field1', 'field1Value'].includes(field.id)){
                    if (field.id == 'field1'){
                        field.textContent = 'color'
                    }
                    field.style.display = 'block';
                } else {
                    field.style.display = 'none';
                }
            })
            break;
        case 'stroke':
            fields.forEach(field => {
                if (['field1Value'].includes(field.id)){
                    field.style.display = 'block';
                } else {
                    field.style.display = 'none';
                }
            })
            break;
        case 'line':
            fields.forEach(field => {
                if (['field1', 'field1Value', 
                    'field2', 'field2Value', 
                    'field3', 'field3Value', 
                    'field4', 'field4Value'].includes(field.id)){
                    switch (field.id){
                        case 'field1':
                            field.textContent = 'x'
                            break;
                        case 'field2':
                            field.textContent = 'y'
                            break;
                        case 'field3':
                            field.textContent = 'x2'
                            break;
                        case 'field4':
                            field.textContent = 'y2'
                            break;
                    } 
                    field.style.display = 'block';
                } else {
                    field.style.display = 'none';
                }
            })
            break;
        case 'rect':
        case 'lineRect':
            fields.forEach(field => {
                if (['field1', 'field1Value', 
                    'field2', 'field2Value', 
                    'field3', 'field3Value', 
                    'field4', 'field4Value'].includes(field.id)){
                    switch (field.id){
                        case 'field1':
                            field.textContent = 'x'
                            break;
                        case 'field2':
                            field.textContent = 'y'
                            break;
                        case 'field3':
                            field.textContent = 'width'
                            break;
                        case 'field4':
                            field.textContent = 'height'
                            break;
                    } 
                    field.style.display = 'block';
                } else {
                    field.style.display = 'none';
                }
            })
            break;
        case 'poly':
        case 'linePoly':
            fields.forEach(field => {
                if (['field1', 'field1Value', 
                    'field2', 'field2Value', 
                    'field3', 'field3Value', 
                    'field4', 'field4Value', 
                    'field5', 'field5Value'].includes(field.id)){
                    switch (field.id){
                        case 'field1':
                            field.textContent = 'x'
                            break;
                        case 'field2':
                            field.textContent = 'y'
                            break;
                        case 'field3':
                            field.textContent = 'sides'
                            break;
                        case 'field4':
                            field.textContent = 'radius'
                            break;
                        case 'field5':
                            field.textContent = 'rotation'
                            break;
                    } 
                    field.style.display = 'block';
                } else {
                    field.style.display = 'none';
                }
            })
            break;
        case 'triangle':
            fields.forEach(field => {
                if (field.id){
                    switch (field.id){
                        case 'field1':
                            field.textContent = 'x'
                            break;
                        case 'field2':
                            field.textContent = 'y'
                            break;
                        case 'field3':
                            field.textContent = 'x2'
                            break;
                        case 'field4':
                            field.textContent = 'y2'
                            break;
                        case 'field5':
                            field.textContent = 'x3'
                            break;
                        case 'field6':
                            field.textContent = 'y3'
                            break;
                    } 
                    field.style.display = 'block';
                } else {
                    field.style.display = 'none';
                }
            })
            break;
        case 'image':
            fields.forEach(field => {
                if (['field1', 'field1Value', 
                    'field2', 'field2Value', 
                    'field3', 'field3Value', 
                    'field4', 'field4Value', 
                    'field5', 'field5Value'].includes(field.id)){
                    switch (field.id){
                        case 'field1':
                            field.textContent = 'x'
                            break;
                        case 'field2':
                            field.textContent = 'y'
                            break;
                        case 'field3':
                            field.textContent = 'image'
                            break;
                        case 'field4':
                            field.textContent = 'size'
                            break;
                        case 'field5':
                            field.textContent = 'rotation'
                            break;
                    } 
                    field.style.display = 'block';
                } else {
                    field.style.display = 'none';
                }
            })
            break;
        case 'print':
            fields.forEach(field => {
                if (['field1', 'field1Value', 
                    'field2', 'field2Value', 
                    'field3', 'field3Value'].includes(field.id)){
                    switch (field.id){
                        case 'field1':
                            field.textContent = 'x'
                            break;
                        case 'field2':
                            field.textContent = 'y'
                            break;
                        case 'field3':
                            field.textContent = 'align'
                            break;
                        case 'field3Value':
                            field.textContent = "center"
                            if (!(field.hasEvent)){
                                field.hasEvent = true
                                field.addEventListener('click', clickHandler);
                            }
                    } 
                    field.style.display = 'block';
                } else {
                    field.style.display = 'none';
                }
            })
            break;
        case 'translate':
        case 'scale':
            fields.forEach(field => {
                if (['field1', 'field1Value', 
                    'field2', 'field2Value'].includes(field.id)){
                    switch (field.id){
                        case 'field1':
                            field.textContent = 'x'
                            break;
                        case 'field2':
                            field.textContent = 'y'
                            break;
                    } 
                    field.style.display = 'block';
                } else {
                    field.style.display = 'none';
                }
            })
            break;
        case 'rotate':
            fields.forEach(field => {
                if (['field1', 'field1Value'].includes(field.id)){
                    switch (field.id){
                        case 'field1':
                            field.textContent = 'degrees'
                            break;
                    } 
                    field.style.display = 'block';
                } else {
                    field.style.display = 'none';
                }
            })
            break;

        // Unit control section
        case 'reset':
        case 'idle':
        case 'stop':
        case 'autoPathfind':
        case 'payDrop':
        case 'payEnter':
        case 'unbind':
            fields.forEach(field => {
                field.style.display = 'none';
            })
            break;
        case 'move':
        case 'pathfind':
        case 'mine':
            fields.forEach(field => {
                if (['field1', 'field1Value', 
                    'field2', 'field2Value',].includes(field.id)){
                    switch (field.id){
                        case 'field1':
                            field.textContent = 'x'
                            break;
                        case 'field2':
                            field.textContent = 'y'
                            break;
                    } 
                    field.style.display = 'block';
                } else {
                    field.style.display = 'none';
                }
            })
            break;
        case 'approach':
            fields.forEach(field => {
                if (['field1', 'field1Value', 
                    'field2', 'field2Value', 
                    'field3', 'field3Value',].includes(field.id)){
                    switch (field.id){
                        case 'field1':
                            field.textContent = 'x'
                            break;
                        case 'field2':
                            field.textContent = 'y'
                            break;
                        case 'field3':
                            field.textContent = 'radius'
                            break;
                    } 
                    field.style.display = 'block';
                } else {
                    field.style.display = 'none';
                }
            })
            break;
        case 'boost':
            fields.forEach(field => {
                if (['field1', 'field1Value',].includes(field.id)){
                    switch (field.id){
                        case 'field1':
                            field.textContent = 'enable'
                            break;
                    } 
                    field.style.display = 'block';
                } else {
                    field.style.display = 'none';
                }
            })
            break;
        case 'target':
            fields.forEach(field => {
                if (['field1', 'field1Value', 
                    'field2', 'field2Value', 
                    'field3', 'field3Value',].includes(field.id)){
                    switch (field.id){
                        case 'field1':
                            field.textContent = 'x'
                            break;
                        case 'field2':
                            field.textContent = 'y'
                            break;
                        case 'field3':
                            field.textContent = 'shoot'
                            break;
                    } 
                    field.style.display = 'block';
                } else {
                    field.style.display = 'none';
                }
            })
            break;
        case 'targetp':
        fields.forEach(field => {
            if (['field1', 'field1Value', 
                'field2', 'field2Value',].includes(field.id)){
                switch (field.id){
                    case 'field1':
                        field.textContent = 'unit'
                        break;
                    case 'field2':
                        field.textContent = 'shoot'
                        break;
                } 
                field.style.display = 'block';
            } else {
                field.style.display = 'none';
            }
        })
        break;
        case 'itemDrop':
        fields.forEach(field => {
            if (['field1', 'field1Value', 
                'field2', 'field2Value',].includes(field.id)){
                switch (field.id){
                    case 'field1':
                        field.textContent = 'to'
                        break;
                    case 'field2':
                        field.textContent = 'amount'
                        break;
                } 
                field.style.display = 'block';
            } else {
                field.style.display = 'none';
            }
        })
        break;
        case 'itemTake':
            fields.forEach(field => {
                if (['field1', 'field1Value', 
                    'field2', 'field2Value',
                    'field3', 'field3Value',].includes(field.id)){
                    switch (field.id){
                        case 'field1':
                            field.textContent = 'from'
                            break;
                        case 'field2':
                            field.textContent = 'item'
                            break;
                        case 'field3':
                            field.textContent = 'amount'
                            break;
                    } 
                    field.style.display = 'block';
                } else {
                    field.style.display = 'none';
                }
            })
            break;
        case 'payTake':
            fields.forEach(field => {
                if (['field1', 'field1Value',].includes(field.id)){
                    switch (field.id){
                        case 'field1':
                            field.textContent = 'takeUnits'
                            break;
                    } 
                    field.style.display = 'block';
                } else {
                    field.style.display = 'none';
                }
            })
            break;
        case 'itemTake':
            fields.forEach(field => {
                if (['field1', 'field1Value', 
                    'field2', 'field2Value',
                    'field3', 'field3Value',].includes(field.id)){
                    switch (field.id){
                        case 'field1':
                            field.textContent = 'from'
                            break;
                        case 'field2':
                            field.textContent = 'item'
                            break;
                        case 'field3':
                            field.textContent = 'amount'
                            break;
                    } 
                    field.style.display = 'block';
                } else {
                    field.style.display = 'none';
                }
            })
            break;
        case 'flag':
        fields.forEach(field => {
            if (['field1', 'field1Value',].includes(field.id)){
                switch (field.id){
                    case 'field1':
                        field.textContent = 'value'
                        break;
                } 
                field.style.display = 'block';
            } else {
                field.style.display = 'none';
            }
        })
        break;
        case 'build':
            fields.forEach(field => {
                if (['field1', 'field1Value', 
                    'field2', 'field2Value',
                    'field3', 'field3Value',
                    'field4', 'field4Value',
                    'field5', 'field5Value',].includes(field.id)){
                    switch (field.id){
                        case 'field1':
                            field.textContent = 'x'
                            break;
                        case 'field2':
                            field.textContent = 'y'
                            break;
                        case 'field3':
                            field.textContent = 'block'
                            break;
                        case 'field4':
                            field.textContent = 'rotation'
                            break;
                        case 'field5':
                            field.textContent = 'config'
                            break;
                    } 
                    field.style.display = 'block';
                } else {
                    field.style.display = 'none';
                }
            })
            break;
        case 'getBlock':
            fields.forEach(field => {
                if (['field1', 'field1Value', 
                    'field2', 'field2Value',
                    'field3', 'field3Value',
                    'field4', 'field4Value',
                    'field5', 'field5Value',].includes(field.id)){
                    switch (field.id){
                        case 'field1':
                            field.textContent = 'x'
                            break;
                        case 'field2':
                            field.textContent = 'y'
                            break;
                        case 'field3':
                            field.textContent = 'type'
                            break;
                        case 'field4':
                            field.textContent = 'building'
                            break;
                        case 'field5':
                            field.textContent = 'floor'
                            break;
                    } 
                    field.style.display = 'block';
                } else {
                    field.style.display = 'none';
                }
            })
            break;
        case 'within':
            fields.forEach(field => {
                if (['field1', 'field1Value', 
                    'field2', 'field2Value', 
                    'field3', 'field3Value',
                    'field4', 'field4Value',].includes(field.id)){
                    switch (field.id){
                        case 'field1':
                            field.textContent = 'x'
                            break;
                        case 'field2':
                            field.textContent = 'y'
                            break;
                        case 'field3':
                            field.textContent = 'radius'
                            break;
                        case 'field4':
                            field.textContent = 'result'
                            break;
                    } 
                    field.style.display = 'block';
                } else {
                    field.style.display = 'none';
                }
            })
            break;
        case 'ore':
            fields.forEach(field => {
                if (['field3', 'field3Value'].includes(field.id)){
                    field.style.display = 'block';
                } else {
                    field.style.display = 'none';
                }
            })
            break;
        case 'building':
            fields.forEach(field => {
                if (['field1', 'field1Value',
                    'field2', 'field2Value'].includes(field.id)){
                    field.style.display = 'block';
                } else {
                    field.style.display = 'none';
                }
            })
            break;
        case 'damaged':
        case 'spawn':
            fields.forEach(field => {
                field.style.display = 'none';
            })
            break;
        case 'always':
            fields.forEach(field => {
                if (['field1Value', 
                    'field2Value',
                    'field3Value',
                    'field4Value',].includes(field.id)){
                    field.style.display = 'none';
                } else {
                    field.style.display = 'block';
                }
            })
            break;
        case '':
            fields.forEach(field => {
                if (['field2Value', 
                    'field3Value',
                    'field4Value',].includes(field.id)){
                    field.style.display = 'block';
                } else {
                    field.style.display = 'none';
                }
            })
            break;
        case '==':
        case 'not':
        case '<':
        case '<=':
        case '>':
        case '>=':
        case '===':
            fields.forEach(field => {
                if (['field2Value', 
                    'field3Value',
                    'field4Value',].includes(field.id)){
                    field.style.display = 'block';
                } else {
                    field.style.display = 'none';
                }
            })
            break;
    }
    closeMenu(event);
}

function closeMenu(event) {
    console.log('close');
    popUpMenuElement.style.display = 'none';
    event.stopPropagation();
    bgclickedMenu.style.display = 'none'
    performanceEnd = performance.now();
    (document.getElementById('debugText4')).textContent = (`Execution time: ${performanceEnd - performanceStart} milliseconds`);
    console.log(`Execution time: ${performanceEnd - performanceStart} milliseconds`);
}


//####################################################################################################################################
// selection keybinds event
//####################################################################################################################################
// the term "cursor" is the highlighed block/instruction (the one that is indicated by an orange outline)
// also this whole section is a mess and needs to be refactored (maybe)
let cursorContainer
function EnableCursor(){
    if (!cursorContainer){
        cursorContainer = document.querySelector('.container')
        cursorContainer.classList.add('cursor') 
    }else if (cursorContainer){
        cursorContainer.classList.remove('cursor')
        cursorContainer = null
    }
}

let directionDown
function moveCursor(key){
    const rect = cursorContainer.getBoundingClientRect();
    if (rect.top < 0 || rect.bottom > window.innerHeight) {
        cursorContainer.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' });
    }
    if (key.key == 'ArrowDown'){
        let next
        directionDown = true
        function moveCursorDown(){
            cursorContainer.classList.remove('cursor')
            next.classList.add('cursor')
            cursorContainer = next
            if (key.shiftKey){
                selectContainer();
            } else {
                deselectContainer();
            }
        }
        next = cursorContainer.nextElementSibling
        if (next?.classList.contains('container')){
            moveCursorDown()
        }else if (cursorContainer.parentElement.className.includes('group')){
            next = cursorContainer.parentElement.nextElementSibling
            if (next?.classList.contains('container')){
                moveCursorDown()
            }else {
                return
            }
        }else{
            return
        }
    }else if (key.key == 'ArrowUp'){
        let previous
        directionDown = false
        function moveCursorUp(){
            cursorContainer.classList.remove('cursor')
            previous.classList.add('cursor')
            cursorContainer = previous
            if (key.shiftKey){
            selectContainer();
            } else {
            deselectContainer();
            }
        }
        previous = cursorContainer.previousElementSibling
        if (previous?.classList.contains('container')){
            moveCursorUp()
        }else if (cursorContainer.parentElement.className.includes('group')){
            previous = cursorContainer.parentElement.previousElementSibling
            if (previous?.classList.contains('container')){
                moveCursorUp()
            }else {
                return
            }
        }else{
            return
        }
    }
    if (currentFocusIndex > limitFocusIndex){
        currentFocusIndex -= 1
    }

}

let selectedDiv;
function selectContainer(){
    if (document.activeElement.tagName == 'BODY'){
        cursorContainer.classList.add('selected')
        if (!selectedDiv){
            selectedDiv = document.createElement('div');
            selectedDiv.classList.add('group');
        }
        cursorContainer.insertAdjacentElement('afterend', selectedDiv);

        if (directionDown == true){
            selectedDiv.appendChild(cursorContainer);
        }else{
            selectedDiv.insertBefore(cursorContainer, selectedDiv.firstChild);
        }
    }else {
        return
    }
}

function selectAllContainers(){
    const containers = document.querySelectorAll('.container')
    containers.forEach(container => {
        container.classList.add('selected')
        if (!selectedDiv){
            selectedDiv = document.createElement('div');
            selectedDiv.classList.add('group');
        }
        container.insertAdjacentElement('afterend', selectedDiv);
        selectedDiv.appendChild(container);
    })
}

function deselectContainer(){
    if (selectedDiv) {
        while (selectedDiv.firstChild) {
            selectedDiv.parentNode.insertBefore(selectedDiv.firstChild, selectedDiv);
        }
        selectedDiv.remove();
    }
    document.querySelectorAll('.selected').forEach(selected => {
        selected.classList.remove('selected')
    })
    selectedDiv = null
}
let currentFocusIndex = 0;
let limitFocusIndex
let focusableElements
function focusNextField(direction){
    if (!focusableElements || (focusableElements[0]?.closest('.container')) != cursorContainer){
        focusableElements = cursorContainer.querySelectorAll('.editable')
    }
    limitFocusIndex = currentFocusIndex
    if (direction == 'ArrowRight' || direction == 'Tab'){
        currentFocusIndex += 1
    } else if (direction == 'ArrowLeft'){
        currentFocusIndex -= 1
    }
    if (focusableElements.length > 0) {
        currentFocusIndex = Math.abs((currentFocusIndex) % focusableElements.length);
    }
    focusableElements[currentFocusIndex].focus();
    

}

function deleteContainer(){
    if (selectedDiv?.classList.contains('group')){
        if (selectedDiv.nextElementSibling.classList.contains('container')) {
            next = selectedDiv.nextElementSibling;
        } else {
            next = selectedDiv.previousElementSibling;
        }
        next.classList.add('cursor') 
        selectedDiv.remove()
        selectedDiv = null
        cursorContainer = next
    }else if (cursorContainer.classList.contains('container')){
        if (cursorContainer.nextElementSibling.classList.contains('container')) {
            next = cursorContainer.nextElementSibling;
        } else {
            next = cursorContainer.previousElementSibling;
        }
        next.classList.add('cursor') 
        cursorContainer.remove()
        cursorContainer = next
    }
    updateLineNumber();
    
}
let clone;
function copyContainer(){
    if (selectedDiv){
        clone = selectedDiv.cloneNode(true)
    }else if (cursorContainer){
        clone = cursorContainer.cloneNode(true)
    }
    updateLineNumber();
    return clone
}

function cutContainer() {
    if (selectedDiv) {
        clone = selectedDiv.cloneNode(true);
        if (selectedDiv.nextElementSibling.classList.contains('container')) {
            next = selectedDiv.nextElementSibling;
        } else {
            next = selectedDiv.previousElementSibling;
        }
        next.classList.add('cursor');
        selectedDiv.remove();
        selectedDiv = null;
        cursorContainer = next;
    } else if (cursorContainer) {
        clone = cursorContainer.cloneNode(true);
        if (cursorContainer.nextElementSibling.classList.contains('container')) {
            next = cursorContainer.nextElementSibling;
        } else {
            next = cursorContainer.previousElementSibling;
        }
        next.classList.add('cursor');
        cursorContainer.remove();
        cursorContainer = next;
    }
    updateLineNumber();
}

function pasteContainer(){
    if (clone) {
        const clonedContainers = Array.from(clone.querySelectorAll('.container')).reverse();
        clonedContainers.forEach(clonedElement => {
            const newClone = clonedElement.cloneNode(true);
            newClone.classList.remove('selected', 'cursor');
            cursorContainer.insertAdjacentElement('afterend', newClone);
        });
    }
    deselectContainer();
    updateLineNumber();
}

function moveContainer(direction){
    if (!selectedDiv){
        return
    }
    if (direction == 'ArrowUp'){
        const previousSibling = selectedDiv.previousElementSibling;
        if (previousSibling.classList.contains('container')) {
            selectedDiv.parentNode.insertBefore(selectedDiv, previousSibling);
        }
    }else if (direction == 'ArrowDown'){
        const nextSibling = selectedDiv.nextElementSibling;
        if (nextSibling.classList.contains('container')) {
            selectedDiv.parentNode.insertBefore(nextSibling, selectedDiv);
        }
    }
    updateLineNumber();
}


//####################################################################################################################################
// Export functions
//####################################################################################################################################
const operatorMap = {
    "+"         : 'add ',
    "-"         : 'sub ',
    "*"         : 'mul ',
    "/"         : 'div ',
    "//"        : 'idiv ',
    "%"         : 'mod ',
    "^"         : 'pow ',
    "=="        : 'equal ',
    "not"       : 'notEqual ',
    "and"       : 'land ',
    "<"         : 'lessThan ',
    "<="        : 'lessThanEqual ',
    ">"         : 'greaterThan ',
    ">="        : 'greaterThanEqual ',
    "==="       : 'strictEqual ',
    "<<"        : 'shl ',
    ">>"        : 'shr ',
    "or"        : 'or ',
    "b-and"     : 'and ',
    "xor"       : 'xor ',
    "flip"      : 'not ',
    "max"       : 'max ',
    "min"       : 'min ',
    "angle"     : 'angle ',
    "anglediff" : 'angleDiff ',
    "len"       : 'len ',
    "noise"     : 'noise ',
    "abs"       : 'abs ',
    "log"       : 'log ',
    "log10"     : 'log10 ',
    "floor"     : 'floor ',
    "ceil"      : 'ceil ',
    "sqrt"      : 'sqrt ',
    "rand"      : 'rand ',
    "sin"       : 'sin ',
    "cos"       : 'cos ',
    "tan"       : 'tan ',
    "asin"      : 'asin ',
    "acos"      : 'acos ',
    "atan"      : 'atan ',
    "always"    : 'always '
};

let instTypeMap = {
    'Read'          : 'read ',
    'Write'         : 'write ',
    'Draw'          : 'draw ',
    'Print'         : 'print ',
    'Format'        : 'format ',
    'Draw Flush'    : 'drawflush ',
    'Print Flush'   : 'printflush ',
    'Get Link'      : 'getlink ',
    'Control'       : 'control ',
    'Sensor'        : 'sensor ',
    'Set'           : 'set ',
    'Pack Color'    : 'packcolor ',
    'Wait'          : 'wait ',
    'Stop'          : 'stop ',
    'End'           : 'end ',
    'Unit Bind'     : 'ubind ',
    'Unit Control'  : 'ucontrol ',
} 
function exportCode(){
    deselectContainer();
    codeEx = ""
    containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        insSpan = container.querySelector('span');
        if (insSpan){
            codeEx += '\n'
            let instType = insSpan.textContent;
            if (instTypeMap?.[instType]){
                codeEx += instTypeMap[instType];
                exportFields(0)
            } else {
                if (instType == 'Jump'){
                    codeEx += `jump ${container.querySelector('#field1Value')?.textContent} ${operatorMap[container.querySelector('#field3Value')?.textContent]}`
                }
                if (instType == 'Operation'){
                    codeEx += "op "
                    operator = container.querySelector('.dontInclude')
                    OperatorString = (operator.textContent.replace(/\s+/g, ''));
                    if (operatorMap[OperatorString] !== undefined) {
                        codeEx += operatorMap[OperatorString];
                    }
                    exportFields(0)
                }
                if (instType == 'Radar'){
                    codeEx += `radar ${container.querySelector('#field2Value')?.textContent} ${container.querySelector('#field3Value')?.textContent} ${container.querySelector('#field4Value')?.textContent} ${container.querySelector('#field6Value')?.textContent} ${container.querySelector('#field1Value')?.textContent} ${container.querySelector('#field5Value')?.textContent} ${container.querySelector('#field7Value')?.textContent}`
                }
                if (instType == 'Lookup'){
                    codeEx += `lookup ${container.querySelector('#field2Value')?.textContent} ${container.querySelector('#field1Value')?.textContent} ${container.querySelector('#field3Value')?.textContent}`
                }
                if (instType == 'Unit Radar'){
                    codeEx += `uradar ${container.querySelector('#field2Value')?.textContent} ${container.querySelector('#field3Value')?.textContent} ${container.querySelector('#field4Value')?.textContent} ${container.querySelector('#field6Value')?.textContent} 0 ${container.querySelector('#field5Value')?.textContent} ${container.querySelector('#field7Value')?.textContent}`
                }
                if (instType == 'Unit Locate'){
                    codeEx += `ulocate `
                    exportFields(1)
                }
            }
            function exportFields(ignoreInvisable){
                codeElements = container.querySelectorAll('span');
                codeElements.forEach(code => {
                    if (code.classList.contains('editable') && !code.classList.contains('dontInclude') && (ignoreInvisable || (getComputedStyle(code)).display === 'block')) {
                        codeEx += (code.textContent.replace(/\s+/g, '') + ' ');
                    }
                });
            }
        };
    });
    navigator.clipboard.writeText(codeEx)
    document.getElementById('alert').classList.remove("alertShow")
    document.getElementById('alert').style.display = 'block'
    setTimeout(() => {
        document.getElementById('alert').classList.add("alertShow");
        setTimeout(() => {
            document.getElementById('alert').style.display = 'none'
        }, 1000);
    }, 1000);
    // localStorage.setItem('key1', 'value1');
}


// const value = localStorage.getItem('key1');
// console.log(value);
// console.log('asdlkgjasdg');


window.onload = () => {
    document.getElementById('loadingAlert').style.display = 'none'
}