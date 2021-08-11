<template>
	<div class="p-grid">
		<div class="p-grid">
			<div v-for="user in users" :key="user._id" class="p-col-12 p-md-6 p-lg-3">
				<div class="box">
					<h3>{{user.firstname+' '+user.lastname}}</h3>
					<p>{{user.spouse.firstname}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import API from '../service/api';
export default {
	data() {
		return {
			users: [],
		}
	},
	async created() {
		this.users = await API.getAllUsers();
		console.log('created: users loaded');
	}

}
</script>

<style scoped>

</style>
