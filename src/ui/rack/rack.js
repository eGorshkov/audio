export default class RackUI {
    /**
     * @type {HTMLElement}
     */
    template = document.createElement('div');
    items = [];

    constructor() {
        this.template.classList.add('rack-container');
    }

    set(item) {
        this.items.push(item);
        this.template.appendChild(item.template);
    }
}