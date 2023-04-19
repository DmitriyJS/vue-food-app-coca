<template>
  <div>
    <svg-sprites></svg-sprites>
    <header-nav></header-nav>
    <main class="main">
      <left-nav></left-nav>
      <!-- <div class="content">
        <breadcrumbs-item></breadcrumbs-item>
        <card-item v-for="item in foodList" :item="item" />
        <div class="food-list"></div>
      </div> -->
      <router-view></router-view>
      <right-bar></right-bar>
    </main>

  </div>
</template>

<script>
import HeaderNav from "@/components/Navbars/HeaderNav/HeaderNav.vue";
import BreadcrumbsItem from "@/components/Breadcrumbs/BreadcrumbsItem.vue";
import SvgSprites from "@/components/Sprites/SvgSprites.vue";
import LeftNav from "@/components/Navbars/LeftNav.vue";
import { mapActions, mapState } from "vuex";

import RightBar from "@/components/Navbars/RightBar/RightBar.vue";

import CardItem from "@/components/CardItem.vue";

export default {
  components: {
    HeaderNav,
    SvgSprites,
    LeftNav,
    CardItem,
    RightBar,
    BreadcrumbsItem,
  },
};
</script>

<style lang="scss">
@import url(./normalize.css);

html,
body {
  height: 100%;
  font-family: "Poppins", arial;
  user-select: none;
}

#app {
  height: 100%;
  width: 100%;
}

.main {
  display: flex;
  justify-content: space-between;
  height: 100%;
}

/* .content {
  height: 100%;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  flex-wrap: wrap;
  padding-top: 16px;
  gap: 16px;
  background: #f8f9fd;

  &::-webkit-scrollbar {
    display: none;
  }
} */
</style>
