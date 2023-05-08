<template>
  <div class="total-price" v-if="getTotalPrice" >
    <div class="total-price__item">
      <div class="title">Sub Total</div>
      <div class="price">₽ {{ getTotalPrice }}</div>
    </div>

    <div class="total-price__item">
      <div class="title">Tax</div>
      <div class="price">₽{{ getTaxPrice }}</div>
    </div>

    <div class="total-price__item"></div>

    <div class="total-price__item">
      <div class="title">Total</div>
      <div class="price">₽ {{ getFinalPrice }}</div>
    </div>
    <button-item class="btn">Pay Now</button-item>
  </div>
</template>

<script>
import ButtonItem from "@/components/UI/ButtonItem.vue";
import { mapGetters } from 'vuex';

export default {
  components: { ButtonItem },
  computed: {
    ...mapGetters(["getTotalPrice"]),
    getTaxPrice(){
        return +(this.getTotalPrice * 0.1).toFixed(1)
    },
    getFinalPrice(){
        return this.getTaxPrice + this.getTotalPrice
    }
  }

}


</script>

<style lang="scss" scoped>
.total-price {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;

  .total-price__item {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .btn {
    margin-top: 24px;
  }
}
.title {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}
.price {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
}
</style>
