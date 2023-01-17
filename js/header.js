const headerColor = document.querySelectorAll('[data-header]');
const header = document.getElementById('main-header');
const headerHeight = header.offsetHeight;


headerColor.forEach(function(e){
//console.log(document.documentElement.scrollTop, (window.pageYOffset + e.getBoundingClientRect().top))

    const itemPosTop = (window.pageYOffset + e.getBoundingClientRect().top) - 50;
    const itemPosBottom = (itemPosTop + e.clientHeight)

    document.addEventListener('scroll', function(){
        let scrolled = document.documentElement.scrollTop;
        if( scrolled >= itemPosTop && scrolled <= itemPosBottom){

            if(e.dataset.header === 'black'){
                document.getElementsByTagName('body')[0].classList.add('--darkHeader')
            }else{
                document.getElementsByTagName('body')[0].classList.remove('--darkHeader')
            }
        }

    })
})




