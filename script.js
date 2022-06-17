const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const body = document.querySelector('body');

colors = [
    'Red',
    'yellow',
    'green',
    'lime',
    'blue',
    'pink',
    'purple',
    'grey',
    'orange',
    'beige',
    'brown',
    'peach',
    'teal',
    'navy'
]

btn.addEventListener('click', function () {
    let randomNumber = Math.floor(Math.random() * colors.length)
    let secilenRenk = colors[randomNumber]
    body.style.backgroundColor = secilenRenk;
    content.innerHTML = secilenRenk;
    content.style.color = secilenRenk;
});