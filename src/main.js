import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router';
import currencyFilter from './shared/currency-filter';

const app = createApp(App);
app.config.globalProperties.$filters = {
  currency: currencyFilter,
};
app.use(router)
  .mount('#app');
