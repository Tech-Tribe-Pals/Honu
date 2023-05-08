const contacto = document.getElementById("contacto");
const loading = document.getElementById("loading");
const tiktok = document.getElementById("tik-tok");
let count = 0;
let countDown = 0;
let change = true;

const tiktokContent = [
  {
    video: `./img/video1_.mp4`,
    likes: 154,
    views: 313,
  },
  {
    video: `./img/video2_.mp4`,
    likes: 178,
    views: 700,
  },
  {
    video: `./img/video3_.mp4`,
    likes: 166,
    views: 600,
  },
];

const scrollToContacto = () => {
  document.getElementById("contacto").scrollIntoView();
};

const transition = () => {
  scrollToContacto();
};

const load = () => {
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    loading.innerHTML = "";
    loading.style.display = "none";
    document.body.style = "";
    carousel(0);
  }, 0);
};

const carousel = (e, click = false) => {
  count = e;
  countDown = 0;
  const card = document.createElement("div");
  const counter = document.createElement("div");
  const controlers = document.createElement("div");
  card.className = "card";
  controlers.className = "btn-tiktok";
  counter.className = "counter";
  tiktok.innerHTML = "";
  card.innerHTML = `
    <video loop autoplay muted src=${tiktokContent[e].video}>
    `;

  const intervalId = setInterval(() => {
    countDown++;
    counter.innerHTML = `
        <div class="likes">
        <p>${countDown}K</p>
        <p>likes</p>
        </div>
        <div>
        <p>${tiktokContent[e].views}K+</p>
        <p>views</p>
        </div>
        `;
    if (countDown >= tiktokContent[e].likes) clearInterval(intervalId);
  }, 20);

  tiktokContent.forEach((e, i) => {
    controlers.innerHTML += `
    <button class="rounded-pill w-100 btn" onclick="carousel(${i}, true)"></button>
    `;
  });

  const text = document.createElement("div");
  text.className = "text";
  text.innerHTML = `<p class= "fs-5">We represent +500 influencers on Tik Tok and Instagram from Chile, Mexico, Brazil, Bolivia, Colombia, Argentina and USA.</p>`;

  tiktok.appendChild(text);
  tiktok.appendChild(counter);
  tiktok.appendChild(card);
  tiktok.appendChild(controlers);

  if (count >= 2) {
    count = 0;
  } else {
    count++;
  }

  if (change && !click) {
    change = false;
    setTimeout(() => {
      change = true;
      carousel(count);
    }, 10000);
  }
};

const message = `<strong> WE'RE HONU</strong> WE'RE HONU`;
const messageContainer = document.querySelector(".message-container");
messageContainer.innerHTML = message.repeat(50);
const messageDos = `<strong> LET’S GET STARTED</strong> LET’S GET STARTED`;
const messageContainerDos = document.querySelector(".message-containerTwo");
messageContainerDos.innerHTML = messageDos.repeat(50);
load();
AOS.init();
