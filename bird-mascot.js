// Bird Mascot Animation
// This file handles the bird mascot tour animation

let birdTourActive = false;
let birdTourStep = 0;
let birdTourTimeout = null;
let birdPositionUpdateTimeout = null;

function startBirdTour() {
    if (birdTourActive) return;
    birdTourActive = true;
    birdTourStep = 0;
    const bird = document.getElementById('birdMascot');
    const speechBubble = document.getElementById('birdSpeechBubble');
    const skipBtn = document.getElementById('birdSkipBtn');
    
    if (!bird || !speechBubble || !skipBtn) return;
    
    bird.classList.add('active');
    skipBtn.style.display = 'block';
    
    // Step 1: Point to Retirement Age field
    setTimeout(() => {
        showBirdAtElement('retireAge', 'top', t('birdStepRetireAge') || 'Enter your desired retirement age. This is when you want to stop working and start receiving your pension.');
    }, 500);
}

function showBirdAtElement(elementId, position, message) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const bird = document.getElementById('birdMascot');
    const speechBubble = document.getElementById('birdSpeechBubble');
    if (!bird || !speechBubble) return;
    
    const rect = element.getBoundingClientRect();
    
    // Position bird (using fixed positioning relative to viewport - no scroll offset needed)
    if (position === 'top') {
        bird.style.top = (rect.top - 100) + 'px';
        bird.style.left = (rect.left + rect.width / 2 - 40) + 'px';
        bird.style.position = 'fixed';
        speechBubble.classList.add('top');
        speechBubble.style.bottom = '100%';
        speechBubble.style.top = 'auto';
        speechBubble.style.left = '50%';
        speechBubble.style.transform = 'translateX(-50%)';
    } else if (position === 'bottom') {
        bird.style.top = (rect.bottom + 20) + 'px';
        bird.style.left = (rect.left + rect.width / 2 - 40) + 'px';
        bird.style.position = 'fixed';
        speechBubble.classList.add('bottom');
        speechBubble.style.top = '100%';
        speechBubble.style.bottom = 'auto';
        speechBubble.style.left = '50%';
        speechBubble.style.transform = 'translateX(-50%)';
    }
    
    // Show message and next button
    const messageDiv = speechBubble.querySelector('.bird-message') || document.getElementById('birdMessage');
    const nextBtn = speechBubble.querySelector('.bird-next-btn');
    
    // Always use the message div if it exists
    if (messageDiv) {
        messageDiv.textContent = message;
        messageDiv.style.display = 'block';
        messageDiv.style.visibility = 'visible';
    } else {
        // Fallback: create message div if it doesn't exist
        const msgDiv = document.createElement('div');
        msgDiv.className = 'bird-message';
        msgDiv.id = 'birdMessage';
        msgDiv.textContent = message;
        speechBubble.insertBefore(msgDiv, nextBtn);
    }
    
    // Show next button (except on last step - step 5 is the last)
    if (nextBtn) {
        if (birdTourStep < 5) {
            nextBtn.style.display = 'flex';
        } else {
            nextBtn.style.display = 'none';
        }
    }
    
    // Ensure speech bubble is visible
    speechBubble.style.display = 'flex';
    speechBubble.style.visibility = 'visible';
    speechBubble.classList.add('show');
    bird.classList.add('pointing');
    
    // Don't auto-advance - wait for user to click Next
}

