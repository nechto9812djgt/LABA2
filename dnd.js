let draggedItem = null;

document.addEventListener('dragstart', function(event) {
    draggedItem = event.target;
});

document.addEventListener('dragover', function(event) {
    event.preventDefault();
});

document.addEventListener('drop', function(event) {
    event.preventDefault();
    if (event.target.classList.contains('dropzone')) {
        event.target.appendChild(draggedItem);
    }
    draggedItem = null;
});

document.addEventListener('dragend', function(event) {
    if (draggedItem) {
        document.body.appendChild(draggedItem);
    }
});