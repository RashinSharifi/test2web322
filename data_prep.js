var cpa = [];
var students=[];


const fs = require('fs');
function initialize() {

    return new Promise(function (resolve, reject) {

        fs.readFile('./data/cpa.json', (err, data) => {
            if (err) reject("Failure to read file cpa.json!");
            cpa = JSON.parse(data);
            console.log(cpa.length);
        });
        resolve();

    });
   
    
};


function initialize2() {

    return new Promise(function (resolve, reject) {

        fs.readFile('./data/students.json', (err, data) => {
            if (err) reject("Failure to read file student.json!");
            students = JSON.parse(data);
            console.log(students.length);
        });
        resolve();

    });
};


function prep() {
    return new Promise(function (resolve, reject) {
        if (student.length == 0)
            reject("no result returned");
        resolve(student);
    });

};


function cpa() {
    return new Promise(function (resolve, reject) {
        if (cpa.length == 0)
            reject("no result returned");
        resolve(cpa);
    });

};

function highGPA() {
    return new Promise(function (resolve, reject) {
        if (cpa.length == 0)
            reject("no result returned");
        
        var max=cpa[0];
        for(let i=0; i<cpa.length; i++){
            if (cpa[i].gpa>max.gpa)
                max=cpa[i];
         
        }
        
        resolve(max);
    });
 
};

function allStudents() {
    return new Promise(function (resolve, reject) {
        if (allStudents.length == 0)
            reject("no result returned");
        resolve(allStudents);
    });

};

function addStudent() {
    return new Promise(function (resolve, reject) {
        if (addStudent.lenght == 0)
            reject("no result returned");
        resolve(addStudent);
    });

};

function getStudent() {
    return new Promise(function (resolve, reject) {
        if (getStudent.length == 0)
            reject("no result returned");
        resolve(getStudent);
    });

};



module.exports = {prep,cpa,initialize,highGPA,allStudents,addStudent,getStudent};