let inpnewtask = $('#inpnewtask');
let btnadd = $('#btnadd');
let btnclear = $('#btnclear');
let ultask = $('#ultask');

btnadd.click(function() {
    let listitem = $('<li>', {
        'class': 'list-group-item',
        text: inpnewtask.val()
    })
    ultask.append(listitem);
    inpnewtask.val('');
});

btnclear.click(function() {

});