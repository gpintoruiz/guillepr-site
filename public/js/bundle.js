var body = document.querySelector('body');
var menuTrigger = document.querySelector('#toggle-menu-main-mobile');
var menuContainer = document.querySelector('#menu-main-mobile');
var hamburgerIcon = document.querySelector('.hamburger');

if (menuTrigger !== null) {
  menuTrigger.addEventListener('click', function(e) {
    menuContainer.classList.toggle('open');
    hamburgerIcon.classList.toggle('is-active');
    body.classList.toggle('lock-scroll');
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const quotes = [
      "Remember that the darkest time is before dawn.",
      "The way the potential transforms into actuality is through discipline.",
      "When it feels scary to jump that is exactly when you jump.",
      "The magic you are looking for is in the job you're avoiding.",
      "It is forbidden not to fight for what you want.",
      "The pain of doing nothing will always be worse than the pain of doing something.",
      "Sometimes those we least imagine are the ones who do what no one would imagine.",
      "It does not matter what we expect from life, but what life expects from us.",
      "I fear only one thing: not being worthy of my sufferings.",
      "Seal me in your heart..., because love is as strong as death...",
      "Suffering, in a way, ceases to be suffering when it finds meaning...",
      "The question about Man does not refer to who we are, but to who we could be.",
      "No tree can grow to heaven unless its roots reach hell.",
      "Whoever has a why to live will almost always find the how.",
      "We accept the love we believe we deserve.",
      "Healing the soul through the senses and the senses through the soul.",
      "I didn't fail, I just discovered 999 ways on how not to make a light bulb.",
      "Before you give up, remember that you are ending of ways to make mistakes.",
      "Sometimes doing something leads to nothing.",
      "I prefer not to have talent, but to have desire... I have urge, desire, hunger.",
      "If you always do what you've always done, you always get what you've always gotten.",
  ];

  function getRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
  }

  const quoteElement = document.getElementById('dynamic-quote');
  if (quoteElement) {
      quoteElement.textContent = getRandomQuote();
  }
});
