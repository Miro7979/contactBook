// DOM element begin
let body = document.querySelector('body');

// Wrap Div
let wrapperDiv = document.createElement('div');
wrapperDiv.innerHTML = '';
body.append(wrapperDiv);
wrapperDiv.setAttribute('class', 'wrapperDiv');
wrapperDiv.setAttribute('id', 'wrapper');

// Page headline
let headerDiv = document.createElement('div');
headerDiv.innerHTML = 'Min Kontakt Bok';
wrapperDiv.append(headerDiv);
headerDiv.setAttribute('class', 'pageHeader');

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
nameColumn.setAttribute('route', '/');

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
backdrop.setAttribute('class', 'disable-modal');
backdrop.setAttribute('id', 'backdrop');

let newPersonModal = document.createElement('div');
newPersonModal.innerHTML = '';
wrapperDiv.append(newPersonModal);
newPersonModal.setAttribute('class', 'disable-modal');
newPersonModal.setAttribute('id', 'newPersonModal');

let modalHeader = document.createElement('h1');
modalHeader.innerHTML = 'Lägg till ny kontakt';
newPersonModal.append(modalHeader);
modalHeader.setAttribute('class', 'modalHeader');

// label 1
let newPersonNameLabel = document.createElement('label');
newPersonNameLabel.innerHTML = 'Namn';
newPersonModal.append(newPersonNameLabel);
newPersonNameLabel.setAttribute('for', 'newPersonName');

let newPersonNameInput = document.createElement('input');
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
modalButtonSubmit.innerHTML = 'Spara';
newPersonModal.append(modalButtonSubmit);
modalButtonSubmit.setAttribute('id', 'modalSubmitBtn');
modalButtonSubmit.setAttribute('class', 'disable-button');


// person history modal
let personHistory = document.createElement('div');
personHistory.innerHTML = '';
wrapperDiv.append(personHistory);
personHistory.setAttribute('class', 'disable-history');
personHistory.setAttribute('id', 'personHistory');

let historyHeader = document.createElement('h1');
historyHeader.innerHTML = 'Redigera och se kontakt historik';
personHistory.append(historyHeader);
historyHeader.setAttribute('class', 'historyHeader');

let historyContent = document.createElement('div');
historyContent.innerHTML = '';
personHistory.append(historyContent);
historyContent.setAttribute('class', 'historyContent');

// edit person form begins
let editPersonForm = document.createElement('form');
editPersonForm.innerHTML = '';
historyContent.append(editPersonForm);
editPersonForm.setAttribute('id', 'editPersonForm');

// edit form div 1 name
let editPersonFormDiv = document.createElement('div');
editPersonFormDiv.innerHTML = '';
editPersonForm.append(editPersonFormDiv);

// edit label 1 name
let editPersonNameLabel = document.createElement('label');
editPersonNameLabel.innerHTML = 'Ange nytt namn';
editPersonFormDiv.append(editPersonNameLabel);
editPersonNameLabel.setAttribute('for', 'input-name');

let editPersonNameInput = document.createElement('input');
editPersonNameInput.innerHTML = '';
editPersonFormDiv.append(editPersonNameInput);
editPersonNameInput.setAttribute('type', 'text');
editPersonNameInput.setAttribute('id', 'input-name');

// edit form div 2 phone
let editPersonFormDiv2 = document.createElement('div');
editPersonFormDiv2.innerHTML = '';
editPersonForm.append(editPersonFormDiv2);
editPersonFormDiv2.setAttribute('class', 'form-box-error');
editPersonFormDiv2.setAttribute('data-errormsg', '');

// edit label 2 phone
let editPersonPhoneLabel = document.createElement('label');
editPersonPhoneLabel.innerHTML = 'Ange nytt telefonnummer';
editPersonFormDiv2.append(editPersonPhoneLabel);
editPersonPhoneLabel.setAttribute('for', 'input-phone');

let editPersonPhoneInput = document.createElement('input');
editPersonPhoneInput.innerHTML = '';
editPersonFormDiv2.append(editPersonPhoneInput);
editPersonPhoneInput.setAttribute('type', 'text');
editPersonPhoneInput.setAttribute('id', 'input-phone');

// edit form div 3 email
let editPersonFormDiv3 = document.createElement('div');
editPersonFormDiv3.innerHTML = '';
editPersonForm.append(editPersonFormDiv3);
editPersonFormDiv3.setAttribute('class', 'form-box-error');
editPersonFormDiv3.setAttribute('data-errormsg', '');

// edit label 3 email
let editPersonEmailLabel = document.createElement('label');
editPersonEmailLabel.innerHTML = 'Ange nytt email adress';
editPersonFormDiv3.append(editPersonEmailLabel);
editPersonEmailLabel.setAttribute('for', 'input-email');

let editPersonEmailInput = document.createElement('input');
editPersonEmailInput.innerHTML = '';
editPersonFormDiv3.append(editPersonEmailInput);
editPersonEmailInput.setAttribute('type', 'text');
editPersonEmailInput.setAttribute('id', 'input-email');

// edit form button
let editFormSubmitButton = document.createElement('button');
editFormSubmitButton.innerHTML = 'Ändra';
editPersonForm.append(editFormSubmitButton);
editFormSubmitButton.setAttribute('id', 'editFormSubmitBtn');
editFormSubmitButton.setAttribute('class', 'disable-button');

let editFormCancelButton = document.createElement('button');
editFormCancelButton.innerHTML = 'Avbryt';
editPersonForm.append(editFormCancelButton);
editFormCancelButton.setAttribute('id', 'editFormCancelBtn');

