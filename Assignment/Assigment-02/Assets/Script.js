let trapsSequence = [];  
let userInput = []
let scores = 0;    
let gameStarted = false;      


const Main = document.getElementById('main'); 
const pathContainer = document.getElementById('path-container');   
const BtnStart = document.getElementById('StartGame')
const Points = document.getElementById('score')
const Tutorial = document.getElementById('instruction')
const doorButtons = document.querySelectorAll("#path-container button");


const StartPage = document.getElementById('After1')

const SkinBtn = document.getElementById('SelectSkin')
const BtnBrown = document.getElementById('brown')
const BtnGreen = document.getElementById('green')
const BtnOrange = document.getElementById('orange')

const FailPopup = document.getElementById('Epicfail')
const VideoPopup = document.getElementById('MyVideo')


const ResetBtn = document.getElementById('Restart')


const ErrorPopup = document.getElementById("Errorpopup");
const ClosePopupBtn = document.getElementById("Closepopup");


const Soundfail= document.getElementById("FailAudio"); 
const Soundpoint= document.getElementById("WinAudio"); 


const Btn1 = document.getElementById ('1')
const Btn1Id = '1'
const Btn2 = document.getElementById ('2')
const Btn2Id = '2'
const Btn3 = document.getElementById ('3')
const Btn3Id = '3'
const Btn4 = document.getElementById ('4')
const Btn4Id = '4'
const Btn5 = document.getElementById ('5')
const Btn5Id = '5'
const Btn6 = document.getElementById ('6')
const Btn6Id = '6'



Btn1.addEventListener('click', () => {
    Controll(Btn1Id)
});

Btn2.addEventListener('click', () => {
    Controll(Btn2Id)
});

Btn3.addEventListener('click', () => {
    Controll(Btn3Id)
});

Btn4.addEventListener('click', () => {
    Controll(Btn4Id)
});

Btn5.addEventListener('click', () => {
    Controll(Btn5Id)
});

Btn6.addEventListener('click', () => {
    Controll(Btn6Id)
});



document.addEventListener('keydown', (event) => {

    if (!gameStarted) return;

    switch(event.key.toLowerCase()){
        case '1':
        Controll(Btn1Id);
    }
    
    switch(event.key.toLowerCase()){
        case '2':
        Controll(Btn2Id);
    }

    switch(event.key.toLowerCase()){
        case '3':
        Controll(Btn3Id);
    }

    switch(event.key.toLowerCase()){
        case '4':
        Controll(Btn4Id);
    }

    switch(event.key.toLowerCase()){
        case '5':
        Controll(Btn5Id);
    }

    switch(event.key.toLowerCase()){
        case '6':
        Controll(Btn6Id);
    }
   
});

function Controll(id) {

    if (!gameStarted) return;
    userInput.push(id)
    const lastClicked = userInput[userInput.length - 1];
   
    if (trapsSequence.includes(parseInt(lastClicked))) { 
        userInput = [];
        trapsSequence = [];
        showErrorPopup()
        scores=0
        newPath()
        Points.innerHTML =0
        
        Soundfail.play()
    }

    else{
        userInput = [];
        trapsSequence = [];
        newPath()
        AddPoint()
    }
}


function newPath() {
    for (let i=0; trapsSequence.length<2; i++){ 
        let Game1 = parseInt(Math.random() * 6+1)
        if (!trapsSequence.includes(Game1)){
            trapsSequence.push(Game1);
        }  

}
}




BtnStart.addEventListener('click', () => {
    gameStarted = true; 
    pathContainer.classList.remove('hidden');  
    pathContainer.classList.add('visible');

    Tutorial.classList.remove('hidden');
    Tutorial.classList.remove('visible');

    newPath()

    BtnStart.classList.remove('visible')
    BtnStart.classList.add('hidden');
});


function AddPoint(){
scores +=1
Points.innerHTML = parseFloat(+scores);
Soundpoint.play()
}


BtnBrown.addEventListener('click', () => {
    SkinBtn.classList.add('hidden'); 
    StartPage.classList.remove('hidden') 
    StartPage.classList.add('visible')
    BtnStart.classList.remove('hidden')
    BtnStart.classList.add('visible-Brown');

    

    FailPopup.classList.remove('Popupcontent1')
    FailPopup.classList.add('Popupcontent1')

    changeToBrown()

})

function changeToBrown() {
    const images = document.querySelectorAll("#path-container button img");
    
    images.forEach(img => {
        img.src = "Assets/Img/porta1.png"; 
    });

    VideoPopup.setAttribute("src", "Assets/Video/Fail.mp4"); 
    Soundfail.setAttribute("src", "Assets/sound/Fail.wav");
}


BtnGreen.addEventListener('click', () => {
    SkinBtn.classList.add('hidden'); 
    StartPage.classList.remove('hidden') 
    StartPage.classList.add('visible')
    BtnStart.classList.remove('hidden')
    BtnStart.classList.add('visible-Green')
    
    FailPopup.classList.remove('Popupcontent1')
    FailPopup.classList.add('Popupcontent2')
    
    changeToGreen()

})

function changeToGreen() {
    const images = document.querySelectorAll("#path-container button img");
    
    images.forEach(img => {
        img.src = "Assets/Img/porta2.png"; 
    });

    VideoPopup.setAttribute("src", "Assets/Video/Fail2.mp4"); 
    Soundfail.setAttribute("src", "Assets/sound/Fail2.wav");
}


BtnOrange.addEventListener('click', () => {
    SkinBtn.classList.add('hidden'); 
    StartPage.classList.remove('hidden') 
    StartPage.classList.add('visible')
    BtnStart.classList.remove('hidden')
    BtnStart.classList.add('visible-Orange')

    FailPopup.classList.remove('Popupcontent1')
    FailPopup.classList.add('Popupcontent3')

    changeToOrange()

})

function changeToOrange() {
    const images = document.querySelectorAll("#path-container button img");

    images.forEach(img => {
        img.src = "Assets/Img/porta3.png"; 
    });

    VideoPopup.setAttribute("src", "Assets/Video/Fail3.mp4");
     Soundfail.setAttribute("src", "Assets/sound/Fail3.wav"); 
}


ResetBtn.addEventListener('click', () => {
    Points.innerHTML =0
    scores =0
    gameStarted = false;
    newPath()

  
    SkinBtn.classList.remove('hidden');
    SkinBtn.classList.add('visible');

    StartPage.classList.remove('visible');
    StartPage.classList.add('hidden');
    BtnStart.classList.remove('visible-Brown', 'visible-Green', 'visible-Orange');
    BtnStart.classList.add('hidden');

    FailPopup.classList.remove('Popupcontent1', 'Popupcontent2','Popupcontent3')
    FailPopup.classList.add('Popupcontent1')

    pathContainer.classList.remove('visible');
    pathContainer.classList.add('hidden');
    Tutorial.classList.remove('visible');
    Tutorial.classList.add('hidden');

    trapsSequence = [];
    userInput = [];
    

})


function showErrorPopup() {
    ErrorPopup.classList.remove("hidden");
    gameStarted = false;

}

ClosePopupBtn.addEventListener("click", () => {
    ErrorPopup.classList.add("hidden");
    gameStarted = true;
});