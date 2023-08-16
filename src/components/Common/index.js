import SvgIcon from "./SvgIcon.vue";
// 全局安裝組件
const globalComponents = { SvgIcon };
export default {
  install(app) {
    Object.keys(globalComponents).forEach((key) => {
      app.component(key, globalComponents[key]);
    });
  },
};
