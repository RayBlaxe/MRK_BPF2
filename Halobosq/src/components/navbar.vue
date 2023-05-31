<template>
  <nav class="navbar navbar-light fixed-top">
    <div class="navbar-text ml-auto d-flex">
      <button
        class="btn btn-sm btn-outline-success"
        v-on:click="$emit('toggle')"
      >
        <font-awesome-icon :icon="['fas', 'dollar-sign']" />
      </button>
      <div class="dropdown ml-2" v-if="cart.length > 0">
        <button
          class="btn btn-success btn-sm dropdown-toggle"
          id="dropdownCart"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="badge badge-pill badge-success"> {{ cartQty }}</span>
          <font-awesome-icon :icon="['fas', 'shopping-cart']" />
          {{ cartTotal | currencyFormat }}
        </button>
        <div
          class="dropdown-menu dropdown-menu-right"
          aria-labelledby="dropdownCart"
        >
          <div v-for="(item, index) in cart" :key="index">
            <div class="dropdown-item-text text-nowrap text-right">
              <span class="badge badge-pill badge-warning align-text-top mr-1">
                {{ item.qty }}
              </span>
              {{ item.product.name }}
              <b> {{ (item.product.price * item.qty) | currencyFormat }}</b>
              <a
                href="#"
                class="badge badge-danger text-white"
                v-on:click.stop="deleteItem(index)"
                >-</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "nav-bar",
  props: ["cart", "cartQty", "cartTotal"],
  filters: {
    currencyFormat: function (value) {
      return "$" + Number.parseFloat(value).toFixed(2);
    },
  },
};
</script>
