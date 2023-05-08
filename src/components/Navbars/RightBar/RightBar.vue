<template>
  <div class="right-bar">
    <customer-info-form></customer-info-form>
    <order-details></order-details>
    <total-price></total-price>
  </div>
</template>

<script>
import CustomerInfoForm from "@/components/Navbars/RightBar/CustomerInfoForm.vue";
import OrderDetails from "@/components/Navbars/RightBar/OrderDetails.vue";
import TotalPrice from "@/components/Navbars/RightBar/TotalPrice.vue"

export default {
  components: { CustomerInfoForm, OrderDetails, TotalPrice, },
};
</script>

<style>
.right-bar {
  flex: 0 0 360px;
  border-left: 1px solid #e4e4e4;
  height: calc(100vh - 80px);
}
</style>
