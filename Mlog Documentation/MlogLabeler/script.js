



function submitText() {
    const mcode = document.getElementById("input").value
    if (mcode) {
        let lines = mcode.split(/\r?\n/);
        lines = lines.filter(line => line.trim() && !line.trim().startsWith("#"));
        let jumpList = [];
        let lmcode = "";
        lines.forEach((line, index) => {
            let words = line.trim().split(/\s+/);
            let firstWord = words[0]; 
            if (firstWord === "jump") {
                let secondWord = words[1];
                jumpList.push(parseInt(secondWord));
            }
        });
        lines.forEach((line, index) => {
            let words = line.trim().split(/\s+/);
            let firstWord = words[0];
            if (jumpList.includes(index)) {
                lmcode += "j" + String(index) + ":" + "\n";
            }
            if (firstWord === "jump" && !isNaN(words[1])) {
                lmcode +=`    ${words[0]} j${words[1]} ${words.slice(2).join(" ")}\n`
            } else {
                // lmcode += "    " + (words.join(" ")) + "\n";
                lmcode += `    ${words.join(" ")}\n`
            }

        });
    const output = document.getElementById("output");
    output.value = lmcode
    }
}

function copy() {
    const lmcode = output.get("1.0", "end");
    pyperclip.copy(lmcode);
}
