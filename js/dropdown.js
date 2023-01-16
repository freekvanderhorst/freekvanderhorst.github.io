const dropdown = document.getElementsByClassName('dropdown')[0];
const trigger = document.getElementById('menu--trigger');
const closeTrigger = document.getElementById('close--dropdown');
const body = document.getElementsByTagName('body')[0]

trigger.addEventListener('click', function(){
    dropdown.classList.add('--active');
    trigger.classList.add('--active');
    body.classList.add('--menu-open');
});

closeTrigger.addEventListener('click', function(){
    dropdown.classList.remove('--active')
    trigger.classList.remove('--active')
    body.classList.remove('--menu-open');
});