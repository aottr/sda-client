<script setup lang="ts">
const config = useRuntimeConfig();
localStorage.setItem('token', `Token ${config.public.accessToken}`);
</script>
<template>
  <v-row align="center" justify="center" style="height: 100vh" dense>
    <v-col
      cols="12"
      lg="6"
      md="6"
      class="grey lighten-2 fill-height d-flex flex-column justify-center align-center">
      <VCard>
        <VCardText class="text-h2 pa-5">Welcome</VCardText>
      </VCard>
    </v-col>
  </v-row>
</template>
