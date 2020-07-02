import BaseStore from '../BaseStore'
import { observable, IObservableArray } from 'mobx'

export default class Store extends BaseStore {
  // 是否登陆标志
  @observable public isLogin: boolean = true

  // 是否收缩侧边菜单栏
  @observable public collapsed: boolean = false

  // 菜单变化 面包更改
  @observable public breadcrumbList: IObservableArray<
    IGloabalSpace.IBreadcrumbData
  > = [] as any

  // 路由配置
  @observable public tagsNavData: IObservableArray<
    IGloabalSpace.ITagsNavData
  > = [
    {
      path: '/app',
      title: '首页',
      color: 'primary',
    },
  ] as any
}
