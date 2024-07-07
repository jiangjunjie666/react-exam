import React from 'react'
import Header from './header'
import Menu from './menu'
import { Outlet } from 'react-router-dom'
import useIsShowHeader from '@/hooks/useIsShowHeader'
import useIsShowMenu from '@/hooks/useIsShowMenu'
function Layout() {
  const isShowMenu = useIsShowMenu()
  const isShowHeader = useIsShowHeader()
  return (
    <div className="layout">
      <div className="layout-header">{isShowHeader ? <Header /> : null}</div>
      <div className="layout-nav">{isShowMenu ? <Menu /> : null}</div>
      <div className="layout-content">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
