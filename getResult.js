// Problem-3: Get Result By using Function

function getMarks(marks) {
    if (marks >= 80) {
        return "A+";
    }
    else if (marks >= 70) {
        return "A";
    }
    else if (marks >= 60) {
        return "A-";
    }
    else if (marks >= 50) {
        return "B";
    }
    else if (marks >= 40) {
        return "C";
    }    
    else {
        return "F";
    }
}

const myMarks = 57;
const getResut = getMarks(myMarks);
console.log(getResut);