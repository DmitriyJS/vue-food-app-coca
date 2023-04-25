<!-- картачка при заказе -->
<template>
  <div class="item">
    <div class="img-cnt"><img :src="foodItem.photo" alt="" /></div>
    <div class="item-info">
      <div class="item-info__title">{{ foodItem.name }}</div>
      <div class="pricement">
        <div class="item-info__pricement">
          <div class="price-title">Price</div>
          <div class="price-amount">11.87$</div>
        </div>
        <quantity-change  @update:modelValue="addToOrder({id:foodItem.id, num: $event })" :modelValue = "foodItem.quantity"  ></quantity-change> 
      </div>
    </div>
  </div>
</template>

<script>
import QuantityChange from "@/components/QuantityChange.vue";
import { mapMutations } from 'vuex';
export default {
  components: { QuantityChange },
  props: ["foodItem"],
  methods: {
    ...mapMutations(['addToOrder']),
  }
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  gap: 12px;
  align-items: center;
  border-bottom: 1px solid #e4e4e4;
  padding: 16px 0;

  .item-info__title {
    font-weight: 600;
  }

  .img-cnt {
    width: 74px;
    height: 74px;
    border-radius: 12px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;
    }
  }

  .item-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    height: 100%;
    gap: 8px;

    .pricement {
      display: flex;
      justify-content: space-between;

      .item-info__actions {
        display: flex;
      }
    }
  }

  .price-title {
    font-size: 12px;
    color: #9c9c9c;
    margin-bottom: 5px;
  }

  .price-amount {
    font-weight: 600;
    font-size: 16px;
    color: #ff5c00;
  }
}
</style>
