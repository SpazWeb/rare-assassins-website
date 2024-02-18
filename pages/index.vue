<template>
  <Header />
  <div class="recent-post">
    <div v-for="post in posts" :key="post._id" class="post">
      <nuxt-link :to="`/blog/${post.slug.current}`">
        <img :src="$urlFor(post.mainImage).url()" :alt="`${post.title}`" />
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const query = groq`*[ _type == "post" ]{mainImage, slug} | order(_createAt desc)[0..0]`;
const { data: posts } = await useSanityQuery(query);
</script>

<style scoped>
.recent-post {
  z-index: 100;
  display: flex;
  width: 100%;
  height: 500px;
  overflow: hidden;
  position: relative;
  align-items: center;
}
</style>
