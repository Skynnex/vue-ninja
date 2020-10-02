import { createApp } from 'vue';
import Alert from '@/components/Alert.vue';
import App from './App.vue';
import router from './router';

createApp(App).component('Alert', Alert).use(router).mount('#app');
