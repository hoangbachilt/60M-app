<template>
  <div class="dating">
    <router-link :to="{name: 'find-love'}" class="find-love">
      <h1 id="red">Find your love</h1>
      <img src="../../assets/Vector1.png" alt="vector1" class="image">
    </router-link>
    <router-link :to="{name: 'connections'}" class="connection">
      <h1 id="blue-1">Connection</h1>
      <img src="../../assets/Vector2.png" alt="vector2" class="image">
    </router-link>
  </div>
</template>

<style scoped lang="scss">
  @import '../../scss/mixin.scss';

  @include customFontFace('roboto', '../../fonts/Roboto-Regular.ttf');

  .find-love {
    @include customFont(30px, 'roboto');
    background-color: #FFF;
    display: block;
    width: 500px;
    text-align: center;
    border: 1px solid	#FF9E9E;
    border-radius: 5px;
    padding: 30px;
    margin:  163px auto 50px auto;
    position: relative;
    transition: all .3s ease;
    text-decoration: none;
    #red {
      color: #FF5151;
    }
    &:hover {
      background: #FF5151;
      #red {
        color: #FFF;
      }
      transition: all .3s ease;
    }
  }
  .connection {
    @include customFont(30px, 'roboto');
    display: block;
    background-color: #FFF;
    text-decoration: none;
    width: 500px;
    text-align: center;
    border: 1px solid #17446C;
    border-radius: 5px;
    padding: 30px;
    margin: 0 auto 50px auto;
    position: relative;
    transition: all .3s ease;
    #blue-1, #blue-2 {
      color: #646DBE;
    }
    &:hover {
      background: #646DBE;
      #blue-1, #blue-2 {
        color: #FFF;
      }
      transition: all .3s ease;
    }
  }
  .image {
    width: 50px;
    position: absolute;
    top: -18px;
    right: -26px;
    z-index: 1;
  }
</style>
