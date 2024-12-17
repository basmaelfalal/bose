<template>
    <div class="Layout">
        <v-layout class="position-relative">
         
            <CartDrawer/>
            <v-main style="padding-top: 200px;">    
                <p>
                <slot></slot>
                </p>
            </v-main>
            <AppNav/>
            <FixedNav/>
            <AppFooter/>
        </v-layout>
    </div>
</template>
<script>
import AppNav from "./AppNav.vue";
import FixedNav from "./FixedNav.vue";
import AppFooter from "./AppFooter.vue";
import CartDrawer from "./CartDrawer.vue";



export default {
    
    components: {
        AppNav, AppFooter, CartDrawer
    }


};



</script>