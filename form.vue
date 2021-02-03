<template>
      <b-form @submit.stop.prevent="onSubmit" class="row justify-content-md-center">
        <div class="col-8 col-sm-3">
          <b-form-group
            label="Name"
            label-for="name"
            valid-feedback="Perfect !"
            :state="validateState('name')"
          >
            <b-form-input
              id="name"
              v-model="$v.form.name.$model"
              :state="validateState('name')"
              trim
            ></b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.name.required"
              >Field must be filled.</b-form-invalid-feedback
            >
            <b-form-invalid-feedback v-if="!$v.form.name.minLength"
              >Your name is too short.</b-form-invalid-feedback
            >
          </b-form-group>
          <b-form-group
            label="Email address"
            label-for="email"
            valid-feedback="Perfect !"
            :state="validateState('email')"
          >
            <b-form-input
              id="email"
              v-model="$v.form.email.$model"
              :state="validateState('email')"
              trim
            ></b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.email.required"
              >Field must be filled.</b-form-invalid-feedback
            >
            <b-form-invalid-feedback v-if="!$v.form.email.email"
              >Your email address is incorrect.</b-form-invalid-feedback
            >
          </b-form-group>
        </div>
        <div class="col-8 col-sm-5">
          <b-form-group
            label="Message"
            label-for="content"
            valid-feedback="Perfect !"
            :state="validateState('content')"
          >
            <b-form-textarea
              id="content"
              v-model="$v.form.content.$model"
              :state="validateState('content')"
              placeholder="Hello, ..."
              rows="8"
              trim
            ></b-form-textarea>
            <b-form-invalid-feedback v-if="!$v.form.content.required"
              >Field must be filled.</b-form-invalid-feedback
            >
            <b-form-invalid-feedback v-if="!$v.form.content.minLength"
              >Message content is too short.</b-form-invalid-feedback
            >
          </b-form-group>
          <b-button class="float-right" type="submit" variant="primary">Submit</b-button>
        </div>
      </b-form>
</template>

<script src="./ContactUsPage.ts"></script>
