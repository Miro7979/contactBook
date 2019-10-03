const tableKey = 'table';

let clearBtn = window.addEventListener('click', e => {
    if (e.target.closest('#clearLocalStoragebtn')) {
        console.log('du klickade localStorage knappen');
    }
})

let contactTable;
let contactTableDemo = {
    'Miro Neo': {
        'telefonnummer': '0761098591',
        'email': 'miro@minakontakter.nu'
    },
    'Draken Game': {
        'telefonnummer': '0761051565',
        'email': 'draken@minakontakter.nu'
    },
};