<template>
    <div class="item">
        <div class="img-cnt"><img src="" alt=""></div>
        <div class="item-info">
            <div class="item-info__title">Steak sapi bakar</div>
            <div class="pricement">
                <div class="item-info__pricement">
                    <div class="price-title">Price</div>
                    <div class="price-amount">11.87$</div>
                </div>
                <quantity-change></quantity-change>
            </div>
        </div>
    </div>
</template>

<script>
import QuantityChange from "@/components/QuantityChange.vue";
export default {
    components: { QuantityChange }
}
</script>

<style lang="scss" scoped >
.item {
    display: flex;
    gap: 12px;
    align-items: center;
    border-bottom: 1px solid #E4E4E4;
    padding: 16px 0;

    .img-cnt {
        width: 74px;
        height: 74px;
        border: 1px solid red;
        border-radius: 12px;
        overflow: hidden;
    }

    .item-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        height: 100%;
        gap: 8px;

        .pricement {
            display: flex;
            justify-content: space-between;

            .item-info__actions {
                display: flex;
            }
        }
    }

    .price-title {
        font-size: 12px;
        color: #9C9C9C;
        margin-bottom: 5px;

    }

    .price-amount {
        font-weight: 600;
        font-size: 16px;
        color: #FF5C00;
    }
}
</style>