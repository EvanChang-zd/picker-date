<template>
  <div>
    <rangePicker
    @change="onChange"
    @select="onSelect"
    sizi="large"
    style="width: 254px; margin-bottom: 20px"
  />
  <br />
  <rangePicker
    mode="week"
    @change="onChange"
    @select="onSelect"
    style="width: 254px; margin-bottom: 20px"
  />
  <br />
  <rangePicker
    mode="month"
    @change="onChange"
    @select="onSelect"
    style="width: 254px; margin-bottom: 20px"
  />
  <br />
  <rangePicker
    mode="year"
    @change="onChange"
    @select="onSelect"
    style="width: 254px; margin-bottom: 20px"
  />
  <br />
  <rangePicker
    mode="quarter"
    @change="onChange"
    @select="onSelect"
    style="width: 254px; margin-bottom: 20px"
  />
  <br />
  <configProvider :locale="arEG">
  <rangePicker
    showTime
    :time-picker-props="{
      defaultValue: ['00:00:00', '00:00:00']
    }"
    @change="onChange"
    @select="onSelect"
    style="width: 380px"
  />
  </configProvider>
  </div>
</template>

<script setup>
import { rangePicker, picker, configProvider, lang} from '../packages/date-picker/index.js'
import '../packages/date-picker/src/index.css'
const arEG = lang['en-US']
const onSelect = (dateString, date) => {
  console.log('onSelect', dateString, date)
}
const onChange = (dateString, date) => {
  console.log('onChange: ', dateString, date)
}
</script>

<style lang="less" scoped></style>
