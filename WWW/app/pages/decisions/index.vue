<script lang="ts" setup>
const {data: documents, error} = await useAsyncData('decisions', () =>
  queryCollection('archive')
    .select('title', 'path', 'description')
    .all())
</script>
<template>
  <div>DECISIONS INDEX</div>
  <hr/>
  <NuxtLink v-for="doc in documents" :key="doc.path" :to="doc.path">
    <h2>{{ doc.path }}</h2>
    <p>{{ doc.title }}</p>
    <p>{{ doc.description }}</p>
  </NuxtLink>

  <hr/>

  {{ error }}
</template>
