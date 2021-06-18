// var name= "Nam";
// var age= 20;

// var message="Hi, my name is "+ name +". I'm "+age+" years old";
// //alert(message);
// console.log(message);

// var firstName="Nam";
// var lastName="Doan";
// var dateOfBirth="14-09-2001";
// var age=20;
// var profileImgUrl="http://coolpicks.com/johnjacob.jpg";
// var loginWelcomeMessage="Welcome, "+firstName+". Happy "+age+"th birthday!";

// console.log(loginWelcomeMessage);

// var sum=-10+20;
// var sub=30-12;
// var mul=12*-3;
// var div=5/3;
// var mod=5%3;
// var result=(4*4)-2/3*(6+1);
// console.log(result);

// var studentNames=["Timmy","Michael","Yumi"];
// var naughtyStudent=[];
// var index=studentNames.indexOf("Timmy");

// naughtyStudent.push(studentNames[index]);
// console.log(naughtyStudent);
// naughtyStudent.splice(index,1);
// console.log(naughtyStudent);
// naughtyStudent.push(studentNames[1]);
// console.log(naughtyStudent);

// var area=function(length,width){
//     return length*width;
// }

// var area1=area(10,15);

// console.log(area1);

// function Student(firstName,lastName,age){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.age=age;
//     this.greeting=function(){
//         return "Hi, I'm "+firstName+", I'm "+age+" years old";
//     }
// }

// var students=[];
// students.push(new Student("Nam","Doan",20));
// students.push(new Student("A","Nguyen",2));
// for(var x=0;x<students.length;x++){
//     console.log(students[x]);
//     console.log(students[x].greeting());
// }


var num1=document.getElementById('numField1');
var num2=document.getElementById('numField2');
var resultField=document.getElementById('resultField');
var form=document.getElementById('bodyy');

form.addEventListener('submit',function(event){
    if(!num1.value||!num2.value){
        alert("Please enter value");
    }
    else{
        var x=parseFloat(num1.value);
        var y=parseFloat(num2.value);
        var result=x/y;
        var percent=result*100;
        resultField.innerText="Answer: "+percent+"%";
        event.preventDefault();
    }
})