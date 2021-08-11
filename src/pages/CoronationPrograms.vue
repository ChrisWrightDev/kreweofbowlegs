<template>
    <div class="p-grid">
        <div class="p-col-12">
            <div class="card-group col-10 mx-auto">
                <div class="card bgprimary" style="margin: 20px 10px">
                    <img src="/assets/images/historyhero.jpg" class="card-img-top" alt="Historic Picture" width="100%">
                </div>
            </div>
        </div>
        <div class="p-col-12" style="margin-bottom: 45px;">
            <div class="col">
                <h1 class="em text-center" style="font-size: 60px; margin: 25px 0">KREWE OF BOWLEGS HISTORY</h1>
            </div>
        </div>
        <div class="p-col-12">
            <div class="col text-center">
                <h2>Coronation Programs</h2>
                <p>Select to view the full program</p>
            </div>
        </div>
        <div class="p-col-12 p-grid">
            <div class='p-sm-6 p-md-3 p-lg-2' v-for="(program, i) in programs" :key="i">
                <a :href='"assets/pages/programs/" + program.substring(0, program.length - 4) + ".pdf"'
                    target="_blank">
                    <div style='margin: 15px; min-width: 150px'>
                        <img :src='"assets/pages/programs/" + program' alt="program">
                        <div style='padding: .5em'>
                            <p>Captain Billy {{this.toRoman(program.substring(0,program.length - 4))}}</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
    import API from '../service/api';
    export default {
        data() {
            return {
                programs: [],
            }
        },
        async created() {
            this.programs = await API.getPrograms();
        },
        methods: {
            toRoman(num) {
                var lookup = {
                        M: 1000,
                        CM: 900,
                        D: 500,
                        CD: 400,
                        C: 100,
                        XC: 90,
                        L: 50,
                        XL: 40,
                        X: 10,
                        IX: 9,
                        V: 5,
                        IV: 4,
                        I: 1
                    },
                    roman = '',
                    i;
                for (i in lookup) {
                    while (num >= lookup[i]) {
                        roman += i;
                        num -= lookup[i];
                    }
                }
                return roman;
            },
        }
    }
</script>
<style lang="">

</style>