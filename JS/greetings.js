const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// string만 포함된 변수는 대문자로 뵤기하고 string저장하고 싶을 때 사용(관습)
// loginForm처럼 중요 정보 담은거 아니라서 대문자로 작성
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);
const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");

function onLoginSubmit(event) {
  // 값을 제출 시 input value를 받아서 localStorage에 저장하고, form은 안보이게, 환영인사 띄우기
  event.preventDefault();
  // 브라우저는 form을 submit하면 페이지를 새로고침함. 이를 막는 코드.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);

  // paintGreetings(username);

  paintGreetings();
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  toDoList.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// onLoginSubmit()로 넣으면 함수로써 바로 실행됨, 매개변수로 넣어주면 원하는 때에 실행해줌.

if (savedUsername === null) {
  // login보이게
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // greetings보이게
  paintGreetings();
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  toDoList.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
}
