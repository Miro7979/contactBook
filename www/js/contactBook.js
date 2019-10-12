const tableKey = 'table';

let contactTable = {};

let enableDisableNameInput = (option) => {
    let newPersonName = document.querySelector('#newPersonName');

    if (option === 'enable')
        newPersonName.disabled = false;

    else if (option === 'disable')
        newPersonName.disabled = true;
};

// only push to inside reDrawDOMTable because that function 
// also kills the old listeners each time it runs
let listeners = [];

const [listen, unlisten] = (() => {
    let listeningOnType = {};
    let listeners = [];

    function listen(eventType, cssSelector, func) {
        // Register a "listener"
        let listener = { eventType, cssSelector, func };
        listeners.push(listener);
        // If no listener on window[eventType] register a 
        // a real/raw js-listener
        if (!listeningOnType[eventType]) {
            // add event listener for this type on the whole window
            window.addEventListener(eventType, e => {
                listeners
                    .filter(x => x.eventType === eventType)
                    .forEach(listener => {
                        if (e.target.closest(listener.cssSelector)) {
                            listener.func(e);
                        }
                    });
            });
            listeningOnType[eventType] = true;
        }
        return listener;
    }

    function unlisten(listener) {
        listeners.splice(listeners.indexOf(listener), 1);
    }
    return [listen, unlisten];
})();


