
window.onload = function () {

    document.getElementById('search_input').addEventListener('keypress', function (e) {

        if (e.key === 'Enter') {

            e.preventDefault();

            window.open('//www.bing.com/search?q=' + document.getElementById('search_input').value, '_blank');

        }

    });

}
