
class Store extends ContactBook {
    constructor() {
        super();
        this.contacts = contacts;
        this.init = () => {
            if (localStorage.getItem("contacts")) {
                contacts = JSON.parse(localStorage.getItem("contacts"));
            };
            this.reDrawDOMTable(contacts);

        };
        this.init()
    }
}

new Store();