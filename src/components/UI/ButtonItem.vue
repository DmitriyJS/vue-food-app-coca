<template>
    <button :class="['button-item', color === 'orange' ? 'orange-btn' : 'transparent-btn']">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        color: {
            // 2 варианта цвета
            // orange(по умолчанию) - transparent 
            type: String,
            default: "orange"
        },
    },
}
</script>

<style lang="scss"  scoped >
.button-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    background: #FF5C00;
    border-radius: 58px;
    flex-grow: 1;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 600;
    cursor: pointer;
}

.transparent-btn {
    background: transparent;
    border: 1px solid #FF5C00;
    color: #FF5C00;
}
</style>