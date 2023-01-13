const heading = document.getElementById('banner-content--heading-secondary');
const headingTop = (window.pageYOffset + heading.getBoundingClientRect().top) - (window.outerHeight / 2);

console.log(headingTop)

document.addEventListener('scroll', function(){

if(document.documentElement.scrollTop >= headingTop){
    heading.classList.add('active');
}else{
    heading.classList.remove('active');
}

})