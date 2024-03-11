/* =============== 278. introduction to NPM  ===============*/

/*  NPM stands for node package manager.
    It is the default package manager for the Node.js runtime environment.
    NPM is used to manage dependencies and packages for Node.js projects
    
    -   Check current version using: npm -v
    -   Run npm init: Initialize a new Node.js project. 
        This file contains metadata about the project
    -   Install dependencies: npm i(nstall) name of dependency
    -   Never upload the node_modules instead use npm i to reinstall them
        based on the json file dependencies of your project */

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
    cart: [
        {product: 'bread', quantity: 5},
        {product: 'apple', quantity: 2}
    ],
    user: {loggedin: true},
};

const   stateClone = Object.assign({}, state);
const   stateDeepClone = cloneDeep(state);

state.user.loggedin = false;

console.log(stateClone);
console.log(stateDeepClone);

/* =============== 279. Bundling with Parcel and NPM Scripts  ===============*/

/*  Parcel is a web application bundler, similar to tools like Webpack or Browserify.
    It simplifies the process of building modern web applications by automating the bundling process.
    Bundling refers to the process of combining multiple files (such as JavaScript, CSS, HTML, images, etc.)
    into a single file or set of files that can be served to the client.
    
    -   Installing parcel through np: npm i parcle --save-dev    
        * When you use the --save-dev flag during installation,
        it instructs npm to save the package as a development dependency in your project's
        development dependencies are only needed during development
    -   Usin npx(node package execute) to execute npm packages directly
        without the need to install them globally or locally beforehand.
    -   Use npx parcel index.html because that it where the entrypoint is located -> the script
    -   np scripts adjust the script in the json file and use npm run "name of script"
    -    
    */

if (module.hot)
{
    module.hot.accept()
}

/* =============== 280. Babel and Polyfilling  ===============*/

import 'core-js/stable';

/* =============== 283. Declarative adn Functional Programming ===============*/

/* Declarative syntax:

    -   use array and object destructuring
    -   use the spread operator
    -   use ternary conditions
    -   use template literals
*/
