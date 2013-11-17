FooterPopup
==========

Footer Popup is a simple open source banner for your website to show off your fresh news.

With one line of code you can quickly and easily add it to your site. If you're interested, you can easily customize the details by changing the url.

Also, feel free to use your own version of footer-popup.js


# Set up

1. Ensure you have jQuery loaded.
2. Add `<script type="text/javascript" id="FooterPopup" src="https://s3.amazonaws.com/wsscripts/alpha-popup.js?bgcolor=#034760&color=#fff&position=footer" async="true"></script>` to the head or footer of your page.
3. Done!

# Custom Options

Add this variable in head (or the bottom of your body tag) like this:

.. code-block:: html
    <script>
        //Custom Options (added to url options)
        $.fpOptions = {
            url: "http://www.infantium.com",
            url_text: "Show Me More",
            message: "This is a customized message!"
        };
    </script>

# Example

![Footer Popup Example](https://infantiumdev.blob.core.windows.net/static/footer-popup.png)


