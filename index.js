//Check local storge is browser support.

function CheckBrowser() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        return true;
    } else {
        return false;
    }
}

//console.log(CheckBrowser()); //comment out for testing

function doShowAll() {
    if (CheckBrowser()) {
        let key = '';
        let list = "<tr><th>Item</th><th>Value</th></tr>\n";

        for (let i = 0 ; i <= localStorage.length-1; i++) {
            key =localStorage.key(i);
            list += "<tr><td>" + key + "</td>\n<td>"
             + localStorage.getItem(key) + "</td></tr>\n";
        }

        if ( list == "<tr><th>Item</th><th>Value</th></tr>\n") {
            list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
        } document.getElementById('list').innerHTML = list;

    } else {
        alert('Cannot save shopping list to your browser. Not supported by HTML5');
    }
};

function SaveItem() {
    let name = document.forms.ShoppingList.name.value;
    let data = document.forms.ShoppingList.data.value;
    localStorage.setItem(name, data);
    doShowAll();
};

function ModifyItem() {
    let name1 = document.forms.ShoppingList.name.value;
    let data1 = document.forms.ShoppingList.data.value;

    if (localStorage.getItem(name1) != null) {
            localStorage.setItem(name1, data1);
            document.forms.ShoppingList.data.value = localStorage.getItem(name1);
    }
    doShowAll();
};

function RemoveItem() {
    let name = document.forms.ShoppingList.name.vale;
    document.forms.ShoppingList.data.value = localStorage.removeItem(name);
    doShowAll();
};

function ClearAll() { 
    localStorage.clear();
    doShowAll();  
};

/*
*Future update pending....
*
*/
