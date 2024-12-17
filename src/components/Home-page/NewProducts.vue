<template>
    <div class="new-products pt-12  bg-grey-lighten-4">
        <div class="title mb-10 px-5 d-flex align-center justify-space-between">
            <h2 style="font-weight: 900" font-size="30px"
             class="text-black "
             >New Products</h2>
             
             <a href="#" class="text-black" style="font-size: 14px;">Shop All</a>
        </div>
        <v-container fluid>
            <v-row>
                <v-col cols="7" class="pt-20">
                    <Swiper 
        :pagination="{ el: '.Swiper-pagination', clickable: true }" 
        :modules="modules"
        :slides-per-view="3"
        :space-between="25"
        class="pb-9">
      
            <swiper-slide v-for="item in Products" :key="item.id">
                <v-card elevation="0" pb-7>
                   <img :src="showenItem[item.title] ? showenItem[item.title] : item.thumbnail" class="w-200"
                        style="height:400px;" alt="" />
                    <v-card-text class="pl-0">
                        ({{ item.title }}) {{
                            item.description + " " + item.title .split(" ").length <= 8 ? item.description :
                                item.description.split(" ").slice(0,1 ).join("") + " ..." }} </v-card-text>
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
                </v-col>
                <v-col  cols="5">
  <img src="@/assets/images/modeling-thumbnail.jpg" class="w-100 h-100" alt=""/>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>

import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination } from "swiper";

export default {
    props: {
        Products: {
            type: Array,
        },
    },
    setup() {
        return {
            modules: [ Pagination ],
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