



function submitText() {
    const mcode = document.getElementById("input").value
    if (mcode) {
        const lines = mcode.split(/\r?\n/);
        const totalLines = lines.length;
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
            if (firstWord === "jump") {
                words.forEach((word, wordIndex) => {
                    if (wordIndex === 1) {
                        lmcode += "j" + String(word) + " ";
                    } else if (wordIndex === 0) {
                        lmcode += "    " + word + " ";
                    } else if (wordIndex === words.length - 1) {
                        lmcode += word + " " + "\n";
                    } else {
                        lmcode += word + " ";
                    }
                });
            } else {
                lmcode += "    " + (words.join(" ")) + "\n";
            }
            if (jumpList.includes(index)) {
                lmcode += "j" + String(index) + ":" + "\n";
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


//         while (i <= totalLines) {
//             const lineText = file.get(`${i}.0`, `${i}.end`);
//             if (lineText.trim()) {  // Check if the line is not empty
//                 const firstWord = lineText.split(" ")[0];
//                 if (firstWord === "jump") {
//                     let ii = 0;
//                     while (true) {
//                         try {
//                             const word = lineText.split(" ")[ii];
//                             if (ii === 1) {
//                                 lmcode += "j" + String(word) + " ";
//                             } else if (ii === 0) {
//                                 lmcode += "    " + word + " ";
//                             } else {
//                                 lmcode += word + " ";
//                             }
//                         } catch {
//                             lmcode += "\n";
//                             break;
//                         }
//                         ii += 1;
//                     }
//                 } else {
//                     lmcode += "    " + lineText + "\n";
//                 }
//                 if (jumpList.includes(i)) {
//                     lmcode += "j" + String(i) + ":" + "\n";
//                 }
//             }
//             i += 1;
//         }
//         console.log(jumpList);
//         output.insert("1.0", lmcode);
//     } else {
//         error.config({ text: 'please enter an mlog code' });
//     }
// }



// const root = tk.Tk();
// root.title("Mlog code labler");
// let track = 0;

// root.geometry("800x500");
// root.resizable(false, false);
// root.config({ bg: '#323740' });

// const file = tk.Text(root);
// file.place({ x: 50, y: 50, width: 300, height: 300 });

// const output = tk.Text(root);
// output.place({ x: 400, y: 50, width: 300, height: 300 });

// const submitButton = tk.Button(root, { text: "Submit", command: submitText });
// submitButton.place({ x: 200, y: 400 });

// const copyButton = tk.Button(root, { text: "Copy!", command: copy });
// copyButton.place({ x: 600, y: 400 });

// const error = tk.Label(root, { text: "", bg: '#323740', fg: 'white', font: ["Arial", 12] });
// error.place({ x: 300, y: 400 });
// const input = tk.Label(root, { text: "Input", bg: '#323740', fg: 'white', font: ["Arial", 15] });
// input.place({ x: 80, y: 20 });
// const outputtext = tk.Label(root, { text: "Output", bg: '#323740', fg: 'white', font: ["Arial", 15] });
// outputtext.place({ x: 400, y: 20 });

// root.mainloop();

