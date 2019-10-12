// DOM element begin
let body = document.querySelector('body');

// Wrap Div
let wrapperDiv = document.createElement('div');
wrapperDiv.innerHTML = '';
body.append(wrapperDiv);
wrapperDiv.setAttribute('class', 'wrapperDiv');

// Page headline
let headerDiv = document.createElement('div');
headerDiv.innerHTML = 'Min Kontakt Bok';
wrapperDiv.append(headerDiv);
headerDiv.setAttribute('class', 'pageHeader');

// search row
let searchRow = document.createElement('div');
searchRow.innerHTML = '';
headerDiv.append(searchRow);
searchRow.setAttribute('class', 'searchRow');
searchRow.setAttribute('id', 'searchRow');

// search input
let searchForm = document.createElement('form');
searchForm.innerHTML = '';
searchRow.append(searchForm);
searchForm.setAttribute('id', 'searchContacts');

let searchInput = document.createElement('input');
searchInput.innerHTML = 'Sök';
searchRow.append(searchInput);
searchInput.setAttribute('class', 'form-control');
searchInput.setAttribute('type', 'text');
searchInput.setAttribute('placeholder', '   Sök kontakter här..');
searchInput.setAttribute('id', 'search');

// serach button
let searchButton = document.createElement('button');
searchButton.innerHTML = 'Sök';
searchRow.append(searchButton);
searchButton.setAttribute('class', 'searchButton');

// div container
let container = document.createElement('container');
container.innerHTML = '';
wrapperDiv.append(container);
container.setAttribute('class', 'table-container');
container.setAttribute('id', 'tableContainer');


// name row
let row = document.createElement('div');
row.innerHTML = '';
container.append(row);
row.setAttribute('class', 'table-row');
row.setAttribute('id', 'tableRow');


// div column
let nameColumn = document.createElement('div');
nameColumn.innerHTML = 'Namn';
row.append(nameColumn);
nameColumn.setAttribute('class', 'table-columnName');
nameColumn.setAttribute('id', 'list');

let phoneColumn = document.createElement('div');
phoneColumn.innerHTML = 'Telefonnummer';
row.append(phoneColumn);
phoneColumn.setAttribute('class', 'table-columnPhone');
phoneColumn.setAttribute('id', 'list');

let emailColumn = document.createElement('div');
emailColumn.innerHTML = 'Email';
row.append(emailColumn);
emailColumn.setAttribute('class', 'table-columnEmail');
emailColumn.setAttribute('id', 'list');

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
wrapperDiv.append(backdrop);
backdrop.setAttribute('class', 'enable-modal');
backdrop.setAttribute('id', 'backdrop');

let newPersonModal = document.createElement('div');
newPersonModal.innerHTML = '';
wrapperDiv.append(newPersonModal);
newPersonModal.setAttribute('class', 'disable-modal');
newPersonModal.setAttribute('id', 'newPersonModal');

let modalHeader = document.createElement('h1');
modalHeader.innerHTML = 'Skapa ny kontakt';
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
modalButtonSubmit.innerHTML = 'Lägg till';
newPersonModal.append(modalButtonSubmit);
modalButtonSubmit.setAttribute('id', 'newPersonSubmitBtn');

// person history modal
let personHistoryModal = document.createElement('div');
personHistoryModal.innerHTML = '';
wrapperDiv.append(personHistoryModal);
personHistoryModal.setAttribute('class', 'disable-modal');
personHistoryModal.setAttribute('id', 'personHistoryModal');

let historyModalHeader = document.createElement('h1');
historyModalHeader.innerHTML = 'Kontakt historik';
personHistoryModal.append(historyModalHeader);
historyModalHeader.setAttribute('class', 'historyModalHeader');

// new container
// let newContainer = document.createElement('container');
// newContainer.innerHTML = '';
// body.append(newContainer);
// newContainer.setAttribute('class', 'table-newContainer');
// newContainer.setAttribute('id', 'tableNewContainer');
// // new table
// let tableNew = document.createElement('table');
// tableNew.innerHTML = '';
// newContainer.append(tableNew);
// tableNew.setAttribute('class', 'tableNew');
// // thead
// let tableThead = document.createElement('thead');
// tableThead.innerHTML = '';
// tableNew.append(tableThead);
// tableThead.setAttribute('class', 'tableThead' + '');

// // tr
// let tableTr = document.createElement('tr');
// tableNew.innerHTML = '';
// thead.append(tableTr);

// // th
// let tableThName = document.createElement('th');
// tableThName.innerHTML = 'Namn';
// tableTr.append(tableThName);

// let tableThPhone = document.createElement('th');
// tableThPhone.innerHTML = 'Telefonnummer';
// tableTr.append(tableThPhone);

// let tableThEmail = document.createElement('th');
// tableThEmail.innerHTML = 'Email';
// tableTr.append(tableThEmail);

