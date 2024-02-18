<template>
  <Header />
  <div class="members">
    <div class="members-container">
      <div class="members-container__wrapper">
        <div class="member-member">
          <div v-for="member in members" :key="member._id" class="member">
            <div class="member-img">
              <nuxtLink :to="`/members/${member.slug.current}`">
                <img
                  :src="$urlFor(member.image).url()"
                  :alt="member.gamertag"
                />
              </nuxtLink>
            </div>
          </div>
        </div>
        <Sidecontainer />
      </div>
    </div>
  </div>
</template>

<script setup>
const query = groq`*[ _type == "members" ]`;
const { data: members } = await useSanityQuery(query);
</script>

<style scoped>
.members-container {
  display: flex;
  justify-content: center;
}

.members-container__wrapper {
  display: flex;
  justify-content: center;
  justify-content: space-between;
  width: 80%;
}

.member-member {
  width: 80%;
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.member {
  display: flex;
  width: 20%;
  height: 238.58px;
}

.member-img {
  width: 100%;
  height: 238.58px;
}

.member-img img {
  width: 100%;
  height: auto;
}
</style>
