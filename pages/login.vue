<template>
    <div>
        <div>
        <h1>
            Create User / Login
        </h1>
    </div>
    <login-form></login-form>
    </div>
</template>
<script>
import LoginForm from '~/components/LoginForm.vue'
export default {
  components: { LoginForm },
    data() {
        return {

        }
    }
}
</script>