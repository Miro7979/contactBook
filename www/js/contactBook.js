let contacts = [];
class ContactBook {
    constructor(contacts) {
        this.contacts = contacts;
        this.listeners = listeners;
    }
    // only push to inside reDrawDOMTable because that function 
    // also kills the old listeners each time it runs
    reDrawDOMTable = () => {


        let tableContainer = document.querySelector('#tableContainer');
        let oldTableBody = document.querySelector('#tableBody');
        oldTableBody.setAttribute('id', 'tableBody');
        oldTableBody.remove();
        let newTableBody = document.createElement('span');
        newTableBody.setAttribute('id', 'tableBody');
        tableContainer.append(newTableBody);



        for (let i = 0; i < contacts.length; i++) {
            let currentRow = document.createElement('div');
            let currentNameCol = document.createElement('div');
            let currentPhoneCol = document.createElement('div');
            let currentEmailCol = document.createElement('div');
            let currentEditBtn = document.createElement('div');
            let currentDeleteBtn = document.createElement('div');
            let currentContactHistory = document.createElement('div');

            currentRow.className = 'table-row';
            currentRow.setAttribute('data-index', i);
            currentNameCol.className = 'table-column name';
            currentPhoneCol.className = 'table-column phone';
            currentEmailCol.className = 'table-column email';
            // Create edit button
            currentEditBtn.className = 'table-column edit i';
            currentEditBtn.setAttribute('editPerson', i)
            // Create delete button
            currentDeleteBtn.className = 'table-column delete i';
            // create history button
            currentContactHistory.className = 'table-column contactHistory i';

            currentNameCol.innerHTML = contacts[i].name;
            currentPhoneCol.innerHTML = contacts[i].phone;
            currentEmailCol.innerHTML = contacts[i].email;
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
                document.querySelector('#newPersonName').className = 'input-err';
            else
                document.querySelector('#newPersonName').className = '';

            if (newPersonPhone === '')
                document.querySelector('#newPersonPhone').className = 'input-err';
            else
                document.querySelector('#newPersonPhone').className = '';

            if (newPersonEmail === '')
                document.querySelector('#newPersonEmail').className = 'input-err';
            else
                document.querySelector('#newPersonEmail').className = '';

            if (newPersonName !== '' && newPersonPhone !== '' && newPersonEmail !== '') {

                let newPerson = {
                    'name': newPersonName,
                    'phone': newPersonPhone,
                    'email': newPersonEmail,
                    'versions': []
                };

                contacts = [
                    ...contacts,
                    newPerson
                ];


                localStorage.setItem("contacts", JSON.stringify(contacts));
                enableAndDisableNewUserModal('disable');
                this.reDrawDOMTable();
            }
        }));

        // Listen to add new person button
        listeners.push(listen('click', '#addNewEntry', (e, input) => {
            let inputs = [...document.querySelectorAll('#newPersonModal input')];
            for (input of inputs) { input.className = ''; }
            if (e.target.closest('#addNewEntry')) {
                enableAndDisableNewUserModal('enable');
            };
        }));

        // Listen to cancel new person button
        listeners.push(listen('click', '#newPersonCancelBtn', e => {

            enableAndDisableNewUserModal('disable');
        }));

        // Listen to edit button
        listeners.push(listen('click', '.edit', (e, input) => {
            let inputs = [...document.querySelectorAll('#newPersonModal input')];
            for (input of inputs) { input.className = ''; }
            let contactToEdit = e.target.closest('.table-row').getAttribute('data-index');
            let personToEdit = contacts[contactToEdit];
            enableAndDisableNewUserModal('enable');

            let newPersonName = document.querySelector('#newPersonName');
            let newPersonPhone = document.querySelector('#newPersonPhone');
            let newPersonEmail = document.querySelector('#newPersonEmail');
            newPersonName.value = personToEdit.name;
            newPersonPhone.value = personToEdit.phone;
            newPersonEmail.value = personToEdit.email;
        }));


        let deleteUserFromTable = (i) => {
            contacts = contacts.filter((contact, index) => index != i);
            localStorage.setItem("contacts", JSON.stringify(contacts));
            this.reDrawDOMTable();
        }

        // Listen to delete button
        listeners.push(listen('click', '.delete', e => {
            let contactToDelete = e.target.closest('.table-row').getAttribute('data-index');
            let areYouSure = window.confirm('Är du säker att du vill ta bort denna kontakt?');

            if (areYouSure)
                deleteUserFromTable(contactToDelete);
        }));


        // Listen to person history button
        listeners.push(listen('click', '.contactHistory', e => {
            let contactToSe = e.target.closest('.table-row').getAttribute('data-index');
            let personToSe = contacts[contactToSe];
            enableAndDisablePersonHistoryModal('enable')
            let newPersonName = document.querySelector('#newPersonName');
            let newPersonPhone = document.querySelector('#newPersonPhone');
            let newPersonEmail = document.querySelector('#newPersonEmail');
            newPersonName.value = contactToSe.name;
            newPersonPhone.value = personToSe.phone;
            newPersonEmail.value = personToSe.email;

            // enableDisableNameInput('disable');

        }));
    };

};

new ContactBook();


