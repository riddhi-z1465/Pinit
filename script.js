

function displayPhotos(pins) {
    const gallery = document.getElementById("photoGallery");
    gallery.innerHTML = "";

    pins.forEach(pin => {
        // Safely check for image URL
        const imageUrl = pin?.media?.images?.original?.url || pin?.media?.images?.small?.url;

        if (imageUrl) {
            const img = document.createElement("img");
            img.src = imageUrl;
            img.alt = pin.title || "Pinterest Image";
            img.style.width = "200px";
            img.style.margin = "10px";

            gallery.appendChild(img);
        }
    });
}

fetchPinterestPhotos();





const videos = document.querySelectorAll('.hover-video');

videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });

  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0; // rewind to start
  });
});


 document.querySelectorAll('.logo').forEach(logo => {
    logo.addEventListener('click', () => {
      const filled = logo.getAttribute('data-filled');
      const outline = logo.getAttribute('data-outline');
      logo.src = logo.src.includes(outline) ? filled : outline;
    });
  });