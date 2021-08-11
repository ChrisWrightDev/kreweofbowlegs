<template>
	<div class="p-grid crud-demo p-jc-center">
        <Toast />
		<div class="p-col-12 homepage" style='background-image: url("assets/images/kob_hero2.png"), url("assets/images/hero2.jpg"); background-position: center 10%, 80% center; background-size: 60%, cover; background-repeat: no-repeat, no-repeat;'>
            <p class='text-right' style="font-family: bilbo-swash-caps, sans-serif; margin-top: 85%; color: black; font-size: 2em">Now and then we had the hope that if we lived and were good, God would permit us to be pirates<br />-- Mark Twain</p>
        </div>
        <div class="p-col-12 p-md-8">
            <h1 class="p-text-center mt-3 mb-2">ABOUT THE KREWE</h1>
            <p>The Krewe of Bowlegs is committed to the preservation of swashbuckling fun and piracy along the beautiful Emerald Coast. True to our charter, we provide the adventurous pirate spirit to the Billy Bowlegs Pirate Festival and Torchlight Parade each year. Attacks by land and sea result in a takeover of the city, raucous celebration, and finally a torchlight parade where Captain Billy and the Krewe distribute our loot to the good people of Fort Walton Beach. Our great deeds of piracy are not limited to the festival week. Captain Billy and the pirates and wenches invade many other community events throughout the year. Look for us reading a pirate tale to elementary school children, training dolphins at the Gulfarium, or speeding across the bay in the Legendary Marine Billy Bowlegs Poker Run benefiting Emerald Coast Autism Center and William Augustus Bowles Museum & Historical Foundation. You never know where a scurvy pirate will turn up. To satisfy the pirate’s quest for adventure the Blackhawk and Krewe set sail to cities throughout Florida and St. Paul, MN for festival and parade appearances. We are ambassadors for the Emerald Coast and the Billy Bowlegs Pirate Festival, as we bring back, other pirates, Indians, Vulcans, and many others to participate in the festivities.</p>
        </div>
	
        <Divider />
        <div class='p-col-12 p-md-10'>
            <h3 class="p-mt-4 p-mb-3">
                A MESSAGE FROM THE DESK OF CAPTAIN BILLY BOWLEGS 66
            </h3>
            <div class="p-grid">
                <div class="p-col-12">
                    <img class='p-image' src='/assets/images/captainsdesk66.jpg' style="max-width: 50%; float: right; margin-left: 20px; margin-bottom: 10px" />
                    <p>Citizens of the Emerald Coast,</p>
                    <p>Captain Billy Bowlegs 66, Gary McMorrow, has a true passion for supporting the local businesses and non-profits in Okaloosa County. He has a long history of community involvement and has always been a champion for the underdog.</p>
                    <p>Gary actually grew up in this area and enjoyed the Billy Bowlegs Pirate Festival each year as a kid, so as Captain Billy, he plans to make the kid's treasure hunt a really BIG deal this year!  With one of the largest group of kids in the 66th Children of the Court this year (18), he hopes to inspire kids, as well as adults, to find their inner pirate. </p>
                    <p>Young and old are encouraged to come share in the pirate spirit with Captain Billy Bowlegs 66 throughout the year!</p>
                    <p>Captain Billy 66</p>
                    <p>Gary McMorrow</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
	data() {
		return {
		}
	},
	
	created() {
		
	},
	mounted() {
		
	},
	methods: {
		formatCurrency(value) {
			if(value)
				return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
			return;
		},
	}
}
</script>

<style scoped lang="scss">
</style>
