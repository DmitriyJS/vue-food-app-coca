<template>
  <div class="order-details-cnt" v-if="userOrder. length" >
    <h3 class="title">Order details</h3>
    <order-card :foodItem="item" v-for="item in userOrder" ></order-card>
  </div>
</template>

<script>
import OrderCard from "@/components/cards/OrderCard.vue";
import AdditionalCard from "@/components/cards/AdditionalCard.vue";
import { mapState } from 'vuex';
export default {
  components: { OrderCard, AdditionalCard },
  computed:{
    ...mapState(["userOrder"])
  }
};
</script>

<style lang="scss" scoped>
.order-details-cnt {
  display: flex;
  flex-direction: column;
  padding: 20px 24px;
  border-bottom: 1px solid #e4e4e4;
  height: 385px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
    /* ширина для вертикального скролла */
    height: 8px;
    /* высота для горизонтального скролла */
    background-color: transparent;
  }

  /* ползунок скроллбара */
  &::-webkit-scrollbar-thumb {
    background-color: #585656;
    border-radius: 9px;
    box-shadow: inset 1px 1px 10px #f3faf7;
  }

  .title {
    font-weight: 600;
    font-size: 20px;
    color: #19191c;
    padding: 0;
    margin: 0;
  }
}
</style>
