Vue.component('price', {
    data: function () {
        return {}
    },
    props: {
        value: Number,
        prefix: {
            type: String,
            default: '$'
        },
        precission: {
            type: Number,
            default: 2
        }
    },
    template: '<span>{{ this.prefix + Number.parseFloat(this.value).toFixed(this.precission) }}</span>'
});

Vue.component('product-list', {
    props: ['product', 'harga'],
    methods: {
        before: function (el) {
            el.className = 'd-none';
        },
        enter: function (el) {
            var delay = el.dataset.index * 100;
            setTimeout(function () {
                el.className = 'row d-flex mb-3 align-items-center animate__animated animate__bounceInLeft'
            }, delay)
        },
        leave: function (el) {
            var delay = el.dataset.index * 100;
            setTimeout(function () {
                el.className = 'row d-flex mb-3 align-items-center animate__animated animate__fadeOutRight'
            }, delay)
        }
    },
    template: `
        <transition-group name="fade" tag="div" @beforeEnter="before" @enter="enter" @leave="leave">
        <div class="row d-none mb-3 align-items-center" v-for="(item, index) in product" :key="item.id"
        v-if="Number(item.price) <= harga" :data-index="index">
        <div class="col-1 m-auto">
        <button class="btn btn-info" v-on:click="$emit('add',item)">+</button>
        </div>
        <div class="col-sm-4">
        <img class="img-fluid" :src="item.image" :alt="item.name">
        </div>
        <div class="col">
        <h2 class="text-info">{{ item.name }}</h2>
        <p>{{item.description}}</p>
        <div class="h3">
        <price v-bind:value="Number(item.price)"
        v-bind:prefix="'$'"
        v-bind:precission="2">
        </price>
        </div>
        </div>
        </div>
        </transition-group>
        `
});
var app = new Vue({
    imgClass: 'img-fluid',
    el: '#app',
    data: {
        harga: 50,
        product: null,
        cart: [],
        name: "PSTI Selalu di hati",
        slugtext: 'The Quick #(*!&0 Brown 29',
        style: {
            label: ['font-weight: bold mr-2'],
            status: false
        }
    },
    mounted: function () {
        fetch('http://hplussport.com/api/products/order/price')
            .then(response => response.json())
            .then(data => {
                this.product = data;
            })
    },
    filters: {
        currencyFormat: function (value) {
            return '$' + Number.parseFloat(value).toFixed(2);
        }
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
        statusSlider: function () {
            return this.style.status ? 'd-flex' : 'd-none';
        },
        cartTotal: function () {
            let sum = 0;
            for (key in this.cart) {
                sum += this.cart[key].product.price * this.cart[key].qty;
            }
            return sum;
        },
        cartQty: function () {
            let qty = 0;
            for (key in this.cart) {
                qty += this.cart[key].qty;
            }
            return qty;
        }
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
    methods: {
        before: function (el) {
            el.className = 'd-none';
        },
        after: function (el) {
            var delay = el.dataset.index * 100;
            setTimeout(function () {
                el.className = 'row d-flex mb-3 align-items-center animate__animated animate__bounceInLeft'
            }, delay);
        },
        leave: function (el) {
            var delay = el.dataset.index * 100;
            setTimeout(function () {
                el.className = 'row d-flex mb-3 align-items-center animate__animated animate__bounceOutRight'
            }, delay);
        },
        addItem: function (product) {
            var productIndex;
            var productExist = this.cart.filter(function (item, index) {
                if (item.product.id == Number(product.id)) {
                    productIndex = index;
                    return true;
                } else {
                    return false;
                }
            });
            if (productExist.length) {
                this.cart[productIndex].qty++;
            } else {
                this.cart.push({
                    product: product,
                    qty: 1
                });
            }
        },
        deleteItem: function (key) {
            if (this.cart[key].qty > 1) {
                this.cart[key].qty--;
            } else {
                this.cart.splice(key, 1);
            }
        }
    },
});