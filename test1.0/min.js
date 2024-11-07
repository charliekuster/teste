function filterList(inputId, listId) {
    const input = document.getElementById(inputId);
    const filter = input.value.toLowerCase();
    const ul = document.getElementById(listId);
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        const textValue = li[i].textContent || li[i].innerText;
        if (textValue.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}