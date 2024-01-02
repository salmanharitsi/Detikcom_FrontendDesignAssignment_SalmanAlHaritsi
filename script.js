// image carousel function //
document.addEventListener("DOMContentLoaded", function () {
    var carouselInstance = document.getElementById('carouselExampleInterval');
    var carousel = new bootstrap.Carousel(carouselInstance);
    var imgActiveItems = document.querySelectorAll('.img-active div');

    carouselInstance.addEventListener('slid.bs.carousel', function (event) {
        var activeSlideIndex = event.to;

        imgActiveItems.forEach(function (item) {
            item.classList.remove('active');
        });

        imgActiveItems[activeSlideIndex].classList.add('active');
    });

    imgActiveItems.forEach(function (img, index) {
        img.addEventListener('click', function () {
            carousel.to(index); 

            imgActiveItems.forEach(function (item) {
                item.classList.remove('active');
            });

            this.classList.add('active');
        });
    });
});

// artikel button function //
var buttons = document.querySelectorAll('.btn-artikel button');

buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        var links = document.querySelectorAll('.btn-artikel a');

        links.forEach(function(link) {
            link.classList.remove('active');
        });

        var targetLink = this.parentElement;
        targetLink.classList.add('active');
    });
});


function toggle() {
    var fotoElements = document.querySelectorAll('.foto');
    var videoElements = document.querySelectorAll('.video');
    var artikelButton = document.querySelector('.btn-artikel .active');

    if (artikelButton.innerText.toLowerCase() === 'foto') {
        fotoElements.forEach(function(foto) {
            foto.style.display = 'flex';
        });
    } else {
        fotoElements.forEach(function(foto) {
            foto.style.display = 'none';
        });
    }

    if (artikelButton.innerText.toLowerCase() === 'video') {
        videoElements.forEach(function(video) {
            video.style.display = 'flex';
        });
    } else {
        videoElements.forEach(function(video) {
            video.style.display = 'none';
        });
    }
}

// Navbar Toggle //
const toggleButton = document.getElementById('toggleButton');
const iconToggle = document.getElementById('iconToggle');

toggleButton.addEventListener('click', function () {
    if (iconToggle.classList.contains('navbar-toggler-icon')) {
        // Ganti ke ikon close
        iconToggle.classList.remove('navbar-toggler-icon');
        iconToggle.innerHTML = '<img src="asset/header/Close-Square.png" alt="Close Icon" class="close-icon">';
    } else {
        // Ganti kembali ke ikon semula
        iconToggle.classList.add('navbar-toggler-icon');
        iconToggle.innerHTML = '';
    }
});


// support hooks
const imagePaths = [
    "asset/body/support/alphajwc.svg",
    "asset/body/support/500.svg",
    "asset/body/support/insignia.svg",
    "asset/body/support/sequoia.svg",
    "asset/body/support/sginnovate.svg",
    "asset/body/support/wavemaker.svg",
    "asset/body/support/GFC.svg",
    "asset/body/support/goldengate.svg",
];
  
const duplicatedImagePaths = [...imagePaths, ...imagePaths];

const supSlide = document.querySelector('.sup-slide');

duplicatedImagePaths.forEach((imagePath) => {
  const img = document.createElement('img');
  img.src = imagePath;
  img.alt = 'Supported Image';
  const supItem = document.createElement('div');
  supItem.classList.add('sup-item');
  supItem.appendChild(img);
  supSlide.appendChild(supItem);
});


// artikel hooks

