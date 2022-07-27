import type { Component } from 'solid-js';
import { onCleanup, createSignal } from "solid-js";
import AnyState from '../store/anyState';

const User: Component = ()  => {
  const [count, setCount] = createSignal(0);
  const { setItem, watch } = new AnyState({ count: count });
  watch('count', (count) => {
    console.log(`count changed to ${count}`);
    setCount(count);
  })
  return <>
    <h1>User {count()}</h1>
    <button onClick={() => setItem('count', 3) }> Click </button>
  </>
}

export default User;
