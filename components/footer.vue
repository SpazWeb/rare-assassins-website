<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-wrapper">
        <div class="footer-block">
          <div class="footer-img">
            <img src="../assets/img/logo.png" alt="Rare Assassins" />
          </div>
        </div>
        <div class="footer-block">
          <h2 class="footer-heading">NEED HELP?</h2>
          <div class="help-text">
            <p>
              For all inquiries related to Rare Assassins, reach out to
              rareassassinsclan@gmail.com and our team would be happy to help.
              We appreciate all of your support! <strong>#BeRare</strong>
            </p>
          </div>
        </div>
        <div class="footer-block">
          <h2 class="footer-heading">MAIN MENU</h2>
          <ul class="footer-details">
            <li>
              <NuxtLink to="/">HOME</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/members">ROSTER</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/games">GAMES</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blog">BLOG</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/schedule">SCHEDULE</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="footer-block">
          <h2 class="footer-heading">SOCIAL</h2>
          <ul class="footer-details">
            <li v-for="social in social" :key="social._id">
              <a
                :href="`${social.href}`"
                target="_blank"
                rel="noopener noreferrer"
                >{{ social.socialPlatform }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const query = groq`*[ _type == "social" ]`;
const { data: social } = await useSanityQuery(query);
</script>

<style scoped>
.footer {
  width: 100%;
  margin-top: 50px;
  padding: 50px 0;
  display: block;
  font-family: var(--rare-accent-font);
  background-color: var(--rare-black);
}

.footer-container {
  position: relative;
  padding: 0 20px;
}

.footer-wrapper {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  grid-gap: 40px;
  gap: 40px;
}

.footer-img {
  width: 20rem;
  height: auto;
}

.footer-img img {
  width: 100%;
  height: auto;
}

.help-text {
  font-family: var(--rare-body-font);
  width: 17rem;
}

.help-text p {
  margin: 0;
  line-height: 162%;
  font-size: 15px;
}

.footer-heading {
  margin: 0;
  font-size: 1rem;
}

.footer-details {
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 1rem;
}

.footer-details li {
  line-height: 2rem;
}

a {
  text-decoration: none;
  color: var(--rare-white);
}
</style>
