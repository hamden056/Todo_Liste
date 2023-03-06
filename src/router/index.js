import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '@/components/TodoList'
import TaskList from '@/components/TaskList'
import TaskItem from '@/components/TaskItem'


  const routes = [
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

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
 

export default router
