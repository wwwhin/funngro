var options = document.getElementById('options');
var bars = document.getElementById('i1');
var cross = document.getElementById('i2');
options.style.display = "none";
cross.style.display = "none";

bars.addEventListener('click' , ()=>{
    bars.style.display = "none";
    cross.style.display = ""
    options.style.display = ""
    options.style.animation = "opt 0.5s ease-out"
    options.style.top = "50px"
})

cross.addEventListener('click' , ()=>{
    bars.style.display = "";
    cross.style.display = "none";
    options.style.animation = "opt2 0.5s ease-out";
    options.style.top = "-250px"
})

var popUp = document.getElementById('pop-up');
var ok = document.getElementById('ok');
var download = document.getElementById('download');
var popUpTxt = document.getElementById('pop-up-txt');
var social = document.getElementById('social');
var video = document.getElementById('video');
var web = document.getElementById('web');
var influencer = document.getElementById('influencer');
var mobile = document.getElementById('mobile');
var campus = document.getElementById('campus');
var research = document.getElementById('research');
var data = document.getElementById('data');
var voice = document.getElementById('voice');
var content = document.getElementById('content');
var graphics = document.getElementById('graphics');
var testing = document.getElementById('testing');


popUp.style.display = ""

ok.addEventListener('click', ()=>{
    popUp.style.animation = "pop-up2 0.4s ease-out";
    popUp.style.top = "-90px";
    popUpTxt.innerHTML = ""
})

social.addEventListener('click' , ()=>{
    popUp.style.animation = "pop-up 0.4s ease-out";
    popUp.style.top = "230px";
    popUpTxt.innerHTML="Manage social media pages of companies"
})

video.addEventListener('click' , ()=>{
    popUp.style.animation = "pop-up 0.5s ease-out";
    popUp.style.top = "230px";
    popUpTxt.innerHTML = "Create and edit videos for companies and use your video creation skills"
})

web.addEventListener('click' , ()=>{
    popUp.style.animation = "pop-up 0.5s ease-out";
    popUp.style.top = "230px";
    popUpTxt.innerHTML = "Design and build website for companies"
})
influencer.addEventListener('click' , ()=>{
    popUp.style.animation = "pop-up 0.5s ease-out";
    popUp.style.top = "230px";
    popUpTxt.innerHTML = "Create Reels, Memes, posts and videos for social meadia handles of companies"
})
mobile.addEventListener('click' , ()=>{
    popUp.style.animation = "pop-up 0.5s ease-out";
    popUp.style.top = "230px";
    popUpTxt.innerHTML = "Develop market ready apps for companies"
})
campus.addEventListener('click' , ()=>{
    popUp.style.animation = "pop-up 0.5s ease-out";
    popUp.style.top = "230px";
    popUpTxt.innerHTML = "Drive sales for companies by acquiring customers"
})
research.addEventListener('click' , ()=>{
    popUp.style.animation = "pop-up 0.5s ease-out";
    popUp.style.top = "230px";
    popUpTxt.innerHTML = "Run Surveys for companies and complete research assignments"
})
data.addEventListener('click' , ()=>{
    popUp.style.animation = "pop-up 0.5s ease-out";
    popUp.style.top = "230px";
    popUpTxt.innerHTML = "Create database for companies with your data research skills"
})
voice.addEventListener('click' , ()=>{
    popUp.style.animation = "pop-up 0.5s ease-out";
    popUp.style.top = "230px";
    popUpTxt.innerHTML = "Work with companies in recording in recording content with your voice over skills"
})
content.addEventListener('click' , ()=>{
    popUp.style.animation = "pop-up 0.5s ease-out";
    popUp.style.top = "230px";
    popUpTxt.innerHTML = "Blogs, articles, websites content and a lot more. Write for companies"
})
graphics.addEventListener('click' , ()=>{
    popUp.style.animation = "pop-up 0.5s ease-out";
    popUp.style.top = "230px";
    popUpTxt.innerHTML = "Logs, Brouchurs, pamphlets, website, posts etc"
})
testing.addEventListener('click' , ()=>{
    popUp.style.animation = "pop-up 0.5s ease-out";
    popUp.style.top = "230px";
    popUpTxt.innerHTML = "Test company products and give feedback, app, website, physical product"
})

var q1 = document.getElementById('q1');
var q2 = document.getElementById('q2');
var q3 = document.getElementById('q3');

q1.addEventListener('click' , ()=>{
    popUp.style.animation = "pop-up 0.5s ease-out";
    popUp.style.top = "230px";
    popUpTxt.innerHTML = "Simple 5 step process :- <br> (1) Download funngro and register for earning, <br> (2) Complete your evaluation project, <br> (3) Apply projects of your intrests, <br> (4) Submit completed projects, (5) Get paid! "
})
q2.addEventListener('click' , ()=>{
    popUp.style.animation = "pop-up 0.5s ease-out";
    popUp.style.top = "230px";
    popUpTxt.innerHTML = "Start early, get independence, learn while you earn but most importantly get real world experience. Work on projects of your intrest and find your real passion before making the final career decision."
})
q3.addEventListener('click' , ()=>{
    popUp.style.animation = "pop-up 0.5s ease-out";
    popUp.style.top = "230px";
    popUpTxt.innerHTML = "At this time we have 12 categories in which Teens can work as listed on our home page. Do let us know if those do not cover your needs."
})