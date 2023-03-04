<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ task.title }}</h5>
      <p class="card-text">{{ task.description }}</p>
      <p class="card-text">{{ task.date }}</p>
      <p class="card-text">{{ task.priority }}</p>
      <button class="btn btn-sm btn-primary" @click="editTask(task)">Edit</button>
      <button class="btn btn-sm btn-danger" @click="removeTask(task)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  props: {
    task: Object
  },
  methods: {
    editTask() {
      this.$emit("edit-task", this.task);
    },
    removeTask() {
      this.$emit("delete-task", this.task.id);
    }
  }
};
</script>

<style>
/* Implementieren des Stylings der TaskItem-Komponente */
</style>
