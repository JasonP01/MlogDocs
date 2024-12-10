
const buttons = document.querySelectorAll('.addItems');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttonText = button.textContent;
        divParent = button.parentElement;
        // console.log('divParent')
        // console.log(divParent)
        type = divParent.className;
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
                        <span>of</span>
                        <span class="editable blockControl" contenteditable="true">block1</span>
                        <span class="toggleableField">x</span>
                        <span class="editable blockControl toggleableField" contenteditable="true">0</span>
                        <span class="toggleableField">y</span>
                        <span class="editable blockControl toggleableField" contenteditable="true">0</span>
                        <span>to</span>
                        <span class="editable blockControl" contenteditable="true">0</span>`
                break;
            case 'Radar':
                code = `<span>from</span>
                        <span class="editable blockControl" contenteditable="true">turret1</span>
                        <span>target</span>
                        <span class="editable blockControl" contenteditable="true" onclick="popUpMenu(event,'radarMenuTarget')">enemy</span>
                        <span>and</span>
                        <span class="editable blockControl" contenteditable="true" onclick="popUpMenu(event,'radarMenuTarget')">any</span>
                        <span>and</span>
                        <span class="editable blockControl" contenteditable="true" onclick="popUpMenu(event,'radarMenuTarget')">any</span>
                        <span>order</span>
                        <span class="editable blockControl" contenteditable="true">1</span>
                        <span>sort</span>
                        <span class="editable blockControl" contenteditable="true" onclick="popUpMenu(event,'radarMenuSort')">distance</span>
                        <span>output</span>
                        <span class="editable blockControl" contenteditable="true">result</span>`
                break;
            case 'Sensor':
                code = `<span class="editable blockControl" contenteditable="true">result</span>
                        <span>=</span>
                        <span class="editable blockControl dontInclude" contenteditable="true">@copper</span>
                        <img src="pencil.png" alt="" onclick="popUpMenu(event,'sensorMenu')" class="pencilMenu">
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
                        <span class="editable operation dontInclude" onclick="popUpMenu(event,'opMenu')">*</span>
                        <span class="editable operation" contenteditable="true">b</span>`
                break;
            case 'Lookup':
                code = `<span class="editable operation" contenteditable="true">result</span>
                        <span>=</span>
                        <span>lookup</span>
                        <span class="editable operation" contenteditable="true" onclick="popUpMenu(event,'lookupMenu')">item</span>
                        <span>#</span>
                        <span class="editable operation" contenteditable="true">0</span>`

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
                        <span class="editable flowControl" contenteditable="true">x</span>
                        <span class="editable flowControl" contenteditable="true" onclick="popUpMenu(event,'jumpMenu')">not</span>
                        <span class="editable flowControl" contenteditable="true">false</span>
                        <canvas id="jumpArrow"></canvas>`
                break;
            case 'Unit Bind':
                code = `<span>type</span>
                        <span class="editable unitControl" contenteditable="true" onclick="popUpMenu(event,'ubindMenu')">@poly</span>`
                break;
            case 'Unit Control':
                code = `<span class="editable unitControl" contenteditable="true" onclick="popUpMenu(event,'ucontrolMenu')">move</span>
                        <span>x</span>
                        <span class="editable unitControl" contenteditable="true">0</span>
                        <span>y</span>
                        <span class="editable unitControl" contenteditable="true">0</span>`
                break;
            case 'Unit Radar':
                code = `<span>target</span>
                        <span class="editable unitControl" contenteditable="true" onclick="popUpMenu(event,'radarMenuTarget')">enemy</span>
                        <span>and</span>
                        <span class="editable unitControl" contenteditable="true" onclick="popUpMenu(event,'radarMenuTarget')">any</span>
                        <span>and</span>
                        <span class="editable unitControl" contenteditable="true" onclick="popUpMenu(event,'radarMenuTarget')">any</span>
                        <span>order</span>
                        <span class="editable unitControl" contenteditable="true">1</span>
                        <span>sort</span>
                        <span class="editable unitControl" contenteditable="true" onclick="popUpMenu(event,'radarMenuSort')">distance</span>
                        <span>output</span>
                        <span class="editable unitControl" contenteditable="true">result</span>`
                break;
            case 'Unit Locate':
                code = `<span>find</span>
                        <span class="editable unitControl" contenteditable="true" onclick="popUpMenu(event,'ulocateFindMenu')">building</span>
                        <span>group</span>
                        <span class="editable unitControl" contenteditable="true" onclick="popUpMenu(event,'ulocateGroupMenu')">core</span>
                        <span>enemy</span>
                        <span class="editable unitControl" contenteditable="true">true</span>
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
        
        containers = document.querySelectorAll('.container');
        const lastContainer = containers[containers.length - 1];
        lastContainer.insertAdjacentHTML('afterend', `
            <div class="container">
                <div class="${type}-container">
                    <div class="block-header">
                        <span>${buttonText}</span>
                        <div class="controls">
                            <span id="lineNumber">1</span>
                            <span onclick="copy()">⚪</span>
                            <span onclick="Delete()">✕</span>
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

    });
});

