var app = new Vue({
    imgClass: 'img-fluid',
    el: '#app',
    data: {
        harga: 50,
        product: null,
        cart: [],
        name: "PSTI Selalu di hati",
        slugtext: 'The Quick #(*!&0 Brown 29'

    },
    mounted: function () {
        fetch('http://hplussport.com/api/products/order/price')
            .then(response => response.json())
            .then(data => {
                this.product = data;
            })
    },
    methods: {
        addItem: function (product) {
            this.cart.push(product)
        }
    },
    computed: {
        slugtize() {
            return this.slugtext.toLowerCase()
                .replace(/[^\W_]+/g, '')
                .replace(/ +/g, '-') + '-' + this.now();
        },
    },
methods: {
    now: function () {
        var waktu = new Date();
        return (
            String(waktu.getHours()) +
            String(waktu.getMinutes()) +
            String(waktu.getSeconds())
        );
    }
},

});