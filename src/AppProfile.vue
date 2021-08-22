<template>
	<div class="layout-profile">
		<div v-if="!$auth.loading">
			<button v-if="$auth.isAuthenticated" @click="login">Log In</button>
			<div v-if="!$auth.isAuthenticated">
				<button class="p-link layout-profile-link" @click="onClick">
					<span class="username">Claire Williams</span>
					<i class="pi pi-fw pi-cog"></i>
				</button>
				<transition name="layout-submenu-wrapper">
					<ul v-show="expanded">
						<AppSubmenu :items="menu" class="layout-menu" :root="true" @menuitem-click="onMenuItemClick"
							style="border-top: none" />
					</ul>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
	import AppSubmenu from './AppSubmenu';

	export default {
		data() {
			return {
				$auth: {
					isAuthenticated: false,
					loading: false,
				},
				expanded: false,
				menu: [{
						label: 'Profile',
						icon: 'pi pi-fw pi-user',
						to: '/members/profile',
						style: "border-top: none"
					},
					{
						label: 'Notifications',
						icon: 'pi pi-fw pi-inbox',
						to: '/members/notifications',
						style: "border-top: none"
					},
					{
						label: 'Logout',
						icon: 'pi pi-fw pi-power-off',
						//to: '/members/logout',
						style: "border-top: none",
						command: function () {
							console.log('inside function')
						}
					},
				]
			}
		},
		created() {
//			$auth = this.$auth;
		},
		methods: {
			onClick(event) {
				this.expanded = !this.expanded;
				event.preventDefault();
			},
			onMenuItemClick(event) {
				this.$emit('menuitem-click', event);
			}
		},
		components: {
			'AppSubmenu': AppSubmenu
		}
	}
</script>

<style scoped>

</style>