<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: 'Times New Roman', Times, serif;">
    <p align = "center" style="font-size: 14;">
        МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ <br>
        РОССИЙСКОЙ ФЕДЕРАЦИИ<br>
        ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ<br>
        ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ<br>
        «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»<br>
    </p>
    <br><br><br><br><br><br>
    <body font-size = "12">
        <p align = "center"> 
            Институт естественных наук и техносферной безопасности<br>
            Кафедра информатики<br>
            Бахтина Елена Владимировна<br>
        </p>
        <br><br><br>
        <p align = "center">
            <strong>Лабораторная работа №2. «HTML»</strong><br>
            01.03.02 Прикладная математика и информатика
        </p>
        <br><br><br><br><br><br><br><br><br><br><br><br>
        <p align = "right"> 
            Научный руководитель<br>
            Соболев Евгений Игоревич
        </p>
        <br><br><br>
        <p align = "center">г. Южно-Сахалинск<br>2024 г.</p>
    </body>
    <body style="font-family: 'Times New Roman', Times, serif;">
        <h2 align = "center">Введение</h2>
        <p font-size = "12">
            <b>HTML</b> (от англ. HyperText Markup Language — «язык гипертекстовой разметки») — стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере.
            Веб-браузеры получают HTML документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска, далее интерпретируют код в интерфейс, который будет отображаться на экране монитора.
        </p>
        <br>
        <h2 align = "center">Цель и задачи</h2>
        <p align = "left" font-size = "12"> 
            Цель: создать страницу на HTML.<br>
            Задачи:<br>
                1. Повторите страницу по данному по образцу<br>
                2.  Повторите страницу по данному по образцу<br>
                3. Повторите страницу по данному по образцу<br>
                4. Повторите страницу по данному по образцу<br>
                5. Повторите страницу по данному по образцу<br>
                6. Повторите страницу по данному по образцу<br>
                7. Создать структуру HTML страницы с использованием заголовка, абзацев, списков и изображений.<br>
                8. Вставить видео на страницу с помощью тега <!--<video>--> и добавить управляющие элементы.<br>
                9. Создать форму обратной связи с полями для ввода имени, email и сообщения.<br>
                10. Разработать таблицу с данными о товарах (название, цена, описание) и стилизовать её с помощью CSS.<br>
                11. Добавить на страницу интерактивную карту с маркерами и информацией о местоположении.<br>
                12. Реализовать выпадающее меню навигации с использованием HTML и CSS.<br>
                13. Вставить аудио-плеер на страницу для воспроизведения музыкального трека.<br>
                14. Создать галерею изображений с возможностью пролистывания и увеличения фотографий.<br>
                15. Разработать форму заказа товара с выбором количества и кнопкой отправки заказа.<br>
                16. Использовать iframe для встраивания внешнего контента (например, карты Google или видео с YouTube).<br>
                17. Добавить на страницу анимированный слайдер с переходами между изображениями.<br>
                18. Реализовать функционал проверки вводимых данных в форме с помощью JavaScript.<br>
                19. Создать анимированное меню бургер для мобильной версии сайта.<br>
                20. Использовать тег <!--<canvas>--> для создания простой графики или анимации на странице.<br>
                21. Добавить на страницу элементы социальных сетей с возможностью перехода по ссылкам.<br>
                22. Разработать форму регистрации пользователей с проверкой пароля на соответствие требованиям.<br>
                23. Создать табличное представление данных с возможностью сортировки и фильтрации по столбцам.<br>
                24. Использовать Web-шрифты для стилизации текста на странице.<br>
                25. Реализовать функционал Drag and Drop для перетаскивания элементов на странице.<br>
                26. Создать адаптивную веб-страницу, которая корректно отображается на разных устройствах и разрешениях экрана.<br>
        </p>
        <h2 align = "center">Решение</h2>
        <p font-size = "12">Для выполнения этой лабораторной работы, я пользовался:</p>
        <p> 1.  Материалом в сети интернет</p>
        </body>
    <h3 align = "center">Файл laba2.html</h3>

