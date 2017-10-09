$(document).ready(function() {
    $(".xxx").on("click").click(function(){
        var pai = $(this).closest('.papito');
        pai.find('span.xx').toggleClass('active');
    });

    $(".bbb").on("click").click(function(){
        var pai2 = $(this).closest('.papito2');
        pai2.find('span.bbl').toggleClass('active');
        pai2.find('span.bbr').toggleClass('active');
    });
     $('.owl-carousel').owlCarousel({
                loop:true,
                nav:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            })
            var owl = $('.owl-carousel');
            owl.owlCarousel();
            // Go to the next item
            $('.control-btn.right').click(function() {
                owl.trigger('next.owl.carousel');
            })
            $('.control-btn.left').click(function() {
                owl.trigger('prev.owl.carousel');
            })

    $('#settings').on('click', function(){
        $('.left-side').toggleClass('active');
    });
});