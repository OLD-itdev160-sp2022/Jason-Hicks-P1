var user = ' Jason ';
var todayDate = new Date();
var title = user +'Today is '+ todayDate.getDate() +"/"+ todayDate.getMonth() +"/"+ todayDate.getFullYear();
var titleEL = document.getElementById('title');
titleEL.textContent = title;


function changeImage() 
{   
    var picoftheday = document.getElementById('picoftheday');
    if (picoftheday.src.match("../Project_1/img/CatCar.JPG")) {
        picoftheday.src = "../Project_1/img/CatAndDog.JPG";
    }
    else {
        picoftheday.src = "../Project_1/img/CatCar.JPG"; 
    }
}