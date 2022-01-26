<template>
  <div class="services" id="services">
    <div class="container">
      <h2 class="special-heading">{{ title }}</h2>
      <p>don't be buxy, be productive</p>
      <div class="services-content">
        <div class="col-box">
          <div class="srv">
            <i class="fas fa-palette fa-2x icon-srv"></i>
            <div class="text">
              <h3>web design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                quasi sint expedita ipsum libero voluptatum natus repellat, rem
                similique esse nisi excepturi obcaecati iure itaque voluptates
                officiis distinctio provident? Optio?
              </p>
            </div>
          </div>
          <div class="srv">
            <i class="fab fa-sketch fa-2x icon-srv"></i>
            <div class="text">
              <h3>UI & UX</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                quasi sint expedita ipsum libero voluptatum natus repellat, rem
                similique esse nisi excepturi obcaecati iure itaque voluptates
                officiis distinctio provident? Optio?
              </p>
            </div>
          </div>
        </div>
        <div class="col-box">
          <div class="srv">
            <i class="fas fa-vector-square fa-2x icon-srv"></i>
            <div class="text">
              <h3>web design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                quasi sint expedita ipsum libero voluptatum natus repellat, rem
                similique esse nisi excepturi obcaecati iure itaque voluptates
                officiis distinctio provident? Optio?
              </p>
            </div>
          </div>
          <div class="srv">
            <i class="fas fa-pencil-ruler fa-2x icon-srv"></i>
            <div class="text">
              <h3>UI & UX</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                quasi sint expedita ipsum libero voluptatum natus repellat, rem
                similique esse nisi excepturi obcaecati iure itaque voluptates
                officiis distinctio provident? Optio?
              </p>
            </div>
          </div>
        </div>
        <div class="col-box">
          <div class="image image-colume">
            <img src="../../assets/images/services.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"]
}
</script>

<style lang="scss">
@import url("../../assets/style/_variables.scss");
.services {
  padding: 60px 0;
  .services-content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 30px;
    margin-top: 100px;
    @media (max-width: 767px) {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
    .col-box {
      .srv {
        display: flex;
        margin-bottom: 40px;
        @media (max-width: 767px) {
          display: block;
          //   flex-direction: column;
          text-align: center;
        }
        .icon-srv {
          color: #10cab7;
          flex-basis: 60px;
        }
        .text {
          flex: 1;
          h3 {
            margin: 0 0 20px;
          }
          p {
            color: #777;
            font-weight: 300;
            line-height: 1.6;
          }
        }
      }
      .image {
        text-align: center;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          background-color: #2c4755;
          width: 80px;
          height: calc(100% + 100px);
          top: -50px;
          right: 70px;
          z-index: -1;
        }
        img {
          width: 260px;
        }
      }
      @media (max-width: 1199px) {
        .image-colume {
          display: none;
        }
      }
    }
  }
}
</style>
