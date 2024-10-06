const $ = function(selector){
    return new $.prototype.init(selector);
};

$.prototype.init = function(selector){
    if (!selector){
        return this;//{}пустой объект
    }

    if(selector.tagName){
        this[0] = selector;
        this.length = 1;
        return this;
    }

    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    return this;
};

// Устанавливаем прототип объекта, созданного `$.prototype.init`, на прототип самого `$`. 
// Это нужно для того, чтобы методы, определенные на `$.prototype`, были доступны и на объекте, созданном `$.prototype.init`.
$.prototype.init.prototype = $.prototype;

window.$ = $;

export default $;

