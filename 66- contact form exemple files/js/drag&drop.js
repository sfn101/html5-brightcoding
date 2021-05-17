const item = document.querySelector(".item");
const boxes = document.querySelectorAll(".box");

item.addEventListener("dragstart", dragStart);
item.addEventListener("dragend", dragEnd);

function dragStart() {
    this.className += " hold";
    setTimeout(() => (this.className = "inves"), 0);
}

function dragEnd() {
    this.className = "item";
}

for (const box of boxes) {
    box.addEventListener("dragover", dragOver);
    box.addEventListener("dragleave", dragLeave);
    box.addEventListener("dragenter", dragEnter);
    box.addEventListener("drop", dragDrop);
}

function dragOver(e) {
    e.preventDefault();
}
function dragLeave() {
    this.className = "box";
}
function dragEnter(e) {
    this.className += " hovered";
}
function dragDrop() {
    this.className = "box";
    this.append(item);
}
