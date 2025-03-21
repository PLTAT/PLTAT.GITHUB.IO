
/*
JavaScript
function () { }
*/

// search.js

/*
Go
*/


// the html load done
window.onload = function () {
    // add a 'keydown' type "listener event" for 'ServerInput' | 'search' is script name
    document.getElementById('search_input').addEventListener('keydown', function (search) {
        // 'Enter' key or 'NumpadEnter' key
        if (search.key === 'Enter' || search.key === 'NumpadEnter') {
            // ban Default do
            search.preventDefault();
            // open window | '_blank' is new tab | '//www.bing.com/search?q=' is link "+ document.getElementById('search_input').value" is add 'search_input' to the end
            // | // is unsure web link | / is file | some web is 'www.webdnsname' not just 'webdnsname' | some web did't have http jump to https so use // is good
            window.open('//www.bing.com/search?q=' + document.getElementById('search_input').value, '_blank');
        }
    });
}


/*
End
*/
