import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Redirect from '@/utils/redirect'

import Task from '@/pages/task'

const routes: any = [
  {
    path: 'task',
    component: Task,
  },
]

const Router = () => (
  <Routes>
    <Route path="/" element={<Redirect to="/task" />}></Route>
    {routes.map((item: any) => {
      return (
        <Route
          key={item.path}
          path={item.path}
          element={item.component()}></Route>
      )
    })}
  </Routes>
)

export default Router
