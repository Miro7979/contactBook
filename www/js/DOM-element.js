// Two ways to find the body element
// (a shortcut: let body = document.body;)
let body = document.querySelector('body');

// Different ways to insert a html-element in the dom:
// append, prepend before, after, replaceWith

// let header = document.createElement('h1');
// header.innerHTML = 'Kontakt Bok';
// body.append(header);

// let h3 = document.createElement('h3');
// h3.innerHTML = 'Skapa kontakt: ';
// body.append(h3);

// let contactName = document.createElement('h5');
// contactName.innerHTML = 'Namn: ';
// body.append(contactName);

// let inputForName = document.createElement('input');
// inputForName.innerHTML = 'Skriv ditt namn här';
// body.append(inputForName);

// let phoneInput = document.createElement('h5');
// phoneInput.innerHTML = 'Telefonnummer: ';
// body.append(phoneInput);

// let inputForPhoneNumber = document.createElement('input');
// inputForPhoneNumber.innerHTML = 'Skriv ditt telefonnummer här';
// body.append(inputForPhoneNumber);

// let emailInput = document.createElement('h5');
// emailInput.innerHTML = 'Email: ';
// body.append(emailInput);

// let inputForEmail = document.createElement('input');
// inputForEmail.innerHTML = 'Skriv ditt email här';
// body.append(inputForEmail);

// let submitContact = document.createElement('button');
// submitContact.innerHTML = 'Skapa kontakt: ';
// body.append(submitContact);

// submitContact.setAttribute('class', 'saveContact');
// Create a new HTML-element
// and add it as a child to the body
let div = document.createElement('div');
div.innerHTML = '';
body.append(div);
div.setAttribute('class', 'table-container');

let div2 = document.createElement('div');
div2.innerHTML = '';
div.append(div2);
div2.setAttribute('class', 'table-row');

let div3 = document.createElement('div');
div3.innerHTML = 'Namn';
div2.append(div3);
div3.setAttribute('class', 'table-column header');

let div4 = document.createElement('div');
div4.innerHTML = 'Telefonnummer';
div2.append(div4);
div4.setAttribute('class', 'table-column header');

let div5 = document.createElement('div');
div5.innerHTML = 'Email';
div2.append(div5);
div5.setAttribute('class', 'table-column header');

let span = document.createElement('span');
span.innerHTML = '';
div.append(span);
span.setAttribute('id', 'tableBody');
// modal
let div6 = document.createElement('div');
div6.innerHTML = '';
body.append(div6);
div6.setAttribute('class', 'disable-modal');
div6.setAttribute('id', 'backdrop');

let div7 = document.createElement('div');
div7.innerHTML = '';
body.append(div7);
div7.setAttribute('class', 'disable-modal');
div7.setAttribute('id', 'newPersonModal');

let modalHeader = document.createElement('h1');
modalHeader.innerHTML = 'Skapa ny kontakt: ';
div7.append(modalHeader);
// label 1
let label = document.createElement('label');
label.innerHTML = 'Namn';
div7.append(label);
label.setAttribute('for', 'newPersonName');

let input = document.createElement('input');
input.innerHTML = '';
div7.append(input);
input.setAttribute('type', 'text');
input.setAttribute('id', 'newPersonName');
// label 2
let label2 = document.createElement('label');
label2.innerHTML = 'Telefonnummer';
div7.append(label2);
label2.setAttribute('for', 'newPersonPhone');

let input2 = document.createElement('input');
input2.innerHTML = '';
div7.append(input2);
input2.setAttribute('type', 'text');
input2.setAttribute('id', 'newPersonPhone');

// label 3
let label3 = document.createElement('label');
label3.innerHTML = 'Email';
div7.append(label3);
label3.setAttribute('for', 'newPersonEmail');

let input3 = document.createElement('input');
input3.innerHTML = '';
div7.append(input3);
input3.setAttribute('type', 'text');
input3.setAttribute('id', 'newPersonEmail');

// modal button
let modalButtonCancel = document.createElement('button');
modalButtonCancel.innerHTML = 'Avbryt';
div7.append(modalButtonCancel);
modalButtonCancel.setAttribute('id', 'newPersonCancelBtn');

let modalButtonSubmit = document.createElement('button');
modalButtonSubmit.innerHTML = 'Ok';
div7.append(modalButtonSubmit);
modalButtonSubmit.setAttribute('id', 'newPersonSubmitBtn');
// // Create another element - a p-tag
// let p = document.createElement('p');
// p.innerHTML = 'Hi! I am a p-tag!';
// div.append(p);

// // You can also remove an element from the dom
// // p.remove();

// // And put it back
// div.before(p);

// // another div tag
// let div2 = document.createElement('div');
// div2.innerHTML = 'I am another div!';
// body.append(div2);

// // let's set some attribute
// div2.setAttribute('class', 'fine-div');

// // you can also read an attribute
// console.log(div2.getAttribute('class'));