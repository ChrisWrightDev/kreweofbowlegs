<template>
	<form @submit.prevent="handleSubmit(!v$.$invalid)">
		<div class="p-grid">
			<div class="p-col-12">
				<div class="card">
					<h5>Profile</h5>
					<div class="p-fluid p-formgrid p-grid">
						<div class="p-col-12">
							<div class="card">
								<h5>Profile Picture</h5>
								<FileUpload name="image" mode="basic" url="./upload.php" @upload="onUpload"
									:multiple="false" accept="image/*" :auto="true" :maxFileSize="1000000" />
								<small v-if="(v$.user.image.$invalid && submitted) || v$.user.image.$pending.$response"
									class="p-error">{{v$.user.first.$errors[0].$message}}</small>
							</div>
						</div>
						<div class="p-col-12">
							<h4 class="p-text-center">Member Info</h4>
						</div>
						<div class="p-field p-col-4 p-md-2">
							<label for="title">Title</label>
							<Dropdown id="title" type="text" :options="titleOptions" optionLabel="label"
								v-model="user.title" name="title" />
						</div>
						<div class="p-field p-col-8 p-md-4">
							<label for="first"
								:class="{'p-error':v$.user.first.$invalid && submitted}">Firstname</label>
							<InputText id="first" type="text" v-model="v$.user.first.$model"
								:class="{'p-invalid':v$.user.first.$invalid && submitted}" name="first" />
							<small v-if="(v$.user.first.$invalid && submitted) || v$.user.first.$pending.$response"
								class="p-error">Must enter Member's or Spouse's Name</small>
						</div>
						<div class="p-field p-col-10 p-md-4">
							<label for="last" :class="{'p-error':v$.user.last.$invalid && submitted}">Lastname</label>
							<InputText id="last" type="text" v-model="user.last"
								:class="{'p-invalid':v$.user.last.$invalid && submitted}" name="last" />
							<small v-if="(v$.user.last.$invalid && submitted) || v$.user.last.$pending.$response"
								class="p-error">Must enter Member's or Spouse's Name</small>
						</div>
						<div class="p-field p-col-2">
							<label for="suffix">suffix</label>
							<Dropdown id="suffix" type="text" :options="suffixOptions" optionLabel="label"
								v-model="user.suffix" name="suffix" />
						</div>
						<div class="p-field p-col-12">
							<label for="address"
								:class="{'p-error':v$.user.address.$invalid && submitted}">Address</label>
							<Textarea id="address" rows="2" v-model="user.address"
								:class="{'p-invalid':v$.user.address.$invalid && submitted}" name="address" />
							<small v-if="(v$.user.address.$invalid && submitted) || v$.user.address.$pending.$response" class="p-error">Enter your address</small>
						</div>
						<div class="p-field p-col-12 p-md-6">
							<label for="city" :class="{'p-error':v$.user.city.$invalid && submitted}">City</label>
							<InputText id="city" type="text" v-model="user.city" :class="{'p-invalid':v$.user.city.$invalid && submitted}" name="city" />
							<small v-if="(v$.user.city.$invalid && submitted) || v$.user.city.$pending.$response" class="p-error">Enter your City</small>
						</div>
						<div class="p-field p-col-12 p-md-3">
							<label for="state" :class="{'p-error':v$.user.state.$invalid && submitted}">State</label>
							<Dropdown id="state" :options="stateOptions" optionLabel="label" :class="{'p-invalid':v$.user.state.$invalid && submitted}" placeholder="Select One" v-model="user.state" name="state"/>
							<small v-if="(v$.user.state.$invalid && submitted) || v$.user.state.$pending.$response" class="p-error">Select State</small>
						</div>
						<div class="p-field p-col-12 p-md-3">
							<label for="zip" :class="{'p-error':v$.user.zip.$invalid && submitted}">Zip</label>
							<InputText id="zip" type="text" v-model="user.zip" :class="{'p-invalid':v$.user.zip.$invalid && submitted}" name="zip"/>
							<small v-if="(v$.user.zip.$invalid && submitted) || v$.user.zip.$pending.$response" class="p-error">Enter Zip Code</small>
						</div>
						<div class="p-field p-col-12 p-md-6">
							<label for="email" :class="{'p-error':v$.user.email.$invalid && submitted}">Email (use this to log in)</label>
							<InputText id="email" type="text" v-model="user.email" :class="{'p-invalid':v$.user.email.$invalid && submitted}" name="email"/>
							<small v-if="v$.user.email.required.$invalid && submitted" class="p-error">Must enter Member's or Spouse's Email </small>
							<small v-if="!v$.user.email.email" class="p-error">Enter a valid Email address </small>
						</div>
						<div class="p-field p-col-12 p-md-6">
							<label for="password" :class="{'p-error':v$.user.password.$invalid && submitted}">Password (use this to log in)</label>
							<Password toggleMask id="password" v-model="user.password" :class="{'p-invalid':v$.user.password.$invalid && submitted}" name="password"/>
							<small v-if="v$.user.password.required.$invalid && submitted" class="p-error">Must enter a Password with your Email </small>
						</div>
						<div class="p-field p-col-12 p-md-6">
							<label for="phone" :class="{'p-error':v$.user.phone.$invalid && submitted}">Phone</label>
							<InputMask mask="(999) 999-9999" id="phone" type="text" v-model="user.phone" :class="{'p-invalid':v$.user.phone.$invalid && submitted}" name="phone"/>
							<small v-if="(v$.user.phone.$invalid && submitted) || v$.user.phone.$pending.$response" class="p-error">Must enter Member's or Spouse's Phone</small>
						</div>
						<div class="p-field p-col-12 p-md-6">
							<label for="birthday" :class="{'p-error':v$.user.birthday.$invalid && submitted}">Birthday</label>
							<InputMask mask="99/99/9999" v-model="user.birthday" :class="{'p-invalid':v$.user.birthday.$invalid && submitted}" name="birthday" placeholder="MM/DD/YYYY"/>
							<small v-if="(v$.user.birthday.$invalid && submitted) || v$.user.birthday.$pending.$response" class="p-error">{{v$.user.birthday.required.$message}}</small>
						</div>
						<div class=" p-col-12 p-md-6">
							<p for="spouse.deceased">Wife Deceased?</p>
							<div class="p-formgroup-inline">
								<div class="p-field-radiobutton">
									<RadioButton id="option1" name="spouse.deceased" value="0" selected v-model="user.spouse.deceased" />
									<label for="option1">No</label>
								</div>
								<div class="p-field-radiobutton">
									<RadioButton id="option2" name="spouse.deceased" value="1" v-model="user.spouse.deceased" />
									<label for="option2">Yes</label>
								</div>
							</div>
						</div>
						<Divider />				
						<div class="p-col-12">
							<h4 class="p-text-center">Spouse Info</h4>
						</div>
						<div class="p-field p-col-2">
							<label for="title">Title</label>
							<Dropdown id="spousetitle" type="text" :options="titleOptions" optionLabel="label" v-model="user.spouse.title" name="spouse.title"/>
						</div>
						<div class="p-field p-col-10 p-md-4">
							<label for="first" :class="{'p-error':v$.user.spouse.first.$invalid && submitted}">Firstname</label>
							<InputText id="spousefirst" type="text" v-model="v$.user.spouse.first.$model" :class="{'p-invalid':v$.user.spouse.first.$invalid && submitted}" name="spouse.first"/>
							<small v-if="(v$.user.spouse.first.$invalid && submitted) || v$.user.spouse.first.$pending.$response" class="p-error">Must enter Member's or Spouse's Name</small>
						</div>
						<div class="p-field p-col-10 p-md-4">
							<label for="last" :class="{'p-error':v$.user.spouse.last.$invalid && submitted}">Lastname</label>
							<InputText id="spouselast" type="text" v-model="user.spouse.last" :class="{'p-invalid':v$.user.spouse.last.$invalid && submitted}" name="spouse.last"/>
							<small v-if="(v$.user.spouse.last.$invalid && submitted) || v$.user.spouse.last.$pending.$response" class="p-error">Must enter Member's or Spouse's Name</small>
						</div>
						<div class="p-field p-col-12 p-md-6">
							<label for="email" :class="{'p-error':v$.user.spouse.email.$invalid && submitted}">Email (use this to log in)</label>
							<InputText id="spouseemail" type="text" v-model="user.spouse.email" :class="{'p-invalid':v$.user.spouse.email.$invalid && submitted}" name="spouse.email"/>
							<small v-if="v$.user.spouse.email.required.$invalid && submitted" class="p-error">Must enter Member's or Spouse's Email </small>
							<small v-if="!v$.user.spouse.email" class="p-error">Enter a valid Email address </small>
						</div>
						<div class="p-field p-col-12 p-md-6">
							<label for="password" :class="{'p-error':v$.user.spouse.password.$invalid && submitted}">Password (use this to log in)</label>
							<Password toggleMask id="spousepassword" v-model="user.spouse.password" :class="{'p-invalid':v$.user.spouse.password.$invalid && submitted}" name="spouse.password"/>
							<small v-if="v$.user.spouse.password.required.$invalid && submitted" class="p-error">Must enter a Password with your Email </small>
						</div>
						<div class="p-field p-col-12 p-md-6">
							<label for="phone" :class="{'p-error':v$.user.spouse.phone.$invalid && submitted}">Phone</label>
							<InputMask mask="(999) 999-9999" id="spousephone" type="text" v-model="user.spouse.phone" :class="{'p-invalid':v$.user.spouse.phone.$invalid && submitted}" name="spouse.phone"/>
							<small v-if="(v$.user.spouse.phone.$invalid && submitted) || v$.user.spouse.phone.$pending.$response" class="p-error">Must enter Member's or Spouse's Phone</small>
						</div>
						<div class="p-field p-col-12 p-md-6">
							<label for="birthday" :class="{'p-error':v$.user.spouse.birthday.$invalid && submitted}">Birthday</label>
							<InputMask mask="99/99/9999" v-model="user.spouse.birthday" :class="{'p-invalid':v$.user.spouse.birthday.$invalid && submitted}" name="spouse.birthday" placeholder="MM/DD/YYYY"/>
							<small v-if="(v$.user.spouse.birthday.$invalid && submitted) || v$.user.spouse.birthday.$pending.$response" class="p-error">{{v$.user.spouse.birthday.required.$message}}</small>
						</div>
						<div class=" p-col-12 p-md-6">
							<p for="deceased">Husband Deceased?</p>
							<div class="p-formgroup-inline">
								<div class="p-field-radiobutton p-align-right">
									<RadioButton id="spouseoption1" name="deceased" value="0" selected v-model="user.deceased" />
									<label for="option1">No</label>
								</div>
								<div class="p-field-radiobutton">
									<RadioButton id="spouseoption2" name="deceased" value="1" v-model="user.deceased" />
									<label for="option2">Yes</label>
								</div>
							</div>
						</div>
						<Divider/>
						<div class="p-col-12">
							<h4 class="p-text-center">Children</h4>
						</div>
						<div class="p-formgroup-inline p-col-12 p-mb-3" v-for="(child, id) in user.children" :key="id">
							<div class="p-col-12">
								<i @click="deleteChild(id)" class="pi pi-times-circle" style="fontsize: 1em; float: right; cursor: pointer;"/>
							</div>
							<div class="p-field-inputtext p-col-12 p-md-4">
								<label>First Name</label>
								<InputText type="text" v-model="user.children[id].first" />
							</div>
							<div class="p-field-inputtext p-col-12 p-md-4">
								<label>Last Name</label>
								<InputText type="text" v-model="user.children[id].last"/>
							</div>
							<div class="p-field-inputtext p-col-12 p-md-4">
								<label>Birthday</label>
								<InputMask mask="99/99/9999" v-model="user.children[id].birthday"/>
							</div>
						</div> 
						<Button label="Add Child" icon="pi pi-plus" @click.prevent="addChild" class="p-button p-button-secondary p-button-rounded" style="max-width: 200px"/>
					</div>
					<Button label="Save" icon="pi pi-check" class="p-button-text" type="submit" />
				</div>
			</div>
		</div>
	</form>
