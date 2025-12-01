let trapsSequence = [];  
let userInput = []
let scores = 0;    
let gameStarted = false;      


const Main = document.getElementById('main'); 
const pathContainer = document.getElementById('path-container');   

const Points = document.getElementById('score')
const Tutorial = document.getElementById('instruction')
const doorButtons = document.querySelectorAll("#path-container button");

const SelectSkin = document.getElementById('selectMovie')
const StartPage = document.getElementById('After1')


const FailPopup = document.getElementById('Epicfail')
const VideoPopup = document.getElementById('MyVideo')

const postercontainer= document.getElementById("movieposter")

const ResetBtn = document.getElementById('Restart')
const ResetMovieBtn = document.getElementById('Clearmovie')


const ErrorPopup = document.getElementById("Errorpopup");
const ClosePopupBtn = document.getElementById("Closepopup");


const Soundfail= document.getElementById("FailAudio"); 
const Soundpoint= document.getElementById("WinAudio"); 

const navbar = document.getElementById("navbar"); 

const apiKey = "insert key";

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

function fetchMovie() {
    const movieTitle = document.getElementById("searchInput").value;
    const API_URL = `https://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`;

    fetch(API_URL)
        .then(response => response.json())
        .then(data => searchMovie(data))
        .catch(error => console.log(error));
    movieTitle.innerHTML=' '
}

function searchMovie(data) {
   if (data.Title && data.Title !== "N/A") {

        SelectSkin.classList.add('hidden'); 
        StartPage.classList.remove('hidden') 
        StartPage.classList.add('visible')
        ResetBtn.classList.remove('hidden')
        ResetBtn.classList.add('visible')
        navbar.classList.remove('hidden')
        navbar.classList.add('visibles')
        searchrating(data);  


        postercontainer.classList.remove("hidden");
        postercontainer.classList.add("visible");
        const img = document.createElement("img");
        img.src= data.Poster
        img.classList.add("posterMovie");
        postercontainer.appendChild(img)
        startgame()
        document.getElementById("searchInput").value = "";
    } else {
        alert("This movie doesn't exist! please select another one");
    }
}

function searchrating(data){
    Rating = `${data.imdbRating}`;
    console.log(Rating)
    let minimum = 0
    let medium1 = 4
    let medium2 = 7
    let max = 10
    if (Rating >= 0 && Rating < 4)
        changeToOne()
    else if (Rating >= 4 && Rating < 7)
        changeToTwo()
    else if (Rating >= 7 && Rating <= 10)
        changeToThree()
}



function changeToOne() {

    FailPopup.classList.remove('Popupcontent1')
    FailPopup.classList.add('Popupcontent1')

    const images = document.querySelectorAll("#path-container button img");
    
    images.forEach(img => {
        img.src = "Assets/Img/porta1.png"; 
    });

    VideoPopup.setAttribute("src", "Assets/Video/Keaton1.mp4"); 
    Soundfail.setAttribute("src", "Assets/sound/Fail.wav");
}


function changeToTwo() {

    FailPopup.classList.remove('Popupcontent1')
    FailPopup.classList.add('Popupcontent2')

    const images = document.querySelectorAll("#path-container button img");
    
    images.forEach(img => {
        img.src = "Assets/Img/porta2.png"; 
    });

    VideoPopup.setAttribute("src", "Assets/Video/Keaton2.mp4"); 
    Soundfail.setAttribute("src", "Assets/sound/Fail2.wav");
}

function changeToThree() {


    FailPopup.classList.remove('Popupcontent1')
    FailPopup.classList.add('Popupcontent3')
    const images = document.querySelectorAll("#path-container button img");

    images.forEach(img => {
        img.src = "Assets/Img/porta3.png"; 
    });

    VideoPopup.setAttribute("src", "Assets/Video/Keaton3.mp4");
     Soundfail.setAttribute("src", "Assets/sound/Fail3.wav"); 
} 

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

function startgame(){
    gameStarted = true; 
    pathContainer.classList.remove('hidden');  
    pathContainer.classList.add('visible');

    Tutorial.classList.remove('hidden');
    Tutorial.classList.remove('visible');

    newPath()
}




function AddPoint(){
scores +=1
Points.innerHTML = parseFloat(+scores);
Soundpoint.play()
}

ResetBtn.addEventListener('click', () => {
    Points.innerHTML = 0;
    scores = 0;
    gameStarted = false;
    newPath();

    SelectSkin.classList.remove('hidden');
    SelectSkin.classList.add('visible');

    StartPage.classList.remove('visible');
    StartPage.classList.add('hidden');

    FailPopup.classList.remove('Popupcontent1', 'Popupcontent2','Popupcontent3');
    FailPopup.classList.add('Popupcontent1');

    pathContainer.classList.remove('visible');
    pathContainer.classList.add('hidden');

    Tutorial.classList.remove('visible');
    Tutorial.classList.add('hidden');

    trapsSequence = [];
    userInput = [];

    ResetBtn.classList.remove('visible');
    ResetBtn.classList.add('hidden');
});



ResetMovieBtn.addEventListener('click', () => {
    postercontainer.innerHTML = "";
    function resetall(){
            Points.innerHTML =0
    scores =0
    gameStarted = false;
    newPath() 

    SelectSkin.classList.remove('hidden');
    SelectSkin.classList.add('visible');

    StartPage.classList.remove('visible');
    StartPage.classList.add('hidden');

    FailPopup.classList.remove('Popupcontent1', 'Popupcontent2','Popupcontent3')
    FailPopup.classList.add('Popupcontent1')

    pathContainer.classList.remove('visible');
    pathContainer.classList.add('hidden');
    Tutorial.classList.remove('visible');
    Tutorial.classList.add('hidden');
    
    ResetBtn.classList.remove('visible');
    ResetBtn.classList.add('hidden');

    trapsSequence = [];
    userInput = [];
    }
    resetall()
})

function showErrorPopup() {
    ErrorPopup.classList.remove("hidden");
    gameStarted = false;

}

ClosePopupBtn.addEventListener("click", () => {
    ErrorPopup.classList.add("hidden");
    gameStarted = true;
});