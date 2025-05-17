function openLetter() {
  // Change envelope image to opened one
  const envelopeImg = document.querySelector('.envelope img');
  envelopeImg.src = 'opened.png';

  // Show the letter
  document.getElementById('letter').style.display = 'block';

  // Show message popup after delay (if you still want this)
  setTimeout(() => {
    const finalMsg = document.getElementById('finalMessage');
    if(finalMsg) finalMsg.classList.remove('hidden');
  }, 2000);
}

function closeLetter() {
  // Hide the letter
  document.getElementById('letter').style.display = 'none';

  // Change envelope image back to closed
  const envelopeImg = document.querySelector('.envelope img');
  envelopeImg.src = 'closed.png';
}

function closePopup() {
  document.getElementById('popupMessage').style.display = 'none';
}

document.getElementById("revealBtn").addEventListener("click", function () {
  document.getElementById("popupMessage").style.display = "block";
});

    const audio = document.getElementById("myAudio");
    function playAudio() {
      audio.play();
    }
    function pauseAudio() {
      audio.pause();
    }