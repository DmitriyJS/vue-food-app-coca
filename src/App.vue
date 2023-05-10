<template>
  <div>
    <svg-sprites></svg-sprites>
    <header-nav></header-nav>
    <main class="main">
      <left-nav></left-nav>
      <router-view></router-view>
      <right-bar></right-bar>
    </main>
  </div>
</template>

<script>
import HeaderNav from "@/components/Navbars/HeaderNav/HeaderNav.vue";
import SvgSprites from "@/components/Sprites/SvgSprites.vue";
import LeftNav from "@/components/Navbars/LeftNav.vue";
import RightBar from "@/components/Navbars/RightBar/RightBar.vue";
import CardItem from "@/components/cards/CardItem.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    HeaderNav,
    SvgSprites,
    LeftNav,
    CardItem,
    RightBar,
  },
  methods: {
    ...mapActions(["requestFood"]),
  },
  created() {
    this.requestFood("all");
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

/* общий */
.forms-title {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  font-feature-settings: "ss02" on;
  color: #19191c;
}

.forms-subtitle {
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  font-feature-settings: "ss02" on;
  color: #19191c;
}
</style>
