<script setup lang="ts">
import { toRefs } from 'vue'
import { type Data } from '@/types'
import { useRouter } from 'vue-router'
const props = defineProps<{
    data: Data
    id: string
}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { data } = toRefs(props)
const router = useRouter()
const register = () => {

    router.push({ name: 'passenger-detail-view' })
}

</script>

<template>
    <p>Register  here</p>
    <button @click="register">Register</button>
</template>