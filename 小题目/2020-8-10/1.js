let simplifyNote = function(note){
    let reg = /\(.*\)/g;
    note = note.replace(reg,'');
    note = note.split('');
    let stack = [];
    note.forEach(item => {
        if (item === '<') {
            stack.pop();
        }else{
            stack.push(item)
        }
    })

    return stack.join('');
}

let testStr = 'Corona(Trump)USA<<<Virus';
console.log(simplifyNote(testStr));