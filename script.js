// let button = document.getElementById('btn');
// let searchEle = document.getElementById('search');
// button.addEventListener('click', () => {
//     if( searchEle.classList.contains('active')) {
//         searchEle.classList.remove('active');
//     }
//     else searchEle.classList.add('active');
// });

let button = document.querySelector('.btn');
let searchEle = document.querySelector('.search'); 
button.addEventListener('click', () => { 
    if (searchEle.classList.contains('active')) { 
        searchEle.classList.remove('active');
    } else {
        searchEle.classList.add('active');
    }
});
