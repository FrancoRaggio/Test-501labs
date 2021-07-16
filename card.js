
Vue.component('card', {
    template:
        '<table><tr><h2>{{title}}</h2></tr><tr><p>{{body}}</p></tr></table>',
    data() {
        return {
            title: 'Titulo configurable',
            body: 'lorem ipsum dolor sit amet consectetur adipiscing, elit aptent',
        }
    }
});
var card1 = new Vue({
    el: '#card1'
});