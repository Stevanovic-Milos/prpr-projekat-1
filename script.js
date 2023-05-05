function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const digitalClock = document.querySelector('.digital-clock');
    const hoursSpan = digitalClock.querySelector('.hours');
    const minutesSpan = digitalClock.querySelector('.minutes');
    const secondsSpan = digitalClock.querySelector('.seconds');
    
    hoursSpan.textContent = hours.toString().padStart(2, '0');
    minutesSpan.textContent = minutes.toString().padStart(2, '0');
    secondsSpan.textContent = seconds.toString().padStart(2, '0');
  }
  
  updateClock();
  setInterval(updateClock, 1000);

  const quotes = [
    "Samo onaj ko ništa ne radi ne greši.",
    "Budi promena koju želiš da vidiš u svetu.",
    "Izazovi su ono što čini život zanimljivim, a prevladavanje izazova ono što čini život smislenim.",
    "Uspeh nije krajnji cilj, već put kojim idemo.",
    "Ne možete sebi pomoći tako što ćete zaustaviti vreme, ali možete odlučiti da li ćete se prepustiti talasima ili ih savladati.",
    "Jedina konstanta u životu je promena.",
    "Svako je arhitekta sopstvene sudbine.",
    "Svi sanjamo, ali neki snove pretvaraju u stvarnost svojim radom i upornošću."
  ];
  
  const quoteContainer = document.getElementById('quote-container');
  const generateBtn = document.getElementById('generate-btn');
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteContainer.innerHTML = randomQuote;
  }
  
  generateBtn.addEventListener('click', generateQuote);

  function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }
  
  
