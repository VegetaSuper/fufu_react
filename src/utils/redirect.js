import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// react-router-dom v6 路由重定向
export default function Redirect ({ to }) {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(to)
  })
  return null
}
