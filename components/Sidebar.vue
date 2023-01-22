<script lang="ts" setup>
const store = useUserInfoStore();
</script>
<template>
  <VNavigationDrawer expand-on-hover rail>
    <VList>
      <VListItem
        :prepend-avatar="`${store.icon}`"
        :title="`${store.name}`"
        :subtitle="`${store.email}`"></VListItem>
    </VList>

    <VDivider></VDivider>

    <VList density="compact" nav>
      <VListItem
        to="/"
        prepend-icon="mdi-home"
        title="Home"
        value="home"
        nuxt></VListItem>
      <VListItem
        to="/products"
        prepend-icon="mdi-folder"
        title="My Downloads"
        value="mydownloads"
        nuxt></VListItem>
      <VListItem
        to="/auth/logout"
        prepend-icon="mdi-logout"
        title="Logout"
        value="logout"
        next></VListItem>
    </VList>
  </VNavigationDrawer>
</template>
