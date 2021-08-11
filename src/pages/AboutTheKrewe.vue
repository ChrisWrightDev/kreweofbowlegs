<template>
    <div class="p-grid">
        <div class=" p-col-12">
            <Galleria :value="photoData" :numVisible="1" :circular="true" :autoPlay="true" :transitionInterval="4000"
                :showThumbnails="false">
                <template #item="slotProps">
                    <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"
                        style="width: 100%; display: block;" />
                </template>
                <template #caption="slotProps" style="color: blue">
                    <div class="absolute-div">
                        <p style="font-family: bilbo-swash-caps, sans-serif; font-size: 1.5em">{{slotProps.item.quote}}
                        </p>
                        <p style="font-family: bilbo-swash-caps, sans-serif; font-size: 1.2em">{{slotProps.item.author}}
                        </p>
                    </div>
                </template>
            </Galleria>
        </div>
        <div class=" p-col-12">
            <h1 class="p-text-center p-mx-2">
                THE KREWE IN THE COMMUNITY
            </h1>
        </div>
        <div class=" p-grid p-jc-center">
            <div class="p-col-6">
                <img src="assets/images/abouthero4.jpg" style="padding: 10px; width: 100%" /><br />
                <img src="assets/images/abouthero3.jpg" style="padding: 10px; width: 100%" />
            </div>
            <div class="p-col-6">
                <p style="font-size: 1.2em">
                    The Billy Bowlegs Pirate Festival and the Krewe of Bowlegs were started in 1954 as a way to
                    build tourism for the Fort Walton Beach community. The Krewe of Bowlegs continues today with
                    that same commitment to serving the area. Wherever a daring, adventurous swashbuckler (or just a
                    guy in a funny pirate hat) is needed you may find us. Captain Billy and his brave Krewe ventured
                    into the local elementary schools to pose for art class portraits and read stories of daring
                    escapades. The pirates braved the open seas to train dolphin at the Gulfarium and dropped anchor
                    at Bob Hope Village to judge the Halloween costume contest. Whether it's marching in the
                    Starfish Project Mardi Gras Parade or teeing up the ceremonial shot at a golf tournament, the
                    Captain and the Krewe are always willing to lend a hand...or hook, as the case may be.
                </p>
            </div>
        </div>
        <div class=" p-col-12 bgsecondary p-text-center txtsecondary">
            <h2>Upcoming Krewe Events (Coming Soon)</h2>
        </div>
<!--        <div class=" p-col-12 p-jc-center bgsecondary">
            <div class="col-8">
                <div class="accordion" id="accordion">
                    <div class="card" v-for="(event, i) in events" :key="i"></div>>
                    <div class="card-header primary bgprimary" id="heading<?php echo $i?>">
                        <h2 class="mb-0 nav-item">
                            <button class="btn btn-link text-left nav-link text-primary" type="button"
                                data-toggle="collapse" data-target="#collapse<?php echo $i?>" aria-expanded="true"
                                aria-controls="collapse<?php echo $i?>">
                                        <?php echo date('F d, Y', strtotime($event['startdate']))?><?php if ($event['starttime'] != '') echo ", ".date('g:i a', strtotime($event['starttime'])) ?><br />
                            <?php echo $event['title']; if ($event['location'] != '') echo ", ".$event['location']; ?> 
                            </button>
                        </h2>
                    </div>
                    <div id="collapse<?php echo $i?>" class="collapse hide" aria-labelledby="heading<?php echo $i?>"
                        data-parent="#accordion" v-if="event.description != ''">
                        <div class="card-body  p-col-12">
                            <div class="col-8 txtsecondary">
                                <p> {{ description }} </p>
                                <p><a v-if="event.files != ''" target="_blank"
                                        href='eventinfo/kidsislandparty.pdf'>Click
                                        Here</a> for
                                    the event flyer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>-->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                event: [],
                photoData: [{
                "itemImageSrc": "/assets/images/abouthero1.jpg",
                "alt": "First slide",
                },
                {
                "itemImageSrc": "assets/images/abouthero2.jpg",
                "alt": "Second slide",
                },
                {
                "itemImageSrc": "assets/images/historyhero.jpg",
                "alt": "Third slide",
                },
                ],
            }
        }
    }
</script>