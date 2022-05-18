// import React from 'react'
import Router from '../routes'
// import Navbar from './navbar'
import Appbar from './appbar'

export default function Layout() {
  return (
    <>
      <Appbar />
      <div>
        {/* 路由区域、内容 */}
        <Router></Router>
      </div>
    </>
  )
}
