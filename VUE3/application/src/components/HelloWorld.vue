<template>
  <div v-move class="box">
    <div class="header"></div>
    <div>内容</div>
  </div>
</template>

<script lang="ts" setup>
import { Directive } from "vue";
const vMove: Directive = {
  // mounted 钩子函数会在元素挂载到 DOM 后触发
  mounted(el: HTMLElement) {
    let moveEl = el.firstElementChild as HTMLElement;
    // 鼠标按下事件
    const mouseDown = (e: MouseEvent) => {
      console.log(e.clientX, e.clientY, "----起始", el.offsetLeft);
      let X = e.clientX - el.offsetLeft;
      let Y = e.clientY - el.offsetTop;
      // 处理鼠标移动事件
      const move = (e: MouseEvent) => {
        el.style.left = e.clientX - X + "px";
        el.style.top = e.clientY - Y + "px";
        console.log(e.clientX, e.clientY, "----改变");
      };
      // 监听鼠标移动和松开
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", move);
      });
    };
    // 监听目标鼠标按下事件
    moveEl.addEventListener("mousedown", mouseDown);
  },
};
</script>

<style>
.box {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
}
.header {
  height: 20px;
  background: black;
  cursor: move;
}
</style>