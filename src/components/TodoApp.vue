<template>
  <div class="container">
    <todo-bar/>
    <todo-form/>
    <todo-list/>
  </div>
</template>

<script>
import TodoBar from "./TodoBar.vue";
import TodoForm from './TodoForm.vue';
import TodoList from "./TodoList.vue";
export default {
  name: 'TodoApp',
  components: {TodoBar, TodoForm, TodoList}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.container{
  width: 600px;
  max-height: 700px;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0px 20px;
}
</style>
