import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Redirect from '@/utils/redirect'

import Today from '@/pages/today'
import Month from '@/pages/month'

const routes: any = [
  {
    path: 'today',
    component: Today,
  },
  {
    path: 'month',
    component: Month,
  },
]

const Router = () => (
  <Routes>
    <Route path="/" element={<Redirect to="/today" />}></Route>
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
