## Workspaces

Start a new workspace using one of Bit's starters. For example, the following creates a workspace using the 'react' starter. It sets my-org.tasks-workspace as the default scope for components in that workspace (remote scopes hosted on bit.cloud are prefixed with the scope owner: <owner>.<scope-name>):

```bash
bit new react tasks-workspace --default-scope my-org.tasks-scope

bit new react tasks-workspace --default-scope milky-lacks-toes.atrackt