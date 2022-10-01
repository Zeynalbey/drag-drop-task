const items = document.querySelectorAll(".item");
for(let item of items ){
    item.ondragstart = function (e) {
        e.dataTransfer.setData("param", this.id)     
    } 
}
let droparea = document.querySelector("#DropArea")

droparea.ondragover = function (e) {
    e.preventDefault();  
}
droparea.ondrop = function (e) {
    let id = e.dataTransfer.getData("param");
    let newItem = document.getElementById(id)
    droparea.append(newItem)
}



const newItems = document.querySelectorAll(".newItem")
for(let newItem of newItems ){
    newItem.ondragstart = function (e){
        e.dataTransfer.setData("param",this.id)
    }
}   
let dragArea = document.querySelector("#DragArea")

dragArea.ondragover = function (e) {
    e.preventDefault();   
}
dragArea.ondrop = function(e){
    let id = e.dataTransfer.getData('param')
    let item2 = document.getElementById(id)
    dragArea.append(item2)

}


