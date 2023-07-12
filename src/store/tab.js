//tab.js 管理菜单相关数据
export default {
    state: {
        isCollapse: false //用于控制菜单的开合
    },
    mutations: {
        //修改菜单开合
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        }
    }
}