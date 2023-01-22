<script lang="ts" setup>
const route = useRoute();
const id = route.params.id;

interface ApiSpec {
  status: string;
  data?: any;
  message?: string;
}

const config = useRuntimeConfig();
const {
  data: apiData,
  pending,
  error,
  refresh,
} = await useFetch<ApiSpec>(`${config.public.apiBase}/products/${id}`, {
  headers: {
    Authorization: `Token ${localStorage.getItem('token')}`,
  },
});
if (error) navigateTo('/products');
const data = apiData.value!;
console.log(data);
</script>

<template>{{ data }}</template>
