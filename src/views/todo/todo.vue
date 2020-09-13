<template>
  <div>
    <section class="todoapp">
      <header class="header">
        <h1>todos:{{ todos.length }}</h1>
        <div class="input-box">
          <input
            type="checkbox"
            id="toggle-all"
            class="toggle-all"
            v-model="allDone"
          />
          <input
            class="new-todo"
            autocomplete="off"
            placeholder="what needs to be done?"
            v-model="newTodo"
            @keyup.enter="addTodo"
          />
        </div>
      </header>
      <section class="main" v-show="todos.length">
        <label for="toggle-all"></label>
        <li
          v-for="todo in filteredTodos"
          :key="todo.id"
          class="todo"
          :class="{ completed: todo.completed, editing: todo == editedTodo }"
        >
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed" />
            <label @click="editTodo(todo)">{{ todo.title }} </label>
            <button class="destroy" @click="removeTodo(todo)">xxx</button>
            <input
              class="edit"
              type="text"
              v-model="todo.title"
              v-todo-focus="todo == editedTodo"
              @blur="doneEdit(todo)"
              @keyup.enter="doneEdit(todo)"
              @keyup.esc="cancelEdit(todo)"
            />
          </div>
        </li>
      </section>
      <footer class="footer" v-show="true" v-cloak>
        <li>
          {{ remaining }}
          {{ remaining | pluralize }} left
        </li>
        <li>
          <a href="/all" :class="{ selected: visibility == 'all' }">ALL</a>
        </li>
        <li>
          <a href="/active" :class="{ selected: visibility == 'active' }"
            >active</a
          >
        </li>
        <li>
          <a href="/completed" :class="{ selected: visibility == 'completed' }"
            >completed</a
          >
        </li>
        <button
          class="clear-completed"
          @click="removeCompleted"
          v-show="todos.length > remaining"
        >
          clear-completed
        </button>
      </footer>
    </section>
  </div>
</template>

<script>
var STOREAGE_KEY = "todos";
var todoStorage = {
  fetch: function() {
    var todos = JSON.parse(localStorage.getItem(STOREAGE_KEY) || "[]");
    todos.forEach(function(todo, index) {
      todo.id = index;
    });
    todoStorage.uid = todos.length;
    return todos;
  },
  save: function(todos) {
    localStorage.setItem(STOREAGE_KEY, JSON.stringify(todos));
  },
};

var myfilters = {
  all: function(todos) {
    return todos;
  },
  active: function(todos) {
    return todos.filter((todo) => !todo.completed);
  },
  completed: function(todos) {
    return todos.filter((todo) => todo.completed);
  },
};

export default {
  name: "todolist",
  data() {
    return {
      todos: todoStorage.fetch(),
      newTodo: "",
      editedTodo: null,
      visibility: "all",
    };
  },
  watch: {
    todos: {
      handler(todos) {
        todoStorage.save(todos);
      },
      deep: true,
    },
  },
  computed: {
    filteredTodos() {
      return myfilters[this.visibility](this.todos);
    },
    remaining() {
      return myfilters.active(this.todos).length;
    },
    allDone: {
      get() {
        return this.remaining === 0;
      },
      set(value) {
        this.todos.forEach(function(todo) {
          todo.completed = value;
        });
      },
    },
  },
  filters: {
    pluralize(n) {
      return n === 1 ? "item" : "items";
    },
  },
  methods: {
    addTodo() {
      console.log("adding");
      var value = this.newTodo && this.newTodo.trim();
      if (!value) {
        console.log("value", value);
        return;
      }
      this.todos.push({
        id: todoStorage.uid++,
        title: value,
        completed: false,
      });
      this.newTodo = ""; //  清空输入栏
    },
    removeTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
    editTodo(todo) {
      console.log("before edit", todo.title);
      this.beforeEditCache = todo.title;
      this.editedTodo = todo;
    },
    doneEdit(todo) {
      console.log(todo.title);
      if (!this.editedTodo) {
        return;
      }
      this.editedTodo = null;
      todo.title = todo.title.trim();
      if (!todo.title) {
        this.removeTodo(todo);
      }
    },
    cancelEdit(todo) {
      console.log("cancel edit");
      this.editedTodo = null;
      todo.title = this.beforeEditCache;
    },
    removeCompleted() {
      this.todos = myfilters.active(this.todos);
    },
  },
  directives: {
    "todo-focus": function(el, binding) {
      if (binding.value) {
        el.focus();
      }
    },
  },
};
</script>

<style>
@import "./style.css";
</style>
