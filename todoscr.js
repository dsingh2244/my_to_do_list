let inpnewtask = $('#inpnewtask');
let btnadd = $('#btnadd');
let btnclear = $('#btnclear');
let ultask = $('#ultask');
let btncleanup = $('#btncleanup');

function addli() {
    let listitem = $('<li>', {
        'class': 'list-group-item',
        text: inpnewtask.val()
    })
    listitem.click(function() {
        listitem.toggleClass("done");
    })
    ultask.append(listitem);
    inpnewtask.val('');
}

function cleanup() {
    $('#ultask .done').remove();
}

inpnewtask.keypress(function(e) {
    if (e.which == 13) {
        addli();
    }
})
btnadd.click(addli);
btncleanup.click(cleanup);

btnclear.click(function() {
    inpnewtask.val('');
});