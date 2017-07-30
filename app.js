let cheerio = require('cheerio');

function crawling() {
    const str_url = $('#input_url').val();
    $.ajax( {
        url:str_url,
        success:function(data) {
            $('#textvw').val(data);
            const Ch = cheerio.load(data);
            const arr = [];

            Ch(".submenu a").each(function() {
                const data = $(this);
                arr.push(data.text());
            });
            console.log(arr);
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    crawling();
});