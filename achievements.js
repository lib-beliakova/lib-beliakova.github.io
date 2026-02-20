let imageRows = [];

fetch('../achievements.json')
  .then(response => response.json())
  .then(data => {
    imageRows = data;
    initializeGallery();
  })
  .catch(error => {
    console.error('Error loading achievements.json:', error);
  });

function initializeGallery() {
  const grid = document.getElementById('image-grid');
  const modalSlides = document.getElementById('modal-slides');
  var slideIndex = 1;

  imageRows.forEach(row => {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'lb-row';
    const numImages = row.length;
    const columnClass = `lb-column-${numImages}`;
    row.forEach(img => {
      const col = document.createElement('div');
      col.className = columnClass;
      const gridImg = document.createElement('img');
      gridImg.src = `../images/achievements/${img}`;
      gridImg.className = 'lb-hover-shadow';
      gridImg.setAttribute('onclick', `openModal();currentSlide(${slideIndex})`);
      col.appendChild(gridImg);
      rowDiv.appendChild(col);
      grid.appendChild(rowDiv);
      const modalSlide = document.createElement('div');
      modalSlide.className = 'lb-mySlides';
      const modalImg = document.createElement('img');
      modalImg.src = `../images/achievements/${img}`;
      modalImg.style.width = "100%";
      modalSlide.appendChild(modalImg);
      modalSlides.appendChild(modalSlide);
      slideIndex++;
    });
  });
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("lb-mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
  slides[slideIndex-1].style.display = "block";
}

function openModal() { document.getElementById("lb-myModal").style.display = "block"; }
function closeModal() { document.getElementById("lb-myModal").style.display = "none"; }
function plusSlides(n) { showSlides(slideIndex += n); }
function currentSlide(n) { showSlides(slideIndex = n); }