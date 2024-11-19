<template>
    <div class="w-[100vh] flex justify-center">
        <div class="border px-3 py-10 rounded-3xl flex flex-col gap-8 w-[50%]">
            <h1>Login</h1>
            <a-input v-model:value="value.email" placeholder="Email" />
            <a-input-password v-model:value="value.password" placeholder="password" />
            <a-button type="primary" @click="login(value.email, value.password)">Login</a-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
interface data {
    email: string,
    password: string
}
const value = ref<data>({
    email: 'info@synergylao.com',
    password: 'synergy@2024$'
})
const login = async (email: string, password: string) => {
    await axios.post('https://api.synergylao.com/api/auth/login',
        {
            "email": email,
            "password": password
        })
        .then(function (response) {
            const tokenAccess = response.data.access_token
            const role = response.data.authUser.roleUser
            localStorage.setItem('access_token', tokenAccess)
            localStorage.setItem('roles', JSON.stringify(role))
            console.log(tokenAccess)
            window.location.reload();

        })
        .catch(function (error) {
            console.log(error)
        })
        .finally(function () {
            // always executed
        });

}
</script>

<style scoped></style>