(function start_count() {
    let i = 60,
        time = document.getElementById("time");
    setInterval(() => {
        if (i > -1) {
            time.innerText = i;
            if (i === 3) {
                time.style.color = "rgba(0, 228, 68, 0.719)";
                time.style.textShadow = "10px 100px 50px rgba(133, 133, 133, 0.5)"
            } else if (i === 2) {
                time.style.color = "rgba(228, 0, 0, 0.719)";
            } else if (i === 1) {
                time.style.color = "black";
            }
        } else {
            document.querySelector("#pop").style.display = "none";
        }
        i -= 1;
    }, 1000);
}());
var video = document.getElementById("video");
video.style.display = "none";
setTimeout(() => {
    document.getElementById("counter").style.display="none";
    document.getElementById("blank").style.display="block";
    
}, 62000);
var speech = new window.SpeechSynthesisUtterance();
document.getElementById("speak_about_me").addEventListener("click", () => {
    speech.text = "Once upon a time, in the vibrant land of Tanzania, there lived a young and ambitious individual named Paul Michael. From the moment he took his first breath, it was clear that Paul was destined for greatness. Born under the zodiac sign of Gemini, he possessed the innate qualities of curiosity, adaptability, and a thirst for knowledge. As Paul grew older, he discovered his passion for programming. In 2019, at the age of 18, he embarked on a journey to unravel the intricacies of various programming languages. With a determined spirit and an insatiable appetite for learning, Paul delved deep into the realm of coding, eagerly absorbing every piece of information he could find. Day and night, Paul spent countless hours honing his programming skills. He would tirelessly tackle complex algorithms and seek innovative solutions to intricate problems. His unwavering dedication and perseverance were the building blocks that laid the foundation for his future success. Driven by his burning ambition, Paul aspired to become the best programmer of all time. He dreamt of creating groundbreaking software, revolutionizing industries, and leaving a lasting impact on the world. His ultimate goal was to leave behind a legacy that would inspire generations to come. But it wasn't just programming that occupied Paul's time and thoughts. He had a diverse range of interests that made him a well-rounded individual. One of his greatest joys came from listening to music. Whether it was the catchy beats of pop, the raw energy of drill, the lyrical genius of UK rap, or the soulful melodies of female artists, Paul found solace and inspiration in the world of music. It fueled his creativity and provided him with the necessary motivation to push the boundaries of his programming abilities. As the years went by, Paul's skills flourished, and his reputation as a brilliant programmer began to spread. Companies from all corners of the globe sought his expertise and were in awe of his talent. However, Paul remained humble and grounded, never forgetting his roots and the people who had supported him along the way. With each achievement, Paul's determination grew stronger. He never settled for mediocrity, always striving for excellence. His insatiable thirst for knowledge propelled him to continuously learn and explore new technologies, ensuring that he remained at the forefront of the ever-evolving programming landscape. In the end, Paul Michael became an icon in the world of programming, leaving an indelible mark on the industry. His innovative creations revolutionized how people lived, worked, and interacted with technology. But beyond his professional success, Paul's true legacy lay in the hearts and minds of aspiring programmers who looked up to him as a beacon of inspiration and proof that greatness could be achieved through hard work and dedication. And so, the tale of Paul Michael, the young Tanzanian prodigy, serves as a reminder that anyone with a dream, a thirst for knowledge, and an unwavering commitment to their craft can achieve greatness and leave an enduring legacy for generations to come.In addition to his given name, Paul Michael, there was another name by which he was affectionately known—Geminichild. This nickname perfectly encapsulated his zodiac sign and youthful spirit. Geminichild became a moniker that resonated with both his peers and admirers.The name Geminichild symbolized Paul's dual nature as a Gemini. It captured his ability to effortlessly adapt to different situations and his ever-curious mind that craved constant stimulation. Just like a child, he approached each programming challenge with a sense of wonder and an open mind, embracing new possibilities and exploring uncharted territories.The nickname also spoke to Paul's vibrant personality. He was full of energy, enthusiasm, and a zest for life that was contagious. His infectious laughter and optimistic outlook brightened the lives of those around him, leaving a lasting impression on everyone he encountered.Geminichild's passion for programming and music intertwined harmoniously. It was through the fusion of these two worlds that his creativity soared to new heights. With the mind of a programmer and the heart of an artist, he was able to infuse his creations with a unique blend of technical excellence and emotional resonance.As Geminichild continued to excel in his programming journey, his nickname became synonymous with innovation, brilliance, and a relentless pursuit of excellence. It served as a reminder of his beginnings and the unwavering determination that propelled him towards his dreams.And so, the legend of Geminichild, the young and talented programmer from Tanzania, grew stronger with each passing day. His story inspired countless others to embrace their passions, embrace their uniqueness, and strive for greatness in their own endeavors. Geminichild became a symbol of hope, reminding everyone that they too could shine brightly and leave an indelible mark on the world, just like the radiant stars of the Gemini constellation";
    window.speechSynthesis.speak(speech);
    var background_audio = document.createElement("audio");
    background_audio.src = "Shaed - Trampoline (8D Audio).mp3";
    background_audio.play();
    background_audio.autoplay;
    background_audio.volume = .2;
    video.style.display = "block";
    video.play();
    
    setTimeout(() => {
        document.getElementById("blank").style.backdropFilter="blur(0px)";
        document.getElementById("blank").style.backgroundColor="rgba(0, 0, 0, 0.6)";
    
    }, 10000);
});