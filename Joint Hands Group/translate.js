function translatePage(language) {
    var translateElement = document.createElement('div');
    translateElement.id = 'google_translate_element';
    document.body.appendChild(translateElement);

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);

    window.googleTranslateElementInit = function() {
        new google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'fr,de,zh-CN,nl,ko',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
    };

    setTimeout(function() {
        var iframe = document.querySelector('iframe');
        if (iframe) {
            var doc = iframe.contentDocument || iframe.contentWindow.document;
            var select = doc.querySelector('select');
            if (select) {
                select.value = language;
                var event = new Event('change');
                select.dispatchEvent(event);
            }
        }
    }, 2000);
}
