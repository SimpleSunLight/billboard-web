import * as React from 'react'

const MenuList: IGloabalSpace.IRouteData[] = [
  {
    title: "首页",
    icon: "home",
    path: "/app",
    component: React.lazy(() => import('@/layouts'))
  },
  {
    title: "Form",
    icon: "home",
    path: "/app/formboard",
    component: React.lazy(() => import('@/pages/form'))
  },
  {
    title: "compass",
    icon: "bars",
    children: [
      {
        title: "Table",
        icon: "home",
        path: "/app/tableboard",
        component: React.lazy(() => import('@/pages/table'))
      },
    ],
  },
]

export default MenuList