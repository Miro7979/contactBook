let getContacts = () => {
    let contacts;
    if (localStorage.getItem('contacts') === null) {
        contacts = [];
    } else {
        contacts = JSON.parse(localStorage.getItem('contacts'));
    }
    return contacts;
};

let deleteUserFromTable = (contact) => {
    let tempTable = {};
    let contactTableKeys = Object.keys(contactTable);
    for (let i = 0; i < contactTableKeys.length; i++) {
        if (contact !== contactTableKeys[i]) {
            tempTable[contactTableKeys[i]] = contactTable[contactTableKeys[i]];
        }
    }

    contactTable = tempTable;
    localStorage.setItem(tableKey, JSON.stringify(contactTable));
    reDrawDOMTable();
}

let init = () => {
    if (localStorage.getItem(tableKey)) {
        contactTable = JSON.parse(localStorage.getItem(tableKey));
    }
    else {
        contactTable = contactTable;
        localStorage.setItem(tableKey, JSON.stringify(contactTable));
    }
    reDrawDOMTable();
}
init()