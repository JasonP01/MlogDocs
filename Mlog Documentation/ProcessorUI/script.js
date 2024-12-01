
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
                        <span class="editable iNo" contenteditable="true">0</span>`
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
                        <span class="editable blockControl" contenteditable="true">@copper</span>
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
                        <span>*</span>
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

document.getElementById('openWizard').addEventListener('click', function() {
    document.getElementById('wizardMenu').style.display = 'flex';
});

  // Close the wizard menu when the close button is clicked
document.getElementById('closeMenuBtn').addEventListener('click', closeWizard);


