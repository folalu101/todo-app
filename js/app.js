// Business Logic for Todo List
function todoList(){
    this.lists = {};
    this.currentId = 0;
}

// todo list prototype to add list
todoList.prototype.addList = function(list){
    list.id = this.assignId();
    this.lists[list.id] = list;
}

// todo list prototype to assign id
todoList.prototype.assignId = function(){
    this.currentId += 1;
    return this.currentId;
}

// 