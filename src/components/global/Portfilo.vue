<template>
  <div class="box-end">
    <div class="container">
      <div class="portfolio" id="portfolio">
        <h2 class="special-heading">Portfilo</h2>
        <p>if you do it right, it will last forever</p>
        <div class="portfilo-content">
          <div class="card-box">
            <img src="../../assets/images/portfolio-1.jpg" alt="" />
            <div class="info">
              <h3>project here</h3>
              <p>
                My creative ability is very difficult to measure because it can
                manifest in so many surprising and.
              </p>
            </div>
          </div>
          <div class="card-box">
            <img src="../../assets/images/portfolio-2.jpg" alt="" />
            <div class="info">
              <h3>project here</h3>
              <p>
                My creative ability is very difficult to measure because it can
                manifest in so many surprising and.
              </p>
            </div>
          </div>
          <div class="card-box">
            <img src="../../assets/images/portfolio-3.jpg" alt="" />
            <div class="info">
              <h3>project here</h3>
              <p>
                My creative ability is very difficult to measure because it can
                manifest in so many surprising and.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="about-us" id="about-us">
        <h2 class="special-heading">about</h2>
        <p>less is more work</p>
        <div class="about-content">
          <div class="image">
            <img src="../../assets/images/about.jpg" alt="" />
          </div>
          <div class="text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              exercitationem velit voluptatem labore! Rerum voluptate
              perspiciatis quo placeat unde. Praesentium debitis beatae porro
              sit labore, illum sint a distinctio pariatur?
            </p>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
              exercitationem a quis commodi, eveniet velit inventore earum
              suscipit expedita dolores, est ab dolorum distinctio quisquam fuga
              non! Ipsam, voluptate. Odit!
            </p>
          </div>
        </div>
      </div>
      <div class="contact" id="contact">
        <h2 class="special-heading">contact</h2>
        <p>we are born to create</p>
        <div class="info">
          <p class="label">feel free to drop us a line at:</p>
          <a href="mailto:lotfy1654@gmail.com?subject=Contact" class="link"
            >lotfy1654@gmail.com</a
          >
          <div class="social">
            find us on social networks
            <i class="fab fa-facebook-f icon"></i>
            <i class="fab fa-youtube icon"></i>
            <i class="fab fa-twitter icon"></i>
          </div>
        </div>
      </div>
    </div>
    <footer>&copy; 2021 <span>Leon</span> all right reserved</footer>
  </div>
</template>

<style lang="scss">
@import url("../../assets/style/_variables.scss");
.portfolio {
  padding: 60px 0;
  background-color: #f6f6f6;
  .portfilo-content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 30px;
    margin-top: 80px;
    @media (max-width: 767px) {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
    .card-box {
      background-color: #fff;
      img {
        max-width: 100%;
      }
      .info {
        padding: 20px;
        h3 {
          text-transform: capitalize;
          margin: 0;
        }
        p {
          text-transform: capitalize;
          color: #777;
          line-height: 1.6;
          margin-bottom: 0;
        }
      }
    }
  }
}
.about-us {
  padding-top: 60px;
  padding-bottom: 120px;
  .about-content {
    margin-top: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .image {
      position: relative;
      width: 250px;
      height: 375px;
      img {
        max-width: 100%;
      }
      &::before {
        content: "";
        position: absolute;
        background-color: #ebeceb;
        width: 100px;
        height: calc(100% + 80px);
        top: -40px;
        left: -20px;
        z-index: -1;
      }
      &::after {
        content: "";
        position: absolute;
        width: 120px;
        height: 300px;
        border-left: 60px solid #10cab7;
        border-bottom: 80px solid #10cab7;
        z-index: -1;
        right: -90px;
        top: 10px;
      }
      @media (max-width: 991px) {
        &::after,
        &::before {
          display: none;
        }
        margin: 0 auto 60px;
      }
    }
    .text {
      flex-basis: calc(100% - 500px);
      p {
        &:first-of-type {
          font-weight: bold;
          line-height: 2;
          margin-bottom: 50px;
        }
        &:last-of-type {
          line-height: 1;
          color: #777;
        }
      }
      hr {
        width: 60%;
        display: inline-block;
        height: 4px;
        color: #10cab7;
      }
    }
    @media (max-width: 991px) {
      flex-direction: column;
      text-align: center;
    }
  }
}
.contact {
  padding: 60px;
  background-color: #f6f6f6;
  .info {
    padding: 60px;
    text-align: center;
    .label {
      font-size: 35px;
      font-weight: bold;
      color: #2c4755;
      text-transform: capitalize;
      letter-spacing: -2px;
      margin-bottom: 15px;
    }
    .link {
      display: block;
      font-size: 35px;
      font-weight: 800;
      color: #10cab7;
      text-decoration: none;
    }
    .social {
      display: flex;
      justify-content: center;
      font-size: 16px;
      text-transform: capitalize;
      .icon {
        margin-left: 10px;
        color: #2c4755;
      }
    }
    @media (max-width: 767px) {
      .label,
      .link {
        font-size: 25px;
      }
      padding: 0;
      margin-top: 30px;
    }
  }
}
footer {
  background-color: #2c4755;
  color: #fff;
  padding: 30px 10px;
  text-align: center;
  font-size: 18px;
  text-transform: capitalize;
  span {
    font-weight: bold;
    color: #10cab7;
  }
}
</style>
