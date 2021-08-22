<template>
    <div>
        <Card>
            <template #header>
                <img id="profile-img" src="/assets/images/logo.jpg" class="" />
            </template>
            <template #title>
                Login
            </template>
            <template #content>
                <Form @submit.prevent="handleSubmit(!v$.$invalid)">
                    <div class="p-field p-grid">
                        <label for="email" :class="{'p-error':v$.user.email.$invalid && submitted}">Email</label>
                        <InputText id="email" type="text" v-model="user.email"
                            :class="{'p-invalid':v$.user.email.$invalid && submitted}" name="email" />
                        <small v-if="!v$.user.email.email" class="p-error">Enter a valid Email address </small>
                    </div>
                    <div class="p-field p-grid">
                        <label for="password"
                            :class="{'p-error':v$.user.password.$invalid && submitted}">password</label>
                        <InputText id="password" type="text" v-model="user.password"
                            :class="{'p-invalid':v$.user.password.$invalid && submitted}" name="password" />
                        <small v-if="!v$.user.password.password" class="p-error">Enter a valid password address </small>
                    </div>
                    <button class="btn btn-primary btn-block" :disabled="loading">
                        <span v-show="loading" class="pi pi-spin pi-spinner"></span>
                        <span>Login</span>
                    </button>
                </Form>
            </template>
        </Card>
    </div>
</template>

<script>
    import {
        email,
        required,
    } from "@vuelidate/validators";
    import {
        useVuelidate
    } from "@vuelidate/core";

    export default {
        name: "Login",
        data() {
            return {
                v$: useVuelidate(),
                submitted: false,
                loading: false,
                user: {
                    email: "",
                    password: "",
                }
            };
        },
        validations() {
            return {
                user: {
                    email: {required, email},
                    password: required,
                }
            }
        },
        computed: {
            loggedIn() {
                return this.$store.state.auth.status.loggedIn;
            },
        },
        created() {
            if (this.loggedIn) {
                this.$router.push("/profile");
            }
        },
        methods: {
            handleLogin(user) {
                this.loading = true;

                this.$store.dispatch("auth/login", user).then(
                    () => {
                        this.$router.push("/profile");
                    },
                    (error) => {
                        this.loading = false;
                        this.message =
                            (error.response &&
                                error.response.data &&
                                error.response.data.message) ||
                            error.message ||
                            error.toString();
                    }
                );
            },
        },
    };
</script>

<style>
</style>