<script lang="ts" setup>
interface ListItemProps {
  name: string;
  icon: string;
  id: string;
}
const props = defineProps<ListItemProps>();
</script>

<template>
  <VCard>
    <NuxtLink :to="`/products/${id.split('/').pop()}`">
      <VImg :src="`${icon}`" aspect-ratio="1" cover>
        <template v-slot:placeholder>
          <VRow class="fill-height ma-0" align="center" justify="center">
            <VProgressCircular indeterminate color="grey-lighten-5">
            </VProgressCircular>
          </VRow>
        </template>
      </VImg>
    </NuxtLink>
  </VCard>
</template>
