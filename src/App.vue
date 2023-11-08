<script setup lang="ts">
import {Viewer } from 'cesium';
import { onMounted } from 'vue';

let viewer:Viewer;
onMounted(()=>{
  viewer = new Viewer('container', {});
})
</script>

<template>
  <div id="container">123</div>
</template>

<style scoped>
#container{
  width: 100vw;
  height: 100vh;
}
</style>
