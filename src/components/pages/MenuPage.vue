<template>
  <div class="content">
    <breadcrumbs-item></breadcrumbs-item>
    <div class="search-bar">
      <div class="search">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.3556 17.3658C18.8279 15.8961 19.7388 13.8641 19.7388 11.6194C19.7388 7.13518 16.1036 3.5 11.6194 3.5C7.13518 3.5 3.5 7.13518 3.5 11.6194C3.5 16.1036 7.13518 19.7388 11.6194 19.7388C13.8589 19.7388 15.8866 18.8321 17.3556 17.3658ZM17.3556 17.3658L20.5 20.5"
            stroke="#19191C"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>

        <input v-model="searchQuery" placeholder="Search menu..." type="text" />
      </div>
      <div class="search-filters">
        <div
          :class="['filter', filter == currentFilter ? 'active' : '']"
          @click="filterItems(filter)"
          v-for="filter in getCategories"
        >
          {{ filter }}
        </div>
      </div>
    </div>

    <div class="food-list">
      <card-item
        v-for="foodItem in foodListToShow"
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
import BreadcrumbsItem from "@/components/BreadcrumbsItem.vue";
import AddOrderForm from "../forms/AddOrderForm .vue";
export default {
  name: "menu-page",
  data() {
    return {
      currentFoodItem: {},
      cardIsOpened: false,
      currentFilter: "Все",
      listToShow: [],
      searchQuery: '',
    };
  },
  components: {
    CardItem,
    BreadcrumbsItem,
    // AdditionalCard,
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
    ...mapGetters(["getQuantityById"]),
    foodListToShow() {
      if (this.searchQuery) {
        return this.foodList.filter((el) => el.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
      }
      if (this.currentFilter == "Все") return this.foodList;
      return this.foodList.filter((el) => el.category == this.currentFilter);
    },
    getCategories() {
      return ["Все"].concat(
        Array.from(new Set(this.foodList.map((el) => el.category)))
      );
    },
  },
  watch: {
    foodList(){
      this.currentFilter = 'Все',
      this.listToShow = this.foodList
    },
  },
  methods: {
    ...mapActions(["requestFood"]),
    ...mapMutations(["setOrder"]),
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
    filterItems(filter) {
      this.currentFilter = filter;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  background: #f2f4fc;
}

.search-bar {
  background: white;
  min-height: 68px;
  width: 100%;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  align-items: center;

  .search {
    width: 50%;
    border-right: 1px solid #e4e4e4;
    height: 100%;
    min-width: 500px;
    flex-grow: 1;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 22px 24px;
    input {
      width: 100%;
      font-weight: 400;
      font-size: 16px;
    }
  }

  .search-filters {
    min-width: 50%;
    flex-grow: 1;
    display: flex;
    gap: 8px;
    font-weight: 400;
    font-size: 14px;
    color: #19191c;
    padding: 10px 24px;
    flex-wrap: wrap;

    .filter {
      padding: 8px 16px;
      border: 1px solid #e4e4e4;
      border-radius: 40px;
      height: 36px;
      width: max-content;

      &.active {
        background: #fff5ee;
        border: 1px solid #ff5c00;
      }

      &:hover {
        background: #fff5ee;
        cursor: pointer;
      }
    }
  }
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
  animation: bounce-in 0.2s;
}
.bounce-leave-active {
  animation: bounce-in 0.2s reverse;
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
