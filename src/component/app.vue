<template>
    <div>
        <v-heads></v-heads>
        <router-view></router-view>
        <v-footers></v-footers>
    </div>
</template>

<script>
import heads from './home/head.vue';
import footers from './home/footer.vue';
    export default{
        components:{
            "v-heads" : heads,
            "v-footers":footers
        }
    }
</script>

<style>

</style>