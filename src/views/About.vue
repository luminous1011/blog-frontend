<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1 @click="$store.commit('add')">{{$store.state.counter}}</h1>
    <h1 @click="$store.dispatch('add')">{{$store.state.counter}}</h1>
  </div>
</template>
