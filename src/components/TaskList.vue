<template>
  <div>
    <h2>Task List</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Date</th>
          <th>Priority</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td>{{ task.title }}</td>
          <td>{{ task.description }}</td>
          <td>{{ task.date }}</td>
          <td>{{ task.priority }}</td>
          <td>
            <button class="btn btn-sm btn-primary" @click="edit()">Edit</button>
            <button class="btn btn-sm btn-danger" @click="remove()">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  props: {
    tasks: Array
  },
  methods: {
    edit() {
      // Implementieren der Bearbeiten-Funktion
    },
    remove() {
      // Implementieren der Löschen-Funktion
    }
  }
};
</script>

<style>
/* Implementieren des Stylings der TaskList-Komponente */
</style>
