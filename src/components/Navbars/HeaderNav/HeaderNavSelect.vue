<template>
    <modal-item @click = "selectToggle" v-if="selectIsVisible" style="margin-top: 80px;"></modal-item>
    <div class="select" @click="selectToggle">
        {{ title }}
        <div class="select-list" @click.stop v-if="selectIsVisible">
            <div class="list-item" v-for="listItem in list" :key="listItem.id">{{ listItem.title
            }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectIsVisible: false,
        }
    },
    props: {
        list: {
            type: Array,
            default: [],
            required: true
        },
        title: {
            type: String,
            required: true
        }
    },
    methods: {
        selectToggle() {
            this.selectIsVisible = !this.selectIsVisible; 
        }
    }
}
</script>

<style scope lang="scss">
.select {
    margin-left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 144px;
    height: 36px;
    color: #FF5C00;
    background: #FFF5EE;
    border-radius: 58px;
    cursor: pointer;
}

.select-list {
    position: absolute;
    top: 70px;
    width: 366px;
    height: 375px;
    border: 1px solid red;
    background: #FFFFFF;
    /* Neutral/30 */
    cursor: default;
    border: 1px solid #E4E4E4;
    border-radius: 16px;

}

.list-item {
    cursor: pointer;
}
</style>