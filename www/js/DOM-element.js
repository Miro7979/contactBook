// DOM element begin
let body = document.querySelector('body');

// Page headline
let headerDiv = document.createElement('div');
headerDiv.innerHTML = 'Min Kontakt Bok';
body.append(headerDiv);
headerDiv.setAttribute('class', 'pageHeader');

// div container
let container = document.createElement('container');
container.innerHTML = '';
body.append(container);
container.setAttribute('class', 'table-container mainContainer');

// div row
let row = document.createElement('div');
row.innerHTML = '';
container.append(row);
row.setAttribute('class', 'table-row');

// div column
let nameColumn = document.createElement('div');
nameColumn.innerHTML = 'Namn';
row.append(nameColumn);
nameColumn.setAttribute('class', 'table-column name');

let phoneColumn = document.createElement('div');
phoneColumn.innerHTML = 'Telefonnummer';
row.append(phoneColumn);
phoneColumn.setAttribute('class', 'table-column phone');

let emailColumn = document.createElement('div');
emailColumn.innerHTML = 'Email';
row.append(emailColumn);
emailColumn.setAttribute('class', 'table-column email');

let addEntry = document.createElement('div');
addEntry.innerHTML = '+';
row.append(addEntry);
addEntry.setAttribute('class', 'table-column add-entry-column');
addEntry.setAttribute('id', 'addNewEntry');

let span = document.createElement('span');
span.innerHTML = '';
row.append(span);
span.setAttribute('id', 'tableBody');

// modal 
let backdrop = document.createElement('div');
backdrop.innerHTML = '';
body.append(backdrop);
backdrop.setAttribute('class', 'disable-modal');
backdrop.setAttribute('id', 'backdropBackground');

let newPersonModal = document.createElement('div');
newPersonModal.innerHTML = '';
body.append(newPersonModal);
newPersonModal.setAttribute('class', 'disable-modal');
newPersonModal.setAttribute('id', 'newPersonModal');

let modalHeader = document.createElement('h1');
modalHeader.innerHTML = 'Skapa ny kontakt: ';
newPersonModal.append(modalHeader);
modalHeader.setAttribute('class', 'modalHeader');

// label 1
let newPersonNameLabel = document.createElement('label');
newPersonNameLabel.innerHTML = 'Namn';
newPersonModal.append(newPersonNameLabel);
newPersonNameLabel.setAttribute('for', 'newPersonName');

let newPersonNameInput = document.createElement('input');
newPersonNameInput.innerHTML = '';
newPersonModal.append(newPersonNameInput);
newPersonNameInput.setAttribute('type', 'text');
newPersonNameInput.setAttribute('id', 'newPersonName');

// label 2
let newPersonPhoneLabel = document.createElement('label');
newPersonPhoneLabel.innerHTML = 'Telefonnummer';
newPersonModal.append(newPersonPhoneLabel);
newPersonPhoneLabel.setAttribute('for', 'newPersonPhone');

let newPersonPhoneInput = document.createElement('input');
newPersonPhoneInput.innerHTML = '';
newPersonModal.append(newPersonPhoneInput);
newPersonPhoneInput.setAttribute('type', 'text');
newPersonPhoneInput.setAttribute('id', 'newPersonPhone');

// label 3
let newPersonEmailLabel = document.createElement('label');
newPersonEmailLabel.innerHTML = 'Email';
newPersonModal.append(newPersonEmailLabel);
newPersonEmailLabel.setAttribute('for', 'newPersonEmail');

let newPersonEmailInput = document.createElement('input');
newPersonEmailInput.innerHTML = '';
newPersonModal.append(newPersonEmailInput);
newPersonEmailInput.setAttribute('type', 'text');
newPersonEmailInput.setAttribute('id', 'newPersonEmail');

// modal button
let modalButtonCancel = document.createElement('button');
modalButtonCancel.innerHTML = 'Avbryt';
newPersonModal.append(modalButtonCancel);
modalButtonCancel.setAttribute('id', 'newPersonCancelBtn');

let modalButtonSubmit = document.createElement('button');
modalButtonSubmit.innerHTML = 'Ok';
newPersonModal.append(modalButtonSubmit);
modalButtonSubmit.setAttribute('id', 'newPersonSubmitBtn');

// tempo button for clear localStorage
let clearLocalStoragebtn = document.createElement('button');
clearLocalStoragebtn.innerHTML = 'Rensa LocalStorage';
body.append(clearLocalStoragebtn);
clearLocalStoragebtn.setAttribute('id', 'clearLocalStoragebtn');