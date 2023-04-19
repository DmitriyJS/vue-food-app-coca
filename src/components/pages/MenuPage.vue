<template>
  <div class="content">
    <breadcrumbs-item></breadcrumbs-item>
    <card-item v-for="item in foodList" :item="item" />
    <div class="food-list"></div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "menu-page",
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
  },
  created() {
    this.requestFood();
  },
};
</script>

<style>
.content {
  flex: 1;
}
</style>
