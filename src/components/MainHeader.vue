<template>
  <header class="header">
    <div class="header_logo">
      <img src="../assets/logo.svg" alt="logo" />
    </div>
    <nav>
      <div class="mobile-nav"><span></span> <span></span> <span></span></div>
      <div class="desktop-nav">
        <a href="#" class="register">Register</a>
        <button class="btn_login">Login</button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style >
@media (min-width: 0px) {
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 92%;
    margin: 0 auto;
    height: 73px;
    margin-top: 27px;
    position: relative;
  }

  .desktop-nav {
    display: none;
  }

  .mobile-nav {
    position: absolute;
    top: 8px;
    right: 10px;
    height: 18px;
    width: 24px;
    cursor: pointer;
    z-index: 100;
  }

  .mobile-nav span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 1.5px;
    background-color: var(--cl_mid_grey);
  }

  .mobile-nav span:nth-child(1) {
    top: 0;
  }

  .mobile-nav span:nth-child(2) {
    top: calc(50% - 1.5px);
  }

  .mobile-nav span:nth-child(3) {
    bottom: 0;
  }

  .main_intro {
    display: flex;
    width: 100%;
  }
}

@media (min-width: 932px) {
  body {
    padding-bottom: 50px;
  }

  .mobile-nav {
    display: none;
  }

  .desktop-nav {
    display: flex;
    flex-direction: row;
  }

  .desktop-nav .register {
    margin-right: 20px;
    padding: 16px 30px;
    text-decoration: none;
    font-family: var(--ff-primary_alt);
    font-weight: 500;
    color: var(--cl-cherry-red);
    letter-spacing: 0.015em;
  }

  .desktop-nav .btn_login {
    width: 110px;
    height: 48px;
    padding: 16px 30px;
    border-radius: 24px;
    background-color: var(--cl-cherry-red);
    border: none;
    color: var(--cl-white);
    font-family: var(--ff-primary_alt);
    font-size: var(--fs-small);
    font-weight: 500;
    line-height: 100%;
    cursor: pointer;
    transition: 0.3s;
  }

  .desktop-nav .btn_login:hover {
    background-color: var(--cl-red);
  }
}
</style>