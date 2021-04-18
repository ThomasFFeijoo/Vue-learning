# live-chat

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Firebase Deploy
After the docker container is running:
```
docker-compose exec nodejs firebase login
docker-compose exec nodejs yarn run build
docker-compose exec nodejs firebase deploy
```

In case there's a update in the firestore rules:
```
docker-compose exec nodejs firebase deploy --only firestore:rules
```