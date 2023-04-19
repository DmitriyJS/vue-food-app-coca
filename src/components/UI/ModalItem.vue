<template>
    <div :class="[' modal-bg', position]">
        <div class="modal-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "modal-item",
    props: {
        // 3 варианта (left center right)
        position: {
            type: String,
            default: 'center'
        }
    }
}
</script>

<style lang="scss" scoped>
.modal-bg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(25, 25, 28, 0.2);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;

    &.left{
        padding-left:65px ;
        justify-content: flex-start;
    }
    &.right{
        justify-content: flex-end;
    }
}
.modal-content {
    /* width: 500px;
    height: 500px;
    background-color: red; */
}

</style>