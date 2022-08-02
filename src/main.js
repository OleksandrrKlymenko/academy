import components from './components/components'
import router from './router/router.js'
import '@/assets/styles/fonts.scss'
import { createStore } from "vuex";
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

components.forEach( component => {
    app.component(component.name, component)
})

const store = createStore({
    state: {
        choosenCity: {},
        location: [
            {
                title: 'Одесса',
                link: '/map',
                geo: [46.48903242477565, 30.722489824518462],
                id: 1
            },
            {
                title: 'Львов',
                link: '/map',
                geo: [49.8413037602549, 24.026996832199288],
                id: 2
            },
            {
                title: 'Киев',
                link: '/map',
                geo: [50.44919579752186, 30.52650449137327],
                id: 3
            },
            {
                title: 'Ужгород',
                link: '/map',
                geo: [48.62561735474441, 22.299034923837443],
                id: 4
            },
            {
                title: 'Днепр',
                link: '/map',
                geo: [48.47405055994291, 35.01751611121485],
                id: 5
            },
            {
                title: 'Харьков',
                link: '/map',
                geo: [49.987443835185196, 36.23157341175897],
                id: 6
            },
            {
                title: 'Николаев',
                link: '/map',
                geo: [46.96719625458191, 32.003870479603336],
                id: 7
            }                                                                                                           
        ]
    },
    mutations: {
        selectedCity(id) {
            if(id = city.id) {
                return choosenCity = city
            }
        }
    }
})

app 
    .use(store)
    .use(router)
    .mount('#app')
  