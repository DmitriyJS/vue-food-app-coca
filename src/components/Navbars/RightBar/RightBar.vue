<template>
  <div class="right-bar">
    <customer-info-form></customer-info-form>
    <order-details></order-details>
  </div>
</template>

<script>
import CustomerInfoForm from "@/components/Navbars/RightBar/CustomerInfoForm.vue";
import OrderDetails from "@/components/Navbars/RightBar/OrderDetails.vue";
export default {
  components: { CustomerInfoForm, OrderDetails },
};
</script>

<style>
.right-bar {
  flex: 0 0 360px;
  border-left: 1px solid #e4e4e4;
  height: calc(100vh - 80px);
}
</style>