```
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lab2</title>
    <style>p,ul{font-size: 20px;}</style> <style>h2,h3,h1{font-weight: normal;}</style>
</head>
<body style="font-family: 'Times New Roman', Times, serif;">
    <h2 style="font-family: Arial, Helvetica, sans-serif;">Это заголовок</h2>
    <h3 style="font-family: Arial, Helvetica, sans-serif;">Это заголовок</h3>
    <h3>Это заголовок</h3>
    <h3 style="font-family: Arial, Helvetica, sans-serif;"><i>Это заголовок</i></h3>
    <p>Это <b>абзац</b></p> <p>Это еще <i>абзац</i>.</p>
    <h1 style="font-family: Arial, Helvetica, sans-serif;"><i>Это заголовок h1</i></h1>
    <p>-----------------------------------------------------------</p>
</body>
<body style="font-family: 'Times New Roman', Times, serif;">
    <h1 style="font-weight: normal; padding: 10px;">Что такое CMS</h1>
    <p>
        <b>CMS</b> - "система управления контентом" (<b>движок</b>) - написанная PHP-программистами основа для сайта,<br>
        с помощью которой вы сможете управлять сайтом (добавлять контент, менять пункты меню и т.п.) не<br>
        зная HTML и CSS.<br>
        Однако, для того чтобы сделать сайт с помощью <b>CMS</b> <i>потребуются услуги</i> и программиста,<br>
        и дизайнера, и верстальщика. И капиталовложения.<br><br>
        Какие бывают cms<br>
        Бывают различные системы управления контентом:<br>
        для интернет-магазинов, для блогов, для форумов и т.д.<br><br>
        Примеры cms<br>
        <i>Примеры популярных</i> CMS: Joomla, WordPress (для блогов), PhpBB (для форумов).<br>
        <b>CMS-ки бывают</b> <i>платные</i> и <i>бесплатные</i>.
    </p>
    <p>-----------------------------------------------------------</p>
</body>
<body>
    <h1 style="font-weight: normal;">Списки</h1>
    <h2 style="font-weight: normal;">Списки цветов</h2>
    <ul title="абоба">
        <li>Красный</li> <li>Желтый</li> <li>Зеленый</li> <li>Синий</li>
    </ul>
    <h2 style="font-weight: normal;">Список студентов</h2>
    <ol title="махач=кала">
        <li>Иванов</li> <li>Петров</li> <li>Сидоров</li> <li>Николаев</li>
    </ol>
    <h2 style="font-weight: normal;">Список студентов</h2>
    <ol title="попка">
        <li>Иванов</li> 
        <ul>
            <li>Возраст - 23 года</li> <li>Курс - 3</li>
        </ul>
        <li>Петров</li>
        <ul>
            <li>Возраст - 19 лет</li> <li>Курс - 2</li>
        </ul>
        <li>Сидоров</li>
        <ul>
            <li>Возраст - 18 лет</li> <li>Курс - 1</li>
        </ul>
    </ol>
    <p>-----------------------------------------------------------</p>
</body>
<body>
    <h3 style="font-family: Arial, Helvetica, sans-serif;">Что нужно знать, чтобы делать сайты</h3>
    <ol> <li><b>HTML</b></li> <li><i>CSS</i></li> <li>PHP</li> <li>SQL</li> <li>JavaScript</li> <li>iQuery</li> <li>Flash</li> <li>SEO</li> </ol>
    <p style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">PHP и JavaScript</p>
    <p>Языки программирования PHP и JavaScript позволяют сделать сайт динамичным, то есть реагирующим на действия пользователя. Например, можно сделать красивую выпадающую менюшку или слайдер</p>
    <p style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">Виды скриптов</p>
    <p>Для этого пишутся скрипты (англ. <i>script</i> - «сценарий») - программы, позволяющиее реагировать на действия пользователя. Скрипты бывают двух видов:</p>
    <ul>
        <li>
            те, которые выполняются на сервере, а результат их выполнения приходит в браузер к пользователю уже в готовом виде. Это скрипты, написанные на языке <b>PHP</b>. На нем пишуться <b>CMS-ки</b> – системы управления контентом.
        </li>
        <li>
            те, которые выполняются прямо в браузере пользователя. Это скрипты, написанные на языке <b>JavaScript</b>. Они чаще всего используются для, того чтобы сделать страницу более удобной и красивой.
        </li>
    </ul>
    <a href="D:\html\lab3\laba3.html" target="_blank">Посмотрите</a>
    <a href="lab2_1.html" target="_blank">Следующее задание</a>
</body>
</html>
```
<h3 align = "center">Файл laba2_1.html</h3>

