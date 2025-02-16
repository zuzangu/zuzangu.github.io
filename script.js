function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';
    
    document.getElementById('heart-container').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

const moonPath = "M16.5 28.1366C16.2993 43.3231 27.8635 62 27.1366 55.9977C11.9501 55.7969 -0.198277 43.3231 0.0024521 28.1366C0.203181 12.9501 12.677 0.801722 27.8635 1.00245C27.1366 -2.5 16.7007 12.9501 16.5 28.1366Z";

const sunPath = "M55.3664 28.424C55.1657 43.6105 42.6919 55.7589 27.5054 55.5581C12.3188 55.3574 0.170474 42.8836 0.371204 27.6971C0.571933 12.5106 13.0457 0.362216 28.2323 0.562946C43.4188 0.763675 55.5671 13.2375 55.3664 28.424Z";

const darkHeart = document.querySelector('#dark-heart');
const description = document.getElementById('description');

let toggle = false;
let heartInterval;

darkHeart.addEventListener('click', () => {
    //using anime.js
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });

    //add different animations to the timeline
    timeline
    .add({
        targets: ".sun",
        d: [
            {value: toggle ? sunPath : moonPath}
        ]
    })
    .add({
        targets: "#dark-heart",
        rotate: 320
    }, '-= 350'
    )
    .add({
        targets : "body",
        backgroundColor: toggle ? "rgb(228, 139, 157)" : "rgb(106, 0, 21)",
    },
    '-= 700'
    );

    // Toggle the state
    toggle = !toggle;

    // Change the description text based on the toggle state
    description.textContent = toggle ? "I love you" : "Click the sun";

    // Start or stop creating hearts based on the toggle state
    if (toggle) {
        heartInterval = setInterval(createHeart, 300);
    } else {
        clearInterval(heartInterval);
    }
});