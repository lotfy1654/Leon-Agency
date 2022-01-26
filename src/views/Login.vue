<template>
  <div>
    <app-header-sec />
    <div class="login-form">
      <div class="patern"></div>
      <div class="intro-text">
        <h1>Login</h1>
        <div class="fald">
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div class="fald">
          <input type="password" name="password" placeholder="password" />
        </div>
        <div class="submit">
          <input type="submit" value="Submit" />
        </div>
      </div>
      <end-footer />
    </div>
  </div>
</template>

<script>
import AppHeaderSec from "@/components/AppHeaderSec";
import EndFooter from "@/components/Footer.vue";
export default {
  name: "login",
  components: {
    AppHeaderSec,
    EndFooter,
  },
};
</script>

<style lang="scss">
@import "../assets/style/variables.scss";
.login-form {
  background-image: url("../assets/images/landing.jpg");
  background-size: cover;
  height: calc(100vh - 64px);
  position: relative;
  .patern {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 10px 6px 12px 10px #ddd;
  }
  .intro-text {
    // background-color: rgba(179, 122, 122, 0.9);
    margin: 0;
    border: 3px solid #ccc;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 620px;
    max-width: 100%;
    text-transform: capitalize;
    h1 {
      margin: 35px;
      color: $main-color;
      font-weight: bold;
      font-size: 50px;
    }
    .fald {
      input {
        width: 75%;
        margin: 20px;
        outline: none;
        border: 2px solid #fafafa;
        background: none;
        padding: 0.6rem 1.2rem;
        color: #fff;
        font-weight: 500;
        font-size: 0.95rem;
        letter-spacing: 0.5px;
        border-radius: 25px;
        &::placeholder {
          color: #333;
          font-weight: bold;
          font-size: 20px;
          text-transform: capitalize;
        }
      }
    }
    .submit {
      float: left;
      margin: 10px 80px;
      input {
        border: 2px solid #10cab7;
        background: no-repeat;
        color: #fff;
        font-size: 23px;
        font-weight: bold;
        line-height: 1.8;
        padding: 1px 20px;
      }
      @media (max-width: 767px) {
        float: none;
        margin: 10px 75px;
      }
    }
    @media (max-width: 767px) {
      width: 340px;
    }
  }
}
</style>
