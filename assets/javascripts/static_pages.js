////THE REAL SHIT

(function() {
    var $document = $(document);
    var KEYCODE_ESC = 27;
   
    $document.ready(function() {
        var $lightBox = $('#lightBoxDiv');
        var $lightBoxContent = $('#lightBoxContent');
        var $clickIt = $('#clickIt');
        var $lightBoxClose = $('#lightBoxClose');
        var $stickThis = $('.stick-this');
        
         //lightbox
        function setKeys() {
            $document.keyup(function(e) {
                if (e.keyCode == KEYCODE_ESC) {
                    closeLightBox();
                }
            });
        }
         
         function closeLightBox() {
             $lightBox.fadeOut();
             $lightBoxContent.hide();
         }
        
         $clickIt.click(function(e) {
             $lightBox.fadeIn(function() {
                 $lightBoxContent.show();
        
             });
             /* positionLightBox1(); */
         });
        
         $lightBoxClose.click(function() {
             closeLightBox();
         });
         
        //loading animation
        window.onload = function() {
            $("#loading-spinner").fadeOut();
            $('#loading-screen').delay(2350).fadeOut('slow');
            $('body').delay(2350).css({
                'overflow': 'visible'
            });
            setTimeout(setKeys, 2350);
        }
        
        function removeTop() {
            $stickThis.css({top: ''});
        }
                 
        //FOR INDEX TITLES

        $stickThis.stick_in_parent({
             offset_top: 290 ,recalc_every: 600
         })
         .on("sticky_kit:stick", function(e) {
             $(".title").removeClass("blank-loose");

         })
         .on("sticky_kit:unstick", function(e) {
             removeTop();
             $(".title").addClass("blank-loose");
            
         });
         
         
         //scrolltop change image on HOMEPAGE
         
         $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            
            if (scroll < 500){
                $(".image-box").removeClass("im-sum")
            }
            if (scroll >= 500) {
                $(".image-box").addClass("im-sum")
            } 
            if (scroll >= 1000) {
                $(".image-box").removeClass("im-sum")
                $(".image-box").addClass("im-mir")
            } 
            if (scroll >= 1500) {
                $(".image-box").addClass("im-sh1")
                $(".image-box").removeClass("im-mir")
            } 
            if (scroll >= 2000) {
                $(".image-box").addClass("im-sh2")
                $(".image-box").removeClass("im-sh1")
            } 
            if (scroll >= 2500) {
                $(".image-box").addClass("im-fwd")
                $(".image-box").removeClass("im-sh2")
            } 
            if (scroll >= 3000) {
                $(".image-box").addClass("im-alt")
                $(".image-box").removeClass("im-fwd")
            } 
             if (scroll >= 3500) {
                $(".image-box").addClass("im-oc")
                $(".image-box").removeClass("im-alt")
            } 
        });
        

        //FOR IMAGES IN SAME DIV
        // $stickThis.stick_in_parent({
        //  offset_top: 250
        // })
        // .on("sticky_kit:stick", function(e) {
        //     $(".blank").removeClass("blank-loose");
        // })
        // .on("sticky_kit:unstick", function(e) {
        //     removeTop();
        //     $(".blank").addClass("blank-loose");
        // });
    
     });
})();