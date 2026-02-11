// --- Updated script.js ---

// Track states
let yesClickCount = 0;
let noHoverCount = 0; // Tracks hover events for moving button

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

// 3. Logic for hovering over NO - Makes button run away and grow YES button
function changeNoText() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    
    // 1. Change the text of the no button based on count
    if (noHoverCount < noMessages.length) {
        noBtn.innerText = noMessages[noHoverCount];
    } else {
        noBtn.innerText = noMessages[noMessages.length - 1]; // Keep last message
    }
    noHoverCount++;

    // 2. Make the yes button bigger faster
    let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize + 10) + "px"; // Increased growth rate
    
    // 3. Make the No button run away smoothly!
    // Using absolute positioning within a relative container is best for this
    const container = document.querySelector('.container');
    const x = Math.random() * (container.offsetWidth - noBtn.offsetWidth);
    const y = Math.random() * (container.offsetHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// 4. Function to celebrate (Triggered by Yes or Secret Button)
function celebrate() {
    document.getElementById('questionArea').classList.add('hidden');
    // Assuming 'question2' existed in previous flow, hide it just in case
    if(document.getElementById('question2')) {
        document.getElementById('question2').classList.add('hidden');
    }
    document.getElementById('celebration').classList.remove('hidden');

    // --- CONTINUOUS CONFETTI ANIMATION ---
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Set a constant number of particles per interval for continuous effect
    var interval = setInterval(function() {
        var particleCount = 50; 
        
        // Launch confetti from both sides continuously
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
