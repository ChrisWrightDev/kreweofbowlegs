<template>
    <Profile :user="user" />
</template>

<script>
    import Profile from '../components/Profile';
    import API from '../service/api';

    export default {
        data() {
            return {
                user: {}
            }
        },
        async created() {
            if (this.$router.params && this.$router.params.id) {
                const response = await API.getUserByID(this.$route.params.id);
                this.user = response;
                console.log(this.user);
            }
            
        },
        components: {
            'Profile': Profile,
        },
    }
</script>