```
<!DOCTYPE html>
<html lang="en" style="
    background-color: rgb(56, 121, 173);
    margin-top: 2%;
    margin-left: 10%;
    margin-bottom: 1%;
    margin-right: 10%;
    border: 2px solid white;
    border-radius: 10px;">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lab2_1</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link href="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css" rel="stylesheet">
    <script src="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"></script>
    <link rel="stylesheet" href="humburger.css">
</head>
<body>
    <div class="wrapper">
        <header class="header">
            <nav class="nav">
                <ul>
                    <li><a href="lab2.html" target="_parent">Главная</a></li>
                    <li><a href="map.html" target="_blank">кааартааа</a></li>
                    <li><a href="canvas.html" target="_blank">canvas</a></li>
                    <li><a href="table.html" target="_blank">Таблица</a></li>
                    <li><a href="https://www.youtube.com/watch?v=8fBhNjEfxLI&pp=ygUX0YHQvNC10YjQvdGL0LUg0LrQvtGC0Ys%3D" target="_blank">еще коты</a></li>
                    <li><a href="https://vk.com/durov" target="_blank"><img src="vk.png"></a></li>
                    <li><a href="http://t.me/durov" target="_blank"><img src="tg.png"></a></li>
                </ul>
            </nav>
            <div class="burger">
                <span></span>
            </div>
        </header>
    </div>
    <script src="script.js"></script>
    <h1>Коты на продажу</h1>
    <div id="global">
        <table>
            <tr id="headerT">
                <td>Название</td>
                <td>Цена</td>
                <td>Описание</td>
            </tr>
            <tr>
                <td><ul style="list-style: georgian">
                    <li>котик-усыпленыш</li>
                </ul></td>
                <td>бесценно</td>
                <td id="tdimg"> <img src="https://i.ytimg.com/vi/-452p_9ESbM/sddefault.jpg" width="100" height="auto"></td>
            </tr>
            <tr>
                <td><ul style="list-style: georgian;">
                    <li>котик-игреныш</li>
                </ul></td>
                <td>бесценно</td>
                <td id="tdimg"> <img src="https://img.freepik.com/premium-photo/a-kitten-plays-with-a-ball-of-yarn_867452-4841.jpg" width="100" height="auto"></td>
            </tr>
            <tr>
                <td><ul style="list-style: georgian;">
                    <li>котик-невдупленыш</li>
                </ul></td>
                <td>бесценно</td>
                <td id="tdimg"> <img src="https://kartinki.pics/pics/uploads/posts/2022-09/1662839343_3-kartinkin-net-p-milie-malenkie-kotyata-pinterest-3.jpg" width="100" height="auto"></td>
            </tr>
        <div id="form">
            <p>
                <label for="name">Введите ФИО:</label><br>
                <input type="text" required placeholder="ФИО">
            </p>
            <p>
                <label for="email">Введите адресс доставки:</label>
                <input type="email"required placeholder="vasyapupkin@gmail.com">
            </p>
            <p>
                <label for="number">Введите кол-во товара:</label>
                <input type="number"required min="0" max="100">
            </p>
            <button id="buton1" type="submit" >Отправить</button>
            <button onclick="redirect()" id="buton2">Регистрация</button>
        </div>    
    </table>
    </div>
    <script>
        function redirect() {
          window.location.href = 'registration.html';
        }
    </script>
    <div class="fotorama"
    data-width="50%"
    data-minheight="auto"
    data-allowfullscreen="native"
    data-autoplay="true">
        <img src="https://i.ytimg.com/vi/-452p_9ESbM/sddefault.jpg" alt="Image 1" width="33.333%">
        <img src="https://img.freepik.com/premium-photo/a-kitten-plays-with-a-ball-of-yarn_867452-4841.jpg" alt="Image 2" width="33.333%">
        <img src="https://kartinki.pics/pics/uploads/posts/2022-09/1662839343_3-kartinkin-net-p-milie-malenkie-kotyata-pinterest-3.jpg" alt="Image 3" width="33.333%">
        <img src="https://prezentacii.org/upload/cloud/18/10/84048/images/screen25.jpg" alt="Image 3" width="33.333%">
    </div>
    <div style="padding-top: 5%; padding-left: 10%; display: inline;">
        <video src="lvenok.mp4" controls>этот браузер не поддерживает((</video>
        <div class="dnd">
            <div id="draggable1" draggable="true" class="item">Перетащите меня 1</div>
            <div id="draggable2" draggable="true" class="item">Перетащите меня 2</div>
            <div id="droppable" class="dropzone">Сюда перенесите</div>
        </div>       
        <audio src="krovostok.mp3" controls>не поддерживается</audio>
    </div>
    <script src="dnd.js"></script>    
</body>
</html>
```
<h3 align = "center">Файл style.css</h3>

