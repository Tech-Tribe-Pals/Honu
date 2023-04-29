const contacto = document.getElementById("contacto");
const loading = document.getElementById("loading");
const tiktok = document.getElementById("tik-tok");
let count = 0;
let countDown = 0;
let change = true;

const tiktokContent = [
  {
    video: `./img/video1.mp4`,
    likes: 154,
    views: 313,
  },
  {
    video: `./img/video2.mp4`,
    likes: 178,
    views: 700,
  },
  {
    video: `./img/video3.mp4`,
    likes: 166,
    views: 600,
  },
];

const scrollToContacto = () => {
  document.getElementById('contacto').scrollIntoView()
};

const transition = () => {
  scrollToContacto()
};

const load = () => {
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    loading.innerHTML = "";
    loading.style.display = "none";
    document.body.style = "";
    carousel(0);
  }, 500);
};

const carousel = (e, click = false) => {
  count = e;
  countDown = 0;
  const card = document.createElement("div");
  const contador = document.createElement("div");
  const controlers = document.createElement("div");
  card.className = "card";
  contador.className = "contador";
  tiktok.innerHTML = "";
  card.innerHTML = `
    <video loop autoplay muted src=${tiktokContent[e].video}>
    `;

  const intervalId = setInterval(() => {
    countDown++;
    contador.innerHTML = `
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
    <button onclick="carousel(${i}, true)">o</button>
    `;
  });
  tiktok.appendChild(contador);
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
    }, 2500);
  }
};

const message = ` we're honu`;
const messageContainer = document.querySelector(".message-container");
messageContainer.innerText = message.repeat(100);

load();