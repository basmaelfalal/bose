<template>
    <div class="banner">
        <div class="parent">
            <v-container>
                <v-row>
                    <v-col cols="6">

                    </v-col>
                    <v-col cols="6">
                        <div class="cont">
                            <h3><span>
                                    Huge Saving
                                </span> ON UHD Televisions</h3>
                            <P class="hint">
                                Sale up 70% off on selected items
                            </P>
                            <v-btn  class="py-3 px-10" density="combact" 
                            style="border-radius: 30px;text-transform:none ; margin-top: 30px;">Shop Now</v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>

    </div>
</template>
<style lang="scss">
.banner {
    .parent {
        height: 500px;
        background-image: url(../../assets/images/istockphoto-1133586715-612x612.jpg);
        background-size: cover;
        background-position: left;

        .cont {
            color: #0f0e0d;

            h3 {
                font-size: 60px;
                font-weight: 200;
                padding-left: 10px;
                padding-top: 100px;
            }

            span {
                color: rgb(0, 0, 0);
            }

            hint {
                margin: 20px;
            }
            v-btn{
                color: white;
            }
        }
    }

}
</style>