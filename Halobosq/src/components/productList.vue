<template>
  <transition-group
    name="fade"
    tag="div"
    @beforeEnter="before"
    @enter="enter"
    @leave="leave"
  >
    <div
      class="row d-none mb-3 align-items-center"
      v-for="(item, index) in showItem"
      :key="item.id"
      :data-index="index"
    >
      <div class="col-1 m-auto">
        <button class="btn btn-info" v-on:click="$emit('add', item)">+</button>
      </div>
      <div class="col-sm-4">
        <img class="img-fluid" :src="item.image" :alt="item.name" />
      </div>
      <div class="col">
        <h2 class="text-info">{{ item.name }}</h2>
        <p>{{ item.description }}</p>
        <div class="h3">
          <price
            v-bind:value="Number(item.price)"
            v-bind:prefix="'$'"
            v-bind:precission="2"
          ></price>
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
import Price from "./Price.vue";

export default {
  name: "product-list",
  components: {
    Price,
  },
  props: ["product", "harga"],
  computed: {
    showItem: function () {
      let max = this.harga;
      return this.product.filter(function (item) {
        return Math.trunc(item.price) <= max;
      });
    },
  },
  methods: {
    before: function (el) {
      el.className = "d-none";
    },
    enter: function (el) {
      var delay = el.dataset.index * 100;
      setTimeout(function () {
        el.className =
          "row d-flex mb-3 align-items-center animate_animated animate_bounceInLeft";
      }, delay);
    },
    leave: function (el) {
      var delay = el.dataset.index * 100;
      setTimeout(function () {
        el.className =
          "row d-flex mb-3 align-items-center animate_animated animate_fadeOutRight";
      }, delay);
    },
  },
};
</script>
