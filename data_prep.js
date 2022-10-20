var cpa = [];


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

function prep() {
    return new Promise(function (resolve, reject) {
        if (cpa.length == 0)
            reject("no result returned");
        resolve(cpa);
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
module.exports = {prep,cpa,initialize,highGPA};