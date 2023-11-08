import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "cesium/Build/Cesium/Widgets/widgets.css";
(window as any).CESIUM_BASE_URL = 'src/assets';
createApp(App).mount('#app')
