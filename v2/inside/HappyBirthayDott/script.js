console.log("New Year Countdown Using JavaScript");
console.log("I hope you guys like it :))");

let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let dd = document.getElementById('dd');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let countdown = document.getElementById("countdown");
let wishDays = 10;

let x = setInterval(function () {
  let currentYear = new Date().getFullYear();
  let newYear = new Date(`Feb 19, ${currentYear} 06:40:00`);
  let now = new Date().getTime();
  let distance = newYear - now;

  // time calculation
  let d = Math.floor(distance / (1000 * 60 * 60 * 24));
  let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((distance % (1000 * 60)) / (1000));

  // output the result
  days.innerHTML = d + "<br><span>Дней</span>";
  hours.innerHTML = h + "<br><span>Часов</span>";
  minutes.innerHTML = m + "<br><span>Минут</span>";
  seconds.innerHTML = s + "<br><span>Секунд</span>";

  // animate stroke
  dd.style.strokeDashoffset = 440 - (440 * d) / 365;
  hh.style.strokeDashoffset = 440 - (440 * h) / 24;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  // if countdown is over, change the innerText of .text
  if (distance < 0) {
    document.querySelector('.text').innerText = `С днём рождения!🥳 Тебе уже ${currentYear-2008}`;
  }
}, 1000);

// snowflakes
const canvas = document.getElementById("snowflakes");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// snowflake colors
const colors = ["#eee", "#ddd", "#ccc"];

class SnowFlake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.radius = 0;
    this.color = "";
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = Math.random() - 0.5;
    this.vy = Math.random() * 1 + 1;
    this.radius = Math.random() * 1 + 1;
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.y + this.radius > canvas.height) {
      this.reset();
    }
  }
}

const snowflakes = [];

// initial snowflakes
for (let i = 0; i < 100; i++) {
  snowflakes.push(new SnowFlake());
}

// animation loop
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snowflakes.forEach((snowflake) => {
    snowflake.draw();
    snowflake.update();
  });
}

animate();

// snow flake
function createFlake() {
  const flake = document.createElement('ion-icon');
  flake.setAttribute('name', 'snow-outline');
  flake.style.left = Math.random() * window.innerWidth + 'px';
  flake.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 - 5 seconds
  flake.style.opacity = Math.random();
  flake.style.fontSize = Math.random() * 10 + 10 + 'px';
  
  document.body.appendChild(flake);
  
  setTimeout(() => {
    flake.remove();
  }, 5000)
}

setInterval(createFlake, 500);

// help button
let help = document.getElementById('help');
let menu = document.querySelector('.menu');

help.onclick = function() {
  menu.classList.toggle('active');
  if (menu.classList.contains('active')) {
    help.innerHTML = `<ion-icon name="close-outline"></ion-icon>`;
  } else {
    help.innerHTML = `<ion-icon name="menu-outline"><ion-icon>`;
  }
}
