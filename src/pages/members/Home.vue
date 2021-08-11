<template>
                <div class="p-col-12 p-md-8 mx-auto p-mb-1">
                        <h1 class="em primary" style="font-family: bilbo-swash-caps, sans-serif; font-size: 60px; margin: 25px 0">
                            Welcome to Ye Olde Members Page
                            </h1>
                </div>
                <div class="p-col-12 p-md-10 p-mx-auto" v-if="announcements.length > 0">
                        <div class='card bgprimary p-px-1 p-py-2'>
                            <h3 class="em" style="font-family: bilbo-swash-caps, sans-serif;">Important Announcements</h3>
                            <div class="col-12 mx-auto" v-for="(announcement, i) in announcements" :key="i">
                                {{ announcement.message }}
                                <cite>-- Posted by User::getFullName($announcement['author']) on date('F d, Y', strtotime($announcement['created']))</cite>&nbsp;&nbsp;&nbsp;
                                <a class="btn btn-primary" href='{{ announcementread.php?id= $announcement }}' style="padding: .1rem .75rem">Got it!</a>
                                <Divider />
                            </div>
                        </div>
                </div>
                <div class="p-col-12 p-md-10" v-if="rsvps.length > 0">
                        <div class='card bgprimary p-px-1 p-py-2'>
                            <h3 class="em" style="font-family: bilbo-swash-caps, sans-serif;">RSVP Requested</h3>
                            <div class="col-10 mx-auto" v-for="(rsvp, i) in rsvps" :key="i">
                                <form class="form" action="rsvp.php?id={{ rsvp.id }}" method="post">
                                    <h4>{{ rsvp.title }} <span v-if="rsvp.startdate != ''">on date('F d, Y', strtotime($rsvp['startdate'])); if ($rsvp['starttime'] != '') echo " at ".date('h:i a', strtotime($rsvp['starttime']));?></span>
                                    </h4>
                                    <div class=" p-col-12 p-md-6">
                                        <div class="p-formgroup-inline">
                                            <div class="p-field-radiobutton">
                                                <RadioButton id="option1" name="answer" value="1" selected v-model="answer" />
                                                <label for="option1">Yes</label>
                                            </div>
                                            <div class="p-field-radiobutton">
                                                <RadioButton id="option2" name="answer" value="0" v-model="answer" />
                                                <label for="option2">No</label>
                                            </div>
                                            <Dropdown id="state" :options="guestOptions" optionLabel="label" placeholder="Select One" v-model="guests" name="guests" />
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Send</button>
                                </form>
                            </div>
                        </div>
                </div>
                    <div class="card-group p-col-12 p-md-10 mx-auto">
                        <div class="card p-mx-1 p-my-2">
                            <img src="/../images/img_9564-crop-u15280352.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Your Assignments</h5>
                                <p class="card-text">Review and Update Upcoming Events of which you are in charge</p>
                                <a href="/members/edit/events.php" class="btn bg-light">Go</a>
                            </div>
                        </div>
                        <div class="card p-mx-1 p-my-2">
                            <img src="/../images/img_2711270x180.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Events</h5>
                                <p class="card-text">Find out all the information about the upcoming events this year.
                                </p>
                                <a href="/members/events.php" class="btn bg-light">Go</a>
                            </div>
                        </div>
                        <div class="card p-mx-1 p-my-2">
                            <img src="/../images/photogallery.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Photo Gallery</h5>
                                <p class="card-text">View all the photos from this year's events</p>
                                <a href="/members/photos/index.php" class="btn bg-light">Go</a>
                            </div>
                        </div>
                        <div class="card p-mx-1 p-my-2">
                            <img src="/../images/1img_5795.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Member Directory</h5>
                                <p class="card-text">Current directory of Krewe of Bowlegs Members</p>
                                <a href="/members/directory.php" class="btn bg-light">Go</a>
                            </div>
                        </div>
                        <div class="card p-mx-1 p-my-2">
                            <img src="/../images/img_2609-crop-u15296762.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Previous Years</h5>
                                <p class="card-text">Check out all of the pictures, pamphlets, and Biographies of the
                                    previous Capt Billy's and his Krewe</p>
                                <a href="/members/history.php" class="btn bg-light">Go</a>
                            </div>
                        </div>
                        <div class="card p-mx-1 p-my-2">
                            <img src="/../images/dues.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Pay Dues</h5>
                                <p class="card-text">Pay your dues online via a Credit Card. You can also setup
                                    automatic payments.</p>
                                <a href="/members/payonline/" class="btn bg-light">Go</a>
                            </div>
                        </div>
                    </div>
                <div class="p-col-12" style='margin-bottom: 15px;'>
                    <div class="col-8 mx-auto txtsecondary">
                        <h3>Privacy Statement</h3>
                        <h6>Please respect your fellow pirates by not sharing your username or password with any
                            non-members. All photos and information are protected. Please do not distribute, post on
                            social media, or otherwise share any of the material contained herein. This is for the
                            protection and privacy of all our members. Thank you</h6><cite>-- The Management</cite>
                    </div>
                </div>
</template>

<script>
export default {
    data() {
        return {
            announcements: [],
            rsvps: [],
            guestOptions: [
                {label: '1', value: '1'},
                {label: '2', value: '2'},
                {label: '3', value: '3'},
                {label: '4', value: '4'},
                {label: '5', value: '5'},
                {label: '6', value: '6'},
                {label: '7', value: '7'},
                {label: '8', value: '8'},
                {label: '9', value: '9'},
                {label: '10', value: '10'},
            ]
        }
    },
    created() {
        // get rsvps and announcements from server
        this.rsvps = [];
        this.announcements = [];
    }
}
</script>