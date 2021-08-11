<template>
    <div class="p-grid">
        <div class="p-col-12">
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
        <div class="p-col-12 p-jc-center">
            <div class="p-col-12 p-col-10">
                <h1 class="p-text-right">
                    CAPTAIN BILLY BOWLEGS 66<br />
                    Gary McMorrow
                </h1>
            </div>
            <Divider />
            <div class="p-col-12 p-md-8p-jc-center">
                <img src="assets/images/logo.jpg" style="max-width: 80%; margin-left: 10%" />
                <p style="font-size: 1.2em"><em>Each year a new Captain Billy is selected to sail the Blackhawk and the
                        Krewe into
                        uncharted seas. The new Billy is selected by the current Captain after receiving the
                        secret nominations from a committee of the last seven Billys. The new Billy remains a
                        secret for the next several months as he prepares for his year. He has many decisions to
                        make, he will choose the colors, and create a logo and theme to represent his vision for
                        the year.</em></p>
            </div>
        </div>
        <div class="p-col-12">
            <div class="p-col-12">
                <!-- Captain and Queen -->
                <Card class="p-col-12 p-md-10 p-mx-auto">
                    <template #title>
                        <h3 class="p-text-center p-py-2">Captain Billy 66
                            Gary McMorrow
                            and<br />
                            Queen Whitney Smith
                        </h3>
                    </template>
                    <template #content>
                        <img src="assets/images/captain and queen66.jpg" alt="Captain and Queen"
                            style="max-width: 100%">
                    </template>
                </Card>
            </div>
        </div>
        <div class="p-col-12">
            <Card class="p-col-12 p-md-10 p-mx-auto">
                <template #title>
                    <h3 class="p-text-center p-py-2">First Mate & First Mistress<br />
                        Thomas & Catherine Mason
                    </h3>
                </template>
                <template #content>
                    <img src="assets/images/first mate and mistress66.jpg" alt="First Mate and Mistress"
                        style="width: 100%">
                </template>
            </Card>
        </div>
        <div class="p-col-12">
            <div class="col-10 mx-auto">
                <!-- Honor Guard -->
                <h3 class="text-center" style="padding: 15px 0">Honor Guard LXVI</h3>
                <p> Coming Soon</p>
            </div>
        </div>
        <div class="p-col-12">
            <!-- Princesses and Privateers -->
            <Card class="p-col-12 p-md-10 p-mx-auto">
                <template #title>
                    <h3 class="p-text-center p-py-2">Princesses and Privateers</h3>
                </template>
                <template #content>
                    <img src="assets/images/PnP66.jpg" alt="Princesses and Privateers" style="width: 100%">
                </template>
                <template #footer>
                    <p class="card-text">Left to Right: Jackson Clark, William Wolfe, Penton
                        Garvie, Amanda Castleberry, Jayden Horne,<br />Sarah Duckett, Lilly Oliver, Payton Bolger,
                        Sofia Burleson, Calvin Boole, Trace Bolger, Trevor Ard</p>
                </template>
            </Card>
            <Card class="p-col-12 p-md-10 p-mx-auto" v-for="(pnp, count) in pnps" :key="count">
                <template #content>
                    <h4>{{ pnp.name }}</h4>
                    <p>Attending: {{ pnp.school }}</p>
                    <p><strong>Heritage: </strong>{{ pnp.parents }}</p>
                    <p><strong>Education and Social Affiliations: </strong>{{ pnp.affiliations }}</p>
                    <p><strong>Future Plans: </strong>{{ pnp.future }}</p>
                </template>
            </Card>
        </div>
        <div class="p-col-12">
            <div class="col-10 mx-auto">
                <!-- Children of the Court -->
                <h3 class="text-center" style="padding: 15px 0">Children of the Court</h3>
                <p>Coming Soon</p>
        <!--        <div class="p-col-12 justify-content-around">
                    <div class="col">
                        <div class="card mx-auto" style="background-color: black">
                            <img src="assets/images/coc.jpg" class="card-img-top rounded mx-auto d-block img-fluid"
                                alt="Children of the Court" style="padding: 15px">
                            <div class="card-body">
                                <p class="card-text" style="color: white">Back Row: back names<br />Front Row: front
                                    names</p>
                            </div>
                        </div>
                        <h4>Judith Marie England</h4>
                        <p>Duty: Queen’s Loving Daughter Train Bearer </p>
                        <p>Bowlegs Heritage: Judith Marie is the daughter of Chris and Beck England, Honor Guard LVIII,
                            Honor Guard LXIV, and Queen of the Krewe of Bowlegs LXV. She is the sister of Renee England,
                            Princess LXIV, and Ann Elise England, Queen’s Sunflower Train Bearer LXIII and Queen’s
                            Loving Daughter Train Bearer LXV. Judith Marie also served as Queen LXII, Tracy McMorrow’s,
                            Cross Bearer. </p>
                        <p>Interesting Facts: Judith Marie is a rising 5th grader at Liza Jackson Prepatory School who
                            loves acting, horses, photography, spending time with friends, dreaming up new businesses
                            she hopes to open one day, and working with her Mom. </p>

                        <h4>Ann Elise England </h4>
                        <p>Duty: Queen’s Loving Daughter Train Bearer </p>
                        <p>Bowlegs Heritage: Ann Elise is the daughter of Chris and Beck England, Honor Guard LVIII,
                            Honor Guard LXIV, and Queen of the Krewe of Bowlegs LXV. She is the sister of Renee England,
                            Princess LXIV, and Judith Marie England, Queen’s Cross Bearer LXII and Queen’s Loving
                            Daughter Train Bearer LXV. Ann Elise also served as Queen LXIII, Ashley Siner’s, Sunflower
                            Train Bearer. </p>
                        <p>Interesting Facts: Ann Elise is a rising 4th grader at Northwest Florida Ballet Academie’.
                            She loves dressing up in costumes, playing with dolls, building with Legos, spending time
                            with friends and snuggling with her Mom. </p>


                        <h4>Mac Simpson</h4>
                        <p>Duty: Queen’s Crown Bearer </p>
                        <p>Bowlegs Heritage: Son of Jon David and Courtney Simpson, Honor Guard LIX (59) and Honor Guard
                            LXV (65); Brother of Sara Beth Simpson, Children of the Court LXIV, Grandson of David and
                            Sally Simpson, Honor Guard XXIX (29); Godson of Chris and Beck England, Honor Guard LVIII
                            (58), Honor Guard LXIV (64), and Queen of Bowlegs LXV (65)</p>
                        <p>Interesting Facts: Rising pre-Kindergartener at Montessori Learning Center; future “Aubie”
                            the Tiger; Paw Patrol connoisseur; can identify every construction vehicle known to man;
                            enjoys swimming, boating, going to Auburn football games, and being a fun and mischievous
                            middle child to his oldest sister Sara Beth (6) and younger brother, Joseph (1). </p>

                        <h4>Charlotte Ryann LeBlanc</h4>

                        <p>Duty: Queen’s Medallion Bearer</p>

                        <p>Bowlegs heritage: Ross and Brianne LeBlanc, who Ryann is the daughter of served on Honor
                            Guard 62 for Captain Gerry Chalker.</p>

                        <p>Interesting Facts: Rising first grader at Liza Jackson Preparatory School. She loves to play
                            with her little sister, swim, and be outside.</p>

                        <h4>Hannah Lysaght</h4>
                        <p>Duty: Bearer of the Queen’s Breast Cancer Pink Event Emergency Kit and Her Ole Miss Rebel Red
                            Flower Clippers</p>
                        <p>Bowlegs Heritage: Daughter of John and Maureena Lysaght, Honor Guard LXIV(64), Sister of
                            Zander Lysaght??, Privateer LXIV</p>
                        <p>Interesting Facts: Rising 6th Grader at Liza Jackson Prepatory School </p>


                        <h4>Charles Thomas (CT) Roland</h4>
                        <p>Duty: Captain’s Flag Bearer</p>
                        <p>Bowlegs Heritage: Son of Garrett and Erin B. Roland and great nephew to Buddy and Cindy
                            Carter, Captain Billy LXV. Buddy and Cindy served on Honor Guard XLIII.</p>
                        <p>Interesting Facts: CT will attend pre-K at Pleasant Home School in Andalusia, AL this Fall.
                            He enjoys being on our farm; riding the Polaris, going fishing, feeding the cows, riding the
                            horses, and farming with his daddy. CT also enjoys watching dinosaur movies, playing with
                            LEGO’s, and most of all swimming at the beach.</p>

                        <h4>Jacob (“Jake”) Ryan Bunnell </h4>
                        <p>Duty: Lackey’s Big Al Carrier</p>
                        <p>Bowlegs Heritage: Jake is the son of James E. Bunnell, Jr. and Erin Blumer Bunnell, Esq.
                            Jake’s family has a rich Bowlegs heritage. His mother, Erin was Crown Bearer for Queen of
                            Bowlegs XXXI, Susan Johnson, Train Bearer for Jean P. Blumer, Queen of Bowlegs XXXVII, and
                            Princess for Captain Billy Bowlegs XL, Scotty Foster and Queen of Bowlegs XL, Cissy Brown.
                            Jake is the Grandson of Dr. Philip W. Blumer, Captain Billy Bowlegs XLVI and First Mate for
                            Captain Billy Bowlegs XLI, C.L. “Chuck” Ingram and Queen of Bowlegs XLI, Marie Johnson and
                            Mrs. Jean P. Blumer, Queen of Bowlegs XXXVII and First Mistress for Captain Billy Bowlegs
                            XLI, C.L. ”Chuck” Ingram and Queen of Bowlegs XLI, Marie Johnson. </p>
                        <p>Interesting Facts: Jake enjoys throwing balls, playing with trucks, and eating pizza and
                            seafood. He wants to be just like his Daddy when he grows up!!!</p>


                        <h4>Blakeley Nicole Mayville</h4>
                        <p>Duty: Bearer of the Top 6 Pom Poms</p>
                        <p>Bowlegs Heritage: Blakely is the Granddaughter of Captain Billy Lll Michael Gates and Cindy
                            Gates. She is the daughter of Jeremiah and Callie Mayville. Her Mother, Callie Mayville, and
                            Aunts Lynnlee Stanford, Sarah Gates, and Mary Gates all served as Princesses in previous
                            Courts. </p>
                        <p>Interesting Facts: Blakely is a rising Plew Elementary School kindergartner. Loves crafting,
                            swimming, playing softball, soccer, tumbling, dancing, Disney, playing with her cousins,
                            shopping and spending time with her family.</p>


                        <h4>Maddox Logan Clarno</h4>
                        <p>Duty: Captain’s Proclamation Bearer</p>
                        <p>Bowlegs Heritage: Maddox was the Captians treasure chest bearer for Captain LXIV. He is the
                            son of Stephen and Holly Clarno, Honor Guard LXII, and the Great Grandson of the late Edward
                            and Dorothy Clarno, Honor Guard XII</p>
                        <p>Interesting Facts: Rising 2nd grader at South Side Primary. Maddox enjoys playing football
                            and swimming.</p>

                        <h4>Rustin Jayce Clarno</h4>
                        <p>Duty: Captain’s Proclamation Bearer</p>
                        <p>Bowlegs Heritage: Rustin is the son of Stephen and Holly Clarno, Honor Guard LXII. He is the
                            great grandson of the late Edward and Dorothy Clarno, Honor Guard XII.</p>
                        <p>Interesting Facts: Rustin is the youngest COC member. Rustin loves being outside and playing
                            with his big brother</p>

                        <h4>Brooks Coleman Tinsley</h4>
                        <p>DUTY: Queen’s Cross Bearer</p>
                        <p>Bowleg’s Heritage: Son of Kent and Mary Tinsley, Honor Guard LVI (56); brother of William
                            Tinsley, Captain Billy LIX (59) Don Hutson's Compass Bearer; and grandson of William (Herb)
                            and Dolly Tinsley, 1st Mate and Mistress XXX (30), Captain Billy XXXVI (36).</p>
                        <p>Interesting Facts: Brooks is a rising 1st grader at Liza Jackson Preparatory School. Enjoys
                            Baseball, soccer, and playing a mad game of Fortnite on the Xbox!</p>

                        <h4>Jameson LeFrank Dewrell</h4>
                        <p>Duty: Bearer of the Queen’s Colonel Reb</p>
                        <p>Bowlegs Heritage: Son of Bobby & Cathy Dewrell, Honor Guard LXIII</p>
                        <p>Interesting Facts: Rising 7th Grader at Liza Jackson Preparatory School. Enjoys playing the
                            drums, performing in school plays, and listening to music.</p>


                        <h4>Hayden Diden</h4>
                        <p>Duty: Captain’s Sword Bearer</p>
                        <p>Bowlegs Heritage: Son to Jason Diden and Jillian Cahoon Diden – Princess for Captain Billy
                            50, Tim Ray and Queen Jaciel Robbins, Great Nephew to Walter Frederick “Buddy” Carter and
                            Cindy Carter, Captain Billy LXV, and Honor Guard for Captain Billy XLIII, Samuel B. Burkett
                            and Queen, Kathleen P. Dlabal. Great Grandson to late Frederick Carter and Phyllis Carter –
                            both were on several Honor Guards to include Captain Billy Malcom Crotzer and “Boota” Walker
                            XII, Captain Billy Chris A. Johnson, Jr. and Adelaide Harris XXIX and Captain Billy Ralph D.
                            Fallon and Martha Kilpatrick XXXII</p>
                        <p>Interesting Facts: Rising Third Grader at Wartburg Central Elementary School, plays travel
                            baseball for Bats 7U; enjoys basketball, and is a Tennessee Vols and Atlanta Braves fan.</p>



                        <h4>Caiden Dlabal</h4>
                        <p>Duty: Bearer of the First Mistress’ Combat Boots</p>
                        <p>Bowlegs Heritage: Grandson of the late Captain Billy Bowlegs XLVII Thomas Dlabal MD and Queen
                            of Bowlegs XLIII, Kathy Dlabal. Caiden's father, Matthew Dlabal was a past Child of the
                            Court and a Privateer</p>
                        <p>Interesting Facts: Caiden is 4 years old and will be in VPK this coming year. He loves to
                            play with his super heroes and build with Legos. He is very excited to be a pirate for this
                            year's Krewe.</p>

                        <h4>Carly Elizabeth Parker</h4>
                        <p>Duty: First Mistress’ Perfume Bottle Bearer</p>
                        <p>Bowlegs Heritage: Carly is the Daughter of Alan and Polly Parker who served on Honor Guard
                            59, Sister of Alex Parker, Children of the Court 61, and JT Parker, Privateer 62.</p>
                        <p>Interesting facts: Rising sixth grader at Liza Jackson Preparatory School. Loves composing
                            and performing dance and gymnastics. Loves art and creative writing.</p>

                        <h4>Darrington Gates Marshall (he primarily goes by “Gates” or the nickname bestowed upon him by
                            Captain Billy LIII Brock Fisher of “Boomer” )</h4>
                        <p>Duty: First Mate’s Flight Helmet Bearer</p>
                        <p>Bowlegs Heritage: Gates is the son of Jason and Kay Marshall of Lilburn, GA. He is the
                            grandson of Captain Billy LV, Bruce Marshall, and Debbie Marshall. Bruce and Debbie were the
                            First Mate and Mistress for Captain Billy LIII Brock Fisher and served on the Honor Guard
                            for Captain Billy XLV, Dick Roberts.</p>
                        <p>Interesting Facts: Rising 8th grader at Trickum Middle School in Lilburn, GA with straight
                            A’s. Gates loves being outdoors! He is an avid snow skier of double black diamonds, enjoys
                            fishing, and hiking Colorado’s 14’ers in the summer. Gates sleeps, eats and breathes soccer
                            and is the high scorer on his team.</p>
                        <h4>Harrison Bryce Gosnell</h4>
                        <p>Duty: First Mate’s Commando Hat Bearer</p>
                        <p>Bowlegs Heritage: Harrison is the son of Andrew and Mandi Gosnell, Honor Guard LX.Mandi was a
                            Princess for Captain Billy XLI, Chuck Ingram and Queen Marie Johnson; and served as a Train
                            Bearer for Queen XXXVII, Jeannie Blumer. Harrison is the grandson of Jim and Jo Brechin who
                            served on the Honor Guard for Captain Billy XXXVI, Herb Tinsley and Queen Carlee Foster.</p>

                        <p>Interesting Facts: Will begin VPK in August. Harrison likes playing basketball, soccer,
                            t-ball, and football, building Legos, and spending time with his family and friends. He also
                            enjoys going to Disney World and Auburn football and basketball games. War Eagle!</p>

                        <h4>Lexi Blumer</h4>
                        <p>Duty: Captain’s Shell Bearer</p>
                        <p>Bowlegs Heritage: Lexi is the daughter of Heath and Vashti Blumer, and granddaughter of Phil
                            and Jeanie Blumer, Captain Billy 46 and Queen 37, and First Mate and First Mistress 41. </p>
                        <p>Interesting Facts: Lexi is a rising third grader at Antioch Elementary. She has been a Girl
                            Scout for 3 years and enjoys softball, basketball,soccer, and riding her training horse,
                            Dolly. Her favorite past time hobbies include drawing, boating, and scalloping.</p>
                    </div>
                </div> -->

            </div>
        </div>
    </div>
