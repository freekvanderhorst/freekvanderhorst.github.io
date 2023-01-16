const dropdown = document.getElementsByClassName('dropdown')[0]
const trigger = document.getElementById('menu--trigger')
const closeTrigger = document.getElementById('close--dropdown')


trigger.addEventListener('click', function(){
    dropdown.classList.add('--active')
    trigger.classList.add('--active')
});

closeTrigger.addEventListener('click', function(){
    dropdown.classList.remove('--active')
    trigger.classList.remove('--active')
})