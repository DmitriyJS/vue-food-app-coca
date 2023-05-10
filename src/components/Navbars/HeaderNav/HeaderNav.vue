<template>
  <div class="header-nav">
    <div class="left">
      <header-back-btn @click="backClick" />
      <header-nav-logo />
    </div>
    <div class="right">
      <header-nav-menu :list="menuItemList" />
      <header-nav-select
        :title="'Dining option'"
        :list="diningOptionSubitems"
      />
      <div class="time-and-date">10:53:00 26/02/2023</div>
      <div class="avatar">
        <img src="" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNavSelect from "@/components/Navbars/HeaderNav/HeaderNavSelect.vue";
import HeaderNavMenu from "@/components/Navbars/HeaderNav/HeaderNavMenu.vue";
import HeaderBackBtn from "@/components/Navbars/HeaderNav/HeaderBackBtn.vue";
import HeaderNavLogo from "@/components/Navbars/HeaderNav/HeaderNavLogo.vue";

export default {
  name: "header-nav",
  components: { HeaderNavSelect, HeaderNavMenu, HeaderBackBtn, HeaderNavLogo },
  data() {
    return {
      menuItemList: [
        { id: 1, title: "Home", icon: "i-home-24", link: "/menu" },
        { id: 2, title: "Order", icon: "i-order-24", link: "/order" },
        { id: 3, title: "History", icon: "i-order-24", link: "/history" },
        { id: 4, title: "Bills", icon: "i-bills-24", link: "/bill" },
      ],
      diningOptionSubitems: [
        { id: 5, title: "Dine in", icon: "" },
        { id: 6, title: "Take away", icon: "" },
        { id: 7, title: "Dine out", icon: "" },
        { id: 8, title: "Reservation", icon: "" },
      ],
    };
  },
  methods: {
    backClick() {
      this.$router.go(-1);
      console.log(window.location, `ttttt`);
    },
  },
};
</script>

<style lang="scss" scoped>
.header-nav {
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  border-bottom: 1px solid #e4e4e4;
}

.left {
  display: flex;
  align-items: center;
}

.right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.time-and-date {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 182px;
  height: 36px;
  background: #f8f9fd;
  border-radius: 40px;
}

.avatar {
  width: 44px;
  height: 44px;
  overflow: hidden;
  border-radius: 50%;
  background: #000;
}
</style>
