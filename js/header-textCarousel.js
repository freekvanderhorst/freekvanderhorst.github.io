const scrollContainer = document.getElementsByClassName('banner-content--scroll');

if(scrollContainer.length){
    const scrollableChildren = scrollContainer[0].children;
    const childrenLenght = scrollableChildren.length;

    let value = 160;
    let timing = 10000;
    function Test() {
        if(value >= scrollContainer[0].clientHeight - 160){

            scrollContainer[0].style.transition = 'none';
            scrollContainer[0].style.transform = 'translateY(0)';

            value = 160;

        }else{

            scrollContainer[0].style.transition = 'all '+1000+'ms';
            scrollContainer[0].style.transform = 'translateY(-'+ value +'px)';

            value = value + 160;
        }

    }

    if(childrenLenght >=2 ){

        //clone first 2 items to make infinite scroll.
        const item1 = scrollableChildren[0].cloneNode(true)
        const item2 = scrollableChildren[1].cloneNode(true)

        scrollContainer[0].append(item1, item2)



        // setInterval(Test(scrollContainer[0]), 500);
        setInterval(Test, timing)
    }

}



// HTML
{/*
<div class="banner-content">
<div class="banner-content--container">
    <div class="banner-content--scroll">
        <h1>Jullie werk is cruciaal voor duizenden mensen</h1>
        <h1>Wij maken het makkelijker met digitale platformen</h1>
    </div>
</div>
</div>
*/}