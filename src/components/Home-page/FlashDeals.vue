<template>
    <div class="flash-deals  bg-grey-lighten-4 py-16 px-5">
        <div class="title mb-5 px-5 d-flex align-center justify-space-between">
            <h2 style="font-weight: 900"  font-size="30px"
             :class="[ `text-${titleColor}` ]"
             >Flash Deals</h2>
             <a href="#">Shop All</a>
        </div>
        <Swiper 
        :pagination="{ el: '.Swiper-pagination', clickable: true }" 
        :modules="modules"
        :slides-per-view="4"
        :space-between="35"
        class="pb-9"
        :navigation="{ prevIcon: '.swiper-prev', nextIcon:'.swiper-next' }">
            <swiper-slide v-for="item in Products" :key="item.id">
                <v-card elevation="0" pb-7>
                   <img :src="showenItem[item.title] ? showenItem[item.title] : item.thumbnail" class="w-200"
                        style="height:400px;" alt="" />
                    <v-card-text class="pl-0">
                        ({{ item.title }}) {{
                            item.description.split(" ").length <= 8 ? item.description :
                                item.description.split(" ").slice(0, 4).join("")  }} </v-card-text>
                            <v-rating v-model="item.rating" half-increments readonly color="yellow-darken-2 "
                                size="x-small" density="cobact"></v-rating>
                            <v-card-text class="pl-0 pt-0">
                                <del>${{ item.price }}</del> From <span class="text-red"
                                    style="font-weight:900; font-size:17px">

                                    ${{ Math.ceil(item.price - item.price * (item.discountPercentage / 100))
                                    }}</span></v-card-text>
                            <v-btn-toggle v-model="showenItem[item.title]">
                                <v-btn v-for="(pic, i) in item.images" :value="pic" :key="i" size="x-small" rounded="x1">

                                    <img :src="pic" alt="" width="30" height="30"
                                        style="border-radius: 50%; border: 1px solid rgb(135, 135, 135);">

                                </v-btn>
                            </v-btn-toggle>
                            <div> <v-btn density="combact" class="py-2 px-6" style="text-transform: none;
                                 border-radius: 30px" variant="outlined"> choose
                                    options</v-btn></div>
                </v-card>
            </swiper-slide>
            <div class="Swiper-prev"></div>
            <div class="Swiper-next"></div>
            <div class="Swiper-pagination"></div>
        </Swiper>

    </div>
</template>
<script>

import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation } from "swiper";

export default {
    props: {
        Products: {
            type: Array,
        },
        title: {
         type: String,
        },
        titleColor: {
            type: String,
         },
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    data: () => ({
        showenItem: {},
    }),

};
</script>
<style lang="scss">
.flash-deals {
    .swiper-button-next,.swiper-button-prev{
        width: 35px;
        border: 2px solid rgb(51, 51, 51);
        border-radius: 50%;
        background-color: white;
        height: 35px;
        top: 40%;
        &::after{
            font-size:15px;
         color:rgb(51, 51, 51) ;
          font-weight: 900;
            display: flex;
            justify-content: center;
            align-items:center;

        }
       
    }
}
</style>