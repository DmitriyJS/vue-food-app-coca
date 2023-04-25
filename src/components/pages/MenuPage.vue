<template>
  <div class="content">
    <breadcrumbs-item></breadcrumbs-item>
    <div class="search"></div>

    <div class="food-list">
      <card-item
        v-for="foodItem in foodList"
        :item="foodItem"
        @click="cardClick(foodItem)"
      />
      <transition  name="bounce">
              <modal-item v-if="cardIsOpened" @click="closeModal"
        ><add-order-form @close="cardIsOpened = false" @click.stop :item="currentFoodItem"
      /></modal-item>
      </transition>>

    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CardItem from "@/components/cards/CardItem.vue";
import BreadcrumbsItem from "@/components/BreadcrumbsItem.vue";
import AdditionalCard from "../cards/AdditionalCard.vue";
import AddOrderForm from '../forms/AddOrderForm .vue';
export default {
  name: "menu-page",
  data() {
    return {
      currentFoodItem: {name: 123},
      cardIsOpened: false,
    };
  },
  components: {
    CardItem,
    BreadcrumbsItem,
    AdditionalCard,
    AddOrderForm,
  },
  props: {
    "food-type": {
      type: String,
      default: "",
      required: true,
    },
  },
  computed: {
    ...mapState(["foodList"]),
  },
  methods: {
    ...mapActions(["requestFood"]),
    cardClick(item) {
      this.currentFoodItem = {...item};
      this.cardIsOpened = true;
    },
    closeModal() {
      this.cardIsOpened = false;
    },
  },
  created() {
    this.requestFood(this.foodType);
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  background: #f2f4fc;
}

.search {
  background: red;
  height: 50px;
  width: 100%;
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
  animation: bounce-in .2s;
}
.bounce-leave-active {
  animation: bounce-in .2s reverse;
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
