function myFunction() {
    document.getElementById("list").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.main__dropbtn')) {

        var dropdowns = document.getElementsByClassName("main__dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
var menuItems = document.getElementsByClassName('main__item');
var onClick = function (event) {
    event.preventDefault();

    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove('active');
    }

    event.currentTarget.classList.add('active');
};

for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', onClick, false);
}
var items = document.querySelectorAll("#list a");
for(var i = 0; i < items.length; i++)
{
items[i].onclick = function(){
document.getElementById("txt").value = this.innerHTML;
};
}
function insertValue()
{
    var select = document.getElementById("list"),
        txtVal = document.getElementById("txt").value,
        newOption = document.createElement("li a"),
        newOptionVal = document.createTextNode(txtVal);

    newOption.appendChild(newOptionVal);
    select.insertBefore(newOption,select.firstChild);
}
