
let list = document.querySelector('#todoList');
function addTodo(e) {
  // 追加するテキスト取得
  let addText = document.getElementById('addText').value;
  // テキストが入力されているか判定
  if(addText) {
    let todoList = document.getElementById('todoList');
    let listHTML = '';
    listHTML += `
    <div class="todo_list">
      <p class="todo_contents">${ addText }</p>
      <button type="button" class="delete">-</button>
    </div>`;
    // #todoListの閉じタグの前に挿入
    todoList.insertAdjacentHTML('beforeend', listHTML);
    // 入力フォームリセット
    document.getElementById('addText').value = '';
  }
}
document.querySelector('#add').addEventListener('click', addTodo);

// 削除機能
function deleteList(e) {
  if (e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
  console.log(e.target.classList);
}
list.addEventListener('click', deleteList);

