<template>
    <div class="p-grid">
        <div class="p-col-1 mx-auto" id="sidenav">
            <div style="position: fixed;">
                <a href='#top'>Top</a><br />
                <a v-for="(letter, i) in letters" href='#{{letter}}' :key="i">{{ letter }}</a><br />
            </div>
        </div>
        <div class="p-col-11">
            <div class="p-col-12">
                <div class="col-8 mx-auto">
                    <h1 class="em text-center"
                        style="font-family: bilbo-swash-caps, sans-serif; font-size: 60px; margin: 25px 0">
                        KoB Directory</h1>
                    <h4 class="text-center" style="margin: 25px 0">Click <a
                            href="https://kreweofbowlegs.com/members/pdf/directory.php" target="_blank">Here</a> to
                        download the PDF</h4>
                </div>
            </div>
            <div class="p-col-12 p-py-2">
                <div class='col-12 mx-auto grid-gallery'
                    style='background: url("logo.png") center center no-repeat; background-size: contain'>
                    <figure class="figure" style="max-width: 300px" v-for="(member, i) in members" :key="i" <span
                        v-if="checkAnchorLetter(member.lastname[0].toLower())" id="{{ member.lastname[0].toLower() }}">
                        </span>
                        <img src="{{ member.picture == ''? 'need photo.jpg': member.picture }}"
                            class="card-img-top rounded mx-auto d-block img-fluid"
                            style="padding: 15px; image-orientation: from-image; ">
                        <div class="card-body" style="padding: 0 1.25rem">
                            <figcaption style="color:white">
                                {{ generateCaption(member) }}
                                {{ generateExtendedCaption(member) }}
                            </figcaption>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                letters: [],
                members: [],
                anchorLetter: 'a',
                newletter: true,
            }
        },
        created() {
            let members = []; // get all members
            let cletter = 'a';
            let nletter = true;
            for ((member, i) in members) {
                if (member.lastname == '') continue;
                if (member.lastname[0].toLower() !== cletter) {
                    cletter = member.lastname[0].toLower();
                    nletter = true;
                }
                if (nletter) {
                    letters.push(cletter);

                    nletter = false;
                }
            }
        },
        methods: {
            checkAnchorLetter(letter) {
                if (letter == this.anchorLetter) {
                    this.anchorLetter = letter;
                    return true;
                }
                return false;
            },
            generateCaption(member) {
                let caption = '';
                let deceased = '';
                let firstname = member.first;
                let lastname = member.last;
                let spfirstname = member.spouse.first;
                let splastname = member.spouse.last;
                if (spfirstname == '' && splastname == '') {
                    caption = lastname + ', ' + firstname;
                } else if (lastname == splastname) {
                    caption = lastname + ', ' + firstname + ' & ' + spfirstname;
                } else {
                    caption = lastname + ', ' + firstname + ' & ' + spfirstname + ' ' + splastname;
                }
                if (member.deceased) {
                    deceased = '<br />(' + firstname + ' deceased)';
                }
                if (member.spouse.deceased) {
                    deceased = '<br />(' + spfirstname + ' deceased)';
                }
                caption += deceased;
                caption += '<br />' + member.address;
                caption += '<br />' + member.city + ', ' + member.state + ' ' + member.zip;
                caption += '<br />' + "Phone Number(s):";
                if (member.phone && !member.deceased) caption += '<br />' + '&nbsp;&nbsp;' + member.firstname + ': ' +
                    member.phone;
                if (member.spouse.phone && !member.spouse.deceased) caption += '<br />' + '&nbsp;&nbsp;' + member.spouse
                    .first + ': ' + member.spouse.phone;
                if (member.email != '' && !member.deceased) caption += '<br />' + member.first + ' Email: ' + member
                    .email;
                if (member.spouse.email != '' && !member.spouse.deceased) caption += '<br />' + member.spousefirst +
                    ' Email: ' + member.spouseemail;
                return caption;
            }
        }
    }
</script>