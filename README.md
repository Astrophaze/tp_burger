# Initier le projet TP_BURGER

## Pré-requis 

- WSL
- Git installé sur WSL
- Node installé sur WSL
- Angular CLI installé

## Récupérer le dépôt 

```
git git@github.com:Astrophaze/tp_burger.git
```

Puis, on va se rendre dans le dossier cloné avec 

```
cd tp_burger/
```

Et là on va supprimer le répertoire .git avec 

```
rm -rf .git
```

Cette action permet de couper le lien entre mon dépôt et votre projet. Vous ne pourrez donc plus pousser vos modifications sur mon dépôt, il faudra alors exécuter la commande 

```
git init
```

Et ensuite vous pourrez pousser autant de modifications que vous voudrez, mais cette fois, sur votre dépôt à vous. Vous devrez me rendre avant la fin de la journée un lien vers votre dépôt mis à jour avec votre travail du jour. 

## Démarrer le projet 

Dans le répertoire du projet, executez

```
npm install
```

Puis 

```
ng serve --open
```

Vous devriez avoir votre projet qui s'ouvre sur le navigateur. Si ce n'est pas le cas, rendez vous sur [localhost:4200](http://localhost:4200/)


Have fun :)