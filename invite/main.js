const refs = {
  christmasTree: document.querySelector(".container_tree"),
  forestTree: document.querySelectorAll(".tree"),
};
console.log(refs.christmasTree);
const { christmasTree, forestTree } = refs;

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

// Добавляем обработчики событий
christmasTree.addEventListener("touchstart", startDragging);
document.addEventListener("touchmove", dragObject);
document.addEventListener("touchend", stopDragging);

console.log(forestTree);

//
// Функция для завершения перемещения объекта
function stopDragging() {
  isDragging = false;
  moveChristmasTreeToNearestTree();
}

// Добавляем обработчик события для christmasTree
christmasTree.addEventListener("touchend", stopDragging);

// Добавляем обработчики событий для forestTree
forestTree.forEach((tree) => {
  tree.addEventListener("touchmove", () => {
    if (isDragging) {
      moveChristmasTreeToNearestTree();
    }
  });
});

// Функция для перемещения christmasTree к ближайшему forestTree
// Функция для перемещения christmasTree к ближайшему forestTree
// Функция для перемещения christmasTree к ближайшему forestTree
function moveChristmasTreeToNearestTree() {
  let closestTree = null;
  let minDistance = Infinity;

  forestTree.forEach((tree) => {
    const rectChristmasTree = christmasTree.getBoundingClientRect();
    const rectTree = tree.getBoundingClientRect();

    const distance = Math.sqrt(
      Math.pow(rectTree.left - rectChristmasTree.left, 2) +
        Math.pow(rectTree.top - rectChristmasTree.top, 2)
    );

    if (distance < minDistance && distance < 50) {
      minDistance = distance;
      closestTree = tree;
    }
  });

  if (closestTree) {
    const rectClosestTree = closestTree.getBoundingClientRect();
    christmasTree.style.left = rectClosestTree.left - 10 + "px"; // Сдвигаем christmasTree влево на 10 пикселей
    christmasTree.style.top = rectClosestTree.top - 30 + "px"; // Поднимаем christmasTree выше на 30 пикселей

    if (forestTree[0] === closestTree) {
      redirectToInvitePage();
    }
  }
}

// Функция для перенаправления на страницу invite.html
function redirectToInvitePage() {
  window.location.href = "invite1.html";
}
