# Serverless commands (aws)

### Create new serverless project

```shell
sls create -t aws-nodejs -n project_name
```

### Deploy function on aws

```shell
sls deploy
```

### invoke function

```shell
remote => sls invoke -f function_name -s stage_name -d data_to_send
local => sls invoke local -f function_name -s stage_name -d data_to_send
```

### plugin for execute serverless locally

```shell
npm install --save serverless-offline
sls offline
```

### remove all function in aws

```shell
sls remove
```
<<<<<<< HEAD

Serverless yml Reference
https://serverless.com/framework/docs/providers/aws/guide/serverless.yml/
=======
>>>>>>> a6a27a495c42d6f0f896d337dc91c057da33d55c
