<!-- миникарточка для дополнительного заказа -->
<template>
  <div class="item">
    <div class="img-cnt"><img :src="item.photo" alt="" /></div>
    <div class="item-info">
      <div class="item-info__title">{{ item.name }}</div>
      <div class="price-amount">{{ item.price }}₽</div>
    </div>
    <quantity-change
      :modelValue="getQuantityById(this.item.id)"
      v-model:shtopor="busta"
      @update:modelValue="setOrder({ id: this.item.id, num: $event })"
    ></quantity-change>
  </div>
</template>

<script>
import QuantityChange from "@/components/QuantityChange.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: { QuantityChange },
  props: {
    item: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
  data() {
    return {
      shtopor: 700,
    };
  },
  computed: {
    ...mapGetters(["getQuantityById"])
  },
  methods: {
    ...mapMutations(["setOrder"]),
    // setOrder($event){
    //   if (!$event) {
    //     alert($event)
    //   }
    //   this.setOrder({ id: this.item.id, num: $event })
    // }
  },
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
    width: 256px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .img-cnt {
    width: 40px;
    height: 40px;
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
  }
  .price-amount {
    font-weight: 600;
    font-size: 16px;
    color: #ff5c00;
  }
}
</style>
