


// Change Background Color, Font Size, and Font Style Function
function changeBackgroundAndStyle() {
  const colors = ['#f4a261', '#264653', '#e76f51', '#2a9d8f', '#e9c46a'];
  const fontSizes = ['16px', '20px', '24px', '28px', '32px'];
  const fontStyles = ['Arial', 'Helvetica', 'Times New Roman', 'Courier New', 'Georgia'];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomFontSize = fontSizes[Math.floor(Math.random() * fontSizes.length)];
  const randomFontStyle = fontStyles[Math.floor(Math.random() * fontStyles.length)];

  document.body.style.backgroundColor = randomColor;
  document.body.style.fontSize = randomFontSize;
  document.body.style.fontFamily = randomFontStyle;
}

// Add event listener to background color button
document.querySelector('.change-color-btn').addEventListener('click', changeBackgroundAndStyle);

// Star Rating System
const stars = document.querySelectorAll('.star');
stars.forEach(star => {
  star.addEventListener('click', () => {
    stars.forEach(s => s.style.color = 'gray');  // Reset all stars
    const rating = star.getAttribute('data-rating');
    for (let i = 0; i < rating; i++) {
      stars[i].style.color = 'gold';  // Highlight selected stars
    }
    document.getElementById('ratingMessage').textContent = `You rated this ${rating} stars! Thanks for feedbacks:)`;
  });
});

// Event Listener for "Show Current Time" Button
document.getElementById('showTimeBtn').addEventListener('click', function() {
  const currentTime = new Date().toLocaleTimeString();
  document.getElementById('currentDateTime').textContent = 'Current Time: ' + currentTime;
});



