
const buttons = document.querySelectorAll('.addItems');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        // console.log('Button clicked:', buttonText); // Logs the text of the clicked button
        closeWizard();
        type = 'op'; 
        typeName = buttonText;
        const containers = document.querySelectorAll('.container');
        const lastContainer = containers[containers.length - 1];
        lastContainer.insertAdjacentHTML('afterend', `
            <div class="container">
                <div class="${type}-container">
                    <div class="${type}-header">
                        <span>${typeName}</span>
                        <div class="controls">
                            <span id="copy">⚪</span>
                            <span onclick="Delete()">✕</span>
                        </div>
                    </div>
                    <div class="${type}-content">
                        <div class="code">
                            <span class="editable" contenteditable="true">result</span>
                            <span>=</span>
                            <span class="editable" contenteditable="true">a</span>
                            <span>*</span>
                            <span class="editable" contenteditable="true">b</span>
                        </div>
                    </div>
                </div>
            </div>`
    )});
});

//delete button
function Delete() {
    const parentContainer = event.target.closest('.container');
    if (parentContainer) {
        parentContainer.remove(); 
    }
}

function closeWizard() {
    document.getElementById('wizardMenu').style.display = 'none';
}

document.getElementById('openMenuBtn').addEventListener('click', function() {
    document.getElementById('wizardMenu').style.display = 'flex';
});

  // Close the wizard menu when the close button is clicked
document.getElementById('closeMenuBtn').addEventListener('click', closeWizard);


