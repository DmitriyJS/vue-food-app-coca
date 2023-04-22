<template>
  <div class="content">
    <!-- <breadcrumbs-item></breadcrumbs-item> -->
    <card-item v-for="item in foodList" :item="item" />
    <div class="food-list"></div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CardItem from "@/components/CardItem.vue"
export default {
  name: "menu-page",
  components: {
    CardItem,
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
  },
  created() {
    this.requestFood(this.foodType);
  },
};
</script>

<style lang="scss">
.content {
  height: 100%;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  flex-wrap: wrap;
  padding-top: 16px;
  gap: 16px;
  background: #f8f9fd;
  flex: 1;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
