import { App } from "vue";
// 导入单个组件
import { rangePicker, picker, configProvider } from "./date-picker/index.js";
import "./date-picker/src/index.css";
// 以数组的结构保存组件，便于遍历
const components = [rangePicker, picker, configProvider];

// 用于按需导入
export { rangePicker, picker, configProvider };

export const install = (app: App) => {
  if ((install as any).installed) return;
  (install as any).installed = true;
  // 遍历并注册全局组件
  components.map((component) => {
    app.component(component.name, component);
  });
};

// if (typeof window !== "undefined" && window.Vue) {
//   install(window.Vue);
// }

export default {
  // 导出的对象必须具备一个 install 方法
  install,
};
