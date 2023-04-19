<template>
    <div class="order-details-cnt">
        <h3 class="title">Order details</h3>
        <order-details-card></order-details-card>
        <order-details-card></order-details-card>
        <order-details-card></order-details-card>
        <order-details-card></order-details-card>
        <order-details-card></order-details-card>
    </div>
</template>

<script>
import OrderDetailsCard from "@/components/Navbars/RightBar/OrderDetailsCard.vue";
export default {
    components: { OrderDetailsCard }
}
</script>

<style lang="scss" scoped >
.order-details-cnt {
    display: flex;
    flex-direction: column;
    padding: 20px 24px;
    border-bottom: 1px solid #E4E4E4;
    height: 385px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 4px;
        /* ширина для вертикального скролла */
        height: 8px;
        /* высота для горизонтального скролла */
        background-color: transparent;
    }

    /* ползунок скроллбара */
    &::-webkit-scrollbar-thumb {
        background-color: #585656;
        border-radius: 9px;
        box-shadow: inset 1px 1px 10px #f3faf7;
    }

    .title {
        font-weight: 600;
        font-size: 20px;
        color: #19191C;
        padding: 0;
        margin: 0;
    }

}
</style>