<template>

    <div class="drawer">


        <v-navigation-drawer
        v-model="drawer" location="right" temporary>
            <p>AHMED AND MOHAMES 
            </p>
        </v-navigation-drawer>
    </div>

</template>
<script>
export default {
 inject: ["Emitter"],
    data: () => ({
        drawer: false,
    }),
    mounted() {
        this.Emitter.on("OpenCart", () => {

            this.drawer = !this.drawer;
        
        });
    },
};

</script>