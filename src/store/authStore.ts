import { createAnyState }  from '../anyState';

const authStore = createAnyState({
  status: "",
});

export default authStore;