<template>
  <div class="nav-menu-items">
    <router-link
      :to="item.link"
      class="nav-menu-item"
      v-for="item in list"
      :key="item.id"
    >
      <s-icon :icon="item.icon"></s-icon>
      {{ item.title }}
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectIsVisible: false,
    };
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scope lang="scss">
.nav-menu-items {
  display: flex;
  gap: 32px;
}

.nav-menu-item {
  display: flex;
  align-items: center;
  gap: 11px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #828487;
  line-height: 150%;
  cursor: pointer;

  &:hover {
    color: orange;
  }
}
</style>
