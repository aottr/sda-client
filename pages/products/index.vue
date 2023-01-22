<script lang="ts" setup>
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
} = await useFetch<ApiSpec>(`${config.public.apiBase}/products`, {
  headers: {
    Authorization: `Token ${localStorage.getItem('token')}`,
  },
});
const { status, data, message } = apiData.value!;
</script>

<template>
  <VContainer>
    <VRow>
      <VCol cols="6" md="3" v-for="product in data">
        <ProductCard
          :name="product.name"
          :icon="product.icon"
          :id="product.path" />
      </VCol>
    </VRow>
  </VContainer>
</template>
