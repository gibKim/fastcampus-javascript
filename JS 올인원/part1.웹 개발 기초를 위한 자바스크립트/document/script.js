let val;

val = document;

val = document.baseURI; // 웹 페이지의 절대 URI 반환
val = document.head; // <head> 태그 반환
val = document.body; // <body> 태그 반환

val = document.forms; // <form> 태그 반환
val = document.forms[0].id; // <form> 태그 반환
val = document.forms[0].classList;
val = document.forms[0].classList;
val = document.forms[0].className;

val = document.scripts[1].getAttribute('src');

console.log(val);

/* document 객체의 메서드들을 사용하면 다양한 방법으로 웹 페이지 내의 태그들에 접근할 수 있다. */

const headerContainer = document.getElementById('header-container');
// headerContainer.style.display = 'none';

// console.log(headerContainer);

headerContainer.textContent = 'Text Content';
headerContainer.innerText = 'Inner Text';
headerContainer.innerHTML = '<span>inner HTML</span>';

console.log(document.querySelector('#form-first-div'));
console.log(document.querySelector('.form-container'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'blue';
document.querySelector('ul li').style.color = 'red';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'orange';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = 'gray';
document.querySelector('li:nth-child(even)').style.background = 'light gray';

const items = document.getElementsByClassName('list-group-item');
console.log(items);

items[0].style.color = 'blue';
items[3].textContent = 'Hi';

let lists = document.getElementsByTagName('li');
console.log(lists);

// 오류(error)
// lists.forEach((list) => {
//     console.log(list);
// });

lists = Array.from(lists);
console.log(lists);

lists.forEach((list, index) => {
    list.textContent = `${index}. List`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');

liOdd.forEach((li) => {
    li.style.background = 'gray';
});
