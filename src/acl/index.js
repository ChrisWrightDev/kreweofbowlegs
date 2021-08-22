import router from '../router';
import { computed } from 'vue';
import { createAcl, defineAclRules } from 'vue-simple-acl';
//import Axios from 'axios';

// const user = {
//   id: 1,
//   name: 'Victory Osayi',
//   is_admin: false,
//   is_top6: false,
//   is_captain: true,
//   // you can have role based permission list or access control list possibly from database
//   permissions: ['top6', 'captain', 'admin']
// }
const user = computed(() => localStorage.state ? localStorage.state.user : null);

const rules = () => defineAclRules((setRule) => {
    setRule('is-captain', (user) => user.is_captain);
    setRule('is-top6', (user) => user.is_top6);
    setRule('is-admin', (user) => user.is_admin);
});

const simpleAcl = createAcl({
    user,
    rules,
    router,
    onDeniedRoute: '$from' // OR { path: '/unauthorized' } OR { name: 'unauthorized', replace: true} or '/unauthorized'
});

export default simpleAcl;