function nextBirdStep() {
    birdTourStep++;
    const speechBubble = document.getElementById('birdSpeechBubble');
    const bird = document.getElementById('birdMascot');
    if (!bird || !speechBubble) return;
    
    bird.classList.remove('pointing');
    bird.classList.add('flying');
    speechBubble.classList.remove('show');
    
    setTimeout(() => {
        if (birdTourStep === 1) {
            // Step 2: Current Age
            showBirdAtElement('currentAge', 'top', t('birdStep1') || 'Enter your current age. This is where you begin your retirement planning journey.');
        } else if (birdTourStep === 2) {
            // Step 3: Monthly Payout
            showBirdAtElement('targetPayout', 'top', t('birdStep1Payout') || 'Enter your desired monthly retirement income. This is what you want to receive each month after retirement.');
        } else if (birdTourStep === 3) {
            // Step 4: Life Expectancy
            showBirdAtElement('deathAge', 'top', t('birdStep2') || 'This is set to Pakistan\'s average life expectancy (~75 years), but you can adjust it based on your health and family history.');
        } else if (birdTourStep === 4) {
            // Step 5: Monthly Contribution Result
            showBirdAtElement('monthlyContribution', 'top', t('birdStep3') || 'Here\'s your monthly savings goal! The calculator figured this out based on your desired payout.');
        } else if (birdTourStep === 5) {
            // Step 6: Explain calculation
            const contribution = document.getElementById('monthlyContribution')?.value || '5,000';
            const age = document.getElementById('currentAge')?.value || '30';
            const retireAge = document.getElementById('retireAge')?.value || '60';
            const years = parseInt(retireAge) - parseInt(age);
            const months = years * 12;
            const returnRate = '12.5%';
            
            let calcMessage = t('birdCalculation') || 
                `Here's the magic! 💫\n\nYou'll save ${contribution} × ${months} months = Total contributions\n\nThen the fund's ${returnRate} return rate multiplies everything!\n\nThat's how your money grows! 🚀`;
            
            calcMessage = calcMessage.replace('{monthlyContribution}', contribution);
            calcMessage = calcMessage.replace('{totalMonths}', months);
            calcMessage = calcMessage.replace('{returnRate}', returnRate);
            
            showBirdAtElement('resultContribution', 'bottom', calcMessage);
        } else {
            // End tour
            endBirdTour();
        }
    }, 800);
}

function endBirdTour() {
    birdTourActive = false;
    birdTourStep = 0;
    const bird = document.getElementById('birdMascot');
    const speechBubble = document.getElementById('birdSpeechBubble');
    const skipBtn = document.getElementById('birdSkipBtn');
    
    if (speechBubble) speechBubble.classList.remove('show');
    if (bird) bird.classList.remove('active', 'flying', 'pointing');
    if (skipBtn) skipBtn.style.display = 'none';
    
    if (birdTourTimeout) {
        clearTimeout(birdTourTimeout);
        birdTourTimeout = null;
    }
    
    // Save to localStorage that tour was completed
    localStorage.setItem('birdTourCompleted', 'true');
}

function skipBirdTour() {
    endBirdTour();
}

// Start bird tour on first visit (unless skipped)
window.addEventListener('load', () => {
    const tourCompleted = localStorage.getItem('birdTourCompleted');
    if (!tourCompleted) {
        setTimeout(() => {
            startBirdTour();
        }, 2000); // Wait 2 seconds after page load
    }
});

// Update bird position on scroll/resize
window.addEventListener('scroll', () => {
    if (birdTourActive) {
        clearTimeout(birdPositionUpdateTimeout);
        birdPositionUpdateTimeout = setTimeout(() => {
            if (birdTourStep === 0) {
                showBirdAtElement('retireAge', 'top', t('birdStepRetireAge') || 'Enter your desired retirement age.');
            } else if (birdTourStep === 1) {
                showBirdAtElement('currentAge', 'top', t('birdStep1') || 'Enter your current age.');
            } else if (birdTourStep === 2) {
                showBirdAtElement('targetPayout', 'top', t('birdStep1Payout') || 'Enter your desired monthly retirement income.');
            } else if (birdTourStep === 3) {
                showBirdAtElement('deathAge', 'top', t('birdStep2') || 'This is set to Pakistan\'s average life expectancy, but you can adjust it.');
            } else if (birdTourStep === 4) {
                showBirdAtElement('monthlyContribution', 'top', t('birdStep3') || 'Here\'s your monthly savings goal!');
            }
        }, 100);
    }
});

window.addEventListener('resize', () => {
    if (birdTourActive) {
        clearTimeout(birdPositionUpdateTimeout);
        birdPositionUpdateTimeout = setTimeout(() => {
            if (birdTourStep === 0) {
                showBirdAtElement('retireAge', 'top', t('birdStepRetireAge') || 'Enter your desired retirement age.');
            } else if (birdTourStep === 1) {
                showBirdAtElement('currentAge', 'top', t('birdStep1') || 'Enter your current age.');
            } else if (birdTourStep === 2) {
                showBirdAtElement('targetPayout', 'top', t('birdStep1Payout') || 'Enter your desired monthly retirement income.');
            } else if (birdTourStep === 3) {
                showBirdAtElement('deathAge', 'top', t('birdStep2') || 'This is set to Pakistan\'s average life expectancy, but you can adjust it.');
            } else if (birdTourStep === 4) {
                showBirdAtElement('monthlyContribution', 'top', t('birdStep3') || 'Here\'s your monthly savings goal!');
            }
        }, 100);
    }
});

