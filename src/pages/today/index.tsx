import { useImmer } from 'use-immer'
import {
  List,
  ListSubheader,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
} from '@mui/material'

import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined'

interface PropsType {
  id: number
  checked: boolean
}

export default function Today() {
  const [list, setList] = useImmer([
    {
      id: 1,
      title: '学习',
      content: '',
      checked: false,
    },
    {
      id: 2,
      title: '运动',
      content: '',
      checked: false,
    },
    {
      id: 3,
      title: '吃饭',
      content: '',
      checked: false,
    },
    {
      id: 4,
      title: '洗澡',
      content: '',
      checked: false,
    },
  ])

  // 切换完成状态
  const changeTask = ({ id, checked }: PropsType) => {
    const index = list.findIndex((item) => item.id === id)
    setList((draft) => {
      draft[index].checked = !checked
    })
  }

  // 渲染
  const renderlist = (checked: boolean) => {
    const arr = list.filter((item) => item.checked === checked)
    return (
      <>
        <ListSubheader component="div">
          {checked ? `已完成 ${arr.length}` : `未完成 ${arr.length}`}
        </ListSubheader>
        {arr.map((item) => (
          <ListItem
            disablePadding
            key={item.id}
            divider
            secondaryAction={
              <IconButton edge="end" onClick={() => previewContent(item.id)}>
                <ContentPasteSearchOutlinedIcon />
              </IconButton>
            }>
            <ListItemButton onClick={() => changeTask(item)}>
              <ListItemIcon>
                <Checkbox edge="start" checked={item.checked} disableRipple />
              </ListItemIcon>
              <ListItemText
                className={checked ? 'line-through text-gray-400' : ''}
                primary={item.title}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </>
    )
  }

  // 查看内容
  const previewContent = (id: number) => {
    console.log(id)
  }

  return (
    <>
      <List
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
        }}>
        {/* <ListSubheader component="div">未完成</ListSubheader> */}
        {renderlist(false)}

        {/* <ListSubheader component="div">已完成</ListSubheader> */}
        {renderlist(true)}
      </List>
    </>
  )
}