</template>
vue
<script>
import { email, required, requiredIf, requiredUnless, integer } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import API from '../service/api';
/* eslint-disable no-unused-vars */
import InputMask from 'primevue/inputmask';
/* eslint-enable no-unused-vars */

export default {
	data() {
		return {
			v$: useVuelidate(),
			submitted: false,
			user:  {
				_id: "",
				title: "",
				first: "",
				last: "",
				suffix: "",
				nickname: "",
				image: "",
				address: "",
				city: "",
				state: "",
				zip: "",
				email: "",
				password: "",
				phone: "",
				birthday: "",
				deceased: "0",
				joined: "",
				status: "",
				spouse: {
					title: "",
					first: "",
					last: "",
					nickname: "",
					email: "",
					password: "",
					phone: "",
					birthday: "",
					deceased: "0",
				},
				children: [
					{
						first: "",
						last: "",
						birthday: "",
					}
				]
			},
			stateOptions:[
				{label: 'Florida', value: 'FL'},
				{label: 'Georgia', value: 'GA'},
				{label: 'Texas', value: 'TX'}
			],
			titleOptions:[
				{label: "Doctor", value: "Dr."},
				{label: "General", value: "Gen."},
				{label: "Gen (Ret)", value: "Gen (Ret)"},
				{label: "Colonel", value: "Col."},
				{label: "Col (Ret)", value: "Col (Ret)"},
				{label: "Representative", value: "Rep."},
				{label: "Senator", value: "Sen."},
				{label: "Govenor", value: "Gov."},
				{label: "Mayor", value: "Mayor"},
			],
			suffixOptions:[
				{label: "Jr", value: "Jr"},
				{label: "Sr", value: "Sr"},
				{label: "III", value: "III"},
				{label: "IV", value: "IV"},
			]		
		} // fill in user info		
	},
	validations() {
		return{
			user:  {
				_id: {},
				first: { 
					required: requiredUnless(function() {
						return !!this.user.spouse.first;
						})
					},
				last: { 
					required: requiredUnless(function() {
						return !!this.user.spouse.last;
						})
					},
				image: {},
				address: { required },
				city: { required },
				state: { required },
				zip: { required },
				email: { required: requiredUnless(function() {
						return !!this.user.spouse.email;
						}), 
						email },
				password: { required: requiredIf(function() {
						return !!this.user.email;
						})},
				title: {  },
				suffix: {  },
				nickname: {  },
				phone: { 
					required: requiredUnless(function() {
						return !!this.user.spouse.phone;
						})
					},
				birthday: {  },
				deceased: 0,
				joined: { integer },
				status: {  },
				spouse: {
					title: {  },
					first: { 
						required: requiredIf(function() {
							return !this.user.first;
						})
					},
					last: { 
						required: requiredIf(function() {
							return !this.user.last;
						})
					},
					suffix: {  },
					nickname: {  },
					email: { 
						email,
						required: requiredIf(function() {
							return !this.user.email;
						})
					},
					password: { required: requiredIf(function() {
							return !!this.user.spouse.email;
							})},
					phone: { 
						required: requiredIf(function() {
							return !this.user.phone;
						})
					},
					birthday: {  },
					deceased: 0,
				},
				children: [
					{
						first: "",
						last: "",
						birthday: "",
					}
				]
			},
		}
	},
	async created() {
		const response = await API.getUserByID(this.$route.params.id);
		if (response) this.user = response;
		console.log(response);
		this.$toast.add({severity:'info', summary:'Success',detail:'Information Saved', life: 3000});
	},
	methods: {
		async onUpload() {
			await API.
			this.$toast.add({severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000});
		},
		async handleSubmit(valid) {
			this.submitted = true;
			if (!valid) return;
			let form = document.querySelector('form');
			let data = new FormData(form);
			console.log(this.user.children);
			data.append("state", this.user.state.value);
			data.append("title", this.user.title.value);
			data.append("suffix", this.user.suffix.value);
			this.user.children.forEach((child, i)=>
				{ 
					data.append("children["+i+"][last]", child.last);
					data.append("children["+i+"][first]", child.first);
					data.append("children["+i+"][birthday]", child.birthday);
				}
			)
			for (var pair of data.entries()) {
				console.log(pair[0]+ ', ' + pair[1]);
			} 
			let response = {};
			if (this.$route.params.id) response = await API.addUser(data);
			else response = await API.updateUser(this.$route.params.id, data);
			if (response.status == 200) this.$toast.add({severity:'info', summary:'Success',detail:'Information Saved', life: 3000});
//			this.$router.push({ name: "home", params: { message: response.message}});
		},
		addChild() {
			this.user.children.push({
				first: "",
				last: "",
				birthday: "",
			})
		},
		deleteChild(id) {
			this.user.children.splice(id, 1);
		}
	}

}
</script>

<style scoped>
	.card {
		background-color: inherit;
	}
</style>