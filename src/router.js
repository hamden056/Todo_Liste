import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '@/components/TodoList'
import TaskList from '@/components/TaskList'
import TaskItem from '@/components/TaskItem'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/tasks',
      name: 'TaskList',
      component: TaskList
    },
    {
      path: '/tasks/:id',
      name: 'TaskItem',
      component: TaskItem
    }
  ]
})

export default router