//count and update line number on instruction
function updateLineNumber() {
    containers = document.querySelectorAll('.container');
    containers.forEach((containerr, index) => {
        const lineNumberElement = containerr.querySelector('#lineNumber');
        if (lineNumberElement) {
            lineNumberElement.textContent = index-1;
        }
        if (!containerr.hasDown){
            MouseDown(containerr.querySelector('.block-header'),containerr)
        }

        // JUMP ARROW VISUAL (WIP)
        const canvas = containerr.querySelector('#jumpArrow');
        if (canvas){
            const ctx = canvas.getContext('2d');
            const point1 = { x: 0, y: 0 }; 
            const point2 = { x: 10, y: 10 }; 
            const containerrRect = containerr.getBoundingClientRect();
            const containerrX = containerrRect.left + containerrRect.width / 2; 
            const containerrY = containerrRect.top + containerrRect.height / 2; 

            // Set up the line drawing
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.beginPath();
            ctx.moveTo(point1.x, point1.y);
            ctx.lineTo(point2.x, point2.y);
            ctx.stroke();
        }
    });
}

function Delete() {
    const parentContainer = event.target.closest('.container');
    if (parentContainer) {
        parentContainer.remove(); 
    }
    updateLineNumber();
}

function copy() {
    const parentContainer = event.target.closest('.container');
    if (parentContainer) {
        const copyCode = parentContainer.outerHTML; 
        parentContainer.insertAdjacentHTML('afterend', copyCode)
    }
    updateLineNumber();
}

function closeWizard() {
    document.getElementById('wizardMenu').style.display = 'none';
}
// listens for esc key if pressed close wizard menu
document.addEventListener('keydown',function(){
    if (event.key === 'Escape') {
        closeWizard();
    }
})

function openWizard() {
    document.getElementById('wizardMenu').style.display = 'flex';
}

// drag event
var elementDragged;
let offsetX, offsetY, isDragging = false;
let closestElement = null;
let closestDistance = Infinity;
var counter = 0;
document.addEventListener('mousemove', (e) => {
    (document.getElementById('debugText2')).textContent = isDragging;
    if (isDragging) {
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;
        elementDragged.style.left = `${x}px`;
        elementDragged.style.top = `${y}px`;
        elementDragged.style.position = 'absolute'
        elementDragged.style.zIndex = '2';

    }
}); 

function MouseDown(blocks,parent) {
    parent.hasDown = true;
    blocks.addEventListener('mousedown', (e) => {
        if (document.elementFromPoint(e.clientX, e.clientY) == blocks){
            isDragging = true;
            elementDragged = e.target.closest('.container')
            offsetX = e.clientX - elementDragged.offsetLeft;
            offsetY = e.clientY - elementDragged.offsetTop;
            // blocks.style.cursor = 'grabbing';
        }
    });
}