</template>

<script>
    //import Galleria from 'primevue/galleria';
    export default {
        data() {
            return {
                images: null,
                galleriaService: null,
                photoData: [{
                        "itemImageSrc": "/assets/images/coronation1-66.jpg",
                        "quote": `Only the devil and I know the whereabouts of my treasure, and the one who lives the longest should take it all.`,
                        "author": `--Blackbeard`,
                    },
                    {
                        "itemImageSrc": "assets/images/coronation2-66.jpg",
                        "quote": `Only the devil and I know the whereabouts of my treasure, and the one who lives the longest should take it all.`,
                        "author": `--Blackbeard`,
                    },
                    {
                        "itemImageSrc": "assets/images/coronation3-66.jpg",
                        "quote": `Only the devil and I know the whereabouts of my treasure, and the one who lives the longest should take it all.`,
                        "author": `--Blackbeard`,
                    },
                ],
                pnps: [{
                        name: "Keanan James Donlon",
                        school: "Choctaw High School- dual enrolled at Northwest Florida State College",
                        parents: "Son of Nathan Kelley and Robin Donlon",
                        affiliations: "Will graduate high school with an associate’s degree in May of 2022",
                        future: "Plans to attend the University of Florida to become an Orthopedic Surgeon",
                        picture: ""
                    },
                    {
                        name: "Blake Stoltz",
                        school: "Niceville High School",
                        parents: "Son of Michael and Allyson Stoltz, Honor Guard LVI and Children of the Court 57",
                        affiliations: "A member of the Niceville High School swim team, soccer team, and track team",
                        future: "Hope to attend the University of Florida and major in Cyber Security.",
                        picture: ""
                    },
                    {

                        name: "Tyler Ryan Amiel",
                        school: "Choctaw High School & NWF State College",
                        parents: "Son of Mike & Jen Amiel, HG 51, Grandson of Queen Lynne Amiel 46 and Captain Billy Keith Amiel 51",
                        affiliations: "Member of National Honors Society",
                        future: "Plans to attend Florida State University and major in Business Management",
                        picture: "",
                    },
                    {
                        name: "Luke Larkin",
                        school: "Fort Walton Beach High School",
                        parents: "Son of Chris and Stephanie Larkin",
                        affiliations: "Viking Scholar, Fellowship of Christian Athletes, Leadership, National Honor Society, Student Government",
                        future: "Hopes to attend Florida State University and continue Track/Cross Country while pursuing a degree in Finance.",
                        picture: "",
                    },
                    {
                        name: "Kyle Pennington",
                        school: "Choctaw High School",
                        parents: "Grandson of Keith and Trish Clark, Honor Guard 65",
                        affiliations: "Member of the US Ski and Snowboard Association",
                        future: "Plan to attend college at Florida State University or Colorado University",
                        picture: "",
                    },
                    {
                        name: "Parker Elizabeth Lee",
                        school: "Niceville High School",
                        parents: "Daughter of Mike and Ryann Lee Honor Guard LVIII and Children of the Court LIX",
                        affiliations: "SGA Parliamentarian, NHS Eaglette Dance Team, Hope Squad, National Honor Society, youth group leader at Crosspoint Methodist Church, Science National Honor Society",
                        future: "Plans on attending college and possibly dancing at the collegiate level.",
                        picture: "",
                    },
                    {
                        name: "Emily Elizabeth Teusch",
                        school: "Niceville High School",
                        parents: "Daughter of Barry Teusch and Tracy Benzenhafer",
                        affiliations: "Member of NHS Theater",
                        future: "Hopes to attend Northwest Florida State College to pursue a degree in computer animation.",
                        picture: "",
                    },
                    {
                        name: "Madeline Larkin ",
                        school: "Fort Walton Beach High School ",
                        parents: "Daughter of Chris and Stephanie Larkin ",
                        affiliations: "Viking Scholar, New Light Dance Project, Fellowship of Christian Athletes, Leadership, National Honor Society ",
                        future: "Hopes to attend Florida State University and continue dancing while pursuing a degree in Exercise Science. ",
                        picture: "",
                    },
                    {
                        name: "Zoie Isabella Bonilla",
                        school: "Northwest Florida State College / Fort Walton Beach High School - Dual Enrollment",
                        parents: "Daughter of John and Maureena Lysaght, Honor Guard LXIV",
                        affiliations: "Viking Yearbook ",
                        future: "B.S. in Nursing and join the United States Air Force",
                        picture: "",
                    },
                    {
                        name: "Mary Cecelia Edwards",
                        school: "Niceville High School ",
                        parents: "Daughter of Andy and Kristie Edwards, Honor Guard LVII",
                        affiliations: "Girls weight lifting team and equestrian rider",
                        future: "Planning to go to college for animal sciences.",
                        picture: "",
                    },
                    {
                        name: "Skylar Reagan Grindland",
                        school: "Victory Performing Arts Academy",
                        parents: "Daughter of Mark and Mollie Grindland, Honor Guard, 59 and 65",
                        affiliations: "Navarre High Soccer Program",
                        future: "I love animals so I am considering being a Veterinary Technician ",
                        picture: "",
                    }
                ],
            }
        },
    }
</script>
<style lang="scss">
    .p-galleria .p-galleria-caption {
        background: none;
    }
</style>