<template>
  <div class="features" id="features">
    <div class="container">
      <div class="box-feat">
        <div class="feat">
          <i class="fa fa-magic fa-3x icon-feat"></i>
          <h3>tell us tour idea</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            corrupti hic rerum, debitis tempore minima sunt, dolorum nisi a vel
            iste. Ipsum, animi. Error molestiae autem inventore iste dolorem
            alias?
          </p>
        </div>
        <div class="feat">
          <i class="fa fa-vial fa-3x icon-feat"></i>
          <h3>we will do all the work</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            corrupti hic rerum, debitis tempore minima sunt, dolorum nisi a vel
            iste. Ipsum, animi. Error molestiae autem inventore iste dolorem
            alias?
          </p>
        </div>
        <div class="feat">
          <i class="fa fa-globe-asia fa-3x icon-feat"></i>
          <h3>your product is worldwide</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            corrupti hic rerum, debitis tempore minima sunt, dolorum nisi a vel
            iste. Ipsum, animi. Error molestiae autem inventore iste dolorem
            alias?
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../assets/style/variables.scss";
.features {
  padding: 60px 0;
  background-color: #f6f6f6;
  .box-feat {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 20px;
    @media (max-width: 767px) {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
    .feat {
      padding: 20px;
      text-align: center;
      .icon-feat {
        color: $main-color;
      }
      h3 {
        font-weight: bold;
        margin: 30px 0;
      }
      p {
        line-height: 1.8;
        color: #777;
        font-size: 17px;
      }
    }
  }
}
</style>