document.addEventListener('mouseup', (e) => {
    const pfstart = performance.now();
    if (isDragging) {
        isDragging = false;
        const targets = document.querySelectorAll('.container');
        closestDistance = Infinity;
        closestElement = null;
        targets.forEach(target => {
            if (target != elementDragged){
                const rect = target.getBoundingClientRect();
                const targetX = rect.left + rect.width / 2; 
                const targetY = rect.top + rect.height / 2; 
                const distance = Math.sqrt(
                Math.pow(e.clientX - targetX, 2) +
                Math.pow(e.clientY - targetY, 2)
                );
        
                if (distance < closestDistance) {
                closestDistance = distance;
                closestElement = target;
                }
                counter++;
                (document.getElementById('debugText3')).textContent = (closestElement).textContent;
                (document.getElementById('debugText')).textContent = counter;
            }
        });
        if (elementDragged) {
            elementDragged.style.position = ''
            elementDragged.style.zIndex = '0';
            document.body.insertBefore(elementDragged, (closestElement).nextSibling);
            elementDragged = null;
            updateLineNumber();
        }
        const pfend = performance.now();
        (document.getElementById('debugText5')).textContent = (`drag performance: ${pfend - pfstart} milliseconds`);
    }

    
});

var clickedMenu;
var bgclickedMenu;
var Gid;
var performanceStart;
var performanceEnd;
function popUpMenu(event,id){
    Gid = id;
    // console.log(Gid)
    const sensorMenu = document.getElementById(Gid);
    // console.log(sensorMenu)
    bgclickedMenu = sensorMenu.parentElement
    sensorMenu.style.display = 'block';
    bgclickedMenu.style.display = 'flex'
    clickedMenu = event.target;
    // Position the menu where the span was clicked
    const menuWidth = sensorMenu.offsetWidth;
    const menuHeight = sensorMenu.offsetHeight;
    // console.log(menuWidth)
    // console.log(menuHeight)

    // Calculate the position so the menu opens in the middle of the cursor
    const posX = event.clientX //+ window.scrollX;
    const posY = event.clientY //+ window.scrollY;

    // Set the menu's position with adjustments to center it
    sensorMenu.style.top = `${posY - menuHeight / 2}px`;
    sensorMenu.style.left = `${posX - menuWidth / 2}px`;
    // console.log("kajshdg")

    const container = document.getElementById(Gid);
    if (!container.hasClick) {
        container.addEventListener('click', function(event) {
            selectOption(event,id); 
        });
        container.hasClick = true;
    }
}