```
@keyframes tableColor {
    0% {background-color: pink;}
    10% {background-color: rgb(236, 137, 153);}
    20% {background-color: rgb(236, 108, 129);}
    30% {background-color: rgb(238, 86, 112);}
    40% {background-color: rgb(236, 57, 87);}
    50% {background-color: rgb(238, 47, 47);}
    60% {background-color: rgb(241, 68, 68);}
    70% {background-color: rgb(240, 98, 98);}
    80% {background-color: rgb(238, 116, 116);}
    100% {background-color: transparent;}
}
h1{text-align: center;}
table{
    border: 2px solid white;
    border-collapse: separate;
    border-radius: 10px;
    border-spacing: 0;
    table-layout: fixed;
    text-align: center;
}
#headerT{
    animation-name: tableColor;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: linear;
    border-collapse: initial;
}
ul{
    padding-left: 10%;
}
.fotorama{
    padding-top: 5%;
    padding-left: 33.333%;
}
#global{
    margin-left: 39%;
}
label{
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: left;
    color: white;
    font-weight: bold;
    text-shadow: 2px 1px 2px rgb(0, 0, 0);
}
#form{
    width: 33.333%;
    background-color: grey;
    border: 2px solid white;
    border-radius: 5px;
    float: right;
    position: relative;
    margin-right: 10%;
    padding-left: 15px;
    padding-bottom: 15px;
}
#buton1, #buton2{
    margin-left: 10%;
    height: 50px; width: 100px;
}
header{
	/* width:100%;  */
	background:#ffffff; 
	height:60px; 
	line-height:60px;
	border-bottom:1px solid #dddddd;
}
.glyphicon-home{
  color:white; 
  font-size:1.5em; 
  /* margin-top:5px; 
  margin:0 auto; */
}
.dnd {
    display: flex;
    float: right;
}
.item {
    width: auto;
    height: auto;
    background-color: lightblue;
    text-align: center;
    line-height: 50px;
    margin-right: 10px;
    cursor: move;
}

.dropzone {
    width: 200px;
    height: 100px;
    background-color: lightgreen;
    text-align: center;
    line-height: 100px;
}
```
<h3 align = "center">Файл humburger.css</h3>

```
body {
  display: flex;
  flex-direction: column;
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.wrapper{
  flex-grow: 1;
}

.open{
  display: flex !important;
}

.header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 50px;
  background-color: #3E424B;
  border-radius: 2px solid #3E424B;
  color: #FAF6F2;
  padding: 0 40px;
}

.nav{
  display: flex;
  width: 1000px;
  padding: 0 40px;
}

.nav ul{
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-between;
}

a{
  color: white;
  text-decoration: none;
}

.burger{
  display: none;
  position: relative;
  z-index: 50;
  align-items: center;
  justify-content: flex-end;
  width: 30px;
  height: 18px;
}

.burger span{
  height: 2px;
  width: 80%;
  transform: scale(1);
  background-color: #FAF6F2;
}

.burger::before, .burger::after{
  content: '';
  position: absolute;
  height: 2px;
  width: 100%;
  background-color: #FAF6F2;
  transition: all 0.3s ease 0s;
}

.burger::before { top: 0 }

.burger::after { bottom: 0 }


/* Добавляем класс active для анимации иконки бургера */
.burger.active span { transform: scale(0) }

.burger.active::before{
  top: 50%;
  transform: rotate(-45deg) translate(0, -50%);
}

.burger.active::after{
  bottom: 50%;
  transform: rotate(45deg) translate(0, 50%);
}


/* При разрешении экрана 900px и ниже, выводим на экран иконку бургера */
@media (max-width: 1200px) {

  .burger { display: flex }

  .nav{
      display: none;
      flex-direction: column;
      position: fixed;
      height: 100%;
      width: 100%;
      top: 0; bottom: 0; left: 0; right: 0;
      z-index: 50;
      overflow-y: auto;
      padding: 50px 40px;
      background-color: black;
      animation: burgerAnimation 0.4s;
  }

  .nav ul{
      flex-direction: column;
      row-gap: 30px;
  }
}

@keyframes burgerAnimation {
  from {opacity: 0}
  to {opacity: 1}
}
```
<h3 align = "center">Файл script.js</h3>

