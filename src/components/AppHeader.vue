<template>
  <div class="header">
    <div class="box">
      <img class="logo" src="../assets/logo.png" />
      <div class="links">
        <span class="icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <ul id="nav">
          <router-link to="/" tag="li">
            <a>Home</a>
          </router-link>
          <li><a href="#services">services</a></li>
          <li><a href="#portfolio">portfolio</a></li>
          <li><a href="#features">features</a></li>
          <li><a href="#about-us">about</a></li>
          <li><a href="#contact">contact</a></li>
          <router-link to="/login" tag="li">
            <a>login</a>
          </router-link>
          <router-link to="/singup" tag="li">
            <a>singup</a>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/style/variables.scss";

.header {
  padding: 20px;
  .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      width: 60px;
    }
    .links {
      position: relative;
      .icon {
        width: 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        span {
          background-color: #333;
          margin-bottom: 5px;
          height: 2px;
          &:first-child {
            width: 100%;
          }
          &:nth-child(2) {
            width: 60%;
            transition: 0.3s;
          }
          &:last-child {
            width: 100%;
          }
        }
        &:hover {
          span {
            &:nth-child(2) {
              width: 100%;
            }
          }
        }
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        background-color: #f6f6f6;
        position: absolute;
        right: 0;
        min-width: 200px;
        top: calc(100% + 15px);
        display: none;
        z-index: 1;
        &::before {
          content: "";
          border-width: 10px;
          border-style: solid;
          border-color: transparent transparent #10cab7 transparent;
          position: absolute;
          right: 5px;
          top: -20px;
        }
        li {
          a {
            display: block;
            padding: 15px;
            text-decoration: none;
            color: #222;
            text-transform: capitalize;
            transition: 0.3s;
            &:hover {
              padding-left: 25px;
            }
          }
          &:not(:last-child) {
            a {
              border-bottom: 1px solid #ddd;
            }
          }
        }
      }
      &:hover {
        ul {
          display: block;
        }
      }
    }
  }
}
</style>
