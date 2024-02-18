<template>
  <header class="header">
    <div class="header-wrapper">
      <div class="header-container">
        <div class="header-img">
          <img
            class="header-img__img"
            src="../assets/img/banner.png"
            alt="cyber ninja"
          />
        </div>
        <div class="header-nav">
          <div class="header-nav-container">
            <nav class="header-nav__nav-left nav-list-items">
              <ul class="nav-list nav-list-left">
                <li class="nav-item">
                  <NuxtLink to="/members">Our Members</NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink to="/">Games</NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink to="/blog">Blog</NuxtLink>
                </li>
              </ul>
            </nav>
            <div class="header-logo">
              <NuxtLink to="/">
                <img
                  class="logo"
                  src="../assets/img/logo-ninja.png"
                  alt="rare assassins ninja"
              /></NuxtLink>
            </div>
            <nav class="header-nav__nav-right nav-list-items">
              <ul class="nav-list nav-list-right">
                <li class="nav-item">
                  <NuxtLink to="/">Schedule</NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink to="/">Contact</NuxtLink>
                </li>
                <li class="nav-item">
                  <a
                    href="https://soardogg.com/vendors/rare-assassins/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Store</a
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: relative;
  z-index: 1000;
  background: rgb(62, 62, 62);
  background: -moz-linear-gradient(
    16deg,
    rgba(62, 62, 62, 1) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(62, 62, 62, 1) 100%
  );
  background: -webkit-linear-gradient(
    16deg,
    rgba(62, 62, 62, 1) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(62, 62, 62, 1) 100%
  );
  background: linear-gradient(
    16deg,
    rgba(62, 62, 62, 1) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(62, 62, 62, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3e3e3e",endColorstr="#3e3e3e",GradientType=1);
}
.header-wrapper {
  width: 100%;
}
.header-img {
  /* height: 200px; */
  display: flex;
  align-items: center;
}
.header-img__img {
  width: 100%;
  height: auto;
}

.header-nav {
  display: flex;
  justify-content: center;
}

.header-nav-container {
  width: 70%;
  display: flex;
  align-items: center;
  height: 50px;
}

.nav-list-items {
  width: 100%;
}

.nav-list {
  list-style-type: none;
  display: flex;
  justify-content: center;
  justify-content: space-between;
}

.nav-list-left {
  padding-right: 0;
}

.nav-list-right {
  padding-left: 0;
}

.nav-item a {
  text-decoration: none;
  font-family: "Kenny";
  color: #fff;
}

.nav-item a:hover {
  color: #03b00c;
}

.header-logo {
  height: 150px;
  width: auto;
  padding: 0 50px;
}

.header-logo img {
  height: 100%;
  width: auto;
}
</style>
