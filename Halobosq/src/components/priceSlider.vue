<template>
  <transition
    name="custom"
    enter-active-class="animate_animated
        animate_fadeInDown"
    leave-active-class="animate__animated animate__fadeOutDown"
  >
    <div v-if="status">
      <div :class="statusSlider" class="align-items-center">
        <label for="" class="font-weight-bold mr-2">Max</label>
        <input
          type="number"
          class="form-control mx-2"
          :style="{ width: '60px', 'text-align': 'center' }"
          v-model="maxAmount"
          @change="$emit('update:harga', maxAmount)"
        />
        <input
          type="range"
          class="custom-range"
          min="0"
          max="200"
          v-model="maxAmount"
          @input="$emit('update:harga', maxAmount)"
        />
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "price-slider",
  data: function () {
    return {
      maxAmount: 50,
    };
  },
  props: ["status", "harga"],
  computed: {
    statusSlider: function () {
      return this.status ? "d-flex" : "d-none";
    },
  },
};
</script>

<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease-in-out;
}
</style>
