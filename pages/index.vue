<template>
  <Header />
  <div class="home">
    <div class="home-container">
      <div class="home-container__wrapper">
        <div class="home-content">
          <div class="recent-post section">
            <h2 class="section-heading">
              <nuxt-link to="/blog">Recent Post</nuxt-link>
            </h2>
            <div v-for="post in posts" :key="post._id" class="post">
              <nuxt-link :to="`/blog/${post.slug.current}`">
                <img
                  :src="$urlFor(post.mainImage).url()"
                  :alt="`${post.title}`"
                />
              </nuxt-link>
            </div>
          </div>
          <div class="members section">
            <div>
              <h2 class="section-heading">
                <nuxt-link to="/members">Our Members</nuxt-link>
              </h2>
              <div class="members">
                <div v-for="member in members" :key="member._id" class="member">
                  <nuxt-link :to="`/members/${member.slug.current}`">
                    <img
                      :src="$urlFor(member.image).url()"
                      :alt="`${member.gamertag}`"
                    />
                  </nuxt-link>
                </div>
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
const query = groq`*[ _type == "post" ]{mainImage, slug} | order(_createAt desc)[0..0]`;
const { data: posts } = await useSanityQuery(query);

const memberQuery = groq`*[ _type == "members" ][0..3]`;
const { data: members } = await useSanityQuery(memberQuery);
</script>

<style scoped>
.home-container {
  display: flex;
  justify-content: center;
  font-family: var(--rare-accent-font);
}

.home-container__wrapper {
  display: flex;
  justify-content: space-between;
  width: 80%;
}

.home-content {
  width: 78%;
}

.post img {
  width: 100%;
}

.section-heading {
  color: var(--rare-white);
  position: relative;
  font-size: 2rem;
  width: 100%;
}

.section-heading::after {
  content: "";
  display: block;
  width: 40rem;
  height: 5px;
  background: var(--rare-white);
  right: 85px;
  top: 50%;
  position: absolute;
}

.members {
  display: flex;
  justify-content: space-between;
}

.member {
  width: 20%;
  height: auto;
}

.member img {
  width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  color: var(--rare-white);
}

a:hover {
  color: var(--rare-green);
}
</style>
