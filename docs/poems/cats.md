# Коты-проказники

Коты все -- проказники очень большие,  
В деревне живущие и городские.  
Проказы их нам не получится счесть --  
Всегда запасные у котиков есть!

В коробках коты посидеть обожают,  
Есть робот-уборщик? На нём разъезжают.  
Охотятся ловко в высокой траве,  
На дереве прячутся в сочной листве.

Коты отгрызают бутоны тюльпанам  
Под утро задорно шуршат целлофаном.  
Не любят купаться, а любят лежать,  
В объятьях хозяина тихо мурчать.

Что было поглажено -- тут же помято!  
Коты обожают тайком жевать мяту,  
Сырую картошку, закуска -- чабрец.  
Ещё любят грызть молодой огурец.

Всегда угощений котам будет мало!..  
Наевшись, заснут они под одеялом.  
Начальники в галстуках строгих сидят --  
Коты быть похожими очень хотят!

Но сколько бы наши коты не шалили,  
И сколько цветочных горшков ни валили,  
Всех прочих проказ вытворяли -- не счесть...  
Мы любим их! Рады, что котики есть!

*28.05.2023 г., автору 11 лет.*

---

Полистайте иллюстрации к стихотворению:

<div class="slideshow-container">

<div class="mySlides fade">
  <img src="../../images/cats/running.jpg">
  <div class="text">"Коты все – проказники очень большие"</div>
</div>

<div class="mySlides fade">
  <img src="../../images/cats/pride.jpg">
  <div class="text">"Проказы их все не получится счесть"</div>
</div>

<div class="mySlides fade">
  <img src="../../images/cats/box.jpg">
  <div class="text">"Коты все в коробках сидеть обожают"</div>
</div>

<div class="mySlides fade">
  <img src="../../images/cats/robot.jpg">
  <div class="text">"Есть робот-уборщик? На нём разъезжают"</div>
</div>

<div class="mySlides fade">
  <img src="../../images/cats/hunting.jpg">
  <div class="text">"Охотятся ловко в высокой траве"</div>
</div>

<div class="mySlides fade">
  <img src="../../images/cats/tree.jpg">
  <div class="text">"На дереве прячутся в сочной листве"</div>
</div>

<div class="mySlides fade">
  <img src="../../images/cats/jumping.jpg">
  <div class="text">"...лезут на шторы с огромной сноровкой"</div>
</div>

<div class="mySlides fade">
  <img src="../../images/cats/wet-cat.jpg">
  <div class="text">"Не любят купаться..."</div>
</div>

<div class="mySlides fade">
  <img src="../../images/cats/purring.jpg">
  <div class="text">"...а любят лежать"</div>
</div>

<div class="mySlides fade">
  <img src="../../images/cats/sharpen-claws.jpg">
  <div class="text">"Что было поглажено – тут же помято!"</div>
</div>

<div class="mySlides fade">
  <img src="../../images/cats/funny-cats.jpg">
  <div class="text">"Мы любим их! Рады, что котики есть!"</div>
</div>

<a class="prev" onclick="plusSlides(-1)">❮</a>
<a class="next" onclick="plusSlides(1)">❯</a>

</div>
<br>

<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
  <span class="dot" onclick="currentSlide(4)"></span>
  <span class="dot" onclick="currentSlide(5)"></span>
  <span class="dot" onclick="currentSlide(6)"></span>
  <span class="dot" onclick="currentSlide(7)"></span>
  <span class="dot" onclick="currentSlide(8)"></span>
  <span class="dot" onclick="currentSlide(9)"></span>
  <span class="dot" onclick="currentSlide(10)"></span>
  <span class="dot" onclick="currentSlide(11)"></span>
</div>

<script>
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
</script>
