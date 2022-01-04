import Vue from 'vue';
import Vuex from 'vuex';
import { TOGGLE_CHECK, CLEAR_DONE, ADD_TODO, DELETE_TODO } from "./mutation-types";
Vue.use(Vuex);
export default new Vuex.Store({
  state:{
    todos:[
      {
        id:1,
        name: '10 minutes meditation',
        done: false
      },
      {
        id:2,
        name: 'Jog around the park 3x',
        done: true
      },
    ],
  },

  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },

    undoneTodos: state => {
      return state.todos.filter(todo => todo.done === false)
    }
  },

  mutations:{

    [ADD_TODO](state, payload){
      state.todos = [...state.todos, payload];
    },

    [DELETE_TODO](state, payload){
      let newValue = state.todos.filter(todo => todo.id != payload.id);
      Vue.set(state, 'todos', newValue);
    },

    [TOGGLE_CHECK](state, payload){
      let index = state.todos.findIndex(e => e.id == payload.id);
      Vue.set(state.todos, index, {...state.todos[index], done: payload.done});
    },

    [CLEAR_DONE](state){
      let undone = state.todos.filter(todo => todo.done === false);
      Vue.set(state, 'todos', undone);
    }
  }
});