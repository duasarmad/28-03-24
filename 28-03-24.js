window.onload = function(){
    var btn = document.getElementById("btnAdd");
    btn.onclick = AddToDo;
};
function AddToDo(){
var myinput = document.getElementById("myinput").value;
var todos =  document.getElementById("todos");
var newtextnode = document.createTextNode(myinput);
var newLi = document.createElement("li");
newLi.appendChild(newtextnode);
todos.appendChild(newLi);

}
function handleDelete(e){
    var tag = e.target;
    var li = tag.parentNode;
li.parentNode.removeChild(li);

}
console.log("Starting");
function handleBindings(){
    console.log("Handle Bindings");
}
function doBindings(){
    console.log("Do Bindings");
    var btn = document.getElementById("btnAdd");
    btn.onclick = handleBindings; //passing reference
}
window.onload = doBindings;
console.log("Finished");