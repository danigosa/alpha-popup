;(function($) {

    var FooterPopup = {

        options: {},

        defaults: {
            position: "head",
            bgcolor: "#ccc",
            color: "#333",
            loadStyles: true,
            message: "Awesome Message!",
            fontFamily: "Helvetica"
        },

        initialize: function() {

            var self = this;

            /** Get URL arguments */
            this.getArguments();

            $(document).delegate('.FooterPopupClose', 'click', function() {
                self.closeMessage();
                return false;
            });

            /** Show message */
            this.showMessage();

        },

        getArguments: function() {

            /** Get the argumenets from URL parameters */
            var url = $('#FooterPopup').attr('src').split('?')[1],
                options = {};

            //Add custom options
            if($.fpOptions !== undefined){
                options = $.fpOptions;
            }

            /** Add custom parameters if specified */
            if ( url ) {
                var params = url.split('&');

                /** Split keys and values into an object */
                for ( var x in params ) {
                    var parts = params[x].split('=');
                    options[parts[0]] = parts[1];
                }
            }

            /** Add params to options */
            this.options = $.extend({}, this.defaults, options);

        },

        closeMessage: function() {

            /** Remove message if exists and store hidden state */
            if ( this.$message ) {
                this.$message.slideUp({ duration: 400, easing: 'swing', complete: function() {
                    $(this).remove();
                }});
            }
            if ( this.$pusher ) {
                this.$pusher.slideUp({ duration: 400, easing: 'swing', complete: function() {
                    $(this).remove();
                }});
            }

        },

        showMessage: function() {

            /** Append styling */
            if ( this.options.loadStyles !== "false" )
                this.$styling = $('<style type="text/css">#pusher {height: 50px;width:100%} ' +
                    '.FooterPopup { z-index: 10000 !important;font-size: 15px; position: fixed; left: 10px; ' +
                    'border-radius: 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px; -o-border-radius: 5px; ' +
                    'background-color: '+ this.options.bgcolor +'; color: '+ this.options.color +'; } ' +
                    '.FooterPopuphead { top: 0; } .FooterPopupfooter { bottom: 10px; } .FooterPopup ' +
                    '.container {text-align: left;padding: 10px} ' +
                    '.FooterPopup p {position: relative; padding: 0; margin: 0 0 0 40px; font-family: ' + this.options.fontFamily + ' } ' +
                    '.FooterPopup a, p a {color: '+ this.options.color +' ; text-decoration: underline; font-weight: bold } ' +
                    '.FooterPopupClose { background: url("https://s3.amazonaws.com/wsscripts/close.png") no-repeat top center;' +
                    ' background-size: 30px;opacity:0.4;float: left; width: 30px;height: 40px } ' +
                    '.FooterPopupClose:hover {opacity: 1} @media screen and (max-width: 1000px) { .FooterPopup ' +
                    '.container {width: 100%} } </style>').appendTo('head');

            /** Append message to body */
            this.$message = $('<div id="FooterPopup" class="FooterPopup FooterPopup'+ this.options.position +
                '" style="display: none;"><div class="container"><a href="#" class="FooterPopupClose"></a><p>'+
                this.options.message + '&nbsp;<a href="' + this.options.url + '" target="_blank"> '+ this.options.url_text +' </a>' + ' </p></div></div>').appendTo('body').slideDown({ duration: 400, easing: 'swing' });
            // this.$pusher = $('<div id="pusher">&nbsp</div>').prependTo('body').slideDown({ duration: 400, easing: 'swing' });

        }

    };

    $(document).ready(function() {
        FooterPopup.initialize();
    });

})(jQuery);
