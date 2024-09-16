document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".thumbImage");
  const previewImage = document.querySelector(".previewImg");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      previewImage.src = this.src;
    });
  });
});
