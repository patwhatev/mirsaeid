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
        var projects = {
            "sumzine": {
                "text": "</br><p>Sumzine is a biannual slow-fashion zine based out of NYC. We carry the torch of Dame Westwood, \"Buy less, choose well, make it last!\" </br></br> Not your typical sustainability-loving, fashion editorial magazine. We wanted to put aside that \"go green hippiness\" and bring in the cool, New York City downtown chic vibes. </br></br>The design of Sumzine is vibrant and bold, with a mixture of earthy feels. Since Sumzine's theme changes with every issue, we wanted to keep the branding and design simple, clean, constant and versatile. </br></br>Editor in Chief: Jamie Ortega </br></br>Design Direction: Nikki Mirsaeid </br></br>Collaborators: Features include interviews with Brian Procell, Osei-Duro, #jacques-Elliott, and XXBC. Essays by Rachel Hodin and Jamie Ortega. Photography from Adam Katz Sinding, Nekole Kemelle, Shanita Sims, Koa Pennock, Ruvan Wijesooriya, and James Parker. Illustrations by Jonah Leslie. </br></br>Link: sumzine.com </br></br></p><span id=\"lightBoxClose\" class=\"footer-button\"></span>",
                "images": ["assets/stylesheets/content/sum/img/2_SUMZINE.jpg", "assets/stylesheets/content/sum/img/3_SUMZINE.jpg", "assets/stylesheets/content/sum/img/4_SUMZINE.jpg" ,        "assets/stylesheets/content/sum/img/4_SUMZINE.jpg", "assets/stylesheets/content/sum/img/5_SUMZINE.jpg"] 
            },
            "mirett" : {
                "text": "</br>Mir Ett is a handcrafted accessories collection by the NYC based design duo Hannah Jewett and Nikki Mirsaeid. Residing in the intersection between art and function, Mirett finds luxury through the elevation of humble materials</br></br>Design Direction | Nikki Mirsaeid & Hannah Jewett</br></br>Format | Website, Collection, Editorial</br></br>Collaborator | Photography by Christine Hanh</br></br>Link | mirett.com </br></br>",
                "images": [ "assets/stylesheets/content/mir/img/2_MIRETT.jpg", "assets/stylesheets/content/mir/img/3_MIRETT.jpg", "assets/stylesheets/content/mir/img/4_MIRETT.jpg", "assets/stylesheets/content/mir/img/5_MIRETT.jpg", "assets/stylesheets/content/mir/img/6_MIRETT.jpg", "assets/stylesheets/content/mir/img/7_MIRETT.jpg", "assets/stylesheets/content/mir/img/8_MIRETT.jpg"] 
            },
            "sher1" : {
                    "text": "</br>S Magazine is an image based publication realized by Sherwood Gallery. For each exhibition the artists are asked to produce new work to fit the form of a 8.5 x 11” magazine. </br></br></br>Design Direction: Nikki Mirsaeid </br></br></br>Collaborators: Luca Antonucci, Tyrone Davies, Jenny Odell, Cal Volner-Dison </br></br>",
                    "images": [ "assets/stylesheets/content/sher/sh-1/img/1_SHERWOOD.jpg", "assets/stylesheets/content/sher/sh-1/img/2_SHERWOOD.jpg", "assets/stylesheets/content/sher/sh-1/img/3_SHERWOOD.jpg", "assets/stylesheets/content/sher/sh-1/img/5_SHERWOOD.jpg", "assets/stylesheets/content/sher/sh-1/img/6_SHERWOOD.jpg", "assets/stylesheets/content/sher/sh-1/img/8_SHERWOOD.jpg", "assets/stylesheets/content/sher/sh-1/img/9_SHERWOOD.jpg", "assets/stylesheets/content/sher/sh-1/img/10_SHERWOOD.jpg", "assets/stylesheets/content/sher/sh-1/img/11_SHERWOOD.jpg"] 
            },
            "ocblog" : {
                    "text": "</br>Contribute to the Opening Ceremony Blog. Works include:</br></br></br></br>“So Trendy! Neon and Mirrors for Selfies,” Art Basel, Winter 2014 </br></br></br></br>“Walking the Line Between High & Low, Culture and Commerce.” Interview with Cyril Duval, Fall 2014“Boy child at Art Basel Miami,” Winter 2013</br></br>Link: Openingceremony.us</br></br>",
                    "images": [ "assets/stylesheets/content/ocb/img/OCBLOG_1.jpg", "assets/stylesheets/content/ocb/img/OCBLOG_2.jpg", "assets/stylesheets/content/ocb/img/OCBLOG_3.jpg"] 
            }
        };

        function render(project) { // a key
            $('.footer-test').html(project.text) //put the response on the dom

            var imageHtml = '';
            project.images.forEach(function(img) {
                imageHtml += '<img src="' + img + '" />'
                console.log(img);
                // put the image wherever
            });
            $('#imageZone').html(imageHtml); //put the response on the dom

        }

        //to swap out an image source, use
        function swapSrc(img, src) {
            $(img).attr('src', src);
        }
        

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
            if ($('#image-box').css('background').indexOf('url') < 0) return;
             $lightBox.fadeIn(function() {
                $('body').addClass("body-fixed")
                $('#lightBoxContent').addClass("lb-free")
                 $lightBoxContent.show();
                 render(projects[curentProject]);
                    $('div').css("pointer-events", "auto");

        
             });
             /* positionLightBox1(); */
         });
        
         $lightBoxClose.click(function() {
             closeLightBox();
             $('body').removeClass("body-fixed")
             $('div').css("pointer-events", "auto");
             $('#image-box').css("display", "block");

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


        //LIGHTBOX ONLOAD
        $("#image-box").click(function() {
            $("#loading-spinner").fadeOut();
            $('#loading-screen').delay(2350).fadeOut('slow');
            $('body').delay(2350).css({
                'overflow': 'visible'
            });
            setTimeout(setKeys, 2350);
        });
        
        function removeTop() {
            $stickThis.css({top: ''});
        }
                 
        //FOR INDEX TITLES

        $stickThis.stick_in_parent({
             offset_top: 290 ,recalc_every: 100
         })
         .on("sticky_kit:stick", function(e) {
             $(".title").removeClass("blank-loose");

         })
         .on("sticky_kit:unstick", function(e) {
             removeTop();
             $(".title").addClass("blank-loose");
         });
         
         
         //scrolltop change image on HOMEPAGE

        var curentProject;
         var lastScrollTop = 0;
         $(window).scroll(function(event) {    
            var scroll = $(window).scrollTop();

                $("div [style*='baseline']").hide();
            
                    if (scroll < 250){
                        $("#image-box").removeClass()
                        $('a').removeAttr('clickIt')
                    }
                    if (scroll >= 250) {
                        $("#image-box").removeClass()
                        $("#image-box").addClass("im-sum")
                        curentProject = 'sumzine';
                    } 
                    if (scroll >= 750) {
                        $("#image-box").removeClass()
                        $("#image-box").addClass("im-mir")
                        curentProject = 'mirett';
                    } 
                    if (scroll >= 1250) {
                        $("#image-box").removeClass()
                        $("#image-box").addClass("im-sh1")
                        curentProject = 'sher1';
                    } 
                    if (scroll >= 1750) {
                        $("#image-box").removeClass()
                        $("#image-box").addClass("im-oc") //THIS IS TEMPORARY, SWAP WITH IM-SH2 WHEN READY
                        curentProject = 'ocblog';
                    } 
                    if (scroll >= 2250) {
                        $(".im-oc").removeClass()
                       // $("#image-box").addClass("im-fwd")
                    } 
                        //COMMENTED OUT TO AVOID BROKEN IMAGE IN FOOTER 
                        /*
                     if (scroll >= 2750) {
                        $("#image-box").removeClass()
                        $("#image-box").addClass("im-alt")
                    } 
                    if (scroll >= 3250) {
                       $("#image-box").removeClass()
                       $("#image-box").addClass("im-oc")
                       curentProject = 'ocblog';
                    } 
                    */
                
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