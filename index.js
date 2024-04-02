const input = document.getElementById('button')
function addingEventListener() {
    alert('I\'m clicked');
    input.addEventListener('click', addingEventListener);
}
