import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'

import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'

interface PropsType {
  open: boolean
  onClick: () => void
}

const list = [
  {
    path: '/today',
    title: '任务列表',
    icon: <AssignmentTurnedInOutlinedIcon />,
  },
  {
    path: '/month',
    title: '日历视图',
    icon: <CalendarMonthOutlinedIcon />,
  },
]

export default function MyDrawer({ open, onClick }: PropsType) {
  const active = useLocation().pathname

  return (
    <Drawer anchor="left" open={open} onClose={onClick}>
      <Box sx={{ width: 200 }} role="presentation" onClick={onClick}>
        <Typography variant="h6" noWrap component="div">
          TodoList
        </Typography>
        <List disablePadding>
          {list.map((item) => {
            return (
              <Link to={item.path} key={item.path}>
                <ListItemButton selected={active === item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </Link>
            )
          })}
        </List>
      </Box>
    </Drawer>
  )
}