let reDrawDOMTable = () => {

    let contactTableKeys = Object.keys(contactTable);
    let tableContainer = document.querySelector('#tableContainer');
    let oldTableBody = document.querySelector('#tableBody');
    oldTableBody.setAttribute('id', 'tableBody');
    oldTableBody.remove();
    let newTableBody = document.createElement('span');
    newTableBody.setAttribute('id', 'tableBody');
    tableContainer.append(newTableBody);

    for (let i = 0; i < contactTableKeys.length; i++) {
        let currentRow = document.createElement('div');
        let currentNameCol = document.createElement('div');
        let currentPhoneCol = document.createElement('div');
        let currentEmailCol = document.createElement('div');
        let currentEditBtn = document.createElement('div');
        let currentDeleteBtn = document.createElement('div');
        let currentContactHistory = document.createElement('div');

        currentRow.className = 'table-row';
        currentNameCol.className = 'table-column name';
        currentPhoneCol.className = 'table-column phone';
        currentEmailCol.className = 'table-column email';
        // Create edit button
        currentEditBtn.className = 'table-column edit i';
        // Create delete button
        currentDeleteBtn.className = 'table-column delete i';
        // create history button
        currentContactHistory.className = 'table-column contactHistory i';

        currentNameCol.innerHTML = contactTableKeys[i];
        currentPhoneCol.innerHTML = contactTable[contactTableKeys[i]].phone;
        currentEmailCol.innerHTML = contactTable[contactTableKeys[i]].email;
        currentDeleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        currentEditBtn.innerHTML = '<i class="fas fa-edit"></i>';
        currentContactHistory.innerHTML = '<i class="fas fa-history"></i>';

        currentRow.append(currentNameCol);
        currentRow.append(currentPhoneCol);
        currentRow.append(currentEmailCol);
        currentRow.append(currentDeleteBtn);
        currentRow.append(currentEditBtn);
        currentRow.append(currentContactHistory);
        newTableBody.append(currentRow);
        // console.log(CustomElementRegistry);

    }

    let enableAndDisableNewUserModal = (option) => {
        let newPersonName = document.querySelector('#newPersonName');
        let newPersonPhone = document.querySelector('#newPersonPhone');
        let newPersonEmail = document.querySelector('#newPersonEmail');
        newPersonName.value = '';
        newPersonPhone.value = '';
        newPersonEmail.value = '';

        let newPersonModal = document.querySelector('#newPersonModal');
        let backdrop = document.querySelector('#backdrop');

        newPersonModal.className = `${option}-modal`;
        backdrop.className = `${option}-modal`;
    };

    let enableAndDisablePersonHistoryModal = (option) => {
        let newPersonName = document.querySelector('#newPersonName');
        let newPersonPhone = document.querySelector('#newPersonPhone');
        let newPersonEmail = document.querySelector('#newPersonEmail');
        newPersonName.value = '';
        newPersonPhone.value = '';
        newPersonEmail.value = '';

        let personHistoryModal = document.querySelector('#personHistoryModal');
        let backdrop = document.querySelector('#backdrop');
        personHistoryModal.className = `${option}-modal`;
        backdrop.className = `${option}-modal`;
    }

    // kill all old listeners
    while (listeners.length) {
        unlisten(listeners.pop());
    }

    // Listen to person submit button
    listeners.push(listen('click', '#newPersonSubmitBtn', e => {

        let newPersonName = document.querySelector('#newPersonName').value.trim();
        let newPersonPhone = document.querySelector('#newPersonPhone').value.trim();
        let newPersonEmail = document.querySelector('#newPersonEmail').value.trim();

        if (newPersonName === '')
            document.querySelector('#newPersonName').className = '';
        else
            document.querySelector('#newPersonName').className = 'input-err';

        if (newPersonPhone === '')
            document.querySelector('#newPersonPhone').className = '';
        else
            document.querySelector('#newPersonPhone').className = 'input-err';

        if (newPersonEmail === '')
            document.querySelector('#newPersonEmail').className = '';
        else
            document.querySelector('#newPersonEmail').className = 'input-err';

        if (newPersonName !== '' && newPersonPhone !== '' && newPersonEmail !== '') {

            let newPerson = {};
            contactTable[newPersonName] = {
                'phone': newPersonPhone,
                'email': newPersonEmail
            }
            // function newPerson(tableKey) {

            //     let newPerson = Object.create(newPerson);

            //     newPerson.tableKey = tableKey;

            //     return newPerson;

            // }

            localStorage.setItem(tableKey, JSON.stringify(contactTable));
            enableAndDisableNewUserModal('disable');
            reDrawDOMTable();
        }
    }));

    // Listen to add new person button
    listeners.push(listen('click', '#addNewEntry', e => {

        if (e.target.closest('#addNewEntry')) {
            enableAndDisableNewUserModal('enable');
        }
    }));

    // Listen to cancel new person button
    listeners.push(listen('click', '#newPersonCancelBtn', e => {

        enableAndDisableNewUserModal('disable');
    }));

    // We can listen
    listeners.push(listen('click', '.edit', e => {
        let contactToEdit = e.target.parentElement.children[0].innerText;
        let personToEdit = contactTable[contactToEdit];
        enableAndDisableNewUserModal('enable');

        // let newPersonName = document.querySelector('#newPersonName');
        let newPersonPhone = document.querySelector('#newPersonPhone');
        let newPersonEmail = document.querySelector('#newPersonEmail');
        newPersonName.value = contactToEdit;
        newPersonPhone.value = personToEdit.phone;
        newPersonEmail.value = personToEdit.email;

        enableDisableNameInput('disable');
    }));

    // Listen to delete button
    listeners.push(listen('click', '.delete', e => {
        let contactToDelete = e.target.parentElement.children[0].innerText;
        let areYouSure = window.confirm('Är du säker att du vill ta bort ' + contactToDelete + '?');

        if (areYouSure)
            deleteUserFromTable(contactToDelete);
    }));

    // Listen to person history button
    listeners.push(listen('click', '.contactHistory', e => {
        let contactToSe = e.target.parentElement.children[0].innerText;
        let personToSe = contactTable[contactToSe];
        enableAndDisablePersonHistoryModal('enable')
        let newPersonName = document.querySelector('#newPersonName');
        let newPersonPhone = document.querySelector('#newPersonPhone');
        let newPersonEmail = document.querySelector('#newPersonEmail');
        newPersonName.value = contactToSe;
        newPersonPhone.value = personToSe.phone;
        newPersonEmail.value = personToSe.email;

        enableDisableNameInput('disable');

    }));
};





