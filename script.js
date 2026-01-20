// ====== IMAGE DATA ======
const images = [
  {
    src: "img1.jpg",
    caption: "OTEN COLLECTION - 01"
  },
  {
    src: "img2.jpg",
    caption: "OTEN COLLECTION - 02"
  },
  {
    src: "img3.jpg",
    caption: "OTEN COLLECTION - 03"
  },
  {
    src: "img4.jpg",
    caption: "OTEN COLLECTION - 04"
  },
  {
    src: "img5.jpg",
    caption: "OTEN COLLECTION - 05"
  }
];

// ====== DOM ELEMENTS ======
const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxDownload = document.getElementById("lightbox-download");
const thumbnailsContainer = document.getElementById("thumbnails-container");
const lightboxPrev = document.getElementById("lightbox-prev");
const lightboxNext = document.getElementById("lightbox-next");

let currentIndex = 0;

// ====== CREATE GALLERY ======
images.forEach((img, index) => {
  const item = document.createElement("div");
  item.classList.add("gallery-item");

  const imageEl = document.createElement("img");
  imageEl.src = img.src;
  imageEl.alt = img.caption;
  imageEl.loading = "lazy";

  item.appendChild(imageEl);
  gallery.appendChild(item);

  item.addEventListener("click", () => openLightbox(index));
});

// ====== CREATE THUMBNAILS ======
images.forEach((img, index) => {
  const thumb = document.createElement("img");
  thumb.classList.add("thumbnail");
  thumb.src = img.src;
  thumb.alt = img.caption;
  thumb.loading = "lazy";

  thumb.addEventListener("click", () => openLightbox(index));
  thumbnailsContainer.appendChild(thumb);
});

// ====== OPEN LIGHTBOX ======
function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

// ====== CLOSE LIGHTBOX ======
function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = "auto";
}

// ====== UPDATE LIGHTBOX ======
function updateLightbox() {
  const img = images[currentIndex];
  lightboxImage.src = img.src;
  lightboxCaption.textContent = img.caption;

  // update thumbnails active
  document.querySelectorAll(".thumbnail").forEach((thumb, idx) => {
    thumb.classList.toggle("active", idx === currentIndex);
  });

  // update download link
  lightboxDownload.setAttribute("data-src", img.src);
}

// ====== NAVIGATION ======
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateLightbox();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateLightbox();
}

// ====== EVENT LISTENERS ======
lightboxClose.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", prevImage);
lightboxNext.addEventListener("click", nextImage);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return;
  if (e.key === "ArrowRight") nextImage();
  if (e.key === "ArrowLeft") prevImage();
  if (e.key === "Escape") closeLightbox();
});

// ====== DOWNLOAD BUTTON ======
lightboxDownload.addEventListener("click", () => {
  const url = lightboxDownload.getAttribute("data-src");
  const link = document.createElement("a");
  link.href = url;
  link.download = url.split("/").pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});


// ====== SWIPE + PINCH ZOOM ======
// Simple swipe detection
let startX = 0;
let startY = 0;
let isDragging = false;

lightbox.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});

lightbox.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  const endY = e.changedTouches[0].clientY;
  const diffX = endX - startX;
  const diffY = endY - startY;

  if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX > 0) prevImage();
    else nextImage();
  }
});

// ====== PINCH ZOOM ======
let scale = 1;
let startDistance = 0;

lightboxImage.addEventListener("touchstart", (e) => {
  if (e.touches.length === 2) {
    startDistance = getDistance(e.touches[0], e.touches[1]);
  }
});

lightboxImage.addEventListener("touchmove", (e) => {
  if (e.touches.length === 2) {
    const distance = getDistance(e.touches[0], e.touches[1]);
    scale = Math.max(1, Math.min(4, scale * (distance / startDistance)));
    lightboxImage.style.transform = `scale(${scale})`;
    startDistance = distance;
  }
});

function getDistance(t1, t2) {
  const dx = t2.clientX - t1.clientX;
  const dy = t2.clientY - t1.clientY;
  return Math.sqrt(dx * dx + dy * dy);
}

// reset zoom when closing
lightboxClose.addEventListener("click", () => {
  scale = 1;
  lightboxImage.style.transform = "scale(1)";
});
