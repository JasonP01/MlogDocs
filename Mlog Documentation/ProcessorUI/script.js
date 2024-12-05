
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
                code = `<span class="editable iNo" contenteditable="true">clear</span>
                        <span>r</span>
                        <span class="editable iNo" contenteditable="true">0</span>
                        <span>g</span>
                        <span class="editable iNo" contenteditable="true">0</span>
                        <span>b</span>
                        <span class="editable iNo" contenteditable="true">0</span>
                        <span class="editable iNo" contenteditable="true" style="display:none;">0</span>
                        <span class="editable iNo" contenteditable="true" style="display:none;">0</span>`
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
                        <span class="editable blockControl" contenteditable="true">enabled</span>
                        <span>of</span>
                        <span class="editable blockControl" contenteditable="true">block1</span>
                        <span>to</span>
                        <span class="editable blockControl" contenteditable="true">0</span>`
                break;
            case 'Radar':
                code = `<span>from</span>
                        <span class="editable blockControl" contenteditable="true">turret1</span>
                        <span>target</span>
                        <span class="editable blockControl" contenteditable="true">enemy</span>
                        <span>and</span>
                        <span class="editable blockControl" contenteditable="true">any</span>
                        <span>and</span>
                        <span class="editable blockControl" contenteditable="true">any</span>
                        <span>order</span>
                        <span class="editable blockControl" contenteditable="true">1</span>
                        <span>sort</span>
                        <span class="editable blockControl" contenteditable="true">distance</span>
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
                        <span class="editable operation" contenteditable="true">item</span>
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
                        <span class="editable flowControl" contenteditable="true">not</span>
                        <span class="editable flowControl" contenteditable="true">false</span>`
                break;
            case 'Unit Bind':
                code = `<span>type</span>
                        <span class="editable unitControl" contenteditable="true">@poly</span>`
                break;
            case 'Unit Control':
                code = `<span class="editable unitControl" contenteditable="true">move</span>
                        <span>x</span>
                        <span class="editable unitControl" contenteditable="true">0</span>
                        <span>y</span>
                        <span class="editable unitControl" contenteditable="true">0</span>`
                break;
            case 'Unit Radar':
                code = `<span>target</span>
                        <span class="editable unitControl" contenteditable="true">enemy</span>
                        <span>and</span>
                        <span class="editable unitControl" contenteditable="true">any</span>
                        <span>and</span>
                        <span class="editable unitControl" contenteditable="true">any</span>
                        <span>order</span>
                        <span class="editable unitControl" contenteditable="true">1</span>
                        <span>sort</span>
                        <span class="editable unitControl" contenteditable="true">distance</span>
                        <span>output</span>
                        <span class="editable unitControl" contenteditable="true">result</span>`
                break;
            case 'Unit Locate':
                code = `<span>find</span>
                        <span class="editable unitControl" contenteditable="true">building</span>
                        <span>group</span>
                        <span class="editable unitControl" contenteditable="true">core</span>
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
        )
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
    });
}

function Delete() {
    const parentContainer = event.target.closest('.container');
    if (parentContainer) {
        parentContainer.remove(); 
    }
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

var clickedMenu;
var bgclickedMenu;
var Gid;
function popUpMenu(event,id){
    Gid = id;
    console.log(Gid)
    const sensorMenu = document.getElementById(Gid);
    console.log(sensorMenu)
    bgclickedMenu = sensorMenu.parentElement
    sensorMenu.style.display = 'block';
    bgclickedMenu.style.display = 'flex'
    clickedMenu = event.target;
    // Position the menu where the span was clicked
    const menuWidth = sensorMenu.offsetWidth;
    const menuHeight = sensorMenu.offsetHeight;
    console.log(menuWidth)
    console.log(menuHeight)

    // Calculate the position so the menu opens in the middle of the cursor
    const posX = event.clientX + window.scrollX;
    const posY = event.clientY + window.scrollY;

    // Set the menu's position with adjustments to center it
    sensorMenu.style.top = `${posY - menuHeight / 2}px`;
    sensorMenu.style.left = `${posX - menuWidth / 2}px`;
    console.log("kajshdg")

    const container = document.getElementById(Gid);
    container.addEventListener('click', function(event) {
        if (event.target && event.target.matches('div')) { // Check if a div was clicked
            selectOption(event); // Call selectOption
        }
    });
}

function selectOption(event) {
    let span;
    if (clickedMenu.tagName == 'IMG'){
        span = clickedMenu.previousElementSibling
    } else {
        span = clickedMenu
    }
    const option = event.target.textContent
    span.textContent = option;
    closeMenu();
}

function closeMenu() {
    document.getElementById(Gid).style.display = 'none';
    bgclickedMenu.style.display = 'none'
}


  // Close the wizard menu when the close button is clicked
// document.getElementById('closeMenuBtn').addEventListener('click', closeWizard);

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
                    if (code.className && !code.classList.contains('dontInclude')){
                        codeEx += (code.textContent.replace(/\s+/g, '') + ' ');
                    }
                });
            });
        };
    });
    navigator.clipboard.writeText(codeEx).then(function() {
        alert("Text copied to clipboard!");
    }).catch(function(error) {
        alert("Failed to copy text: " + error);
    });
}

