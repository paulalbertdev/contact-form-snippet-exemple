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
              v-model="form['name']"
              :state="validateState('name')"
              trim
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label="Email address"
            label-for="email"
            valid-feedback="Perfect !"
            :state="validateState('email')"
          >
            <b-form-input
              id="email"
              v-model="form['email']"
              :state="validateState('email')"
              trim
            ></b-form-input>
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
              v-model="form['content']"
              :state="validateState('content')"
              placeholder="Hello, ..."
              rows="8"
              trim
            ></b-form-textarea>
          </b-form-group>
          <b-button class="float-right" type="submit" variant="primary">Submit</b-button>
        </div>
      </b-form>
</template>

<script src="./ContactUsPage.ts"></script>
