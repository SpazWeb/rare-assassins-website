<template>
  <Header />
  <div class="slug">
    <div class="slug-container">
      <div class="slug-container__wrapper">
        <div class="slug-blog">
          <div class="slug-blog__img">
            <img :src="$urlFor(post.mainImage).url()" :alt="post.title" />
          </div>
          <div class="slug-blog__text">
            <div class="slug-blog__text-title">
              <h1>{{ post.title }}</h1>
            </div>
            <div class="slug-blog__text-body">
                <BlockContent :blocks="post.body" />
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
import BlockContent from "~/components/BlockContent.vue";

const route = useRoute();

const query = groq`*[ _type == "post" && slug.current == $slug][0]`;
const { data: post } = await useSanityQuery(query, {
  slug: route.params.slug,
});
</script>
<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  components: { BlockContent },
};
</script>

<style scoped>
.slug-container {
  display: flex;
  justify-content: center;
}

.slug-container__wrapper {
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  width: 80%;
}

.slug-blog {
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
}

.slug-blog__img {
  width: 100%;
  height: 100%;
}

.slug-blog__img img {
  height: auto;
  width: 100%;
}

.slug-blog__text-title {
  font-family: var(--rare-accent-font);
}

.slug-blog__text-body {
  font-family: var(--rare-body-font);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
