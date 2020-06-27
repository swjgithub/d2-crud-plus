import exampleModule from './index'
import { frameInRoutes } from '@/router/routes'
import { menuHeader, menuAside, supplementPath } from '@/menu/index'
import router from '@/router'
// 导出静态菜单和路由
menuAside.push(...supplementPath(exampleModule.menus.aside))
menuHeader.push(...supplementPath(exampleModule.menus.header), ...supplementPath(exampleModule.menus.aside))
frameInRoutes[0].children.push(...exampleModule.routers.frameIn)

const addRoutes = exampleModule.routers.frameIn
router.addRoutes(addRoutes)
