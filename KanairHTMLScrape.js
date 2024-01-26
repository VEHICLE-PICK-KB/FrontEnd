document.addEventListener('DOMContentLoaded', function () {
    console.log('Script executed successfully.');

    var table = document.querySelector('table');

    if (table) {
        var rows = table.querySelectorAll('tbody tr');

        rows.forEach(function (row) {
            var cells = row.querySelectorAll('td');

            if (cells.length >= 6) {
                var status = cells[0].textContent.trim();
                var fieldCode = cells[1].textContent.trim();
                var avgasPrice = cells[2].textContent.trim();
                var jetAPrice = cells[3].textContent.trim();
                var mogasPrice = cells[4].textContent.trim();
                console.log('Status:', status);
                console.log('Field Code:', fieldCode);
                console.log('AVGAS 100LL Price:', avgasPrice);
                console.log('JET A-1 Price:', jetAPrice);
                console.log('MOGAS Price:', mogasPrice);
            }
        });
    } else {
        console.error('Table not found on the page.');
    }
});
