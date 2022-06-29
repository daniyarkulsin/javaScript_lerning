'use strict';
/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */



const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


//Урок 28.Получение элементов со страницы
let a = document.getElementById();// получение элемента по ID, по уникальному индификатору

const b = document.getElementsByTagName('button');//получение псевдомасива, HTML колекция(нейзменем)
const c = document.getElementsByTagName('button')[1];//получение 2й кнопки по списку(изменяемый), HTML колекция(нейзм.)
const d = document.getElementsByClassName('add');//получение HTML колекцию по тегам, HTML колекция(нейзменем)
console.log(d[2]);// для использования элементов необходимо использовать индексы





const e = document.querySelectorAll('.heart');//обязательно точку!!!

e.forEach(item => {  //item - это каждый элемент который находиться в псевдомасиве!!!
    console.log(item);// метод forEach выводит поочередно в консоль
});

const oneHeart = document.querySelector('.heart');//позволяет получить только один(первый) элемент со страницы!!!



//Урок 29.Действия с элементами страницы

//ПРАВИЛА!!!
    //кемлкейс для изменения селекторов для JS
    //инлайн стили пребивают все остальные, для того что бы работал JS
    //псевдомассивы ничего не знают о стилях, неизменяемы!!!   
    //нужно четко указать элемент на котором это все будет происходить!




//ПРИМЕРЫ:

const box = document.getElementById('box'),// получение элемента по ID, по уникальному индификатору
      btns = document.getElementsByTagName('button'),//получение псевдомасива, HTML колекция(нейзменем)
      circles = document.getElementsByClassName('cercle'),//получение HTML колекцию по тегам, HTML колекция(нейзменем)
      hearts = document.querySelectorAll('.heart'),//обязательно точку!!!
      twoHeart = document.querySelectorAll('.heart'),//обязательно точку!!!
      add = document.querySelectorAll('.add'),
      promoAdv = document.querySelector('.promo__adv');

box.style.backgroundColor = 'blue';//в JS свойства записываються в КамелКейс!!!
box.style.width = '500px';//четко указывать 'px' и т.д.
box.style.cssText = 'background-color: blue; width: 500px;';//формирует инлайн стили
btns[1].style.borderRadius = '100px';//делаеть 2й кружок овальным


for (let i = 0; i < hearts.length; i++) {     //простой цикл который перебирает элементы и что то делает с ними!
    hearts[i].style.backgroundColor = 'blue';
}

hearts.forEach(item => {                //работает также как и пример выше(перебирает элемен. и что то дел.)
    item.style.backgroundColor = 'blue';
});


const div = document.createElement('div');//создает элемен, но он существует только внутри JS!!!на странице не появиться
const text = document.createTextNode('Тут был я!');//текстовый узел(элемент без обвертки тега) ЭЛЕМЕНТЫ = НОДЫ


div.classList.add('div');//создает элемент только внутри скрипта(добавление, удаление, преключение и т.д.)

promoAdv.append(div);//вставляет элемент в конец родителя
promoAdv.prepend(div);//вставляет элемент в начало родителя

hearts[1].after(div);//вставляет после указанного элемента
hearts[1].before(div);//вставляет перед указанным элементом
hearts[1].insertAfter(div, hearts[0]);//вставляет после указанного элемента (устаревшый!!!)
hearts[1].insertBefore(div, hearts[0]);//вставляет перед указанным элементом (устаревшый!!!)

circles[1].remove();//удаляет эелемент
box.removeChild(hearts[1]);//удаляет эелемент (устаревшый!!!)

hearts[1].replaceWith(circles[0]);//заменяет элемент на другой указанный в кв.скобках
box.replaceChild(circles[0], hearts[0]);//заменяет элемент на другой указанный в кв.скобках (устаревшый!!!)


div.innerHTML = "<h1>Hello world</h1>";//изменяет, добавляет текст и элементы на страницу
div.textContent = "Hello";//добавляет только текст

div.insertAdjacentHTML("beforebegin", '<h2>hello</h2>');//изменяет, добавляет текст и элементы на страницу


//Урок 31. События и их обработчики

const btn = document.querySelectorAll('button');


btn.onclick = function() {
   alert('Дарова');
};//Устаревший код!!!

btn.addEventListener('click', () => {
   alert('Дарова');
});//новый код!!


btn.addEventListener('click', (e) => {
   console.log(e.target);
   e.target.remove();
});//новый код!!

let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    i++;
    if (i == 1) {
        btn.removeEventListener('click', deleteElement);
    }
};

btn.forEach(btn => {
     btn.addEventListener('click', deleteElement);
});


const link = document.querySelector('.link');

link.addEventListener('click', event => {
    event.preventDefault();

    console.log(event.target);
});


//Урок 37. ClassList и делегирование событий

