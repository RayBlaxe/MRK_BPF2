var product = {
    harga: 200000,
    product: [{
            "id": "1",
            "name": "Sweater",
            "description": "lorem ipsum dolor sit amet, consectetur adip",
            "price": "199999",
            "image": "https://media.karousell.com/media/photos/products/2022/7/31/dicari_hm_hnm_sweater_sweatshi_1659288894_3515209f_progressive.jpg"
        },
        {
            "id": "2",
            "name": "Sweater 2",
            "description": "lorem ipsum dolor sit amet, consectetur adip",
            "price": "199999",
            "image": "https://cf.shopee.co.id/file/9dbc9538027f370a9a62468a481392cd"
        },
        {
            "id": "3",
            "name": "Sweater 3",
            "description": "lorem ipsum dolor sit amet, consectetur adip",
            "price": "199999",
            "image": "https://cf.shopee.co.id/file/8a613ae60af8b664ee63177ffe18960a_tn"
        }
    ]
}

var app = new Vue({
    el: '#app',
    data:{
        harga: 5,
        name: "Raihan",
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