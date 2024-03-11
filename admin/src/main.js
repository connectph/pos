import { createApp } from 'vue'
import App from './App.vue'

// Components
import Icon from '@/components/base/Icon.vue'
import Chart from '@/components/base/Chart.vue'

// import components from '@/components/base'

console.log(Icon)
console.log(Chart)
console.log('--------------------')

const requireComponent = require.context(
  '@/components/base',
    true,
   /Base[A-Z]\w+\.(vue|js)$/
)


const app = createApp(App)
// components.register(app)

// app.component('BaseIcon', Icon)
//   .component('BaseChart', Chart)
app.mount('#app')
