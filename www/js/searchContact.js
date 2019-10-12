
// const list = document.querySelector('#list');

// function setList(gruop) {
//     clearList();
//     for (const person of gruop) {
//         const item = document.createElement('li');
//         const text = document.createTextNode(person.name);
//         item.append(text);
//         list.append(item);


//     }
//     if (gruop.length === 0) {

//     }

// }

// function clearList() {
//     while (list.firstChild) {
//         list.remove(list.firstChild);
//     }
// }

// function setNoResults() {
//     const item = document.createElement('li');
//     const text = document.createTextNode('Hittade inga kontakter.');
//     item.append(text);
//     list.append(item);
// }

// function getRelevency(value, searchTerm) {
//     if (value === searchTerm) {
//         return 2;
//     } else if (value.startsWith(searchTerm)) {
//         return 1;
//     } else if (value.includes(searchTerm)) {
//         return 0;
//     }
// }
listeners.push(listen('keyup', '#search', e => {
    // const searchInput = document.querySelector('.searchInput');
    console.log(e.target.value);
    let value = e.target.value;
    if (value && value.trim().length > 0) {
        value = value.trim().toLowerCase();
        setList(contactTable.filter(person => {
            console.log('efter trim', contactTable);
            return person.name.includes(value);
        }).sort((personA, personB) => {
            return getRelevency(personB.name, value) - getRelevency(personA.name, value);
        }));
    } else {
        clearList();
    }


}));