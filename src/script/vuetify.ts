// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

let vuetify = createVuetify({
    theme: {
        themes: {
            light: {
                colors: {
                    primary: "#CE93D8",
                    error: "#E76F51",
                }
            },
        },
    },
    components,
    directives,
})
export default vuetify