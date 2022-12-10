// Business Logic for Todo List
function todoList(){
    this.lists = {};
    this.currentId = 0;
}

// todo list prototype to add list
todoList.prototype.addList = function(list){
    list.id = this.assignId();
    this.lists[list.id] = list;
};

// todo list prototype to assign id
todoList.prototype.assignId = function(){
    this.currentId += 1;
    return this.currentId;
};

// todo list protptype to find list
todoList.prototype.findList = function(id){
    if(this.list[id] != undefined){
        return this.list[id];
    }
    return false;
};

// todo list prototype to delete list
todoList.prototype.deleteList = function (id){
    if(list[id] === undefined){
        return false;
    }
    delete this.lists[id];
    return true;
};

// further business logic
function List(description, reminderDate, reminderTime){
    this.description = description;
    this.reminderDate = reminderDate;
    this.reminderTime = reminderTime;
};


// user interface

let todolist = new TodoList();

// function to display list
function displayList(todoListDisplay){
    let contactList = $("ul#my-list");
    let htmlListInfo = "";
    Object.keys(todoListDisplay.lists).forEach(function(key){
        const list = todoListDisplay.findList(key);
        htmlListInfo += "<li id=" + contact.id + ">" + "</li>";
    });
    contactList.html(htmlListInfo);
};

// function to show list
function showList(contactId){
    const list = todoList.findList(contactId);
    $("#show-list").show();
    $(".event").html(list.description);
    $(".date").html(list.reminderdate);
    $(".time").html(list.reminderTime);
    let buttons = $("#button");
    buttons.empty();
    buttons.append("<button class='deleteButton' id=" + + contact.id + ">Clear</button>");
};

// function for event bubbling
function addTodoListener(){
    $("#my-list").on("click", "li", function (){
        showList(this.id);
    });
};

// 