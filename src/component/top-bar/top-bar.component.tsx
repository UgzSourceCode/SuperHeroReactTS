import React, { ReactNode } from 'react'
import ITopBarItem from '../../interface/ITopBarItem'
import { TopBarItem } from './top-bar-tem.component'
import "./top-bar.styles.css"

const menuItems: ITopBarItem[] = [{
    name: "Home",
    address: "/"
  }, {
    name: "Random",
    address: "/random"
  }, {
    name: "About project",
    address: "/about"
  }
]

export const TopBar = () => {

  const prepareMenuItems = () : ReactNode => {
    let key: number = 0;
    return menuItems.map((item) => {
      key++;
      return <TopBarItem
              key={key}
              name={item.name}
              address={item.address}
             />;
    })
  }
  return (
    <div className="menu">
      {prepareMenuItems()}
    </div>
  )
}