function generateArtikelItems() {
    let artikelItems = '';
    
    // Array of artikel data
    const artikelData = [
        {
            link: 'https://health.detik.com/kebugaran/d-7056398/sukses-finish-marathon-di-jakarta-osha-penyandang-autisme-beberkan-prosesnya',
            imgSrc: 'asset/body/artikel/artikel1.png',
            fotoCount: 5,
            videoDuration: '01:45',
            title: 'Sukses Finish Marathon di Jakarta, Osha Penyandang Autisme Beberkan Prosesnya',
            dateTime: 'Sabtu, 25 Nov 2023 20:00 WIB'
        },
        {
            link: '#',
            imgSrc: 'asset/body/artikel/artikel2.png',
            fotoCount: 5,
            videoDuration: '01:45',
            title: "Edukasi Lingkungan Hidup Bonus Sehat di 'Misi Lestari 2023: See Nature",
            dateTime: 'Selasa, 28 Nov 2023 07:42 WIB'
        },
        {
            link: '#',
            imgSrc: 'asset/body/artikel/artikel3.png',
            fotoCount: 5,
            videoDuration: '01:45',
            title: 'Gokil! Puluhan Ribu Orang Ramaikan Pertamina Eco RunFest 2023',
            dateTime: 'Minggu, 26 Nov 2023 13:04 WIB'
        },
        {
            link: '#',
            imgSrc: 'asset/body/artikel/artikel4.png',
            fotoCount: 5,
            videoDuration: '01:45',
            title: "Kelar Lari di CT Arsa Charity Fun Run, 'Recharge' Energi Nonton Maliq & D'essentials",
            dateTime: 'Sabtu, 18 Nov 2023 17:39 WIB'
        },
        {
            link: '#',
            imgSrc: 'asset/body/artikel/artikel5.png',
            fotoCount: 5,
            videoDuration: '01:45',
            title: 'CT Arsa Charity Fun Run 2023 Bertabur Emas',
            dateTime: 'Kamis, 16 Nov 2023 16:34 WIB'
        },
        {
            link: '#',
            imgSrc: 'asset/body/artikel/artikel6.png',
            fotoCount: 5,
            videoDuration: '01:45',
            title: 'BTN Jakarta Run 2023 Dorong dan Geliatkan Sport Tourism Jakarta',
            dateTime: 'Minggu, 12 Nov 2023 11:55 WIB'
        }
    ];

  artikelData.forEach(data => {
      artikelItems += `
          <a href="${data.link}" target="_blank" class="item-artikel">
              <div class="img-artikel">
                <img src="${data.imgSrc}" alt="">
              </div>
              <div class="foto">
                <div class="img-foto">
                  <img src="asset/body/artikel/Camera.png" alt="">
                </div>
                <p>${data.fotoCount} foto</p>
              </div>
              <div class="video">
                <div class="img-video">
                    <img src="asset/body/artikel/Play.png" alt="">
                </div>
                <p>${data.videoDuration}</p>
              </div>
              <div class="teks-artikel">
                <h3>${data.title}</h3>
                <p>${data.dateTime}</p>
              </div>
          </a>
      `;
  });

  return artikelItems;
}

const allArtikelContainer = document.querySelector('.all-artikel');

allArtikelContainer.innerHTML = generateArtikelItems();


// carousel adn active iamges galery hooks

const carouselInner = document.querySelector('.carousel-inner');
const imgActive = document.querySelector('.img-active');

const images = [
  'asset/body/galeri/foto1.png',
  'asset/body/galeri/foto2.png',
  'asset/body/galeri/foto3.png',
  'asset/body/galeri/foto4.png'
];

let carouselHTML = '';
images.forEach((image, index) => {
  const activeClass = index === 0 ? 'active' : '';
  carouselHTML += `
    <div class="carousel-item ${activeClass}" data-bs-interval="20000">
      <img src="${image}" class="d-block w-100" alt="...">
    </div>
  `;
});

let imgActiveHTML = '';
images.forEach((image, index) => {
  const activeClass = index === 0 ? 'active' : '';
  imgActiveHTML += `
    <div class="img-actv-child ${activeClass}" data-bs-target="">
      <img src="${image}" class="d-block w-100" alt="...">
    </div>
  `;
});

carouselInner.innerHTML = carouselHTML;
imgActive.innerHTML = imgActiveHTML;



