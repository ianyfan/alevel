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

        var shadow = document.getElementById('shadow');
        var navState = {open: false, scrolling: false, moving: false};
        var nav = document.getElementsByTagName('nav')[0];
        var firstTouch, lastTouch, thisTouch;
        window.ontouchstart = function(e) {
            nav.style.transition = shadow.style.transition = '';
            firstTouch = e.touches[0];
        }
        window.ontouchmove = function(e) {
            if (viewingImage || navState.scrolling) return;

            lastTouch = thisTouch;
            thisTouch = e.changedTouches[0];
            var displacementX = thisTouch.clientX - firstTouch.clientX;
            var displacementY = thisTouch.clientY - firstTouch.clientY;
            var x = displacementX/window.innerWidth;
            if (!navState.moving) {
                navState.moving = true;
                navState.scrolling = Math.abs(displacementY) > Math.abs(displacementX);
            } else if (navState.open) {
                if (displacementX > 0) {
                    firstTouch = thisTouch;
                } else {
                    shadow.style.opacity = .9 + x;
                    nav.style.left = 100*x + '%';
                }
            } else {
                if (displacementX < 0) {
                    firstTouch = thisTouch;
                } else {
                    shadow.style.opacity = x;
                    nav.style.left = (100*x - 90) + '%';
                }
            }
        }
        window.ontouchend = function(e) {
            if (viewingImage) return window.onclick(e);

            navState.moving = false;
            if (navState.scrolling) {
                navState.scrolling = false;
            } else {
                var velocity = thisTouch.clientX - lastTouch.clientX;
                var x = nav.offsetLeft/window.innerWidth;
                if (Math.abs(thisTouch.clientX - firstTouch.clientX) > 10) {
                    if (x < -.5) {
                        navState.open = velocity > 1;
                    } else if (x > -.4) {
                        navState.open = velocity > -1;
                    } else if (thisTouch.clientX != lastTouch.clientX) {
                        navState.open = velocity > 0;
                    }
                }
                toggleNav();
            }
        }
        function toggleNav() {
            var time = nav.offsetLeft/window.innerWidth;
            time = .3*(navState.open ? -time : .9 + time);

            nav.style.transition = 'left ' + time + 's';
            nav.style.left = navState.open ? '0' : '';
            shadow.style.transition = 'opacity ' + time + 's';
            shadow.style.opacity = navState.open ? '.9' : '';
        }
        document.getElementsByTagName('button')[0].onmousedown = function() {
            navState.open = !navState.open;
            toggleNav();
        }
        nav.onclick = function(e) {
            if (e.target.tagName == 'A') {
                navState.open = false;
                toggleNav();
            }
        }

        var navDisabled = false;
        var section = document.getElementsByTagName('section')[0];
        var el, start, minimum;
        section.ontouchstart = function(e) {
            el = e.target;
            while (el.tagName != 'TABLE' &&
                    el.className != 'MathJax_MathContainer' && el.className != 'mjx-chtml MathJax_CHTML') {
                el = el.parentNode;
                if (el.tagName == 'SECTION') return;
            }
            var container = el.parentNode;
            var isTable = el.tagName == 'TABLE';
            if (!isTable) container = container.parentNode;
            if (container.offsetWidth > el.offsetWidth) return;
            start = parseInt(el.style.marginLeft) || 0;
            minimum = container.offsetWidth - el.offsetWidth - 16*isTable;
            navDisabled = true;
            e.stopPropagation();

            firstTouch = e.touches[0];
        }
        section.ontouchmove = function(e) {
            if (!navDisabled) return;
            e.stopPropagation();

            thisTouch = e.changedTouches[0];
            var displacementX = thisTouch.clientX - firstTouch.clientX;
            var margin = start + displacementX;
            if (margin > 0) {
                start = 0;
            } else if (margin < minimum) {
                start = minimum;
            } else {
                el.style.marginLeft = margin + 'px';
                return;
            }
            firstTouch = thisTouch;
            el.style.marginLeft = start + 'px';
        }

        section.ontouchend = function(e) {
            if (!navDisabled) return;
            e.stopPropagation();
            navDisabled = false;

            section.onclick(e);
        }

        var viewingImage = false;
        var img;
        var placeholder = document.createElement('div');
        section.onclick = function(e) {
            if (viewingImage) return;

            if ((img = e.target).tagName != 'IMG') return;
            e.stopPropagation();
            viewingImage = true;

            placeholder.style.height = img.offsetHeight + 'px';
            img.parentNode.insertBefore(placeholder, img);
            img.className = 'viewing';
            shadow.style.opacity = '.9';
        }
        window.onclick = function(e) {
            if (!viewingImage || e.target == img) {
                var el = e.target;

                while (el != document.body) {
                    if (el == nav || el.tagName == 'BUTTON') return;
                    el = el.parentNode;
                }
                navState.open = false;
                toggleNav();
            }

            e.stopPropagation();
            img.parentNode.removeChild(placeholder);
            img.className = '';
            shadow.style.opacity = '';
            viewingImage = false;
        }
    };

    if (document.readyState == 'loading') {
        addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
