class AriConditionalElement extends HTMLElement {
    
    constructor() {
        super();
    }

    //#region Attributes
    static get observedAttributes() {
        return ['case', 'display', 'updateonresize'];
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

    get display() {
        return this.getAttribute('display');
    }
    set display(val) {
        val=val.toString();
        this.setAttribute('display', val);
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
        this.connectedCallback();
    }
    //#endregion Overrides

    //#region Main
    update() {
        if(eval(this.case)) {
            this.setAttribute('active', '');
            if(this.hasAttribute('display')) this.style.display = this.getAttribute('display');
        }
        else {
            this.removeAttribute('active');
            if(this.hasAttribute('display')) this.style.display = 'none';
        }
    }
    #internalUpdateOnResized = this.update.bind(this);
    //#endregion Main
}
window.customElements.define('ari-if', AriConditionalElement);
