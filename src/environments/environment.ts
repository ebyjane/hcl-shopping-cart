// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyABc_V8JsmBQXM0PA3dpg1w7deuH1kwnHY",
    authDomain: "hcl-shop.firebaseapp.com",
    databaseURL: "https://hcl-shop.firebaseio.com",
    projectId: "hcl-shop",
    storageBucket: "hcl-shop.appspot.com",
    messagingSenderId: "381520147600"      
  }
};
