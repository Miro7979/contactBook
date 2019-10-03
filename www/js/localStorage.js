// Initial read
let store;
try {
    store = JSON.parse(localStorage.store);
}
catch (e) {
    store = {};
}

store.save = function () {
    localStorage.store = JSON.stringify(this);
};



if (!store.submitContact) {
    // This should only run once
    // because on next page load there should
    // be a saved admin in the store
    console.log('Creating contact');
    store.submitContact = { name: 'Tom', status: 'new contact' };
    store.save();
}

console.log(store.submitContact)