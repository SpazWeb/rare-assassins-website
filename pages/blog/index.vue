<template>
  <Header />
  <div class="blog">
    <div class="blog-container">
      <div class="blog-container__wrapper">
        <div class="posts-container">
          <div v-for="post in posts" :key="post._id" class="post">
            <div class="post-img">
              <img
                :src="$urlFor(post.mainImage).url()"
                :alt="`${post.title}`"
              />
            </div>
            <div class="post-text">
              <div class="post-text__title">
                <nuxt-link :to="`/blog/${post.slug.current}`">
                  <h2>{{ post.title }}</h2>
                </nuxt-link>
              </div>
              <div class="post-text__excerpt">
                <p>{{ post.excerpt }}</p>
              </div>
            </div>
          </div>
        </div>
        <Sidecontainer />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
const query = groq`*[ _type == "post" ]{title, slug, mainImage, excerpt} | order(_publishedAt desc)`;
const { data: posts } = await useSanityQuery(query);
</script>

<style scoped>
.blog-container {
  display: flex;
  justify-content: center;
}

.blog-container__wrapper {
  display: flex;
  justify-content: center;
  justify-content: space-between;
  width: 80%;
}

.posts-container {
  width: 60%;
  display: flex;
  flex-direction: column;
}

.post {
  display: flex;
  border-bottom: 1px solid var(--rare-white);
  height: 200px;
  padding: 25px;
  align-items: center;
}

.post-img {
  width: 100%;
  height: 100%;
  margin-right: 25px;
}

.post-img img {
  height: 100%;
  width: auto;
}

.post-text__excerpt {
  font-family: var(--rare-body-font);
}

a {
  font-family: var(--rare-accent-font);
  text-decoration: underline;
  color: var(--rare-white);
}

a:hover {
  color: var(--rare-green-light);
}
</style>
