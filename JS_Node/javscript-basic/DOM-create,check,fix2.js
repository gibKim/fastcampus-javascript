// // E.dataset

// // 요소의 각 `data-` 속성 값을 얻거나 지정합니다.

// const el = document.querySelector('.child');
// const str = 'Hello world!';
// const obj = { a: 1, b: 2 };

// el.dataset.helloWorld = str; // camelCase는 camel-case로 변환
// el.dataset.object = JSON.stringify(obj); // 문자로 변환해주어야 나중에 값을 가져올 때 parse로 가능

// console.log(el.dataset.helloWorld);
// console.log(el.dataset.object);
// console.log(JSON.parse(el.dataset.object));

// // E.tagName

// // 요소의 태그 이름을 반환합니다.

// const parentEl = document.querySelector('.parent');
// const childEl = document.querySelector('.child');
// const el = document.createElement('span');

// console.log(parentEl.tagName); // div
// console.log(childEl.tagName); // div
// console.log(el.tagName); // span
// console.log(document.body.tagName); // body

// // E.id

// // 요소의 `id` 속성 값을 얻거나 지정합니다.

// const el = document.querySelector('.child');
// console.log(el.id);

// el.id = 'child1';
// console.log(el.id);
// console.log(el);

// // E.className

// // 요소의 `class` 속성 값을 얻거나 지정합니다.

// const el = document.querySelector('.child');
// console.log(el.className);

// el.className += ' child1 active';
// console.log(el.className);
// console.log(el);

// // E.classList

// // 요소의 `class` 속성 값을 제어합니다.

// // - `.add()`: 새로운 값을 추가
// // - `.remove()`: 기존 값을 제거
// // - `.toggle()`: 값을 토글 = 없을 때 추가, 있을 때 제거
// // - `.contains()`: 값을 확인

// const el = document.querySelector('.child');

// el.classList.add('active');
// console.log(el.classList.contains('active')); // true

// el.classList.remove('active');
// console.log(el.classList.contains('active')); // false

// el.addEventListener('click', () => {
//     el.classList.toggle('active');
//     console.log(el.classList.contains('active')); // true
// });

// // E.style

// // 요소의 `style` 속성(인라인 스타일)의 CSS 속성 값을 얻거나 지정합니다.

// const el = document.querySelector('.child');

// // 개별 지정!
// // el.style.width = '100px';
// // el.style.fontSize = '20px';
// // el.style.backgroundColor = 'green';
// // el.style.position = 'absolute';

// // 한 번에 지정!
// Object.assign(el.style, {
//     width: '100px',
//     fontSize: '20px',
//     backgroundColor: 'green',
//     position: 'absolute',
// });

// console.log(el.style);
// console.log(el.style.width); // 100px
// console.log(el.style.fontSize); // 20px
// console.log(el.style.backgroundColor); // green
// console.log(el.style.position); // absolute

// // window.getComputedStyle()

// // 요소에 적용된 스타일 객체를 반환합니다.

// const el = document.querySelector('.child');
// const styles = window.getComputedStyle(el);

// console.log(styles.width);
// console.log(styles.fontSize);
// console.log(styles.backgroundColor);
// console.log(styles.position);
// console.log(styles);

// // E.getAttribute() / E.setAttribute()

// // 요소에서 특정 속성 값을 얻거나 지정합니다.

// const el = document.querySelector('.child');

// el.setAttribute('title', 'Hello World!');
// console.log(el.getAttribute('title'));

// // E.hasAttribute() / E.removeAttribute()

// // 요소에서 특정 속성을 확인하거나 제거합니다.

// const el = document.querySelector('.child');

// console.log(el.hasAttribute('class'));

// el.removeAttribute('class');
// console.log(el.hasAttribute('class'));

// console.log(el);
