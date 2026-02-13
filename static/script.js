/* ===========================
   🎵 MUSIC CONTROL (SAFE)
=========================== */

let bgMusic = null;

function startLove(){
    sessionStorage.setItem("playMusic","yes");
    window.location.href = "/feelings";
}

function initMusic(){
    if(sessionStorage.getItem("playMusic") === "yes"){
        bgMusic = new Audio("/static/love.mp3");
        bgMusic.loop = true;
        bgMusic.volume = 0.25;
        bgMusic.play();
    }
}

initMusic();


/* ===========================
   💘 POPUPS
=========================== */

function noClick(){
    document.getElementById("lovePopup")?.classList.add("show");
}

function closePopup(){
    document.getElementById("lovePopup")?.classList.remove("show");
}

function showLovePopup(){
    document.getElementById("finalPopup")?.classList.add("show");
}

function closeFinalPopup(){
    document.getElementById("finalPopup")?.classList.remove("show");
}


/* ===========================
   💖 FEELINGS SLIDES
=========================== */

let loveData = [
    { text:"Shifa, you are the best thing that ever happened to me 💖", img:"/static/img1.jpeg"},
    { text:"With you, my heart finally found home — kuch ghar sa lagta hai 🏡❤️", img:"/static/img2.jpeg"},
    { text:"For your smile, I would burn the entire world, Shifa ☀️💕", img:"/static/img3.jpeg"},
    { text:"I promise to love you forever, my Shifa 💍❤️", img:"/static/img4.jpeg"},
    { text:"You are my today, my tomorrow, my everything Shifa 💞", img:"/static/img5.jpeg"},
    { text:"Falling in love with you was my destiny, Shifa 😘", img:"/static/img6.jpeg"}
];

let loveIndex = 0;

function nextFeeling(){
    if(loveIndex < loveData.length){
        document.getElementById("loveText").innerText = loveData[loveIndex].text;
        document.getElementById("loveImage").src = loveData[loveIndex].img;
        loveIndex++;
    } else {
        showFinalLove();
    }
}


/* ===========================
   🎬 FINAL CINEMATIC SCENE
=========================== */

function showFinalLove(){

document.body.innerHTML = `
<div class="final-screen">

    <div class="final-left">
        <h1>💖 My Mumtaz 💖</h1>
        <h2>Get ready to see the next Taj of this world built while my wife is alive ❤️</h2>

        <p class="love-letter">
            Out of all the people in this world…<br><br>
            I found YOU, Shifa — and my life changed forever.<br><br>
            You became my peace, my happiness, my prayer answered.<br><br>
            Loving you is the most beautiful thing I will ever do. ❤️
        </p>
    </div>

    <div class="final-center">
        <img src="/static/collage.jpeg" class="final-collage">
    </div>

    <div class="final-right">
        <div class="shayari">
            Tum meri zindagi ki woh dua ho Shifa,<br>
            jo har pal khuda se maangi jaati hai…<br><br>
            Mohabbat ka har rang tumse hai Shifa,<br>
            meri har khushi tumse hai…<br><br>
            Agar saans chalti hai toh tumhare naam se,<br>
            agar dil dhadakta hai toh sirf tumhare liye…
        </div>
    </div>

</div>

<div class="final-btn-area">
    <button class="yes" onclick="showLovePopup()">Feel My Love ❤️</button>
</div>

<div id="finalPopup" class="popup">
    <div class="popup-box">
        <h2>💖 For You, Shifa 💖</h2>
        <p class="shayari">
            Mukammal Mohabbat ka irada karunga,<br>
            Main Hath Pakad kar ye vada karunga,<br>
            Milegi Mohabbat Agar Thodi si Tumse,<br>
            Yakken Karo Main Tumse Zada Karunga.<br>
        </p>
        <button onclick="closeFinalPopup()">Close ❤️</button>
    </div>
</div>
`;

cinematicVolumeBoost();
}


/* ===========================
   🔊 MUSIC CLIMAX BOOST
=========================== */

function cinematicVolumeBoost(){
    if(!bgMusic) return;

    let boost = setInterval(()=>{
        if(bgMusic.volume < 0.85){
            bgMusic.volume += 0.02;
        } else {
            clearInterval(boost);
        }
    },200);
}


/* ===========================
   💗 HEART RAIN
=========================== */

function createHeart(){
    const container = document.querySelector(".heart-rain");
    if(!container) return;

    const heart = document.createElement("span");
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 4) + "s";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 250);
