var express = require("express");
  var app = express();
  var HTTP_PORT = process.env.PORT || 8080;
  var dataprep=require('./data_prep');
  
  
  function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
  }
  
  app.get("/", function(req,res){
     let restext=("<h2>Declaretion</h2><p>I acknowledge the College's academic integrity policy-and my \
     own integrity-remain in effect whwther my work is</p><p>done remotely or onsite.Any test or assignment \
     is an act of trust between me and my instructor, and especially with</p><p>my classmates...even when no\
      one is watching. IdeclareI will not break that trust.</p><p>Name:<mark> Rashin Sharifi</mark></p><p>Student\
       Number: <mark>159653210</mark></p> <br> <a href='/CPA'>Click to visit CPA students</a> <br><a href='/highGPA'>\
       Click to see who has the highest GPA</a> <br><a href='/Stud'>All Students</a> <br>");
       
     
     res.send(restext);
  });
  
 
  app.get("/highGPA", (req, res) => {
    dataprep.highGPA().then(function(result){
       var temp="<h2>Highest GPA</h2><br>Student ID: "+result.studId+ 
       "<br>name:"+result.name+
       "<br>program:"+result.program+
       "<br>GPA:"+result.gpa; 
        res.send(temp);
    }).catch(function(message){
        var myjson={};
        myjson["message"]=message;
        res.send(JSON.stringify(myjson));
    });
       
    }); 
app.get("/cpa", (req, res) => {
  dataprep.prep().then(function(result){
      res.send(result);
  }).catch(function(message){
      var myjson={};
      myjson["message"]=message;
      res.send(JSON.stringify(myjson));
  });
     
  }); 

  app.get("/students", (req, res) => {
    dataprep.prep().then(function(result){
        res.send(result);
        var temp2= "<h2>All Students</h2><br>Student ID: "
    }).catch(function(message){
        var myjson={};
        myjson["message"]=message;
        res.send(JSON.stringify(myjson));
    });
       
    }); 
  








  app.use((req,res) =>{
   res.status(404).send("Error 404: page not found");
  });
  dataprep.initialize().then(function(){
    app.listen(HTTP_PORT);
    })
    .catch(function(){
        console.log("initialized failed");
        });
    