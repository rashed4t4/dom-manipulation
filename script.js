/* Task 1 */
var heading = document.getElementById('heading');
console.log(heading.innerText);

/* Task 2 using plain JavaScript */

function addParagraph ()
{
    
    var task2 = document.getElementById('task2a');
    var paragraph = document.createElement('p');
    paragraph.innerText = "Hello World";
    task2.appendChild(paragraph);
    
}
var textBtn = document.getElementById('btn1');
textBtn.addEventListener('click', addParagraph);

function changeColor(event){
    var body = document.getElementsByTagName('body')[0];
    if (event.target.innerText == "Red"){
        body.style.backgroundColor ='red';
    }
    if(event.target.innerText =="Green"){
        body.style.backgroundColor = 'green';
    }
}

function redirectToGoogle(){
    window.location.assign('https://www.google.com');
}

/* Task 4 using jQuery */
$("#addText").click(function(){
    $("#task4a").append("Hello World");
});

$("#btnRed").click(function(){
    $('body').css('backgroundColor','red') ;
});
$("#btnGreen").click(function(){
    $('body').css("backgroundColor",'green') ;
});

$("#add").click(function(){
    $("#ans").text('Result = ' + (Number($('#num1').val()) + Number($('#num2').val())));
    
});



