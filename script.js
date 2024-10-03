const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "by one kitaa😡";
  gif.src =
    "https://media1.tenor.com/m/2WUg93G9pCEAAAAC/peach-goma-throwing.gif";
});

function moveButton() {
    // Menghitung posisi acak baru
    const randomX = Math.floor(Math.random() * 300) - 150; // Rentang -150px hingga 150px
    const randomY = Math.floor(Math.random() * 300) - 150; // Rentang -150px hingga 150px

    // Mengatur posisi tombol secara dinamis
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Event listener untuk desktop (hover)
noBtn.addEventListener('mouseover', moveButton);

// Event listener untuk perangkat sentuh (tap atau klik)
noBtn.addEventListener('click', moveButton);

// Mendeteksi perangkat seluler dan menambahkan event listener tambahan
if ('ontouchstart' in window || navigator.maxTouchPoints) {
    noBtn.addEventListener('touchstart', moveButton);
}
