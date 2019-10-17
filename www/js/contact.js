class Contact extends ContactBook {
    constructor(contact) {
        super(contacts);
        this.contacts = contacts;
        this.contact = contact;
        // this.enableDisableNameInput()
    }

    enableDisableNameInput = (option) => {
        let newPersonName = document.querySelector('#newPersonName');

        if (option === 'enable')
            newPersonName.disabled = false;

        else if (option === 'disable')
            newPersonName.disabled = true;
    }

}

new Contact();