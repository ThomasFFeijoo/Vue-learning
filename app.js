const app = Vue.createApp({
    // data or functions to react to events
    data() {
        return {
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    }
});

app.mount('#app');