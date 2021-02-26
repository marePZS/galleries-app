<template>
  <div class="register">
        <form>
            <div class="mb-3">
                <label for="firstName" class="form-label">First name</label>
                <input type="text" class="form-control" id="firstName" aria-describedby="firstName">
            </div>
            <div class="mb-3">
                <label for="lastName" class="form-label">Last name</label>
                <input type="text" class="form-control" id="lastName" aria-describedby="lastName">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="email">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password">
            </div>
            <div class="mb-3">
                <label for="confirmPassword" class="form-label">Confirm password</label>
                <input type="password" class="form-control" id="confirmPassword">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="mx-auto" id="checkbox">
                <label class="form-check-label" for="checkbox">Accept Terms and Conditions</label>
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