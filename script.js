// Track states
let yesClickCount = 0;
let noClickCount = 0;

// Array of messages for the 'No' button
const noMessages = [
    "No",
    "Are you sure?",
    "Are you really sure??",
    "Are you really realy sure???",
    "Think again?",
    "Don't believe in second chances?",
    "Why are you being so cold?",
    "Maybe we can talk about it?",
    "I am not going to ask again!",
    "Ok now this is hurting my feelings!",
    "You are now just being mean!",
    "Why are you doing this to me?",
    "Please give me a chance!",
    "I am begging you to stop!",
    "Ok, Let's just start over.."
];

// 1. Function to handle the initial "Yes" click
function nextStep() {
    yesClickCount++;

    const questionText = document.getElementById('mainQuestion');
    const yesBtn = document.getElementById('yesBtn');

    if (yesClickCount === 1) {
        // First click: Change the text to the intermediate question
        questionText.innerText = "Are you 1000000000000% sure??";
        yesBtn.innerText = "Yes, I AM!";
    } else if (yesClickCount >= 2) {
        // Second click: Go straight to final celebration
        celebrate();
    }
}

// 2. Secret Button Action (Sidebar/Bottom Right)
function secretLove() {
    // Final Popup
    alert("You've got the best there is, best there was, best there ever will be ❤️");
}

// 3. Logic for hovering over NO - Changes text and increases YES button size
function changeNoText() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    
    // 1. Change the text of the no button based on count
    if (noClickCount < noMessages.length) {
        noBtn.innerText = noMessages[noClickCount];
        noClickCount++;
    } else {
        noBtn.innerText = noMessages[noMessages.length - 1]; // Keep last message
    }

    // 2. Make the yes button bigger each time
    let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize + 5) + "px";
    
    let currentPadding = parseFloat(window.getComputedStyle(yesBtn).paddingTop);
    yesBtn.style.padding = (currentPadding + 5) + "px";
}

// 4. Function to celebrate (Triggered by Yes or Secret Button)
function celebrate() {
    document.getElementById('questionArea').classList.add('hidden');
    // Assuming 'question2' existed in previous flow, hide it just in case
    if(document.getElementById('question2')) {
        document.getElementById('question2').classList.add('hidden');
    }
    document.getElementById('celebration').classList.remove('hidden');

    // --- CONFETTI ANIMATION ---
    var duration = 5 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        // particles fall down from top
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}

// 5. Existing music logic
function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const btn = document.getElementById('musicToggle');
    if (music.paused) {
        music.play();
        btn.innerHTML = "⏸ Pause Music";
    } else {
        music.pause();
        btn.innerHTML = "🎵 Play Music";
    }
}
update and send