```
document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
})
```
<h3 align = "center">Файл dnd.js</h3>

```
let draggedItem = null;

document.addEventListener('dragstart', function(event) {
    draggedItem = event.target;
});

document.addEventListener('dragover', function(event) {
    event.preventDefault();
});

document.addEventListener('drop', function(event) {
    event.preventDefault();
    if (event.target.classList.contains('dropzone')) {
        event.target.appendChild(draggedItem);
    }
    draggedItem = null;
});

document.addEventListener('dragend', function(event) {
    if (draggedItem) {
        document.body.appendChild(draggedItem);
    }
});
```
<h3 align = "center">Файл map.htm;</h3>

```
<!DOCTYPE html>
<html lang="en" style="
    margin-left: 700px;
    margin-top: 250px;
    margin-right: 250px;
    background-color: rgb(118, 150, 87);
">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>map</title>
</head>
<body style="text-align: center;">
    <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A3a23660026d5bebea7bf29d92c43c9b522680c84a8d85084fe81550ed52a6a80&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>
</body>
</html>
```
<h3 align = "center">Файл canvas.html</h3>

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>анимация на canvas</title>
<style>
    body {
        margin: 0;
        overflow: hidden;
    }
    canvas {
        display: block;
    }
</style>
</head>
<body>
<canvas id="myCanvas"></canvas>
<script>
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let dx = (Math.random() - 0.5) * 25; // Скорость по оси X
    let dy = (Math.random() - 0.5) * 25; // Скорость по оси Y
    let radius = 150;

    const img = new Image();
    img.src = 'https://img-fotki.yandex.ru/get/196102/32719266.33/0_11f851_ab545d69_orig.jpg'; // Укажите URL вашего изображения здесь

    function drawCircle() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Очистить канвас перед рисованием
        ctx.drawImage(img, x-20, 80, 150, 150); // Рисуем изображение вместо круга

        if (x + dx > canvas.width - radius || x + dx < radius) {
            dx = -dx;
        }
        if (y + dy > canvas.height - radius || y + dy < radius) {
            dy = -dy;
        }

        x += dx;
        y += dy;

        requestAnimationFrame(drawCircle); // Повторить анимацию
    }
    img.onload = function() {
        drawCircle();
    };
</script>
</body>
</html>
```
<h3 align = "center">Файл table.html</h3>

```
<!DOCTYPE html>
<html lang="en"style="
    background-color: rgb(56, 121, 173);
    margin-top: 15%;
    margin-left: 33.333%;
    margin-bottom: 5%;
    margin-right: 33.333%;
    border: 2px solid white;
    border-radius: 10px;">
<head>
    <meta charset="UTF-8">
    <title>Таблица</title>
    <link rel="stylesheet" href="table.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Honk&display=swap" rel="stylesheet">
