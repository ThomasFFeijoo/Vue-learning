const app = Vue.createApp({
    // data or functions to react to events
    data() {
        return {
            url: 'http://example.com',
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg' },
                { title: 'lord of the rings', author: 'tolkien', img: 'assets/2.jpg' },
                { title: 'witcher', author: 'andrzej sapkowski', img: 'assets/3.jpg' }
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