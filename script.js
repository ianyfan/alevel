"use strict";
(function() {
    function init() {
/*
        var section = document.getElementsByTagName('section')[0];
        document.getElementsByTagName('ul')[0].onclick = function(event) {
            sessionStorage.setItem(this.parentNode.className, JSON.stringify({
                html: section.innerHTML,
                scroll: window.scrollY
            }));
            var subject = event.target.pathname.split('/')[2];
            var subjectData = JSON.parse(sessionStorage.getItem(subject));
            if (subjectData) {
                event.preventDefault();
                this.parentNode.className = event.target.pathname.split('/')[2];
                section.innerHTML = subjectData.html;
                window.scroll(0, subjectData.scroll);
            }
        }
*/
    };

    if (document.readyState == 'loading') {
        addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
