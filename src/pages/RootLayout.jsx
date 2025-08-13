import React from 'react'
import { TodoNav } from '../components/TodoNav'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
      <TodoNav />
      <Outlet />
    </>
  )
}

export default RootLayout
