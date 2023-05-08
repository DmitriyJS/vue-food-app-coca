<template>
  <div class="add-order-form">
    <div class="title forms-title">Add order</div>
    <order-card class="main-card" :foodItem="item"></order-card>
    <div class="additional">
      <div class="title forms-subtitle">Additional</div>
      <div class="additional__items">
        <additional-card
          v-for="additionalItem in additionalList"
          :item="additionalItem"
        ></additional-card>
      </div>
    </div>
    <div class="note">
      <div class="note__title">Add note</div>
      <textarea
        v-model="orderNote"
      
        placeholder="Type your note here"
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <div class="form-footer">
      <div class="total">
        <div class="title">Total</div>
        <div class="amount">$ 26.55</div>
      </div>
      <button-item
        @click="
          () => {
            // setOrder({ id: item.id, num: 1, note });
            $emit('close');
          }
        "
        >Add to order</button-item
      >
    </div>
  </div>
</template>

<script>
import OrderCard from "@/components/cards/OrderCard.vue";
import AdditionalCard from "@/components/cards/AdditionalCard.vue";
import { mapMutations, mapState } from "vuex";
import store from '@/store';
export default {
  data() {
    return {
      note: "",
    };
  },
  components: { OrderCard, AdditionalCard },
  props: {
    item: {
      type: Object,
      require: true,
    },
  },
  methods: {
    ...mapMutations(["setOrder", "setValue"]),
  },
  computed: {
    ...mapState(["foodListAll", "userOrder"]),
    orderNote: {
      get(){
        return this.$store.state.orderNote;
      },
      set(e){
        this.setValue({field: 'orderNote', value: e }); 
      }
    },
    additionalList() {
      // получить массив из 3 рандомных элементов
      let arr = [];
      for (let i = 0; i < 3; i++) {
        let filteredArr = this.foodListAll.filter(
          (el) => el.id !== this.item.id );
        let randNum = Math.round(Math.random() * (filteredArr.length - 1));
        arr.push(filteredArr[randNum]);
        console.log(randNum);
      }
      console.log(arr);
      console.log( this.foodListAll.length);
      return arr;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-card {
  border: none;
  padding: 0;
}
.add-order-form {
  padding: 24px;
  gap: 8px;
  width: 470px;
  height: 744px;
  background: #ffffff;
  border-radius: 16px;
  > .title {
    margin-bottom: 50px;
  }

  textarea {
    width: 422px;
    height: 142px;
    background: #ffffff;
    border: 1px solid #e4e4e4;
    border-radius: 58px;
    resize: none;
    padding: 14px 18px;
    font-weight: 400;
    font-size: 16px;
  }

  .additional {
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .note {
    margin-bottom: 20px;
  }

  .note__title {
    margin-bottom: 5px;
    font-size: 12px;
    line-height: 150%;
    color: #828487;
  }
}

.form-footer {
  display: flex;
  .total {
    flex: 0 1 50%;
    .title {
      font-size: 14px;
      line-height: 140%;
      color: #828487;
      margin-bottom: 5px;
    }
    .amount {
      font-weight: 600;
      font-size: 16px;
    }
  }
}
</style>
