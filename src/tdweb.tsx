import TdClient from 'tdweb/dist/tdweb';

export const WASM_FILE_NAME = '2a79a539dfbe607fd685d6ccdd16b5df.wasm';
export const WASM_FILE_HASH = WASM_FILE_NAME.replace('.wasm', '');

let options = {
  useTestDC: false,
  readOnly: false,
  logVerbosityLevel: 1,
  jsLogVerbosityLevel: 3,
  fastUpdating: true,
  useDatabase: false,
  mode: 'wasm',
  wasmUrl: `${WASM_FILE_NAME}?_sw-precache=${WASM_FILE_HASH}`
};

const client = new TdClient(options);
export default client;

