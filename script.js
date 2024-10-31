let currentIndex = 0;

function slideLeft() {
  const cardsContainer = document.querySelector(".cards");
  const totalCards = document.querySelectorAll(".card").length;
  const visibleCards = 3;
  const cardWidth = document.querySelector(".card").offsetWidth + 20; // 20px de margem entre os cards

  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalCards - visibleCards;
  }

  updateSlide(cardsContainer, currentIndex, cardWidth);
}

function slideRight() {
  const cardsContainer = document.querySelector(".cards");
  const totalCards = document.querySelectorAll(".card").length;
  const visibleCards = 3;
  const cardWidth = document.querySelector(".card").offsetWidth + 20; // 20px de margem entre os cards

  if (currentIndex < totalCards - visibleCards) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }

  updateSlide(cardsContainer, currentIndex, cardWidth);
}

function updateSlide(container, index, cardWidth) {
  container.style.transform = `translateX(-${index * cardWidth}px)`;
}
