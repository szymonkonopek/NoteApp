<template>
  <form v-if="userDetails">
    <div class="container mb-2">
      <div class="row">
        <div class="col-md-3">
          <img src="../assets/profile/profile-photo.png" class="img-fluid justify-content-center"
               style="max-width: 80px;">
        </div>
        <div class="col-md-7 justify-content-center m-0">
          <div class="badge bg-secondary text-wrap m-0">
            Created
          </div>
          <div class="h7 m-0">{{ userDetails.created }}</div>
          <div class="badge bg-secondary text-wrap mx-0">
            Last login
          </div>
          <div class="h7 m-0">{{ userDetails.lastSignIn }}</div>
        </div>
        <div class="col-md-2" v-if="userDetails.providers">
          <img v-if="userDetails.providers.includes('google.com')" src="../assets/profile/google-icon.png"
               class="img-fluid justify-content-center" style="max-width: 60px;">
          <img v-else src="../assets/profile/email-icon.png" class="img-fluid justify-content-center"
               style="max-width: 60px;">
        </div>
      </div>
    </div>
    <fieldset disabled>
      <div class="mb-3">
        <label for="disabledTextInput" class="form-label">Email</label>
        <input type="text" id="disabledTextInput" class="form-control" :placeholder="userDetails.email">
      </div>
      <div class="mb-3">
        <label for="inputPassword5" class="form-label">Password</label>
        <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"
               placeholder="•••••••••••">
      </div>
      <div class="mb-3">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled>
          <label class="form-check-label" for="disabledFieldsetCheck">
            Tu pewnie coś będzie albo i nie
          </label>
        </div>
      </div>
    </fieldset>
    <button type="edit" class="btn btn-secondary">Edit</button>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import {fetchUserDetails} from "@/store/utils/userDetails"

export default {
  name: "AppUserData",
  components: {},
  async mounted() {
    this.userDetails = await fetchUserDetails();
  },
  data() {
    return {
      userDetails: null,
    };
  },
};
</script>

<style>
.h7 {
  font-size: 13px;
}
</style>