## Install & Test

Make sure you have the Bit CLI (`bit -v`) if not [get it here](https://www.npmjs.com/package/bit-cli)

### Public 

1. Clone a blank Create React App repository and install dependencies. Why? because if our components work on a fresh CRA install, but they don't work in another react application, then it's not a problem with the components, it's a problem with the other app.

```bash
git clone https://github.com/listingslab-software/bit.git my-bit-test
cd ./create-react-app/my-bit-test
npm i
npm start
```
The app opens on http://localhost:3000

1. Install teambit's package _@teambit/bvm_ to the project 
`npx @teambit/bvm install` 
> Updata periodically with `npx @teambit/bvm upgrade` 

2. Install a public bit package from listingslab

3. Import 


### Private 

```bash
> bit logout
logged out successfully.
> bit login 
⢀⠀ running command "login"...Your browser has been opened to visit:
https://bit.cloud/bit-login?port=8085&clientId=62f94cb8-&responseType=token&deviceName=MacBook-Air.local&os=darwin

successfully added @bit as a scoped registry at /Users/dt9/.npmrc
success! logged in as milky-lacks-toes
> 
```


3. Install a private bit package called `milky-lacks-toes.atrackt` from listingslab

4. Install a private bit package from elsewhere

5. Now install a private package  containing our bomber TS components

- Bit is going to take care of the privacy issue. When we run the next step, we need the CLI to be logged in with an account which has access to the package. Otherwise it ain't gonna work