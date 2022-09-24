let inpnewtask = $('#inpnewtask');
let btnadd = $('#btnadd');
let btnclear = $('#btnclear');
let ultask = $('#ultask');
let btncleanup = $('#btncleanup');
let btnsort = $('#btnsort');
let uldone = $('#ultask .done');
let cnt = 0;

function addli() {
    let listitem = $('<li>', {
        'class': 'list-group-item',
        text: inpnewtask.val()
    })
    listitem.click(function() {
        listitem.toggleClass("done");
        cnt++;
        togglebtnclear();
    })
    ultask.append(listitem);
    inpnewtask.val('');
    togglebtnclear();
}

function cleanup() {
    $('#ultask .done').remove();
    cnt = 0;
    togglebtnclear();
}

function sort() {
    $('#ultask .done').appendTo(ultask);
}

function togglebtnclear() {
    btnclear.prop('disabled', inpnewtask.val() == '')
    btnadd.prop('disabled', inpnewtask.val() == '')
    btncleanup.prop('disabled', cnt < 1)
    btnsort.prop('disabled', cnt < 1)
}

inpnewtask.keypress(function(e) {
    if (e.which == 13) {
        addli();
    }
})

inpnewtask.on('input', togglebtnclear)
btnadd.click(addli);
btncleanup.click(cleanup);
btnsort.click(sort);

btnclear.click(function() {
    inpnewtask.val('');
    togglebtnclear();
});