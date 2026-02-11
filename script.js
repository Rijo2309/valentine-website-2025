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
