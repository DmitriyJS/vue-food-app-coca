<template>
  <div class="card">
    <div class="card-img">
      <img :src="item.photo" alt="" />
    </div>
    <div class="card-info">
      <div class="card-title">{{ item.name }}</div>
      <div class="card-price">{{ item.price }}$</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.card {
  padding: 12px 8px 16px;
  width: 219px;
  height: 250px;
  background: #ffffff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-img {
  width: 203px;
  height: 158px;
  overflow: hidden;
  border-radius: 12px;

  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
}

.card-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;

  .card-title {
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    font-feature-settings: "ss02" on;
    color: #19191c;
  }
  .card-price {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;

    text-align: center;
    font-feature-settings: "ss02" on;
    color: #ff5c00;
  }
}
</style>
