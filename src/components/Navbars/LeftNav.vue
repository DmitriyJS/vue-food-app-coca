<template>
  <div class="left-nav">
    <router-link
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
export default {
  data() {
    return {
      leftBarItems: [
        { id: 1, title: "Cofee", icon: "icon-cofee", link: { name: "coffee" } },
        { id: 2, title: "Beverages", icon: "icon-cofee", link: "beverages" },
        { id: 3, title: "Food", icon: "icon-cofee", link: { name: "food" } },
        { id: 4, title: "Appetizer", icon: "icon-cofee", link: "appetizer" },
        { id: 5, title: "Bread", icon: "icon-cofee", link: "bread" },
        { id: 6, title: "Snack", icon: "icon-cofee", link: "snack" },
      ],
    };
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

    &:hover {
      background: linear-gradient(218.57deg, #ffab18 -6.67%, #ff2197 137.69%);
      color: white;
    }

    &.active {
      background: linear-gradient(218.57deg, #ffab18 -6.67%, #ff2197 137.69%);
      color: white;
    }
  }
}
</style>