const clickHandler = (event) => popUpMenu(event, 'drawMenuAlign');
function selectOption(event,id) {
    performanceStart = performance.now();
    let span;
    if (clickedMenu.tagName == 'IMG'){
        span = clickedMenu.previousElementSibling
    } else {
        span = clickedMenu
    }
    const option = event.target.textContent
    let targetId = event.target.id
    span.textContent = option;

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
        field.removeEventListener('click', clickHandler);
    }
    if (id == "drawMenu" && option != "print") {
        removeField3Event((clickedMenu.parentElement.querySelector('#field3Value')));
    }

    switch (option){
        case 'shoot':
            fields.forEach(field => {
                field.style.display = 'block';
            })
            break;
        case 'enabled':
        case 'shootp':
        case 'config':
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
            if (targetId) {
                switch (targetId){
                    case 'controlColor':
                    fields.forEach(field => {
                        field.style.display = 'none';
                    })
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
        case 'reset':
            fields.forEach(field => {
                field.style.display = 'none';
            })
            break;
    }
    
    closeMenu();
}

function closeMenu() {
    document.getElementById(Gid).style.display = 'none';
    event.stopPropagation();
    bgclickedMenu.style.display = 'none'
    console.log("22");
    performanceEnd = performance.now();
    (document.getElementById('debugText4')).textContent = (`Execution time: ${performanceEnd - performanceStart} milliseconds`);
    console.log(`Execution time: ${performanceEnd - performanceStart} milliseconds`);
    console.log("adfgsd");
}



function exportCode(){
    codeEx = ""
    containers = document.querySelectorAll('.container');
    // console.log(containers);
    containers.forEach(container => {
        insSpan = container.querySelector('span');
        if (insSpan){
            codeEx += '\n'
            instType = insSpan.textContent;
            // console.log(instType);
            switch (instType) {
                case 'Read':
                    codeEx += "read "
                    break;
                case 'Write':
                    codeEx += "write "
                    break;
                case 'Draw':
                    codeEx += "draw "
                    break;
                case 'Print':
                    codeEx += "print "
                    break;
                case 'Format':
                    codeEx += "format "
                    break;
                case 'Draw Flush':
                    codeEx += "drawflush "
                    break;
                case 'Print Flush':
                    codeEx += "printflush "
                    break;
                case 'Get Link':
                    codeEx += "getlink "
                    break;
                case 'Control':
                    codeEx += "control "
                    break;
                case 'Radar':
                    codeEx += "radar "
                    break;
                case 'Sensor':
                    codeEx += "sensor "
                    break;
                case 'Set':
                    codeEx += "set "
                    break;
                case "Operation":
                    codeEx += "op "
                    operator = container.querySelector('.dontInclude')
                    OperatorString = (operator.textContent.replace(/\s+/g, ''));
                    switch (OperatorString){
                        case "+":
                            codeEx += 'add '
                            break;
                        case "-":
                            codeEx += 'sub '
                            break;
                        case "*":
                            codeEx += 'mul '
                            break;
                        case "/":
                            codeEx += 'div '
                            break;
                        case "//":
                            codeEx += 'idiv '
                            break;
                        case "%":
                            codeEx += 'mod '
                            break;
                        case "^":
                            codeEx += 'pow '
                            break;
                        case "==":
                            codeEx += 'equal '
                            break;
                        case "not":
                            codeEx += 'notEqual '
                            break;
                        case "and":
                            codeEx += 'land '
                            break;
                        case "<":
                            codeEx += 'lessThan '
                            break;
                        case "<=":
                            codeEx += 'lessThanEqual '
                            break;
                        case ">":
                            codeEx += 'greaterThan '
                            break;
                        case ">=":
                            codeEx += 'greaterThanEqua '
                            break;
                        case "===":
                            codeEx += 'strictEqual '
                            break;
                        case "<<":
                            codeEx += 'shl '
                            break;    
                        case ">>":
                            codeEx += 'shr '
                            break;
                        case "or":
                            codeEx += 'or '
                            break;
                        case "b-and":
                            codeEx += 'and '
                            break;
                        case "flip":
                            codeEx += 'not '
                            break;
                        case "max":
                            codeEx += 'max '
                            break;
                        case "min":
                            codeEx += 'min '
                            break;
                        case "angle":
                            codeEx += 'angle '
                            break;
                        case "anglediff":
                            codeEx += 'angleDiff '
                            break;
                        case "len":
                            codeEx += 'len '
                            break;
                        case "noise":
                            codeEx += 'noise '
                            break;
                        case "abs":
                            codeEx += 'abs '
                            break;
                        case "log":
                            codeEx += 'log '
                            break;
                        case "log10":
                            codeEx += 'log10 '
                            break;
                        case "floor":
                            codeEx += 'floor '
                            break;
                        case "ceil":
                            codeEx += 'ceil '
                            break;
                        case "sqrt":
                            codeEx += 'sqrt '
                            break;
                        case "rand":
                            codeEx += 'rand '
                            break;
                        case "sin":
                            codeEx += 'sin '
                            break;
                        case "cos":
                            codeEx += 'cos '
                            break;
                        case "tan":
                            codeEx += 'tan '
                            break;
                        case "asin":
                            codeEx += 'asin '
                            break;
                        case "acos":
                            codeEx += 'acos '
                            break;
                        case "atan":
                            codeEx += 'atan '
                            break;    
                    }
                    break;
                case 'Lookup':
                    codeEx += "lookup "
                    break;
                case 'Pack Color':
                    codeEx += "packcolor "
                    break;
                case 'Wait':
                    codeEx += "wait "
                    break;
                case 'Stop':
                    codeEx += "stop "
                    break;
                case 'End':
                    codeEx += "end "
                    break;
                case 'Jump':
                    codeEx += "jump "
                    break;
                case 'Unit Bind':
                    codeEx += "ubind "
                    break;
                case 'Unit Control':
                    codeEx += "ucontrol "
                    break;
                case 'Unit Radar':
                    codeEx += "uradar "
                    break;
                case 'Unit Locate':
                    codeEx += "ulocate "
                    break;
                }
            codeParent = container.querySelectorAll('.code');
            codeParent.forEach(code => {
                codeElements = code.querySelectorAll('span');
                codeElements.forEach(code => {
                    if (code.classList.contains('editable') && !code.classList.contains('dontInclude') && (getComputedStyle(code)).display === 'block'){
                        codeEx += (code.textContent.replace(/\s+/g, '') + ' ');
                    }
                });
            });
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

}

