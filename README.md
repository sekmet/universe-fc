# Wield Universe

<img src="./.misc/header.png" width="300" />

Universes are open-source hosts built by the team behind
[Wield Labs](https://wield.xyz), used for apps such as
[far.quest](https://far.quest) and [Cast](https://far.quest/cast).

**See our developer documents at [`docs.far.quest`](https://docs.far.quest).**

## Self-hosting Your Universe

We've provided a starter `Dockerfile` for you, with `MONGO_URL` and `JWT_SECRET`
as `ARG` parameters.

1. You'll need a MongoDB server, either by deploying MongoDB yourself or using a
   hosted solution such as [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. You'll also need to deploy this Dockerfile to a hosting location of your
   preference ([Railway](https://railway.app),
   [Heroku](https://www.heroku.com/), etc).

## Running the wieldlabs/universe repo

Welcome to the setup guide for Universe! To start, you'll need
[node.js](https://github.com/nvm-sh/nvm),
[yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable), and
[mongodb](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)
configured locally.

Once you have node.js, yarn and mongodb, you'll need to fill the following
environment variables to have a fully operational Wield instance on localhost:

### .env file setup

```
NODE_ENV=production
MONGO_URL=mongodb+srv://... # your local mongo url
JWT_SECRET=change-this
```

Once your environment is configured, run `yarn dev --self-hosted` to have a
running instance, and play around with graphql commands at
`localhost:8080/graphql`!

## Useful Links

- [Register a .cast domain](https://wield.xyz)
- [Developer Documentation](https://docs.far.quest)
