<template>
    <div class="back-btn">
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.91664 1.41663L1.45116 5.88211C1.38607 5.9472 1.38607 6.05272 1.45116 6.11781L5.91664 10.5833M1.40234 5.99996H14.6666"
                stroke="#19191C" stroke-width="1.5" stroke-linecap="round" />
        </svg>
    </div>
</template>

<style lang="scss" scoped >
.back-btn {
    position: relative;
    width: 36px;
    height: 36px;
    border: 1px solid #E4E4E4;
    border-radius: 58px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 50px;
    cursor: pointer;

    &::after {
        content: "";
        position: absolute;
        right: -25px;
        height: 44px;
        width: 1px;
        background: #E4E4E4;
    }
}
</style>