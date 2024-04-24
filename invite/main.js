const refs = {
  christmasTree: document.querySelector(".container_tree"),
};
console.log(refs.christmasTree);
const { christmasTree } = refs;

// Флаг для отслеживания состояния перемещения
let isDragging = false;

// Начальные координаты касания
let initialX;
let initialY;

// Начальные координаты объекта при касании
let offsetX;
let offsetY;

// Функция для начала перемещения объекта
function startDragging(event) {
  isDragging = true;
  let touch = event.touches[0];
  initialX = touch.clientX;
  initialY = touch.clientY;
  offsetX = christmasTree.offsetLeft;
  offsetY = christmasTree.offsetTop;
  // event.preventDefault();
}

// Функция для перемещения объекта
function dragObject(event) {
  if (isDragging) {
    let touch = event.touches[0];
    let deltaX = touch.clientX - initialX;
    let deltaY = touch.clientY - initialY;
    christmasTree.style.left = offsetX + deltaX + "px";
    christmasTree.style.top = offsetY + deltaY + "px";
    // event.preventDefault();
  }
}

// Функция для завершения перемещения объекта
function stopDragging() {
  isDragging = false;
}

// Добавляем обработчики событий
christmasTree.addEventListener("touchstart", startDragging);
document.addEventListener("touchmove", dragObject);
document.addEventListener("touchend", stopDragging);
