let colorSelect = document.getElementById('colorSelect');
let button = document.querySelector('input[type="button"]');

function removeSelectedColor() {
    let selectedOption = colorSelect.options[colorSelect.selectedIndex];
    colorSelect.removeChild(selectedOption);
}

button.addEventListener("click", removeSelectedColor);
