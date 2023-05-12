// var dataProduct = {
//     harga: 200000,
//     product: [{
//         "id": "1",
//         "name": "Tas Lv",
//         "description": "lorem ipsum dolor sit amet, consectetur adip",
//         "price": 199999,
//         "image": "https://down-id.img.susercontent.com/file/0801da0b856cac54d04e7d230356ba36"
//     },
//     {
//         "id": "2",
//         "name": "Tas Chanel",
//         "description": "lorem ipsum dolor sit amet, consectetur adip",
//         "price": 199999,
//         "image": "https://barisandepan.com/wp-content/uploads/2021/07/Tas-Branded-Wanita-scaled.jpg"
//     },
//     {
//         "id": "3",
//         "name": "Tas mahal",
//         "description": "lorem ipsum dolor sit amet, consectetur adip",
//         "price": 199999,
//         "image": "https://asset.kompas.com/crops/T7E_j_EkIHYhJD4BenIxsvQy59Y=/135x90:1215x810/750x500/data/photo/2021/09/22/614a6e069bb12.jpeg"
//     }
// ]
// }

var app = new Vue({
    el: '#app',
    data:{
        harga: 5,
        name: "aza",
        product:null,
        cart:[]
        
    },
    mounted: function () {
        fetch('http://hplussport.com/api/products/order/price')
            .then(response => response.json())
            .then(data => {
                this.product = data
            })
    },
    methods:{
        addItem: function(product){
            this.cart.push(product)
        }
    }
});