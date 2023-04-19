<template>
    <div class="customer-info-form">
        <h3 class="title">Customer information</h3>
        <input-item type="text" placeholder="Customer name"/>
        <input-item type="text" placeholder="Enter table"/>
        <button-item class="btn">Add note</button-item>
    </div>
</template>

<style lang="scss" scoped >
.customer-info-form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px 24px;
    border-bottom: 1px solid #E4E4E4;

    .title {
        font-weight: 600;
        font-size: 20px;
        color: #19191C;
        padding: 0;
        margin: 0;
    }

    input {
        padding: 12px 16px;
    }

    .btn {
        background: #FFF5EE;
        color: #FF5C00;
    }
}
</style>