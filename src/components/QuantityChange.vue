<template>
  <div :class="['item-info__actions', modelValue === 0 && 'empty']">
    <div class="minus" v-if="modelValue > 0" @click="change(-1)">-</div>
    <div class="quantity" v-if="modelValue > 0">{{ modelValue }}</div>
    <div class="plus" @click="change(1)">+</div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  props: {
    modelValue: {
      type: Number,
      default: 1,
    },
    shtopor: {
      type: Number,
      default: 100,
    },
  },
  methods: {
    change(num) {
      let newVal = this.modelValue + num;
      if (newVal > 100) {
        return;
      }
      this.$emit("update:modelValue", newVal);
      this.$emit("update:shtopor", newVal * 2);
    },
  },
};
</script>

<style lang="scss" scoped>
.item-info__actions {
  display: flex;
  align-items: center;
  gap: 4px;
  width: 102px;
  justify-content: space-between;

  &.empty {
    justify-content: flex-end;
  }
}

.quantity {
  font-size: 14px;
  line-height: 140%;
  color: #19191c;
  font-weight: 600;
}

.minus,
.plus {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #e4e4e4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  cursor: pointer;
}

.plus {
  background: #19191c;
  color: white;
}
</style>
