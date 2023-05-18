<template>
  <span>
    {{
      this.prefix + Number.parseFloat(this.value).toFixed(this.precission)
    }}</span
  >
</template>
<script>
export default {
  name: "PriceItem",
  props: {
    value: {
      type: Number,
    },
    prefix: {
      type: String,
      default: "$",
    },
    precission: {
      type: Number,
      default: 2,
    },
  },
};
</script>
