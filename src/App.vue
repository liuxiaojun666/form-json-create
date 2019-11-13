<template>
  <div id="app">
    <form-json-create :option="option" :rule="rule"></form-json-create>
  </div>
</template>

<script>
import FormJsonCreate from './components/FormJsonCreate.vue'
import json from './assets/newStationForm'

export default {
  name: 'app',
  components: {
    FormJsonCreate
  },
  data () {
    return {
      option: json.option,
      rule: json.rule
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 1000px;
  margin: 0 auto;
}
</style>
