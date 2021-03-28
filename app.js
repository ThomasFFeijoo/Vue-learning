const app = Vue.createApp({
    // data or functions to react to events
    data() {
        return {
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss' },
                { title: 'lord of the rings', author: 'tolkien' },
                { title: 'witcher', author: 'andrzej sapkowski' }
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
});

app.mount('#app');