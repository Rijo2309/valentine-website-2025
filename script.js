// Function to handle the initial "Yes" click
function nextStep() {
    // 1. Popup: "Do You Really Like Me?"
    if (confirm("Do You Really Like Me???")) {
        // If they click OK on popup, go straight to final celebration
        celebrate();
    } else {
        // If they click Cancel on popup, show the "What do you do then??" question
        showWhatDoYouDo();
    }
}

// 2. Question: "What do you do then??"
function showWhatDoYouDo() {
    // Hide initial content
    document.getElementById('questionArea').classList.add('hidden');
    // Show a container for the new question
    document.getElementById('question2').classList.remove('hidden'); 
    
    // Set button to moving "No"
    const noBtn = document.getElementById('noBtnMove');
    noBtn.onmouseenter = moveButton; // Keep it moving
}

// 3. Secret Button Action (Sidebar/Bottom Right)
function secretLove() {
    // 4. Final Popup
    alert("You've got the best there is, best there was, best there ever will be ❤️");
}

// Updated function to keep button within bounds
function moveButton() {
    const btn = document.getElementById('noBtnMove');
    const maxWidth = window.innerWidth - btn.offsetWidth;
    const maxHeight = window.innerHeight - btn.offsetHeight;
    
    const x = Math.max(0, Math.floor(Math.random() * maxWidth));
    const y = Math.max(0, Math.floor(Math.random() * maxHeight));
    
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
    
    btn.style.pointerEvents = 'none';
    setTimeout(() => {
        btn.style.pointerEvents = 'auto';
    }, 100);
}

// Existing celebrate function
function celebrate() {
    document.getElementById('questionArea').classList.add('hidden');
    document.getElementById('question2').classList.add('hidden');
    document.getElementById('celebration').classList.remove('hidden');
}

// Existing music logic
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
