<template>
  <div>
    <Presentation />
  </div>
</template>



<script>


import Presentation from "~/components/layout/Presentation";

export default {
  created(){
    this.$cookies.set('verify', true, {
      maxAge: 60 * 60
    })
  },
  components:{
    Presentation
  }
}
</script>