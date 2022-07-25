import type { Component } from 'solid-js';
import { useStore } from '../store';

const Home: Component = ()  => {
  const { count } = useStore();
  return <>
    <h1 class='w-full'>
      Home
      {count}
    </h1>
  </>
}

export default Home;
