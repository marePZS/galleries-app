<template>
  <div class="register">
        <form>
            <div class="mb-3">
                <label for="exampleInputFirstName" class="form-label">First name</label>
                <input type="text" class="form-control" id="exampleInputFirstName" aria-describedby="firstNameHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputLastName" class="form-label">Last name</label>
                <input type="text" class="form-control" id="exampleInputLastName" aria-describedby="lastNameHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Confirm password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="mx-auto" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Accept Terms and Conditions</label>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
  </div>
</template>

<script>
export default {
    name : 'register',
}
</script>

<style>

</style>