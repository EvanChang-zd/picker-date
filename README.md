# prcker-date

日期周选择器

## 使用案例

~~~js
<template>
  <range-picker
    @change="onChange"
    @select="onSelect"
    style="width: 254px; margin-bottom: 20px"
  />
  <br />
  <range-picker
    mode="week"
    @change="onChange"
    @select="onSelect"
    style="width: 254px; margin-bottom: 20px"
  />
  <br />
  <range-picker
    mode="month"
    @change="onChange"
    @select="onSelect"
    style="width: 254px; margin-bottom: 20px"
  />
  <br />
  <range-picker
    mode="year"
    @change="onChange"
    @select="onSelect"
    style="width: 254px; margin-bottom: 20px"
  />
  <br />
  <range-picker
    mode="quarter"
    @change="onChange"
    @select="onSelect"
    style="width: 254px; margin-bottom: 20px"
  />
  <br />
  <range-picker
    showTime
    :time-picker-props="{
      defaultValue: ['00:00:00', '00:00:00']
    }"
    @change="onChange"
    @select="onSelect"
    style="width: 380px"
  />
</template>
<script setup>
import { rangePicker } from 'picker-date'
import 'picker-date/style.css'
const onSelect = (dateString, date) => {
  console.log('onSelect', dateString, date)
}
const onChange = (dateString, date) => {
  console.log('onChange: ', dateString, date)
}
</script>
<style></style>

~~~

共暴露三个组件 rangePicker, picker, configProvider
国际化使用案例
~~~js
<template>
  <div>
  <configProvider :locale="arEG">
  <rangePicker
    showTime
    :time-picker-props="{
      defaultValue: ['00:00:00', '00:00:00']
    }"
    style="width: 380px"
  />
  </configProvider>
  </div>
</template>

<script setup>
import { rangePicker, picker, configProvider, lang } from 'picker-date'
import 'picker-date/style.css'
const arEG = lang['en-US']
</script>
~~~

## 深色主题设置
~~~js
document.body.setAttribute('xiaolaji-theme', 'dark')
~~~

## 浏览器支持

![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
80+ ✔ | 80+ ✔ | 90+ ✔ | 75+ ✔ | 10+ ✔ |

## 支持的语言

| 语言           | 地区编码 |
| -------------- | -------- |
| 简体中文       | zh-CN    |
| 英文           | en-US    |
| 日文           | ja-JP    |
| 繁体中文（中国台湾） | zh-TW    |
| 葡萄牙语       | pt-PT    |
| 西班牙语       | es-ES    |
| 印度尼西亚语   | id-ID    |
| 法语（法国）   | fr-FR    |
| 德语（德国）   | de-DE    |
| 韩语           | ko-KR    |
| 意大利语（意大利） | it-IT    |
| 马来语（马来西亚） | ms-MY    |
| 泰语           | th-TH    |
| 越南语         | vi-VN    |
| 高棉语（柬埔寨） | km-KH    |
| 阿拉伯语（埃及） | ar-EG    |
