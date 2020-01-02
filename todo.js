const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}
/*cleanToDos , filter 가 하는 일은 filterFN체크가 된
아이템들을 array로 만들어 주는 것*/
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
} /*js는 object 를 string으로 저장하려고 그래서 JSON 사용한대
JSON은 JavaScript Object Notation 줄임말*/

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(delBtn); /*btn버튼을 li안에 넣는다는 뜻*/
  li.id = newId;  /*이거 괄호 안하는듯 */
  li.appendChild(span);
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos(); /*push한 이후에 호 전에하면 todo에 아무것도 없 */
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
      const parsedToDos = JSON.parse(loadedToDos);
      parsedToDos.forEach(function(toDo) {
        paintToDo(toDo.text);
      });
  }
}


function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
