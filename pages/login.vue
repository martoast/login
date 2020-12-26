<template>
    <div>
        <div>
        <h1>
            Create User
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