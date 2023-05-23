<template>
  <div id="app" class="container mt-5">
    <h1>IDShop</h1>
    <nav-bar
      :cart="cart"
      :cartQty="cartQty"
      :cartTotal="cartTotal"
      @toggle="toggleSliderStatus"
    ></nav-bar>

    <price-slider :status="status" :harga.sync="harga" />
    <product-list :product="product" :harga="harga" @add="addItem" />
  </div>
</template>

<script>
import PriceSlider from "./components/priceSlider.vue";
import ProductList from "./components/productList.vue";
import NavBar from "./components/navbar.vue";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import Price from "./components/Price.vue";

export default {
  name: "App",
  data: function () {
    return {
      harga: 50,
      product: [],
      cart: [],
      status: true,
    };
  },
  components: {
    PriceSlider,
    ProductList,
    NavBar,
    // FontAwesomeIcon,
    // Price,
  },
  mounted: function () {
    fetch("http://hplussport.com/api/products/order/price")
      .then((response) => response.json())
      .then((data) => {
        this.product = data;
      });
  },
  computed: {
    cartTotal: function () {
      let sum = 0;
      for (let key in this.cart) {
        sum += this.cart[key].product.price * this.cart[key].qty;
      }
      return sum;
    },
    cartQty: function () {
      let qty = 0;
      for (let key in this.cart) {
        qty += this.cart[key].qty;
      }
      return qty;
    },
  },
  methods: {
    toggleSliderStatus: function () {
      this.status = !this.status;
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
          qty: 1,
        });
      }
    },
  },
};
</script>
