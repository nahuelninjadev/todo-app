<template>
  <input type="text" v-model="todoname" @keyup.enter="add" class="shadow" />
</template>

<script>
import { ADD_TODO } from '../store/mutation-types';
export default {
  name: "TodoForm",
  data() {
    return {
      todoname: "",
    };
  },
  methods: {
    add() {
      if (this.todoname === "") return false;
      this.$store.commit(ADD_TODO, {
        id: Date.now(),
        name: this.todoname,
        done: false
      })
      this.todoname = '';
    },
  },
};
</script>

<style scoped>
input {
  width: calc(100% - 50px);
  height: 45px;
  border-radius: 5px;
  outline: none;
  border: 0px;
  padding-right: 10px;
  padding-left: 40px;
  font-size: 18px;
  font-family: 'Josefin Sans', sans-serif !important;
  background-color: var(--very-light-gray);
  color: var(--very-dark-blue);
  caret-color:hsl(220, 98%, 61%);
}

body.dark-theme input{
  background-color: var(--very-dark-desaturated-blue);
  color: hsl(234, 39%, 85%);
}

</style>