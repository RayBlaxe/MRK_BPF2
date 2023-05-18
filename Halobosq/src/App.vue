<template>
  <div id="app" class="container mt-5">
    <h1>IDShop</h1>
    <product-list :product="product" :harga="harga" />
  </div>
</template>

<script>
import ProductList from "./components/productList.vue";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import Price from "./components/Price.vue";

export default {
  name: "App",
  data: function () {
    return {
      harga: 50,
      product: [],
    };
  },
  components: {
    ProductList,
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
};
</script>
