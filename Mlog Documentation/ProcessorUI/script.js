//####################################################################################################################################
// add instruction function
//####################################################################################################################################
const buttons = document.querySelectorAll('.addItems');
const buttonMap = new Map(
    Array.from(buttons, b => [b.textContent, b])
);
buttons.forEach(button => {
    button.addEventListener('click', () => addInstruction(button))
});
    
function addInstruction(button, update, field1, field2, field3, field4, field5, field6, field7, field8, triggerPopupMenu){
    const pfstart = performance.now()
    
    if (typeof button === 'string') {
        button = buttonMap.get(button) || button;
    }
    buttonText = button?.textContent;
    divParent = button?.parentElement;
    type = divParent?.classList[0];
    // console.log('type')
    // console.log(type)
    closeWizard();
    
    let exclude = 0
    //Switch for every instruction type
    switch (buttonText) {
        case 'Read':
            code = `<span>read</span>
                    <span class="editable iNo" contenteditable="true">${field1 || 'result'}</span>
                    <span>=</span>
                    <span class="editable iNo" contenteditable="true">${field2 || 'cell1'}</span>
                    <span>at</span>
                    <span class="editable iNo" contenteditable="true">${field3 || '0'}</span>`
            break;
        case 'Write':
            code = `<span>write</span>
                    <span class="editable iNo" contenteditable="true">${field1 || 'result'}</span>
                    <span>=</span>
                    <span class="editable iNo" contenteditable="true">${field2 || 'cell1'}</span>
                    <span>at</span>
                    <span class="editable iNo" contenteditable="true">${field3 || '0'}</span>`
            break;
        case 'Draw':
            code = `<span class="editable iNo selectionValue" contenteditable="true" onclick="popUpMenu(event,'drawMenu')">${field1 || 'clear'}</span>
                    <span class="toggleableField" id="field1" style="display:block;">r</span>
                    <span class="editable iNo toggleableField" id="field1Value" contenteditable="true" style="display:block;">${field2 || '0'}</span>
                    <span class="toggleableField" id="field2" style="display:block;">g</span>
                    <span class="editable iNo toggleableField" id="field2Value" contenteditable="true" style="display:block;">${field3 || '0'}</span>
                    <span class="toggleableField" id="field3" style="display:block;">b</span>
                    <span class="editable iNo toggleableField" id="field3Value" contenteditable="true" style="display:block;">${field4 || '0'}</span>
                    <span class="toggleableField" id="field4">a</span>
                    <span class="editable iNo toggleableField" id="field4Value" contenteditable="true">${field5 || '0'}</span>
                    <span class="toggleableField" id="field5">a</span>
                    <span class="editable iNo toggleableField" id="field5Value" contenteditable="true">${field6 || '0'}</span>
                    <span class="toggleableField" id="field6">a</span>
                    <span class="editable iNo toggleableField" id="field6Value" contenteditable="true">${field7 || '0'}</span>`
            break;
        case 'Print':
            code = `<span class="editable iNo" contenteditable="true">${field1 || '\"frog\"'}</span>`
            break;
        case 'Format':
            code = `<span class="editable iNo" contenteditable="true">${field1 || '\"frog\"'}</span>`
            break;
        case 'Draw Flush':
            code = `<span>to</span>
                    <span class="editable blockControl" contenteditable="true">${field1 || 'display1'}</span>`
            break;
        case 'Print Flush':
            code = `<span>to</span>
                    <span class="editable blockControl" contenteditable="true">${field1 || 'message1'}</span>`
            break;
        case 'Get Link':
            code = `<span class="editable blockControl" contenteditable="true">${field1 || 'result'}</span>
                    <span>= link#</span>
                    <span class="editable blockControl" contenteditable="true">${field2 || '0'}</span>`
            break;
        case 'Control':
            code = `<span>set</span>
                    <span class="editable blockControl selectionValue" contenteditable="true" onclick="popUpMenu(event,'controlMenu')">${field1 || 'enabled'}</span>
                    <span id="field1">of</span>
                    <span class="editable blockControl" id="field1Value" contenteditable="true">${field2 || 'block1'}</span>
                    <span class="toggleableField" id="field2" style="display:block;">to</span>
                    <span class="editable blockControl toggleableField" id="field2Value" contenteditable="true" style="display:block;">${field3 || '0'}</span>
                    <span class="toggleableField" id="field3"></span>
                    <span class="editable blockControl toggleableField" id="field3Value" contenteditable="true">${field4 || '0'}</span>
                    <span class="toggleableField" id="field4"></span>
                    <span class="editable blockControl toggleableField" id="field4Value" contenteditable="true">${field5 || '0'}</span>`
            break;
        case 'Radar':
            code = `<span>from</span>
                    <span class="editable blockControl" contenteditable="true" id="field1Value">${field5 || 'turret1'}</span>
                    <span>target</span>
                    <span class="editable blockControl" contenteditable="true" id="field2Value" onclick="popUpMenu(event,'radarMenuTarget')">${field1 || 'enemy'}</span>
                    <span>and</span>
                    <span class="editable blockControl" contenteditable="true" id="field3Value" onclick="popUpMenu(event,'radarMenuTarget')">${field2 || 'any'}</span>
                    <span>and</span>
                    <span class="editable blockControl" contenteditable="true" id="field4Value" onclick="popUpMenu(event,'radarMenuTarget')">${field3 || 'any'}</span>
                    <span>order</span>
                    <span class="editable blockControl" contenteditable="true" id="field5Value">${field6 || '1'}</span>
                    <span>sort</span>
                    <span class="editable blockControl" contenteditable="true" id="field6Value" onclick="popUpMenu(event,'radarMenuSort')">${field4 || 'distance'}</span>
                    <span>output</span>
                    <span class="editable blockControl" contenteditable="true" id="field7Value">${field7 || 'result'}</span>`
            break;
        case 'Sensor':
            code = `<span class="editable blockControl" contenteditable="true" id="field1Value">${field1 || 'result'}</span>
                    <span>=</span>
                    <span class="editable blockControl dontInclude" contenteditable="true" id="field2Value">${field3 || '@copper'}</span>
                    <img src="image/pencil.png" alt="" onclick="popUpMenu(event,'sensorMenu')" class="pencilMenu">
                    <span>in</span>
                    <span class="editable blockControl" contenteditable="true" id="field3Value">${field2 || 'block1'}</span>`
            break;
        case 'Set':
            code = `<span class="editable operation" contenteditable="true">${field1 || 'result'}</span>
                    <span>=</span>
                    <span class="editable operation" contenteditable="true">${field2 || 'a'}</span>`
            break;
        case 'Operation':
            code = `<span class="editable operation" contenteditable="true">${field2 || 'result'}</span>
                    <span>=</span>
                    <span class="editable operation" contenteditable="true">${field3 || 'a'}</span>
                    <span class="editable operation dontInclude" contenteditable="true" onclick="popUpMenu(event,'opMenu')">${field1 || '*'}</span>
                    <span class="editable operation" contenteditable="true">${field4 || 'b'}</span>`
            break;
        case 'Lookup':
            code = `<span class="editable operation" contenteditable="true" id="field1Value">${field2 || 'result'}</span>
                    <span>=</span>
                    <span>lookup</span>
                    <span class="editable operation" contenteditable="true" id="field2Value" onclick="popUpMenu(event,'lookupMenu')">${field1 || 'item'}</span>
                    <span>#</span>
                    <span class="editable operation" contenteditable="true" id="field3Value">${field3 || '0'}</span>`
            break;
        case 'Pack Color':
            code = `<span class="editable operation" contenteditable="true">${field1 || 'result'}</span>
                    <span>=</span>
                    <span>pack</span>
                    <span class="editable operation" contenteditable="true">${field2 || '1'}</span>
                    <span class="editable operation" contenteditable="true">${field3 || '0'}</span>
                    <span class="editable operation" contenteditable="true">${field4 || '0'}</span>
                    <span class="editable operation" contenteditable="true">${field5 || '1'}</span>`
            break;
        case 'Wait':
            code = `<span class="editable flowControl" contenteditable="true">${field1 || 'result'}</span>
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
                    <span class="editable flowControl toggleableField" id="field2Value" contenteditable="true" style="display:block;">${field3 || 'x'}</span>
                    <span class="editable flowControl dontInclude selectionValue" id="field3Value" onclick="popUpMenu(event,'jumpMenu')">${field2 || 'not'}</span>
                    <span class="editable flowControl toggleableField" id="field4Value" contenteditable="true" style="display:block;">${field4 || 'false'}</span>
                    <div class="jumpTo">
                        <span>Jump To</span>
                        <span class="editable flowControl dontInclude" id="field1Value" contenteditable="true" draggable="false" onclick="jumpDestination(event)">${field1 || '-1'}</span>
                    </div>
                    <canvas class="jumpArrow" width=60></canvas>
                    <img src="image/logic-node.png" alt="" class="jumpArrowTriangle" draggable="false">`
            break;
        case 'Unit Bind':
            code = `<span>type</span>
                    <span class="editable unitControl" contenteditable="true" onclick="popUpMenu(event,'ubindMenu')">${field1 || '@poly'}</span>`
            break;
        case 'Unit Control':
            code = `<span class="editable unitControl selectionValue" contenteditable="true" onclick="popUpMenu(event,'ucontrolMenu')">${field1 || 'move'}</span>
                    <span class="toggleableField" id="field1" style="display:block;">x</span>
                    <span class="editable unitControl toggleableField" id="field1Value" contenteditable="true" style="display:block;">${field2 || '0'}</span>
                    <span class="toggleableField" id="field2" style="display:block;">y</span>
                    <span class="editable unitControl toggleableField" id="field2Value" contenteditable="true" style="display:block;">${field3 || '0'}</span>
                    <span class="toggleableField" id="field3">x</span>
                    <span class="editable unitControl toggleableField" id="field3Value" contenteditable="true">${field4 || '0'}</span>
                    <span class="toggleableField" id="field4">y</span>
                    <span class="editable unitControl toggleableField" id="field4Value" contenteditable="true">${field5 || '0'}</span>
                    <span class="toggleableField" id="field5">y</span>
                    <span class="editable unitControl toggleableField" id="field5Value" contenteditable="true">${field6 || '0'}</span>`
            break;
        case 'Unit Radar':
            code = `<span>target</span>
                    <span class="editable unitControl" contenteditable="true" id="field2Value" onclick="popUpMenu(event,'radarMenuTarget')">${field1 || 'enemy'}</span>
                    <span>and</span>
                    <span class="editable unitControl" contenteditable="true" id="field3Value" onclick="popUpMenu(event,'radarMenuTarget')">${field2 || 'any'}</span>
                    <span>and</span>
                    <span class="editable unitControl" contenteditable="true" id="field4Value" onclick="popUpMenu(event,'radarMenuTarget')">${field3 || 'any'}</span>
                    <span>order</span>
                    <span class="editable unitControl" contenteditable="true" id="field5Value">${field6 || '1'}</span>
                    <span>sort</span>
                    <span class="editable unitControl" contenteditable="true" id="field6Value" onclick="popUpMenu(event,'radarMenuSort')">${field4 || 'distance'}</span>
                    <span>output</span>
                    <span class="editable unitControl" contenteditable="true" id="field7Value">${field7 || 'result'}</span>`
            break;
        case 'Unit Locate':
            code = `<span>find</span>
                    <span class="editable unitControl" contenteditable="true" onclick="popUpMenu(event,'ulocateFindMenu')">${field1 || 'building'}</span>
                    <span class="toggleableField" id="field1" style="display:block;">group</span>
                    <span class="editable unitControl toggleableField" contenteditable="true" id="field1Value" style="display:block;" onclick="popUpMenu(event,'ulocateGroupMenu')">${field2 || 'core'}</span>
                    <span class="toggleableField" id="field2" style="display:block;">enemy</span>
                    <span class="editable unitControl toggleableField" contenteditable="true" id="field2Value" style="display:block;">${field3 || 'true'}</span>
                    <span class="toggleableField" id="field3">ore</span>
                    <span class="editable unitControl toggleableField" id="field3Value" contenteditable="true">${field4 || '@copper'}</span>
                    <img src="image/pencil.png" alt="" id="field3" onclick="popUpMenu(event,'sensorMenu')" class="pencilMenu toggleableField">
                    <span>outX</span>
                    <span class="editable unitControl" contenteditable="true">${field5 || 'outx'}</span>
                    <span>outY</span>
                    <span class="editable unitControl" contenteditable="true">${field6 || 'outy'}</span>
                    <span>found</span>
                    <span class="editable unitControl" contenteditable="true">${field7 || 'found'}</span>
                    <span>building</span>
                    <span class="editable unitControl" contenteditable="true">${field8 || 'building'}</span>`
            break;
        case 'Noop':
            code = `<span>No Operation</span>`
            break;
        // idk, i haven't thought about how would i do label yet, but probably not like this
        // so im not gonna continue implementing it
        // i implemented it anyway
        case 'Label':
            code = `<span contenteditable="true" id="field1">${field1 || 'Label'}</span>`
            exclude = 1
            type = 'Label-container extra'
            break;
        case 'Comment':
            code = `<span class="editable extra" contenteditable="true" id="field1">${field1 || 'Comment'}</span>`
            type = 'Comment-container extra'
            exclude = 1
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
        <div class="container" ${exclude === 1 ? 'id=\"exclude\"' : ''}>
            <div class="innerContainer ${type}-container">
                <div class="block-header">
                    <span class="headerText">${buttonText}</span>
                    <div class="controls">
                        ${exclude === 1 ? '' : '<span id="lineNumber"></span>'}
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

    newElement = lastContainer.nextElementSibling 

    if (triggerPopupMenu) {      // probably shouldn't use ('[onclick]')[2]
        selectOption(null,null,(newElement.querySelectorAll('[onclick]')[2]),newElement.querySelector('.selectionValue').textContent)
    }
    if (update == 0){
        return
    } else {
        updateLineNumber();
    }
    console.log(`${performance.now() - pfstart}`);

    };

//count and update line number on instruction

function updateLineNumber() {
    let jumpIns = [];
    containers = document.querySelectorAll('.container:not(#exclude)'); //can use :has() but i heard its not supported in older browser
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

    labels = document.querySelectorAll('.container#exclude') //i know this is a shitty fix
    labels.forEach(label => {
        if(!label.hasDown){
            MouseDown(label.querySelector('.block-header'),label)
        }
    })
    updateJumpArrow(jumpIns)
    // console.log(jumpIns);
}

function updateJumpArrow(jumpIns) {
    jumpIns.forEach(jump => {
        const canvas = jump.querySelector('.jumpArrow');
        // console.log(canvas);

        const ctx = canvas.getContext('2d');
        const containerrRect = (jump.closest('.container')).getBoundingClientRect();
        const destinations = document.querySelectorAll('#lineNumber');

        let destinationTarget = destinations[parseInt(jump.querySelector('#field1Value').textContent)]?.closest('.container')
        if (!destinationTarget){
            labels = document.querySelectorAll('.container#exclude')
            if (labels){
                labels.forEach(label => {
                    if (label.querySelector('#field1').textContent == jump.querySelector('#field1Value').textContent){
                        destinationTarget = label
                    }
                })
            }
        }

        const desRect = destinationTarget?.getBoundingClientRect(); 
        let distance = (containerrRect.top + containerrRect.height / 2) - (desRect?.top + desRect?.height / 2)
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
//#######

function openHelpWizard() {
    document.getElementById('helpMenu').style.display = 'flex';
}

function closeHelpWizard() {
    document.getElementById('helpMenu').style.display = 'none';
}
//#######

function openSaveMenu(){
    document.getElementById('saveMenu').style.display = 'flex';
    refreshSaves();
}

function closeSaveMenu(fromFrontend,e){
    if (fromFrontend){
    if (e.target.classList.contains('menu')) {
        document.getElementById('saveMenu').style.display = 'none';
    }
    }else {
        document.getElementById('saveMenu').style.display = 'none';
    }
}
//#######

function openPasteMenu(){
    document.getElementById('pasteMenu').style.display = 'flex';
}

function closePasteMenu(fromFrontend,e){
    if (fromFrontend){
        if (e.target.classList.contains('menu')) {
            document.getElementById('pasteMenu').style.display = 'none';
        }
        }else {
            document.getElementById('pasteMenu').style.display = 'none';
        }
}
//#######

function openNameMenu(){
    document.getElementById('name').style.display = 'flex';
}

function closeNameMenu(fromFrontend,e){
    if (e){
        e.stopPropagation()
    }
    if (fromFrontend){
        if (e.target.classList.contains('menu')) {
            document.getElementById('name').style.display = 'none';
        }
        }else {
            document.getElementById('name').style.display = 'none';
        }
}
//#######
function openTimelineMenu(){
    document.getElementById('timeline').style.display = 'flex';
    refreshTimeline()
}

function closeTimelineMenu(fromFrontend,e){
    if (e){
        e.stopPropagation()
    }
    if (fromFrontend){
        if (e.target.classList.contains('menu')) {
            document.getElementById('timeline').style.display = 'none';
        }
        }else {
            document.getElementById('timeline').style.display = 'none';
        }
}
//#######

function openSettingMenu(){
    document.getElementById('setting').style.display = 'flex';
    refreshSettingMenu()
}

function closeSettingMenu(fromFrontend,e){
    if (e){
        e.stopPropagation()
    }
    if (fromFrontend){
        if (e.target.classList.contains('menu')) {
            document.getElementById('setting').style.display = 'none';
        }
        }else {
            document.getElementById('setting').style.display = 'none';
        }
}
//#######



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
// let ctrlDown;
document.addEventListener('keydown',(e) =>{
    const wizardMenu = document.getElementById('wizardMenu');
    const helpMenu = document.getElementById('helpMenu');
    const saveMenu = document.getElementById('saveMenu');
    const isVisibleAdd = wizardMenu.style.display === 'flex'
    const isVisibleHelp = helpMenu.style.display === 'flex'
    const isVisibleSave = saveMenu.style.display === 'flex';
    // if (e.key === 'Control'){
    //     ctrlDown = true;
    // }
    if ((e.key === 'Escape' && (isVisibleAdd || isVisibleHelp || isVisibleSave)) || (isVisibleAdd && e.key === 'F2')) {
        closeWizard();
        closeHelpWizard();
        closeSaveMenu();
        closePasteMenu();
        closeTimelineMenu();
        // console.log('work');
    }else if (e.key === 'F2' && (!isVisibleAdd && !isVisibleHelp && !isVisibleSave)) {
        document.activeElement.blur();
        // console.log('work1');
        openWizard();
    }else if (isVisibleAdd) {
        if (keybindMap[e.key]){
            addInstruction(keybindMap[e.key])
        }
    }
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault
        document.activeElement.blur();
    }
    if (!isVisibleAdd && !isVisibleHelp && !isVisibleSave){
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
                document.activeElement.blur();
                moveContainer(e.key);
            }
        }
    }
})

//jump destination ctrl link

function jumpDestination(event) {
    if (event.ctrlKey){
        console.log('notctrl');
        console.log(event.target.textContent);
        console.log(event.target.parentElement.parentElement.parentElement.parentElement.querySelector('#lineNumber').textContent);
        destinationElement = document.querySelectorAll('.container:not(#exclude)')[parseInt(event.target.textContent)]
        destinationElement.scrollIntoView({
            behavior: "smooth",
            block: "center"
        })

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log(destinationElement.firstElementChild);
                    destinationElement.firstElementChild.classList.add('glow')
            
                    setTimeout(() => {
                        destinationElement.firstElementChild.style.transition = 'box-shadow 0.3s ease-in-out'
                        destinationElement.firstElementChild.classList.remove('glow')
                    }, 1000);
                    observer.disconnect();
                }
            });
        });
        
        observer.observe(destinationElement);
        


    }
}


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
    (document.getElementById('debugText2')).textContent = `is dragging : ${isDragging}`;
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
        
        (document.getElementById('debugText8')).textContent = `above instruction : ${closestContainer?.textContent}`;
        let preview = closestContainer.nextSibling
        if (preview.className !== 'placementPreview'){
            (document.querySelector('.placementPreview'))?.remove();
            closestContainer.insertAdjacentHTML('afterend', 
                `<div class="placementPreview" 
                style=height:${
                    (elementDragged.offsetHeight)- 20}px;></div>`)
            // the value 20 is from :
            //(window.getComputedStyle(elementDragged.querySelector('DIV')).marginBottom) - placementPreview {border-width} * 2;
        }
        (document.getElementById('debugText6')).textContent = `cursor position x ${x}`;
        (document.getElementById('debugText7')).textContent = `cursor position y ${y}`;
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
            e.preventDefault() // prevent scrolling for touch scroll devices
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
            e.preventDefault() // prevent scrolling for touch scroll devices
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
    console.log(event);

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
function selectOption(event,id,isImport,importSelectionValue) {

    // Draw instruction related function
    // this function is used in switch option below,
    // i dont like defintion that gets defined far from the place its used, but its a function, what can you do
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


    let option;
    let targetId

    // console.log(event);
    if (!isImport){
        performanceStart = performance.now();
        event.stopPropagation();
        let span;
        if (clickedMenu.tagName == 'IMG'){
            span = clickedMenu.previousElementSibling
        } else {
            span = clickedMenu
        }
    
        targetId = event.target.id
        
        if (event.target.tagName == 'IMG' || event.target.className == "popUpMenu") {
            return
            }
        
        option = event.target.textContent
        span.textContent = option;
        // console.log(event.target);
        if (id == "drawMenu" && option != "print") {
            removeField3Event((clickedMenu.parentElement.querySelector('#field3Value')));
        }
    
    }else {
        clickedMenu = isImport
        option = importSelectionValue
        
    }

    const fields = clickedMenu.parentElement.querySelectorAll('.toggleableField')



    // Switch case for every pop up menu context that changes its instruction fields 
    //(there might be a better way but unless its performance is not >10ms its fine)
    console.log(option);
    switch (option){
        // control section
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

        // Draw Section
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

        //jump section
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
    if(!isImport){
        closeMenu(event);
    }
}

function closeMenu(event) {
    console.log('close');
    popUpMenuElement.style.display = 'none';
    event.stopPropagation();
    bgclickedMenu.style.display = 'none'
    performanceEnd = performance.now();
    (document.getElementById('debugText4')).textContent = (`Pop up menu performance: ${performanceEnd - performanceStart} milliseconds`);
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
    if (document.activeElement.tagName == 'BODY' && !cursorContainer.classList.contains('placeHolder')){
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
            container.insertAdjacentElement('afterend', selectedDiv);
        }
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
    "always"    : 'always ',

    'add'               : 'add ', // UGLY, idk other way though
    'sub'               : 'sub ',
    'mul'               : 'mul ',
    'div'               : 'div ',
    'idiv'              : 'idiv ',
    'mod'               : 'mod ',
    'pow'               : 'pow ',
    'equal'             : 'equal ',
    'notEqual'          : 'notEqual ',
    'land'              : 'land ',
    'lessThan'          : 'lessThan ',
    'lessThanEqual'     : 'lessThanEqual ',
    'greaterThan'       : 'greaterThan ',
    'greaterThanEqual'  : 'greaterThanEqual ',
    'strictEqual'       : 'strictEqual ',
    'shl'               : 'shl ',
    'shr'               : 'shr ',
    'or'                : 'or ',
    'and'               : 'and ',
    'xor'               : 'xor ',
    'not'               : 'not ',
    'max'               : 'max ',
    'min'               : 'min ',
    'angle'             : 'angle ',
    'angleDiff'         : 'angleDiff ',
    'len'               : 'len ',
    'noise'             : 'noise ',
    'abs'               : 'abs ',
    'log'               : 'log ',
    'log10'             : 'log10 ',
    'floor'             : 'floor ',
    'ceil'              : 'ceil ',
    'sqrt'              : 'sqrt ',
    'rand'              : 'rand ',
    'sin'               : 'sin ',
    'cos'               : 'cos ',
    'tan'               : 'tan ',
    'asin'              : 'asin ',
    'acos'              : 'acos ',
    'atan'              : 'atan ',
    'always'            : 'always ',
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
    'Radar'         : 'radar ',
    // 'Sensor'        : 'sensor ',
    'Set'           : 'set ',
    // 'Operation'     : 'operation ',
    // 'Lookup'        : 'lookup ',
    'Pack Color'    : 'packcolor ',
    'Wait'          : 'wait ',
    'Stop'          : 'stop ',
    'End'           : 'end ',
    // 'Jump'           : 'jump ',
    'Unit Bind'     : 'ubind ',
    'Unit Control'  : 'ucontrol ',
    // 'Unit Radar'    : 'uradar ',
    // 'Unit Locate'   : 'ulocate ',
    'Noop'          : 'noop',
    // 'Label'         : 'label',
    'Comment'       : '#',
} 
function exportCode(save){
    deselectContainer();
    codeEx = ""
    containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        insSpan = container.querySelector('span');
        if (insSpan){
            if (codeEx != ''){
                codeEx += '\n'
            }
            let instType = insSpan.textContent;
            if (instTypeMap?.[instType]){
                codeEx += instTypeMap[instType];
                exportFields(0)
            } else {
                if (instType == 'Jump'){
                    codeEx += `jump ${container.querySelector('#field1Value')?.textContent} ${operatorMap[container.querySelector('#field3Value')?.textContent]}`
                    exportFields(0)
                }
                if (instType == 'Sensor'){
                    codeEx += `sensor ${container.querySelector('#field1Value')?.textContent} ${container.querySelector('#field3Value')?.textContent} ${container.querySelector('#field2Value')?.textContent}`
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
                if (instType == 'Label'){
                    codeEx += `${container.querySelector('.code').querySelector('span').textContent}:`
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
    if (save){
        return codeEx
    } else {
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
}


let instTypeMapR = {
    'read'      : 'Read',
    'write'     : 'Write',
    'draw'      : 'Draw',
    'print'     : 'Print',
    'format'    : 'Format',
    'drawflush' : 'Draw Flush',
    'printflush': 'Print Flush',
    'getlink'   : 'Get Link',
    'control'   : 'Control',
    'radar'     : 'Radar',
    'sensor'    : 'Sensor',
    'set'       : 'Set',
    'op'        : 'Operation',
    'lookup'    : 'Lookup',
    'packcolor' : 'Pack Color',
    'wait'      : 'Wait',
    'stop'      : 'Stop',
    'end'       : 'End',
    'jump'      : 'Jump',
    'ubind'     : 'Unit Bind',
    'ucontrol'  : 'Unit Control',
    'uradar'    : 'Unit Radar',
    'ulocate'   : 'Unit Locate',
} 
// ########################################################################################################################
// import
// ########################################################################################################################
// TODO give an option for the user to paste their code manually to a field if they reject clipboard access
// with a menu
// and remember choice 
async function importCode(manual,codeSaved){
    let code
    if (codeSaved){
        code = codeSaved
    } else {
        if (manual != 1){
            try {
                code = await navigator.clipboard.readText();
                // document.getElementById('clipboardContent').innerText = `Clipboard content: ${code}`;
            } catch (err) {
            // console.error('Failed to read clipboard contents: ', err);
            document.getElementById('alert1').classList.remove("alertShow")
            document.getElementById('alert1').style.display = 'block'
    
            // let timeLeft = 4000; // In milliseconds
            // const endTime = Date.now() + timeLeft; // Calculate when the timer should end
            
            // const timer = setInterval(() => {
                //   const now = Date.now();
            //   timeLeft = Math.max(0, endTime - now); // Calculate remaining time
            
            //   document.getElementById('debugText8').textContent = (timeLeft / 1000).toFixed(3); // Display in seconds with milliseconds
            
            //   if (timeLeft <= 0) {
            //     clearInterval(timer);
            //     document.getElementById('debugText8').textContent = "Time's up!";
            //   }
            // }, 10); // Update every 10ms for smoother display
    
            setTimeout(() => {
                document.getElementById('alert1').classList.add("alertShow");
                setTimeout(() => {
                    document.getElementById('alert1').style.display = 'none'
                }, 1000);
            }, 4000);
            return
            }
        }else {
            code = document.getElementById('pasteBox').value
        }
    }
    // console.log(code);
    document.querySelectorAll('.container').forEach(e => e.remove());
    let lines = code.split(/\r?\n/);
    // lines = lines.filter(line => line.trim() && !line.trim().startsWith("#"));
    // console.log(lines);
    lines.forEach((line, index) => {
        let words = line.trim().split(/\s+/);
        type = instTypeMapR[words[0]]
        if (type){
            // console.log(type);
            let triggerPopupMenu
            if (type == 'Control' || type == 'Draw' || type == 'Unit Control' || type == 'Jump') {
                triggerPopupMenu = true
            }
            addInstruction(type, 0, words[1], words[2], words[3], words[4], words[5], words[6], words[7], words[8], triggerPopupMenu)
        } else {
            if (words[0].endsWith(":")){
                addInstruction('Label', 0, words[0].replace(":",""))
            }else if (words[0].startsWith("#")) {
                addInstruction('Comment', 0, words[0].replace("#",""))
            }else {
                addInstruction('Noop', 0)
            }
            
        }
    });
    updateLineNumber()
    closePasteMenu()
}

// ########################################################################################################################
// saves
// ########################################################################################################################
function saveCurrent(autosave){
    let code = exportCode(1)
    if (code == ""){
        code = 'Noop'
    }
    let name = document.getElementById('Name').value
    if (!name){
        name = 'save1'
        let counter = 1;
        while (localStorage.getItem(name)) {
            name = `save${counter}`;
            counter++;
            // console.log(counter);
            // console.log(name);
        }
    }
    // console.log(name);
    if (autosave){
        // const now = new Date();

        // // Extract date components
        // const day = String(now.getDate()).padStart(2, '0');       // Day (DD)
        // const month = String(now.getMonth() + 1).padStart(2, '0'); // Month (MM) - Months are 0-indexed
        // const year = now.getFullYear();                           // Year (YYYY)
        // const hours = String(now.getHours()).padStart(2, '0');    // Hours (HH)
        // const minutes = String(now.getMinutes()).padStart(2, '0'); // Minutes (MM)
        // const seconds = String(now.getSeconds()).padStart(2, '0'); // Seconds (SS)

        // const formattedDate = `${day}-${month}-${year}-${hours}${minutes}-${seconds}`;

        localStorage.setItem(`autosave#${Date.now()}`, code);
    }else {
        localStorage.setItem(name, code);
        closeNameMenu()
    }
    refreshSaves()
}

let savesText = [];
function refreshSaves(){
    let saves = Object.keys(localStorage)
        .filter(key => !key.includes("autosave#") && !key.includes("setting"))
        .sort()
    // console.log(saves);
    let saveList = document.getElementById('saveList')
    saveList.innerHTML = ''
    savesText = [];
    saves.forEach(save => {
        const saveDiv = document.createElement('div');
        saveDiv.textContent = save;
        saveDiv.addEventListener('click', () => {
            saveDiv.classList.toggle('saveSelected');
        });
        saveList.appendChild(saveDiv);
        savesText.push(saveDiv)
    });
}

function refreshTimeline(){
    let saves = Object.keys(localStorage)
        .filter(key => key.includes("autosave#"))
        .map(key => ({
            key,
            timestamp: parseInt(key.split("#")[1])
        }))
        .sort((a, b) => a.timestamp - b.timestamp)
        .map(item => item.key)
        .reverse();
    
    let savedSettings = getSavedSettings()
    let first10Saves = saves.slice(0, savedSettings.buffer);
    saves.forEach(key => {
        if (!first10Saves.includes(key)) {
            localStorage.removeItem(key);
        }
    });

    let timelineList = document.getElementById('timelineList')
    timelineList.innerHTML = ''
    saves.forEach(save => {
        const saveDiv = document.createElement('div');
        const now = new Date((parseInt(save.split("#")[1])));

        // Extract date components
        const day = String(now.getDate()).padStart(2, '0');        // Day (DD)
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Month (MM) - Months are 0-indexed
        const year = now.getFullYear();                            // Year (YYYY)
        const hours = String(now.getHours()).padStart(2, '0');     // Hours (HH)
        const minutes = String(now.getMinutes()).padStart(2, '0'); // Minutes (MM)
        const seconds = String(now.getSeconds()).padStart(2, '0'); // Seconds (SS)

        const formattedDate = `${day}-${month}-${year}-${hours}-${minutes}-${seconds}`;


        saveDiv.textContent = `${save.split("#")[0]}#${formattedDate}`;
        saveDiv.dataset.saveFileName = `${save}`; //UGLY

        // saveDiv.textContent = save
        saveDiv.addEventListener('click', () => {
            saveDiv.classList.toggle('saveSelected');
            loadSelected()
        });
        timelineList.appendChild(saveDiv);
    });
}

function loadSelected(){
    let code
    document.querySelectorAll('.saveSelected').forEach(selected => {
        selected.classList.remove('saveSelected')
        if (!code){ 
            code = localStorage.getItem(selected.textContent);
            if (!code) { //UGLY
                code = localStorage.getItem(selected.dataset.saveFileName)
            }
        }
    })
    if(code){
        importCode(0,code)
    }
    closeSaveMenu()
}

function deleteSelected(){
    document.querySelectorAll('.saveSelected').forEach(selected => {
        localStorage.removeItem(selected.textContent);
        selected.remove()
    })
}

const searchBar = document.getElementById("searchBar")


searchBar.addEventListener("input",() => {
    const query = searchBar.value.toLowerCase();
    savesText.forEach(save => {
        const text = save.textContent.toLowerCase();
        if (text.includes(query)){
            save.style.display = ""
        }else { 
            save.style.display = "none"
        }
    })
})

// ####################################################
// autosave controller
// ####################################################
let autosaveIconTimeout;
let autosaveRunInterval;
function autosave() {
    function autosaveRun(){
        saveCurrent(1)
        refreshTimeline()
        const autosaveIconElement = document.getElementById('autosaveIcon')
        autosaveIconElement.style.transition = 'none'
        autosaveIconElement.style.opacity = 1;
    
        if (autosaveIconTimeout) {
            clearTimeout(autosaveIconTimeout);
        }
    
        autosaveIconTimeout = setTimeout(() => {
            autosaveIconElement.style.transition = 'opacity 1s ease-out'
            autosaveIconElement.style.opacity = 0;
        }, 1000)
    }
    let savedSettings = getSavedSettings()
    if (savedSettings.autosave){
        if (autosaveRunInterval) {
            clearInterval(autosaveRunInterval);
        }
        autosaveRunInterval = setInterval(autosaveRun,savedSettings.interval*1000)
        autosaveRun()
    }else{
        clearInterval(autosaveRunInterval);
    }
}


// ########################################################################################################################
// settings
// ########################################################################################################################

function getSavedSettings(){
    let savedSettings = localStorage.getItem('setting')
    if (!savedSettings){
        const defaultSettings = {
            autosave: true,
            interval: 10,
            buffer: 20,
            showDebug : false
        } 
        localStorage.setItem('setting', JSON.stringify(defaultSettings))
        savedSettings = defaultSettings
    }else {
        savedSettings = JSON.parse(savedSettings)
    }
    return savedSettings
}

function updateSettingValue(e) {
    const value = e.value + e.dataset.suffix
    e.nextElementSibling.textContent = value
}

function saveSettings(){
    const setting = document.getElementById('setting')
    const isAutosave = setting.querySelector('#autosave').checked
    const interval = setting.querySelector('#interval').value
    const buffer = setting.querySelector('#buffer').value
    const showDebug = setting.querySelector('#showDebug').checked
    const savedSettings = {
        autosave : isAutosave,
        interval : interval,
        buffer : buffer,
        showDebug : showDebug
    }
    localStorage.setItem('setting',JSON.stringify(savedSettings))
    closeSettingMenu()
    refreshUserSetting()
}

function refreshUserSetting(){
    let savedSettings = getSavedSettings()
    autosave()
    if (savedSettings.showDebug) {
        document.getElementById('debugMenu').style.display = 'block'
    }else {
        document.getElementById('debugMenu').style.display = 'none'
    }
}

function refreshSettingMenu(){
    let savedSettings = getSavedSettings()
    
    document.getElementById('autosave').checked = savedSettings.autosave
    document.getElementById('showDebug').checked = savedSettings.showDebug

    const interval = document.getElementById('interval')
    const buffer = document.getElementById('buffer')
    interval.value = savedSettings.interval
    updateSettingValue(interval)
    buffer.value = savedSettings.buffer
    updateSettingValue(buffer)

}

window.onload = () => {
    document.getElementById('loadingAlert').style.display = 'none'
    refreshUserSetting()
    // autosaveInterval = setInterval(autosave, 10000);
    // openSettingMenu()
    // openSaveMenu()
}