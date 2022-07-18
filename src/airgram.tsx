import { Airgram } from 'airgram'

console.log("process.env.SOLID_APP_APP_ID", process.env.SOLID_APP_APP_ID);
console.log("process.env.SOLID_APP_API_HASH", process.env.SOLID_APP_API_HASH);

export const airgram = new Airgram({
  apiId: Number(process.env.SOLID_APP_APP_ID),
  apiHash: process.env.SOLID_APP_API_HASH,
  command: process.env.TDLIB_COMMAND,
  logVerbosityLevel: 2
})