</head>
<body style="font-family: 'Honk', sans-serif; font-size: larger;">
<input type="text" id="searchInput" oninput="filter()" placeholder="Фильтр">
<div class="big">
    <div class="small">
        <table id="myTable">
            <thead>
                <tr>
                    <th onclick="sortTable(0)" style="width: 30%;"><div class="container">Name</div></th>
                    <th onclick="sortTable(1)"><div class="container">№</div></th>
                    <th onclick="sortTable(2)"><div class="container">Parametrs</div></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>cat-confused</td>
                    <td>1</td>
                    <td>A kitten who only sleeps, we all look like him. Let's not judge.</td>
                </tr>
                <tr>
                    <td>baby cat</td>
                    <td>2</td>
                    <td>A playful specimen that won't be boring.</td>
                </tr>        
                <tr>
                    <td>a dummy cat</td>
                    <td>3</td>
                    <td>Well, it's definitely me.</td>
                </tr>
            </tbody>
        </table>    
    </div>
</div>
<script>
function sortTable(columnIndex) {
    const table = document.getElementById('myTable');
    const rows = Array.from(table.querySelectorAll('tr'));
    const sortedRows = rows.slice(1).sort((a, b) => a.children[columnIndex].textContent.localeCompare(b.children[columnIndex].textContent));
    
    table.tBodies[0].append(...sortedRows);
}

function filter() {
    const filterValue = document.getElementById('searchInput').value.toUpperCase();
    const table = document.getElementById('myTable');
    const rows = table.getElementsByTagName('tr');
    
    for (let row of rows) {
        const dataCells = row.getElementsByTagName('td');
        let rowVisible = false;
        
        for (let cell of dataCells) {
            if (cell.textContent.toUpperCase().indexOf(filterValue) > -1) {
                rowVisible = true;
                break;
            }
        }
        row.style.display = rowVisible ? '' : 'none';
    }
}
</script>
</body>
</html>
```
<h3 align = "center">Файл table.css</h3>

```
table{
    border-collapse: separate;
    width: 100%;
}
td {
    padding: 8px;
    text-align: left;
}

th {
    text-align: center;
    cursor: pointer;
}
.container{
    border: 2px solid white;
    border-radius: 10px;
}
#searchInput{
    margin-left: 10px;
    margin-right: 5px;
    width: 95%;
    border-radius: 5px;
}

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

.big {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
@media only screen and (max-width: 768px) {
    .big {
        padding: 0 10px;
    }
}
.small {
    padding: 20px;
}

```
<h3 align = "center">Файл registration.html</h3>

```
<!DOCTYPE html>
<html lang="en" style="
    background-color: rgb(56, 121, 173);
    margin-top: 15%;
    margin-left: 42%;
    margin-bottom: 5%;
    margin-right: 42%;
    border: 2px solid white;
    border-radius: 10px;">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Регистрация</title>
    <link rel="stylesheet" href="form.css">
</head>
<body>
    <form>
        <label>
            <p>Логин</p>
            <input type="text" required="" placeholder="Мильпопс жу-жу-жу" autocomplete>
        </label>
        <label>
            <p>Пароль</p>
            <input id="password" type="password" required="" oninput="check()">
            <p id="message"></p>
        </label>
        <label>
            <p id="hint">Пароль должен содержать минимум 10 символов: буквы и цифры</p>
        </label>
    </form>
    <script>
        function check() {
            const password = document.getElementById('password');
            const message = document.getElementById('message');
            const hint = document.getElementById('hint');
            const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,25}$/;

            hint.style.display = 'none';
            if (passwordPattern.test(password.value)) {
                message.textContent = 'Пароль соответствует требованиям.';
                message.style.color = '#90EE90';
            } else {
                message.textContent = 'Пароль должен содержать хотя бы одну цифру, одну строчную и одну прописную букву, и быть длиной от 10 до 25 символов.';
                message.style.color = '#FA8072';
            }
        }
        </script>
</body>
</html>
```

<h3 align = "center">Файл form.css</h3>

```
form{
    padding-left: 5%;
    padding-bottom: 3%;
}
label{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    color: white;
}
#hint{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 300;
    color: rgb(182, 175, 175);
    margin-block-end: 0;
}
#message{
    margin-block-end: 0;
}
```
<br>
 <h2 align = "center">Вывод</h2>
 <p align = "left" font-size = "12">
    По итогу данной лабороторной работы, я много чему научилась научилась: создавать анимации, вставлять фреймы с картой, видео и музыкрй, создавать свои скрипты и делать красивейшие страницы 😊   
</p>
</body>
</html>
