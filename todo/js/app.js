
document.getElementById('add').onclick = function(){
//get item and add it to the list
  var item = document.getElementById('input').value;
  var li = document.createElement('li');
  li.innerHTML = item + "  <button class='delete'>remove</button>";
  var ol = document.getElementById('list');
  ol.appendChild(li);
  //clear input
  document.getElementById('input').value = "";
  //add event listeners to list item buttons
  addListener();
  console.log(item)
};


function addListener(){
  var deletables = document.getElementsByClassName("delete");
  for (var i = 0; i < deletables.length; i++) {
    deletables[i].addEventListener('click', remove, false);
  }
}

function remove(){
  var list = this.parentNode.parentNode
  var item = this.parentNode;
  list.removeChild(item);
}





