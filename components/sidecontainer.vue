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
        <div class="side-socials-container">
          <div class="side-social__text">
            <h1>Our Socials!</h1>
          </div>
          <div class="side-social-wrapper">
            <div
              v-for="social in socials"
              :key="social._id"
              class="side-social"
            >
              <div class="side-social-img">
                <a
                  :href="social.href"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    :src="$urlFor(social.socialImage).url()"
                    :alt="`{{ social.socialPlatform }}`"
                  />
                </a>
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
                <nuxtLink :to="`/members/${member.slug}`">
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

const socialsQuery = groq`*[ _type == "social" ]{socialImage,socialPlatform, href}`;
const { data: socials } = await useSanityQuery(socialsQuery);

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
}

.side-post {
  border-bottom: 1px solid var(--rare-white);
  border-top: 1px solid var(--rare-white);
  display: flex;
  height: 25px;
  padding: 25px;
  align-items: center;
}

.side-post-img {
  width: 25%;
  height: auto;
  padding-right: 25px;
}

.side-post-img img {
  width: 100%;
  height: 100%;
}

.side-socials-container {
  margin-top: 25px;
  border: 1px solid var(--rare-white);
}

.side-social__text {
  font-family: var(--rare-accent-font);
  font-size: 0.5rem;
  display: flex;
  justify-content: center;
}

.side-social-wrapper {
  display: flex;
}

.side-social {
  display: flex;
  justify-content: center;
  width: 25%;
  height: auto;
  border: 1px solid var(--rare-white);
}

.side-social-img {
  width: 50%;
  height: auto;
}

.side-social-img img {
  width: 100%;
  height: 100%;
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
