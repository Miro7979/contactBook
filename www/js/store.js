
let deleteUserFromTable = (userName) => {
    let tempTable = {};
    let contact = Object.keys(contacts);
    for (let i = 0; i < contactTableKeys.length; i++) {
        if (userName !== contactTableKeys[i]) {
            tempTable[contactTableKeys[i]] = contacts[contactTableKeys[i]];
        }
    }

    contacts = tempTable;
    localStorage.setItem("contacts", JSON.stringify(contacts));
    reDrawDOMTable();
}

let init = () => {
    if (localStorage.getItem("contacts")) {
        contacts = JSON.parse(localStorage.getItem("contacts"));
    }
    reDrawDOMTable();
}
init()