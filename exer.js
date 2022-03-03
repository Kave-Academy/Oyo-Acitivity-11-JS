function run() {
    const student = { 
        name : "David Rayy", 
        sclass : "VI",
        rollno : 12, 
    }; 

    const propLength = Object.keys(student).length;

document.getElementById('output').innerHTML = propLength;
}


