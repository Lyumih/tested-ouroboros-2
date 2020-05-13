
/* setInterval animate */

        $(function() {
            setInterval(function() {
                $('.pulse-1').animate({ scale: '1'},2000).fadeOut(500);
                $('.pulse-1').fadeIn(0).animate({ scale: '0.5'},0).delay(0);
                $('.pulse-2').animate({ scale: '1.05'},2000).fadeOut(500);
                $('.pulse-2').fadeIn(0).animate({ scale: '0.5'},0).delay(0);
            });
        });

/* lightGallery */

        $(function() {
            $('.lightGallery').lightGallery({
                thumbnail:false,
                loop:true
            });
        });

/* thanks pop-up */

        $(function() {
            $('.wrapper, .close').click(function(){
                $('.wrapper, .thnx').fadeOut(300);
            });
        });

/* form validate */

        $(function() {
            $('#form').validate(
                {
                    rules: {
                        "email": {
                            required: true,
                            email: true,
                            maxlength: 100
                        }
                    },
                    messages: {
                        "email": {
                            required: "",
                            email: ""
                        }
                    }
                });
        });

/* thanks */

        $(function() {
            $('#form').ajaxForm(function() {
                $('.wrapper, .thnx').fadeIn(300);
                $('#form')[0].reset();
            });
        });

/* end */