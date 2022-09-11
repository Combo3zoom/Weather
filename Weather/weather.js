let open_modal = document.querySelectorAll('.open_modal');
let close_modal = document.getElementById('close_modal');
let modal = document.getElementById('modal');
let body = document.getElementsByTagName('body')[0];
for (let i = 0; i < open_modal.length; i++) {
    open_modal[i].onclick = function() { // відкриття вінка при натисканні на кнопку
        modal.classList.add('modal_vis'); // добавляємо видимість вікна
        modal.classList.remove('bounceOutDown'); // видаляємо ефект закриття
        body.classList.add('body_block'); // забираємо прокрутку
    };
}
close_modal.onclick = function() { // закриття
    modal.classList.add('bounceOutDown'); // добавляємо ефект закриття
    window.setTimeout(function() { // видаляємо вікно через 0.5 сек.
        modal.classList.remove('modal_vis');
        body.classList.remove('body_block'); // повертаємо тіло
    }, 500);
};