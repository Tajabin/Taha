VANTA.BIRDS({
  el: "#background",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.0,
  scaleMobile: 1.0,
  backgroundColor: 0x0a0a23,
  color1: 0xffcc00,
  color2: 0xff0099,
  birdSize: 1.5,
  wingSpan: 25
});

function launch(card) {
  card.style.transform = "translateY(-100vh) scale(1.5)";
  card.style.transition = "transform 1s ease-in-out";
  setTimeout(() => {
    card.style.opacity = 0;
  }, 800);
}
