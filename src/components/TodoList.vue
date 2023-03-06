<template>
  <div class="container">
    <h1 class="mt-4">Todo List</h1>
    <div class="row mt-4">
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" v-model="newTask.title" id="title" placeholder="Enter task title">
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <textarea class="form-control" v-model="newTask.description" id="description" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label for="date">Due Date</label>
            <input type="date" class="form-control" v-model="newTask.date" id="date">
          </div>
          <div class="form-group">
            <label for="priority">Priority</label>
            <select class="form-control" v-model="newTask.priority" id="priority">
              <option value="">Select priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary" @click.prevent="addTask">Add Task</button>
        </form>
      </div>
      <div class="col-md-6">
        <div v-if="tasks.length === 0" class="alert alert-info">No tasks yet</div>
        <div v-else>
          <task-item v-for="task in tasks" :key="task.id" :task="task" @edit-task="editTask" @delete-task="deleteTask" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskItem from "./TaskItem.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "TodoList",
  components: {
    TaskItem
  },
  data() {
    return {
      newTask: {
        title: "",
        description: "",
        date: "",
        priority: ""
      }
    };
  },
  computed: {
    ...mapState(["tasks"])
  },
  methods: {
    ...mapActions(["addTask", "editTask", "deleteTask"]),
    addTask() {
      const task = {
        id: Date.now(),
        ...this.newTask
      };
      this.addTask(task);
      this.newTask = {
        title: "",
        description: "",
        date: "",
        priority: ""
      };
    }
  }
};
</script>

<style>
</style>
