import $ from'../core';
$.prototype.animateOverTime = function(dur, cb, fin){
    let timeStart;
 
    function _animateOverTime(time){
        if(!timeStart){
            timeStart = time;
        }

        let tiemElapsed = time - timeStart;
        let complection = Math.min(tiemElapsed/dur, 1);

        cb(complection);

        if (tiemElapsed < dur) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if(typeof fin === 'function'){
                fin();
            }
        }
    }

    return _animateOverTime;
};
// Общие функции для fadeIn и fadeOut
function _fadeIn(element, dur, display = 'block', fin) {
    element.style.display = display;

    const fadeInAction = (completion) => {
        element.style.opacity = completion;
    };

    const ani = $.prototype.animateOverTime(dur, fadeInAction, fin);
    requestAnimationFrame(ani);
}

function _fadeOut(element, dur, fin) {
    const fadeOutAction = (completion) => {
        element.style.opacity = 1 - completion;
        if (completion === 1) {
            element.style.display = 'none';
        }
    };

    const ani = $.prototype.animateOverTime(dur, fadeOutAction, fin);
    requestAnimationFrame(ani);
}

// Добавляем функции к прототипу  объекта
$.prototype.fadeIn = function(dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
        _fadeIn(this[i], dur, display, fin);
    }

    return this;
};

$.prototype.fadeOut = function(dur, fin) {
    for (let i = 0; i < this.length; i++) {
        _fadeOut(this[i], dur, fin);
    }

    return this;
};

$.prototype.fadeToggle = function(dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === 'none') {
            _fadeIn(this[i], dur, display, fin);
        } else {
            _fadeOut(this[i], dur, fin);
        }
    }

    return this;
};