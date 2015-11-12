/**
 * Mithril HTML Slideshow
 *
 */

 /**
  * Namespace
  */
var app = {};



/**
 * Prepare all code blocks for syntax highlightning.
 */
app.initCodeBlocks = function() {
    var elements = document.querySelectorAll('[data-role="code"]');

    for (var i = 0; i < elements.length; ++i) {
      var item = elements[i],
          language = item.dataset.language;

      hljs.configure({
          languages: [language]
      });

      hljs.highlightBlock(item);
    }
};



/**
 * Prepare all code blocks for syntax highlightning.
 */
app.loadCodeBlocksIntoSlide = function() {
    var elements = document.querySelectorAll('[data-code]');

    for (var i = 0; i < elements.length; ++i) {
        var item = elements[i],
            code = document.getElementById(item.dataset.code);

        item.innerHTML = code.innerHTML.substr(1); // Exclude first \n
    }
};



/**
 * Prepare all Markdown blocks.
 */
app.initMarkdown = function() {
    var elements = document.querySelectorAll('[data-markdown]'),
        converter = new showdown.Converter({tables: true});

    for (var i = 0; i < elements.length; ++i) {
        var item = elements[i];

        item.innerHTML = converter.makeHtml(item.innerHTML);
    }
};



/**
 * Enter fullscreen.
 */
app.enterFullscreen = function(element) {
    if (element.webkitRequestFullScreen &&  !document.webkitFullscreenElement) {
        element.webkitRequestFullScreen();
    } else if (element.mozRequestFullScreen && !document.mozFullScreenElement) {
        element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen && !document.msFullscreenElement) {
        element.msRequestFullscreen();
    }
};



/**
 * Exit fullscreen.
 */
app.exitFullscreen = function() {
    if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
};



/**
 * Config
 */
app.config = function(ctrl) {
    return function(element, isInitialized) {

        app.loadCodeBlocksIntoSlide();

        if (!isInitialized) {
            function navigate(event) {
                switch (event.keyCode) {
                    case 0:    //ContextMenu
                    case 13:   //Enter
                    case 32:   //Space
                    case 39:   //ArrowRight
                    case 40:   //ArrowDown
                        play();
                    break;
                    case 8:    //Backspace
                    case 37:   //ArrowLeft
                    case 38:   //ArrowUp
                        play(true);
                    break;
                    case 70:  //f
                        app.enterFullscreen(element);
                    break;
                    case 190:  //Period
                        app.exitFullscreen();
                    break;
                    default:
                        return;
                    };
                return false;
            };

            function play(reverse) {
                m.startComputation();
                ctrl.rotateSlide(reverse);
                m.endComputation();
            };

            window.onclick       = navigate;
            window.onkeydown     = navigate;
            window.ontouchend    = navigate;
            //window.oncontextmenu = function() { return false };
        };
    };
};



/**
 * Model
 */
app.slideList = function() {
    return document.querySelectorAll('[data-role="slide"]');
};



/**
 * Controller
 */
app.controller = function() {
    var slides = app.slideList();
    var current = 0;

    return {
        currentSlide: function() {
            return slides.item(current);
        },
        rotateSlide: function(reverse) {
            if (reverse) {
                current = (current == 0) ? slides.length - 1 : current - 1;
            } else {
                current = (current == slides.length - 1) ? 0 : current + 1;
            }
        }
    };
};



/**
 * View
 */
app.view = function(ctrl) {
    var slide = ctrl.currentSlide();
    return m("div#slide", { config: app.config(ctrl) }, [
        m("div#objects", m.trust(slide.innerHTML))
    ]);
};



/**
 * Initialize
 */
app.initCodeBlocks();
app.initMarkdown();
document.body = document.createElement("body");
m.module(document.body, app);
