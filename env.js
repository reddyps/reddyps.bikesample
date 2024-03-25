function getEnvVariable(name) {
 // This example assumes you have a way to inject environment variables into your web app
 // For example, you might have a script tag in your HTML that sets global variables
 return window[name];
}