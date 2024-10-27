export { auth as middleware } from "@/auth";
export const config = {
  unstable_allowDynamic: ["/node_modules/mongoose/dist/browser.umd.js"],
  //...rest of the config
};
