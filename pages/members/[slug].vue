<template>
  <Header />
  <div class="member-slug">
    <div class="member-slug-container">
      <div class="member-slug-container__wrapper">
        <div class="member-member">
          <div class="member-top">
            <div class="member-member__img">
              <img
                :src="$urlFor(members.image).url()"
                :alt="members.gamertag"
              />
            </div>
            <div class="member-text">
              <div class="member-text__compGame" v-if="members.currentGame">
                <h4>
                  Competitive Game: <span>{{ members.currentGame }}</span>
                </h4>
              </div>
              <div v-else></div>
              <div class="member-text__role" v-if="members.role">
                <h4>
                  Role: <span>{{ members.role }}</span>
                </h4>
              </div>
              <div v-else></div>
              <div class="member-text__hero" v-if="members.hero">
                <h4>
                  Favorite Superhero: <span>{{ members.hero }}</span>
                </h4>
              </div>
              <div v-else></div>
              <div class="member-text__game" v-if="members.favgame">
                <h4>
                  Favorite Game: <span>{{ members.favgame }}</span>
                </h4>
              </div>
              <div v-else></div>
              <div class="member-text__movie" v-if="members.movie">
                <h4>
                  Favorite Movie: <span>{{ members.movie }}</span>
                </h4>
              </div>
              <div v-else></div>
            </div>
          </div>
          <div class="member-facts">
            <div class="member-facts__odd" v-if="members.odd">
              <p>Odd Facts: {{ members.odd }}</p>
            </div>
            <div v-else></div>
            <div class="member-facts__memory" v-if="members.memory">
              <p>Best Gaming Memory: {{ members.memory }}</p>
            </div>
            <div v-else></div>
          </div>
          <div class="member-socials">
            <div class="member-socials__twitter" v-if="members.twitter">
              <a
                :href="`https://twitter.com/${members.twitter}`"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="../../assets/img/145.png" alt="member twitter" />
              </a>
            </div>
            <div v-else></div>
            <div class="members-socials__youtube" v-if="members.youtube">
              <a
                :href="`https://youtube.com/${members.youtube}`"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="../../assets/img/144.png" alt="member youtube" />
              </a>
            </div>
            <div v-else></div>
            <div class="members-socials__twitch" v-if="members.twitch">
              <a
                :href="`https://twitch.tv/${members.twitch}`"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="../../assets/img/146.png" alt="member twitch" />
              </a>
            </div>
          </div>
          <div class="twitch-embed" v-if="members.twitch">
            <iframe
              :src="`https://player.twitch.tv/?channel=${members.twitch}&parent=localhost`"
              frameborder="0"
              allowfullscreen="true"
              scrolling="no"
              height="378"
              width="620"
            ></iframe>
          </div>
          <div v-else></div>
        </div>
      </div>
      <Sidecontainer />
    </div>
  </div>
  <Footer />
</template>

<script setup>
const route = useRoute();

const query = groq`*[ _type == "members" && slug.current == $slug][0]`;
const { data: members } = await useSanityQuery(query, {
  slug: route.params.slug,
});
</script>

<style scoped>
.member-slug {
  display: flex;
  justify-content: center;
}

.member-slug-container {
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  width: 80%;
}

.member-slug-container__wrapper {
  width: 60%;
  display: flex;
  align-items: center;
  font-family: var(--rare-body-font);
}

.member-text h4 {
  font-family: var(--rare-accent-font);
}

.member-text h4 span {
  font-family: var(--rare-body-font);
}

.member-top {
  display: flex;
  align-items: center;
}

.member-member__img {
  width: 50%;
  height: auto;
}

.member-member__img img {
  width: 100%;
  height: auto;
}

.member-socials {
  display: flex;
  justify-content: center;
}

.twitch-embed {
  display: flex;
  justify-content: center;
}
</style>
