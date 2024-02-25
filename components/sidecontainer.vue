<template>
  <div class="sideContainer">
    <div class="sideContainer-container">
      <div class="sideContainer-container__wrapper">
        <div class="side-post-container">
          <div class="side-post__text">
            <h1>Latest Posts!</h1>
          </div>
          <div v-for="post in posts" :key="post._id" class="side-post">
            <div class="side-post-text">
              <div class="side-post-text__title">
                <nuxt-link :to="`/blog/${post.slug.current}`">
                  <h4>{{ post.title }}</h4>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="side-members-container">
          <div class="side-members__text">
            <h1>Newest Member!</h1>
          </div>
          <div class="side-members-wrapper">
            <div
              v-for="member in members"
              :key="member._id"
              class="side-member"
            >
              <div class="side-member-img">
                <nuxtLink :to="`/members/${member.slug.current}`">
                  <img
                    :src="$urlFor(member.image)"
                    :alt="`{{ member.gamertag }}`"
                  />
                </nuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const query = groq`*[ _type == "post" ]{title, mainImage, slug} | order(_createAt desc)[0..2]`;
const { data: posts } = await useSanityQuery(query);

const membersQuery = groq`*[ _type == "members" ] | order(joinedAt desc)[0..0]`;
const { data: members } = await useSanityQuery(membersQuery);
</script>

<style scoped>
.sideContainer {
  margin-top: 25px;
  width: 20%;
  display: flex;
  flex-direction: column;
}

.side-post-container {
  border: 1px solid var(--rare-white);
}

.side-post__text {
  font-family: var(--rare-accent-font);
  font-size: 0.5rem;
  display: flex;
  justify-content: center;
  font-size: 0.5rem;
}

.side-post {
  border-bottom: 1px solid var(--rare-white);
  border-top: 1px solid var(--rare-white);
  display: flex;
  height: 25px;
  padding: 25px;
  align-items: center;
  font-size: 1rem;
}

.side-members-container {
  margin-top: 25px;
  border: 1px solid var(--rare-white);
}

.side-members__text {
  font-family: var(--rare-accent-font);
  font-size: 0.5rem;
  display: flex;
  justify-content: center;
  font-size: 0.5rem;
}

.side-members-wrapper {
  display: flex;
}

.side-member {
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
}

.side-member-img {
  width: 100%;
  height: auto;
}

.side-member-img img {
  width: 100%;
  height: 100%;
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
