<template>
  <div class="left-nav">
    <router-link
      @click="requestFood(item.link.name)"
      class="item"
      :to="item.link"
      v-for="item in leftBarItems"
      :key="item.id"
    >
      <s-icon :icon="item.icon" :size="32"></s-icon>
      <div class="title">{{ item.title }}</div>
    </router-link>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      leftBarItems: [
        { id: 0, title: "All", icon: "i-all-32", link: { name: "all" } },
        { id: 1, title: "Cofee", icon: "i-coffee-32", link: { name: "coffee" } },
        {
          id: 2,
          title: "Beverages",
          icon: "i-beverages-32",
          link: { name: "beverages" },
        },
        { id: 3, title: "Food", icon: "i-food-32", link: { name: "food" } },
        {
          id: 4,
          title: "Appetizer",
          icon: "i-appetizer-32",
          link: { name: "appetizer" },
        },
        { id: 5, title: "Bread", icon: "i-bread-32", link: { name: "bread" } },
        { id: 6, title: "Snack", icon: "i-snack-32", link: { name: "snack" } },
      ],
    };
  },
  methods: {
    ...mapActions(["requestFood"]),
  },
};
</script>

<style lang="scss">
.left-nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 12px;
  width: 125px;
  height: calc(100vh - 80px);
  border-right: 1px solid #e4e4e4;

  .item {
    display: flex;
    width: 77px;
    height: 78px;
    flex-direction: column;
    align-items: center;
    padding: 8px 6px;
    gap: 8px;
    border-radius: 8px;
    color: #828487;
    font-weight: 500;
    font-size: 12px;
    line-height: 116%;
    transition: 0.2s;

    &:hover {
      background: rgba(255, 171, 24, 0.1) ;
    }

    &.router-link-exact-active {
      background: linear-gradient(218.57deg, #ffab18 -6.67%, #ff2197 137.69%);
      color: white;
    }
  }
}

.router-link-exact-active {
  color: #FF5C00;
  font-weight: 600;
}


</style>
