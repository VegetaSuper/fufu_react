import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material'
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import LocationOnIcon from '@mui/icons-material/LocationOn'

export default function Navbar() {
  const [value, setValue] = useState('/today')
  const navigate = useNavigate()

  const handleChange = (event: any, newValue: string) => {
    setValue(newValue)
    navigate(newValue)
  }

  return (
    <Box className="border-t w-full fixed bottom-0">
      <BottomNavigation showLabels value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="日历"
          icon={<CalendarMonthOutlinedIcon />}
          value="/month"
        />
        <BottomNavigationAction
          label="任务"
          icon={<AssignmentTurnedInOutlinedIcon />}
          value="/today"
        />
        <BottomNavigationAction
          label="我的"
          value="/my"
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
    </Box>
  )
}
