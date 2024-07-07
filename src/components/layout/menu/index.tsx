import React, { useState, useEffect } from 'react'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { superAdminMenus, routersData, RouterKeys } from '@/config'
import { useNavigate } from 'react-router-dom'
import usePathKey from '@/hooks/usePathKey'
type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = superAdminMenus

const App: React.FC = () => {
  const [current, setCurrent] = useState('')
  const navigate = useNavigate()
  const key = usePathKey()
  useEffect(() => {
    if (key) {
      setCurrent(key)
    }
  }, [key])

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key)
    navigate(routersData[e.key as RouterKeys].path)
  }

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
}

export default App
