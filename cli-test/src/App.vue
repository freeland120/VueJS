<template>
  <div id="app">
    <HelloWorld msg="Welcome to BlockChain World App✅" />

    <!-- 3.컴포넌트를 템플릿에 추가한다. -->
    <TodoList :todos="todos" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

//1. TodoList.vue를 import한다.
import TodoList from "./components/TodoList";

export default {
  name: "App",
  components: {
    //2.컴포넌트를 등록한다.
    TodoList,
    HelloWorld
  },
  data() {
    return {
      todos: [
        { id: 1, content: "Vue.js 복습", isCompleted: false },
        { id: 2, content: "IBK기업은행", isCompleted: false },
        { id: 3, content: "NH농협은행", isCompleted: false },
        { id: 4, content: "KB국민은행", isCompleted: false },
        { id: 5, content: "우리은행", isCompleted: false }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
