var slideIndex= 1;
    // showDivs(slideIndex);
    var itirator=1;

    function autoSlide() {
        var a = setInterval(plusDivs, 5000);
    }

   function plusDivs(){
    slideIndex+=itirator;
    showDivs(slideIndex);
    }
    function showDivs(b){
        var i=0;
        var x= document.getElementsByClassName("mySlides");
        if(b>x.length){slideIndex = 1}
        if(b<1){slideIndex = x.length}
        while(i<x.length){
            x[i].style.display = "none";
            i++;
    }
        x[slideIndex-1].style.display= "block";
}

