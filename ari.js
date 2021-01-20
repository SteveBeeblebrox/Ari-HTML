class AriConditionalElement extends HTMLElement {
    
    constructor() {
        super();
    }

    //#region Attributes
    static get observedAttributes() {
        return ['case', 'updateonresize', 'then', 'else'];
    }

    get active() {
        return this.hasAttribute('active');
    }

    get case() {
        return this.getAttribute('case');
    }
    set case(val) {
        val=val.toString();
        this.setAttribute('case', val);
    }

    #internalThenStyleObject = document.createElement('span').style;
    get then() {
        return this.#internalMakeStyleProxy(this, this.#internalThenStyleObject);
    }
    set then(val) {
        this.#internalThenStyleObject.cssText = val.toString();
        this.setAttribute('then', this.#internalThenStyleObject.cssText);
    }

    #internalElseStyleObject = document.createElement('span').style;
    get else() {
        return this.#internalMakeStyleProxy(this, this.#internalElseStyleObject);
    }

    #internalMakeStyleProxy(that, style) {
      return new Proxy(style, {
            get: function(t, p, r) {
                if(typeof p === 'string') return style[p];
                else return t[p];
            },
            set: function(o, p, v) {
                if(typeof p === 'string') style[p] = v;
                else o[p] = v;
                that.setAttribute('else', style.cssText)
                return true;
            }
        });
    }

    set else(val) {
        this.#internalElseStyleObject.cssText = val.toString();
        this.setAttribute('else', this.#internalElseStyleObject.cssText);
    }

    get updateOnResize() {
        return this.hasAttribute('updateonresize');
    }
    
    set updateOnResize(val) {
        if (val) {
            window.addEventListener('resize', this.#internalUpdateOnResized);
            this.setAttribute('updateonresize', '');
            this.update();
        } 
        else {
            window.removeEventListener('resize', this.#internalUpdateOnResized);
            this.removeAttribute('updateonresize');
        }
    }
    //#endregion Attributes

    //#region Overrides
    connectedCallback() {
        this.update();
        if(this.hasAttribute('updateonresize')) window.addEventListener('resize', this.#internalUpdateOnResized);
    }
    attributeChangedCallback(name, oldVal, newVal) {
        if(oldVal !== newVal) this[name] = newVal;
        this.update();
        if(this.hasAttribute('updateonresize')) window.addEventListener('resize', this.#internalUpdateOnResized);
    }
    //#endregion Overrides

    //#region Main
    update() {
        if(eval(this.case)) {
            this.setAttribute('active', '');
            console.log(this.then.cssText)
            if(this.hasAttribute('then')) this.style = this.then.cssText;
        }
        else {
            this.removeAttribute('active');
            if(this.hasAttribute('else')) this.style = this.else.cssText;
        }
    }
    #internalUpdateOnResized = this.update.bind(this);
    //#endregion Main
}
window.customElements.define('ari-if', AriConditionalElement);
