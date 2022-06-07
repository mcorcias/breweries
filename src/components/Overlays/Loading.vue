<template>
    <div class="loading-main">
        <div class="loadingio-spinner-blocks-uqpgjk7olx">
            <div class="ldio-w01btxqjvko">
            <div style='left:44px;top:44px;animation-delay:0s'></div>
            <div style='left:82px;top:44px;animation-delay:0.23148148148148145s'></div>
            <div style='left:120px;top:44px;animation-delay:0.4629629629629629s'></div>
            <div style='left:44px;top:82px;animation-delay:1.6203703703703702s'></div>
            <div style='left:120px;top:82px;animation-delay:0.6944444444444444s'></div>
            <div style='left:44px;top:120px;animation-delay:1.3888888888888888s'></div>
            <div style='left:82px;top:120px;animation-delay:1.1574074074074074s'></div>
            <div style='left:120px;top:120px;animation-delay:0.9259259259259258s'></div>
            </div>
        </div>
        <p class="loading-text">טוען...</p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.loading-main{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 9999999;
    background: var(--main);
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    flex-direction: column;
}
.loading-text{
    font-size: 18px;
}
@keyframes ldio-w01btxqjvko {
  0% { background: #689cc5 }
  12.5% { background: #689cc5 }
  12.625% { background: #93dbe9 }
  100% { background: #93dbe9 }
}
.ldio-w01btxqjvko div {
  position: absolute;
  width: 36px;
  height: 36px;
  background: #93dbe9;
  animation: ldio-w01btxqjvko 1.8518518518518516s linear infinite;
}
.loadingio-spinner-blocks-uqpgjk7olx {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: none;
}
.ldio-w01btxqjvko {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-w01btxqjvko div { box-sizing: content-box;}
</style>