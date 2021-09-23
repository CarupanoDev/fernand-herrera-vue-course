

const app = Vue.createApp({
    // template: `
    //     <h1> Hello, World! </h1>
    //     <p> {{ {a: 1, b: 2} }} </p>
    // `

    data(){
        return{
            author: 'Bruce Wayne',
            quote: 'I am Batman'
        }
    },
    methods: {
        changeQuote(){
            console.log('Hello, World!')
            this.author = 'Santiago Medina'

            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount('#my-app')