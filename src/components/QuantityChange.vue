<template>
    <div class="item-info__actions">
        <div class="minus">-</div>
        <div class="quantity">1</div>
        <div class="plus">+</div>
    </div>
</template>

<style lang="scss"  scoped>
.item-info__actions {
    display: flex;
    align-items: center;
    gap: 4px;
    width: 102px;
    justify-content: space-between;

}

.quantity {
    font-size: 14px;
    line-height: 140%;
    color: #19191C;
    font-weight: 600;
}

.minus,
.plus {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #E4E4E4;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    cursor: pointer;

}

.plus {
    background: #19191C;
    color: white;
}
</style>