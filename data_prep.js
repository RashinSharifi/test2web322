var cpa = [];
var students = [];

const fs = require('fs');

function prep() {
    return new Promise(function (resolve, reject) {
        fs.readFile('./students.json', (err, data) => {
            if (err) reject("unable to read file");
            students = JSON.parse(data);
            console.log(students.length);
        });

        resolve(students);
    });

};


function cpa() {
    return new Promise(function (resolve, reject) {
        fs.readFile('./data/cpa.json', (err, data) => {
            if (err) reject("Failure to read file cpa.json!");
            cpa = JSON.parse(data);
            console.log(cpa.length);
        });

        if (cpa.length == 0)
            reject("no result returned");
        resolve(cpa);
    });

};


function highGPA() {
    return new Promise(function (resolve, reject) {
        if (students.length == 0)
            reject("Failed finding the student with the highest GPA");
        
        var max=students[0];
        for(let i=0; i<students.length; i++){
            if (students[i].gpa>max.gpa)
                max=students[i];
         
        }
        
        resolve(max);
    });

};

 function allStudents(){
    return new Promise(function (resolve, reject) {
        if (students.length == 0)
            reject("no result returned");
                      
        resolve(students);
    });
 };

 function addStudent(studentData) {
    return new Promise(function (resolve, reject) {
        
        console.log(studentData);

        students.push(studentData);
        
        resolve();
    });
};

function getStudentByID(ID) {
    return new Promise((resolve, reject) => {
        console.log(ID);
         for (let i=0; i<students.length; i++) {
            //console.log(students[i].studId);
             if (students[i].studId == ID) {
                 resolve(students[i]);
             }
         }

        reject("no result returned");
    });
}

module.exports = {prep,cpa,highGPA,allStudents,addStudent,getStudentByID};