console.log(btns[1].classList.add('red'));// Добавляет класс 'red', можно добавлять несколько классов через запятую!
console.log(btns[0].classList.remove('blue'));// Удаляет класс 'blue', так же как и add!
console.log(btns[0].classList.toggle('blue'));// Добавляет или удаляет класс, в зависимости был он или нет!


if (btns[1].classList.contains('red')) { //проверяет есть ли класс, если есть то выполняет какое либо действие!!
    console.log('red');
}

btns[0].addEventListener('click', () => {      //создаем условие при котором при нажатий на первую кнопку
    if (!btns[1].classList.contains('red')) {  //вторая становиться красной или наоборот принимает другой цвет
        btns[1].classList.add('red');          //если до этого была красной!!!(похоже на создание бургерменю)
    } else {
        btns[1].classList.remove('red');
    }

    btns[1].classList.toggle('red');//то же самое что было выше!!!но используеться редко!!
});

console.log(btns[0].className);//Устаревший способ получения класса, не использовать!!

                                            //ДЕЛЕГИРОВАНИЕ СОБЫТИ

const wrapper = document.querySelectorAll('button');

wrapper.addEventListener('click', (event) => {
    //console.log(event.target);
    if (event.target && event.target.tagName == "BUTTON") {// с делегированием событи работают и старые и 
        console.log('Hello');                              // новые(динамический добавленные элементы)
    }
});

wrapper.addEventListener('click', (event) => {
    //console.log(event.target);
    if (event.target && event.target.matches("button.red")) {//проверяет на определенные совпадения
        console.log('Hello');                                //более точное делегирование 
    }
});

btns.forEach(btn => {
    btn.addEventListener('click', () => {  //работает только с элементами которые уже были на странице
        console.log('Hello');              //(не работает с динамическими элементами)
    });
});

const btnn = document.createElement('button');//  создали динамический элемент!!
btnn.classList.add('red');//   назначили ему класс!!
wrapper.append(btnn);//   добавили в на страницу!!  


//Урок 45. Функций-конструктор(стандарт ES5)

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`);
};

const ivan = new User('Ivan', 27);
const manat = new User('Manat', 21);

ivan.hello();
manat.exit();

// 46. Контекст вызова. This

function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}
showThis(4, 9);


const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
    }
};
obj.sum();

function User2(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log("Hello " + this.name);
    };
}
let don = new User2('Daniyar', 23);
console.log(don.hello());


function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

sayName.call(user, 'Smith');
sayName.aplly(user, ['Smith']);

function count(num) {
    return this + num;
}

const double = count.bind('Ты даун ');
console.log(double('Дончик'));
console.log(double('Нуся'));


//1) Обычная функция: this = window, но если включен use strict - undefined 
//2) Контекст у методов объекта - сам объект
//3) this в конструкторах и классах - это новый экземпляр объекта
//4) Ручная привязка this: call, apply, bind


//пример
btn.addEventListener('click', function() {
    this.style.backgroundColor = 'red';
});

const obj2 = {
    num: 5,
    sayNamber: function() {
        const say = () => {
            console.log(this);
        };

        say();
    }
};

obj2.sayNamber();


const double2 = (a, b) => a * b; //если функция помещаеться в одну строчук можно записать ее так!!!

console.log(double2(5, 5));

// setTimeout позволяет вызвать функцию один раз через определённый интервал времени.
// setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени

// Урок 55.Promise

/// Методы Promise: .then .catch .finally
 
console.log('Запрос данных...');

const reg = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'TV',
            price: '1000тг'
        };

        resolve(product);
    }, 2000);
});

reg.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
        }, 2000);
    });
}).then(data => {
    data.modify = "true";
    return data;
}).then(data => {
    console.log(data);
}).catch(() => {
    console.log('Произошла ошибка!');
}).finally(() => {
    console.log('Finally');
});


// Урок 57. Методы перебора массивов!

// filter - возвращает новый массив

const names = ['Ivan', 'Ann', 'Daniyar', 'Naruto'];

const shortNames = names.filter((name) => {
    return name.length < 5;
});


console.log(shortNames);

// map

const answers = ['IvAn', 'NaRuRo', 'TaTaKae'];

const result = answers.map(item => item.toLowerCase());

console.log(result);


// every/some

const some = [4,'aass', 'shfkja'];

console.log(some.some(item => typeof(item) === 'number'));  //true

console.log(some.every(item => typeof(item) === 'number')); //false


// reduce

const arr = [4, 5, 3, 2, 6, 8];
                    // 0    4
                    // 4    5
                    // 9    3
                    // 12   2
                    // 14   6
                    // 20   8
                    // 28
const res = arr.reduce((sum, current) => sum + current, 2); // можно добовлять начальное значение!!!

console.log(res);



const arr2 = ['apple', 'pear', 'plum'];

const res2 = arr2.reduce((sum, current) => `${sum}, ${current}`);

console.log(res2);



// Урок 58. Получение данных с сервера. Async/Await (ES8)


const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await res.json();
};



