<template>
  <div>
    <div class="todo-container">
      <header class="current-date">
        <div class="date">
          <span class="day-number">{{ date.dayNum }}</span>
          <div class="month-year-wrapper">
            <span class="month">{{ date.month }}</span>
            <span class="year">{{ date.year }}</span>
          </div>
        </div>
        <div class="today">
          <span>{{ date.dayName }}</span>
        </div>
      </header>
      <main class="todo-list">
        <ul class="tasks-container">
          <li
            class="task-container"
            v-for="(task, index) in tasks"
            :key="index"
            v-bind:class="{ checked: task.state }"
          >
            <p>{{ task }}</p>
            <input type="radio" v-on:click="checkTask" />
          </li>
        </ul>
      </main>
      <button class="add-task-btn" v-on:click="addTask">
        <span>+</span>
      </button>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    todos: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      tasks: [],
      task: "",
      date: {
        dayNum: "",
        month: "",
        year: "",
        dayName: "",
      },
    };
  },
  mounted() {
    this.getCurrentDay();
  },
  methods: {
    getCurrentDay() {
      const today = new Date();
      let dayName = moment(today).format("dddd");
      let day_year = moment().format("ll");
      let [monthDay, year] = day_year.split(",");
      let [month, day] = monthDay.split(" ");
      month = month.toUpperCase();
      dayName = dayName.toUpperCase();

      this.date.dayNum = day;
      this.date.month = month;
      this.date.year = year;
      this.date.dayName = dayName;
    },
    addTask() {
      const inputTask = prompt("add a new task");
      console.log(inputTask, typeof inputTask);
      if (inputTask.trim()) {
        var objTask = {
          name: inputTask,
          state: true,
        };
        this.tasks.push(inputTask);
      }
    },
    checkTask(e) {
      const taskElement = e.target.parentNode;
      taskElement.classList.toggle("checked");
    },
  },
  computed: {},
};
</script>

<style>
:root {
  --body-bkg: #f0efe9;
  --todo-bkg: #ffffff;
  --text-color: #5f6271;
  --text-unselected-color: #d7d7dc;
  --control-color: #50e3a4;
}

.welcome-lading {
  width: 100%;
  height: 100%;
}

.todo-container {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.18);
  height: 24em; /*490px*/
  padding: 2em;
  position: relative;
  width: 380px;
}

.todo-container ul {
  list-style: none;
}

.todo-container p {
  margin: 0;
}

.todo-container {
  background-color: var(--todo-bkg);
}

.todo-container header {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.todo-container header .date {
  display: flex;
  justify-content: space-between;
  width: 22%;
}

.todo-container header .date .day-number {
  font-size: 2em;
  font-weight: bold;
  line-height: 1em;
}

.todo-container header .date .month-year-wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 0.8em;
}

.todo-container header .date .month-year-wrapper .month {
  font-weight: bold;
}

.todo-container header .today {
  font-weight: 600;
}

/*TODO BODY*/
.todo-container main.todo-list {
  margin-top: 1em;
}

.todo-container main.todo-list .tasks-container {
  overflow-y: auto;
  max-height: 260px; /*Scroll uando muestra el scroll*/
}

.todo-container main.todo-list .tasks-container li.task-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7em;
}

.todo-container li.task-container.checked p {
  color: var(--text-unselected-color);
  text-decoration: line-through;
  transition: all 500ms ease-in-out;
}

.todo-container li.task-container.checked input {
  border-color: var(--control-color);
  transition: all 500ms ease-in-out;
}

.todo-container input[type="radio"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  border: 3px solid var(--text-unselected-color);
  border-radius: 50%;
  cursor: pointer;
  width: 25px;
  height: 25px;
  outline: none;
}

.todo-container button.add-task-btn {
  background-color: var(--control-color);
  border: none;
  border-radius: 50%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.18);
  cursor: pointer;
  height: 90px;
  width: 90px;
  position: absolute;
  bottom: -45px;
  left: calc(190px - 45px);
  outline: none;
  transition: 200ms ease-in-out;
}

.todo-container button.add-task-btn span {
  font-size: 3em;
  font-weight: bold;
  color: #46be8b;
  font-family: none;
}

.todo-container button.add-task-btn:active {
  transform: scale(0.9);
}
</style>
