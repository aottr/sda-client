<script lang="ts" setup>
const config = useRuntimeConfig();
localStorage.setItem('token', config.public.accessToken);
const store = useUserInfoStore();
await store.refreshUser();
const ready = true;

useLazyAsyncData('user-image', () => store.retrieveUserImage());
</script>

<template>
  <div>
    <NuxtLayout v-show="ready">
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
