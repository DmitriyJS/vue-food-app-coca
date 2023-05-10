<template>
  <div class="content">
    <div class="food-list">
      <card-item
        v-for="foodItem in userOrder"
        :item="foodItem"
        @click="cardClick(foodItem)"
      />
      <transition name="bounce">
        <modal-item v-if="cardIsOpened" @click="closeModal"
          ><add-order-form
            @close="cardIsOpened = false"
            @click.stop
            :item="currentFoodItem"
        /></modal-item> </transition
      >
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import CardItem from "@/components/cards/CardItem.vue";
import AddOrderForm from "../forms/AddOrderForm .vue";
export default {
  name: "menu-page",
  data() {
    return {
      currentFoodItem: {},
      cardIsOpened: false,
    };
  },
  components: {
    CardItem,
    AddOrderForm,
  },
  computed: {
    ...mapState(["userOrder"]),
    ...mapGetters(["getQuantityById"]),
  },
  methods: {
    ...mapActions(["requestFood"]),
    cardClick(item) {
      this.currentFoodItem = { ...item };
      if (!this.getQuantityById(item.id)) {
        this.setOrder({ num: 1, id: item.id });
      }
      this.cardIsOpened = true;
    },
    closeModal() {
      this.cardIsOpened = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  background: #f2f4fc;
}
.food-list {
  max-height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  flex-wrap: wrap;
  padding-top: 16px;
  gap: 16px;
  flex: 1;
  padding: 15px;

  &::-webkit-scrollbar {
    display: none;
  }
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .3s reverse;
}
@keyframes bounce-in {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
</style>
