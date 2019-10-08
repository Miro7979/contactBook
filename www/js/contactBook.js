const tableKey = 'table';

let clearBtn = window.addEventListener('click', e => {
    if (e.target.closest('#clearLocalStorageBtn')) {
        console.log('du klickade localStorage knappen');
    }
})

let contactTable;
let contactTableDemo = {
    'Miro Neo': {
        'telefonnummer': '0761098591',
        'email': 'miro@minakontakter.nu'
    }
};

let enableDisableNameInput = (option) => {
    let newPersonName = document.querySelector('#newPersonName');

    if (option === 'enable')
        newPersonName.disabled = false;

    else if (option === 'disable')
        newPersonName.disabled = true;
}

// only push to inside reDrawDOMTable because that function 
// also kills the old listeners each time it runs
let listeners = [];

const [listen, unlisten] = (() => {
    let listeningOnType = {};
    let listeners = [];

    function listen(eventType, cssSelector, func) {
        console.log('eventType', eventType, 'selector', cssSelector)
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

        currentRow.className = 'table-row';
        currentNameCol.className = 'table-column name';
        currentPhoneCol.className = 'table-column phone';
        currentEmailCol.className = 'table-column email';
        // Create edit button
        currentEditBtn.className = 'table-column edit i';
        // Create delete button
        currentDeleteBtn.className = 'table-column delete i';

        currentNameCol.innerHTML = contactTableKeys[i];
        currentPhoneCol.innerHTML = contactTable[contactTableKeys[i]].phone;
        currentEmailCol.innerHTML = contactTable[contactTableKeys[i]].email;
        currentDeleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        currentEditBtn.innerHTML = '<i class="fas fa-edit"></i>';

        currentRow.append(currentNameCol);
        currentRow.append(currentPhoneCol);
        currentRow.append(currentEmailCol);
        currentRow.append(currentDeleteBtn);
        currentRow.append(currentEditBtn);
        newTableBody.append(currentRow);

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
    }

    // // let addNewEntryBtn = document.querySelector('#addNewEntry');
    // let editBtns = document.querySelector('.edit');
    // let deleteBtns = document.querySelector('.delete');

    // console.log(addEntry.getAttribute('#addNewEntry'));

    let newPersonSubmitBtn = document.querySelector('#newPersonSubmitBtn');

    newPersonSubmitBtn.addEventListener('click', () => {
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
            localStorage.setItem(tableKey, JSON.stringify(contactTable));
            enableAndDisableNewUserModal('disable');
            reDrawDOMTable();
        }
    });

    addNewEntryBtn = window.addEventListener('click', e => {
        if (e.target.closest('#addNewEntry')) {
            enableAndDisableNewUserModal('enable');
        }
    });
    let newPersonCancelBtn = document.querySelector('#newPersonCancelBtn');
    newPersonCancelBtn.addEventListener('click', e => {

        enableAndDisableNewUserModal('disable');
    }
    );

    // kill all old listeners
    while (listeners.length) {
        unlisten(listeners.pop());
    }

    // We can listen
    listeners.push(listen('click', '.edit', e => {
        // console.log('You clicked an .edit');

        let nameToEdit = e.target.parentElement.children[0].innerText;
        let personToEdit = contactTable[nameToEdit];
        enableAndDisableNewUserModal('enable');

        let newPersonName = document.querySelector('#newPersonName');
        let newPersonPhone = document.querySelector('#newPersonPhone');
        let newPersonEmail = document.querySelector('#newPersonEmail');
        newPersonName.value = nameToEdit;
        newPersonPhone.value = personToEdit.phone;
        newPersonEmail.value = personToEdit.email;

        enableDisableNameInput('disable');

    }));

    listeners.push(listen('click', '.delete', e => {
        let nameToDelete = e.target.parentElement.children[0].innerText;
        let areYouSure = window.confirm('Är du säker att du vill ta bort ' + nameToDelete + '?');

        if (areYouSure)
            deleteUserFromTable(nameToDelete);
    }));

}

let deleteUserFromTable = (userName) => {
    let tempTable = {};
    let contactTableKeys = Object.keys(contactTable);
    for (let i = 0; i < contactTableKeys.length; i++) {
        if (userName !== contactTableKeys[i]) {
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
        contactTable = contactTableDemo;
        localStorage.setItem(tableKey, JSON.stringify(contactTable));
    }
    reDrawDOMTable();
}
init();
