<template>
  <input
    @input="$emit('update:modelValue', $event.target.value)"
    type="text"
    class="input-item"
  />
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.input-item {
  background: #ffffff;
  border: 1px solid #e4e4e4;
  height: 48px;
  border-radius: 58px;
  font-weight: 400;
  font-size: 16px;
}
</style>
