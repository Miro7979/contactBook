let contacts = [];
class ContactBook {
  constructor(contacts, listeners) {
    this.contacts = contacts;
    this.listeners = listeners;
  }

  addEditContact = (dataKey) => {

    let editPerson = {
      name: document.querySelector('#input-name').value,
      phone: document.querySelector('#input-phone').value,
      email: document.querySelector('#input-email').value
    };

    let contact = contacts[dataKey];
    contact.history.push(editPerson)
    contact.position++;

    localStorage.setItem("contacts", JSON.stringify(contacts));
    this.enableAndDeisableEditPersonContent('disable');
    this.reDrawDOMTable();
  };

  enableAndDeisableEditPersonContent = (option, key) => {
    let newPersonName = document.querySelector('#newPersonName');
    let newPersonPhone = document.querySelector('#newPersonPhone');
    let newPersonEmail = document.querySelector('#newPersonEmail');
    newPersonName.value = '';
    newPersonPhone.value = '';
    newPersonEmail.value = '';

    let editPerson = document.querySelector('#editPerson');
    editPerson.className = `${option}-editPerson`;
    editPerson.setAttribute('data-index', key)
  };

  // only push to inside reDrawDOMTable because that function 
  // also kills the old listeners each time it runs
  reDrawDOMTable = () => {
    let tableContainer = document.querySelector('#tableContainer');
    let oldTableBody = document.querySelector('#tableBody');
    oldTableBody.setAttribute('id', 'tableBody');
    oldTableBody.remove();
    let newTableBody = document.createElement('span');
    newTableBody.setAttribute('id', 'tableBody');
    let historyBody = document.createElement('div');
    historyBody.setAttribute('class', 'historyBody')
    tableContainer.append(historyBody)
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
      currentRow.setAttribute('data-parent', contacts[i].id);
      currentNameCol.className = 'table-column name';
      currentPhoneCol.className = 'table-column phone';
      currentEmailCol.className = 'table-column email';
      // Create edit button
      currentEditBtn.className = 'table-column edit i';
      // Create delete button
      currentDeleteBtn.className = 'table-column delete i';
      // create history button
      currentContactHistory.className = 'table-column contactHistory i';

      currentNameCol.innerHTML = contacts[i].history[contacts[i].position].name;
      currentPhoneCol.innerHTML = contacts[i].history[contacts[i].position].phone;
      currentEmailCol.innerHTML = contacts[i].history[contacts[i].position].email;
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

    // kill all old listeners
    while (listeners.length) {
      unlisten(listeners.pop());
    }

    // Listen to add new person button
    listeners.push(listen('click', '#addNewEntry', (e, input) => {
      let inputs = [...document.querySelectorAll('#newPersonModal input')];
      for (input of inputs) { input.className = ''; }
      if (e.target.closest('#addNewEntry')) {
        enableAndDisableNewUserModal('enable');
      };
    }));

    let createNewPerson = () => {
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
      if (newPersonName !== '') {

        let newPerson = {
          'name': newPersonName,
          'phone': newPersonPhone,
          'email': newPersonEmail,
        };

        let newContact = {
          id: Date.now(),
          position: 0,
          history: [newPerson]
        }

        contacts = [
          ...contacts,
          newContact
        ];

        localStorage.setItem("contacts", JSON.stringify(contacts));
        enableAndDisableNewUserModal('disable');
        this.reDrawDOMTable();
      };
    };

    // Listen to person submit button
    listeners.push(listen('click', '#modalSubmitBtn', e => {
      if (e.target.closest('#modalSubmitBtn')) {
        createNewPerson();
      };
    }));


    // Listen to cancel new person button
    listeners.push(listen('click', '#newPersonCancelBtn', e => {
      if (e.target.closest('#newPersonCancelBtn')) {
        enableAndDisableNewUserModal('disable');
      }
    }));

    // Listen to edit button
    listeners.push(listen('click', '.edit', (e, input) => {
      let inputs = [...document.querySelectorAll('#newPersonModal input')];
      for (input of inputs) { input.className = ''; }
      let contactToEdit = e.target.closest('.table-row').getAttribute('data-index');
      let id = e.target.closest('.table-row').getAttribute('data-parent')

      let contact = contacts.filter(contact => {
        if (contact.id == id) {
          return contact;
        }
      })
      contact = contact[0]
      let personToEdit = contact.history[contact.position];

      this.enableAndDeisableEditPersonContent('enable', contactToEdit);
      let newPersonName = document.querySelector('#input-name');
      let newPersonPhone = document.querySelector('#input-phone');
      let newPersonEmail = document.querySelector('#input-email');
      newPersonName.value = personToEdit.name;
      newPersonPhone.value = personToEdit.phone;
      newPersonEmail.value = personToEdit.email;
    }));

    // Listen to edit person submit button
    listeners.push(listen('click', '#editFormSubmitBtn', e => {
      if (e.target.closest('#editFormSubmitBtn')) {
        e.preventDefault();

        let dataKeyHolder = document.querySelector('#editPerson');
        let dataKey = dataKeyHolder.getAttribute('data-index');

        this.addEditContact(dataKey);
      }
    }));

    // Listen to cancel edit person button
    listeners.push(listen('click', '#editFormCancelBtn', e => {
      if (e.target.closest('#editFormCancelBtn')) {
        e.preventDefault();
        this.enableAndDeisableEditPersonContent('disable');
      }
    }));

    // Delete contact
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

    // // Listen to person history button
    listeners.push(listen('click', '.contactHistory', e => {
      let contactToShow = e.target.closest('.table-row').getAttribute('data-index');
      let id = e.target.closest('.table-row').getAttribute('data-parent')
      let contact = contacts.filter(contact => {
        if (contact.id == id) {
          return contact;
        }
      })
      contact = contact[0];

      // Target historybody div and fill it with all version
      let historyBody = document.querySelector('.historyBody')
      let chosen = parseInt(contact.position);
      let chosenId = contact.id;


      function historyCard(data, index) {
        return `
        <div class="historyCard${index === chosen ? ' chosen' : ''}" data-key="${index}">
          <div class="${index === chosen ? '' : 'hidden'}">
            >>> Aktuella versionen <<<
          </div>
          <h2>Namn: ${data.name}</h2>
          <p class="${!data.phone ? 'hidden' : ''}">
            <span>Telefon:</span>
            ${data.phone}
          </p>
          <p class="${!data.email ? 'hidden' : ''}">
            <span>Epost:</span>
            ${data.email}
          </p>
          <a class="cancelHistoryChange">Avbryt</a>
          <a data-ref="${chosenId}" data-key="${index}" class="historyCardButton ${(index === chosen ? 'hidden' : 'd')}">Välj version </a>
        </div>
        `
      }

      let html = ``;
      contact.history.map((version, index) => {
        html += historyCard(version, index)
      })

      // And push it into our history div
      historyBody.innerHTML = html
    }));

    // Listen for historyCard buttons to set new version
    listen('click', '.historyCardButton', e => {
      let id = e.target.getAttribute('data-ref')
      let newPositionKey = e.target.getAttribute('data-key')

      let contact = contacts.filter(contact => {
        if (contact.id == id) {
          return contact;
        }
      });

      // Update contact position and save
      contact[0].position = newPositionKey
      localStorage.setItem("contacts", JSON.stringify(contacts));

      // Also clear the contents of historyBody
      historyBody.innerHTML = ""
      this.reDrawDOMTable();
    })

    listen('click', '.cancelHistoryChange', e => {
      historyBody.innerHTML = ""
    })

    // Listen to cancel history modal button
    listeners.push(listen('click', '#historyPersonCancelBtn', e => {
      if (e.target.closest('#historyPersonCancelBtn')) {
        e.preventDefault();
      }
    }));
  };

};

new ContactBook();



