const toDoform = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";

let toDos = [];

// toDos저장
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 선택한 특정 todo를 없애기
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

// todo입력한 값을 리스트로 나열하여 보여준다
function paintToDo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;

  const span = document.createElement("span");
  span.innerText = newTodoObj.text;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

// todo입력값을 변수로 만든 뒤 input을 비운다.
function handleToDoSubmit(event) {
  event.preventDefault();

  const newTodo = toDoInput.value;
  toDoInput.value = "";

  // 입력된 값 newTodo를 구별하기 위해 id부여
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);

  paintToDo(newTodoObj);
  saveToDos();
}

toDoform.addEventListener("submit", handleToDoSubmit);

// localstorage에 저장된 TODOS_KEY가져오기

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  // 기존 toDos값을 유지하기
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
