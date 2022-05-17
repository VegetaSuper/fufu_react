// import React from 'react'
import Router from '../routes'

export default function Layout() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-2/3 h-3/4 shadow-lg bg-white flex">
        {/* 左侧菜单 */}
        <div className="w-1/5 bg-gray-50">
          <div className=" flex items-center justify-center p-5">待办事项</div>
          菜单
        </div>

        {/* 路由区域、内容 */}
        <div className="w-3/5">
          <Router></Router>
        </div>
        <div className="w-1/5">内容区域</div>
      </div>
    </div>
  )
}
