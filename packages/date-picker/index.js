import rangePicker from "./src/date-picker/range-picker.js";
import picker from "./src/date-picker/picker.js";
import configProvider from "./src/config-provider/config-provider.js";
const attributeFiles = import.meta.glob('./src/locale/lang/*.js', { eager: true })
const lang = {}
for (const path in attributeFiles) {
  const name = attributeFiles[path].default.locale
  lang[name] = attributeFiles[path].default
}
/**
 * 依赖 :
 * "b-tween": "^0.3.3"
 * "resize-observer-polyfill": "^1.5.1",
 * "b-validate" // 配置国际化需要
 * "dayjs",
 * "vue"
 */
export { rangePicker, picker, configProvider, lang };
