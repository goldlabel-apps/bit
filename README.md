# Bit

[bit.cloud](https://bit.cloud) Bit is the platform for component-driven development. Forget monoliths and distribute app development to components. Enjoy better scale, speed, and consistency


## Test Package

[milky-lacks-toes/atrackt](https://bit.cloud/milky-lacks-toes/atrackt)

[Publish and Reuse React Components to Build Gatsby Sites](https://blog.bitsrc.io/publish-and-reuse-react-components-to-build-gatsby-sites-faster-7c08c63e6198)

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

    `bit logout && bit login`
  
## Workspaces

Start a new workspace using one of Bit's starters. For example, the following creates a workspace using the 'react' starter. It sets my-org.tasks-workspace as the default scope for components in that workspace (remote scopes hosted on bit.cloud are prefixed with the scope owner: <owner>.<scope-name>):

```bash
bit new react tasks-workspace --default-scope my-org.tasks-scope
```

#### Notes

bit packages are namespaced like... `org.scope`
So for dev pursposes we have got milky-lacks-toes.atrackt