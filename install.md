## Install & Test

1. Clone a blank Create React App repository and install dependencies. Why? because if our components work on a fresh CRA install, but they don't work in another react application, then it's not a problem with the components, it's a problem with the other app.

```bash
git clone https://github.com/listingslab-software/bit.git bit-test
cd bit-test
npm i
npm start
```
The app will open on http://localhost:3000

2. Stay in the repository, we will now install a private package called `milky-lacks-toes.atrackt` containing our bomber TS components

- Make sure we have Bit CLI installed, if not [get it here](https://www.npmjs.com/package/bit-cli)
- Install teambit's package to the project 

    `npx @teambit/bvm install`

- Run the following to update Bit to the latest version:

    `npx @teambit/bvm upgrade`

- Bit is going to take care of the privacy issue. When we run the next step, we need the CLI to be logged in with an account which has access to the package. Otherwise it ain't gonna work

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