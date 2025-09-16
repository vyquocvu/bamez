import { Component, createSignal } from 'solid-js';
import authStore from '../store/authStore';

const Home: Component = ()  => {
  const authState = authStore.getState();
  const [status, setStatus] = createSignal(authState.status);
  console.log('Home', authState);
  return <>
    <h1 class='w-full'>
      Home {status}
    </h1>
  </>
}

export default Home;
