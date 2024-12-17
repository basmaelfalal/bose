<template>
  <div class="home">

    <UpperBanner />
    <TheFeatures />
    <TopOffers />
<ProductsComponent :Products="flashDeals" title="Flash Deals" titleColor="red"/>
<TopCats/>
<NewProducts :Products="newProducts"/>
<QualityFeatures/>
<ProductsComponent :Products="beauty" title="Beauty" titleColor="black"/>
<WhyShopwithus />
    </div>
</template>

<script>
import UpperBanner from '@/components/Home-page/UpperBanner.vue';
import TheFeatures from '@/components/Home-page/TheFeatures.vue';
import TopOffers from '@/components/Home-page/TopOffers.vue';
import ProductsComponent from '@/components/Home-page/FlashDeals.vue';
import TopCats from '@/components/Home-page/TopCategories.vue';
import { ProductsModule } from "@/stores/Products";
import { mapActions, mapState } from 'pinia';
import NewProducts from '@/components/Home-page/NewProducts.vue';
import QualityFeatures from '@/components/Home-page/QualityFeatures.vue';
import WhyShopwithus from '@/components/Home-page/WhyShopwithus.vue';
export default {
  name: "HomeView",
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    ProductsComponent,
    TopCats,
    NewProducts,
    QualityFeatures,
    WhyShopwithus,
   
  },
  computed: {
    ...mapState(ProductsModule, ["flashDeals","newProducts" , "beauty"]),
  },

  methods: {
    ...mapActions(ProductsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
