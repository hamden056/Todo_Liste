import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    editTask(state, task) {
      const index = state.tasks.findIndex(t => t.id === task.id);
      if (index !== -1) {
        state.tasks.splice(index, 1, task);
      }
    },
    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter(task => task.id !== taskId);
    }
  },
  actions: {
    addTask(context, task) {
      context.commit("addTask", task);
    },
    editTask(context, task) {
      context.commit("editTask", task);
    },
    deleteTask(context, taskId) {
      context.commit("deleteTask", taskId);
    }
  }
});
