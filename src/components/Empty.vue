<template>
  <router-view />
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods:{
    ...mapActions(["requestFood"])
  },
  beforeRouteUpdate(to, from){
    console.log(to.name);
    this.requestFood(to.name)
  }
}

</script>
