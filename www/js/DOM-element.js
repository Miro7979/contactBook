// DOM element begin
let body = document.querySelector('body');

// div container
let div = document.createElement('div');
div.innerHTML = '';
body.append(div);
div.setAttribute('class', 'table-container');

// div row
let div2 = document.createElement('div');
div2.innerHTML = '';
div.append(div2);
div2.setAttribute('class', 'table-row');

// div column
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
