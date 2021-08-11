<template>
    <div class="p-grid p-jc-center nested-grid">
        <div class="p-col-12">
            <h1 class="p-text-center" style="font-size: 24; padding: 15px 0">BILLY BOWLEGS PIRATE FESTIVAL</h1>
        </div>
        <div class="p-col-3">
            <img width="100%" src="assets/images/logo.jpg" />
        </div>
        <div class="p-col-6">
            <img src="assets/images/top6-66.jpg" width="100%" />
        </div>
        <div class="p-col-12 bgsecondarycolor"
            style='background-image: url("/assets/images/piratefestifalmap-u99409-fr5.png"); background-position: center center; background-size: cover; background-repeat: no-repeat;'>
            <img class='' src="/assets/images/u99410-176.png" style="width: 50%; margin-left:25%; margin-top: 5%" />
        </div>
        <div class="p-col-12">
            <div class="p-grid">
                <div class='p-col-12 p-md-6 p-py-6 p-px-3'>
                    <Galleria :value="photoData1" :numVisible="1" :circular="true" :autoPlay="true"
                        :transitionInterval="4000" :showThumbnails="false">
                        <template #item="slotProps">
                            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"
                                style="width: 100%; display: block;" />
                        </template>
                    </Galleria>
                </div>
                <div class='p-col-12 p-md-6 p-py-6 p-px-3' style="font-size: 22px;">
                    <table class="table">
                        <tr>
                            <td>May 1, 2021</td>
                            <td>Landing of Billy Bowlegs at Fort Walton Beach Landing</td>
                        </tr>
                        <tr>
                            <td>May 3, 2021</td>
                            <td>Torchlight Parade on Eglin Parkway from First Street to K-Mart. Come and get your share
                                of Captain Billy's Loot.<br /> <br /><a
                                    href="https://www.fwbchamber.org/events/details/billy-bowlegs-torchlight-parade-powered-by-step-one-automotive-group-9567">Click
                                    Here</a> for more information</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div class="p-col-12" style="margin: 1% -35% 10% 15%;">
            <div class="p-col-6">
                <Galleria :value="photoData2" :numVisible="1" :circular="true" :autoPlay="true"
                    :transitionInterval="3500" :showThumbnails="false">
                    <template #item="slotProps">
                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"
                            style="width: 100%; display: block;" />
                    </template>
                </Galleria>
            </div>
        </div>
        <div class="p-col-12" style="margin: -15% 0 0 90%;">
            <div class="p-col-5">
                <Galleria :value="photoData3" :numVisible="1" :circular="true" :autoPlay="true"
                    :transitionInterval="4100" :showThumbnails="false" class="p-col-5">
                    <template #item="slotProps">
                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"
                            style="width: 100%; display: block;" />
                    </template>
                </Galleria>
            </div>
        </div>
        <div class="p-col-12" style="margin: -20% 10% 0 30%;">
            <div class="p-col-5">
                <Galleria :value="photoData4" :numVisible="1" :circular="true" :autoPlay="true"
                    :transitionInterval="3800" :showThumbnails="false" class="p-col-5">
                    <template #item="slotProps">
                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"
                            style="width: 100%; display: block;" />
                    </template>
                </Galleria>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                photoData1: [{
                        "itemImageSrc": "/assets/images/img_2318.jpg",
                    },
                    {
                        "itemImageSrc": "assets/images/img_2409%20(3)-crop-u1539932.jpg",
                    },
                    {
                        "itemImageSrc": "assets/images/img_2429.jpg",
                    },
                    {
                        "itemImageSrc": "assets/images/img_2473%20-%20copy.jpg",
                    },
                    {
                        "itemImageSrc": "assets/images/img_2482%20-%20copy.jpg",
                    },
                    {
                        "itemImageSrc": "assets/images/img_2513.jpg",
                    },
                ],
                photoData2: [{
                        "itemImageSrc": "/assets/images/img_0998.jpg",
                    },
                    {
                        "itemImageSrc": "/assets/images/img_1183.jpg",
                    },
                    {
                        "itemImageSrc": "/assets/images/img_1650.jpg",
                    },
                    {
                        "itemImageSrc": "/assets/images/img_1696.jpg",
                    },
                    {
                        "itemImageSrc": "/assets/images/img_2353.jpg",
                    },
                ],
                photoData3: [{
                        "itemImageSrc": "assets/images/img_1022.jpg",
                    },
                    {
                        "itemImageSrc": "assets/images/img_1485.jpg",
                    },
                    {
                        "itemImageSrc": "assets/images/img_1616.jpg",
                    },
                    {
                        "itemImageSrc": "assets/images/img_1657.jpg",
                    },
                    {
                        "itemImageSrc": "assets/images/img_2291.jpg",
                    },
                    {
                        "itemImageSrc": "assets/images/img_2372.jpg",
                    },
                ],
                photoData4: [{
                        "itemImageSrc": "assets/images/img_2497.jpg",
                    },
                    {
                        "itemImageSrc": "assets/images/img_2569.jpg",
                    },
                    {
                        "itemImageSrc": "assets/images/img_2711.jpg",
                    },
                    {
                        "itemImageSrc": "assets/images/img_4100.jpg",
                    },
                    {
                        "itemImageSrc": "assets/images/img_4140.jpg",
                    },
                    {
                        "itemImageSrc": "assets/images/img_4300%20-%20copy.jpg",
                    },
                ]

            }
        }
    }
</script>