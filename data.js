// 2

let product = {
    name: 'Смартфон Apple iPhone 13',
    color: 'синий',
    memory: '128 ГБ',
    screen: 6.1,
    sistem: 'iOS 15',
    interfase: 'NFC, Bluetooth, Wi-Fi',
    cpu: 'Apple A15 Bionic',
    weight: '173 г',
    description: `Наша самая совершенная система двух камер.
    Особый взгляд на прочность дисплея.
    Чип, с которым всё супербыстро.
    Аккумулятор держится заметно дольше.
    iPhone 13 - сильный мира всего.
    Мы разработали совершенно новую схему расположения и развернули объективы на 45 градусов. Благодаря этому внутри корпуса поместилась наша лучшая система двухкамер с увеличенной матрицей широкоугольной камеры.
    Кроме того, мы освободили место для системы оптической стабилизации изображения сдвигом матрицы. И повысили скорость работы матрицы на сверхширокоугольной камере.
    Новая сверхширокоугольная камера видит больше деталей в тёмных областях снимков. Новая широкоугольная камера улавливает на 47% больше света для болеекачественных фотографий и видео. Новая оптическая стабилизация со сдвигом матрицы обеспечит чёткие кадры даже в неустойчивом положении.
    Режим «Киноэффект» автоматически добавляет великолепные эффекты перемещения фокуса и изменения резкости. Просто начните запись видео. Режим «Киноэффект» будет удерживать фокус на объекте съёмки, создавая красивый эффект размытия вокруг него. Режим «Киноэффект» распознаёт, когда нужно перевести фокус на другого человека или объект, который появился в кадре.
    Теперь ваши видео будут смотреться как настоящее кино.`,
    prise: 67990,
    oldprise: 75990,
    discount: '8%',
    "link img phone": [src = "./images/image-1.png", src = "./images/image-2.png", src = "./images/image-3.png", src = "./images/image-4.png", src = "./images/image-5.png"],
    "color phone": ["Красный", "Розовый", "Зеленый", "Синий", "Белый", "Черный"],
    "memory phone": ["126 ГБ", "256 ГБ", "512 ГБ"],
    delivery: [
        {
            name: 'Самовывоз',
            date: 'четверг, 1 сентября',
            cost: 0,
        },
        {
            name: 'Курьер',
            date: 'четверг, 1 сентября',
            cost: 0,
        }]
};

let review1 = {
    foto: './images/автор1.png',
    name: 'Марк Г.',
    experience: 'менее месяца',
    dignity: `это мой первый айфон после после огромного 
    количества телефонов на андроиде. всё плавно, 
    чётко и красиво. довольно шустрое устройство. 
    камера весьма неплохая, ширик тоже на высоте.`,
    limitations: `к самому устройству мало имеет отношение, 
    но перенос данных с андроида - адская вещь) а если нужно 
    переносить фото с компа, то это только через itunes, 
    который урезает качество фотографий исходное`,
};

let review2 = {
    foto: './images/автор2.png',
    name: 'Валерий Коваленко',
    experience: 'менее месяца',
    dignity: `OLED экран, Дизайн, Система камер, Шустрый А15, 
    Заряд держит долго`,
    limitations: `Плохая ремонтопригодность`,
};