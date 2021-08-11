
<template>
    <a :user="user"/>
</template>

<script>
import Profile from '../components/Profile';
export default {
    data() {
        return {
            user: {},
        }
    },
    components: [
        Profile,
    ]
    //props: ['user'],
}
</script>