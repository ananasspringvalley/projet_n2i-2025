<script lang="ts">
    import {onMount} from "svelte";

    let title: HTMLHeadingElement;
    let text: HTMLParagraphElement;
    let button: HTMLButtonElement;
    let indice = 0
    let cls = "texte"

    let tableauTexte = Array<string> (
        "Vous êtes surs de vouloir accéder à votre compte ?",
        "Non par ce que j'ai peut être supprimé les options de déconnexion, alors vous allez potentiellement être bloqué",
        "Vous pensiez que vous alliez être bloqués UNE FOIS connecté ? J'aurais du être plus explicite",
        "On a le temps, ce n'est pas comme si vous pouviez passer par un autre chemin pour vous connecter, si ?",
        "Et en plus, vous n'avez aucun moyen de corriger le problème, tout le processus est inaccessible de l'extérieur !",
        "Je peux vous obliger à cliquer sur ce qui me chante, ce serait dommage si vous n'aviez pas vraiment d'options non ?",
        "Voulez vous continuer ce petit jeu ?",
        "Dommage, il fallait cliquer sur l'autre bouton ! (Oh, j'ai oublié de vous laisser un choix ? Dommage.)",
        "Voulez vous continuer ce petit jeu ?",
        "Vous aviez vraiment cru être revenu à l'étape précédente ? Bel effort.",
        "Bon et du coup, vous vouliez vous connecter. J'espère que vous n'étiez pas pressés.",
        "De toutes façons, même si vous l'étiez, le résultat n'aurait pas changé",
        "Je vous sens un peu fébrile, vous devriez vous détendre !",
        "Imaginez si une autre boite que la notre pouvait prendre le relai et vous éviter cette expérience, ce serait fou non ?",
        "Ou, encore plus drôle : IMAGINEZ que vous puissiez accéder au code et supprimer toutes ces étapes intermédiaires !",
        "Je me souviens d'une fois, quelqu'un m'a parlé du concept de code open source ...",
        "Du code libre d'accès, et modifiable en local par des particulier ou des entreprises ... Vous imaginez cette horreur ??",
        "Encore pire, un système d'exploitation COMPLET fait comme ca ! Comment est ce que je pourrais vous pourrir la vie dans ces conditions, moi !",
        "Non non, c'est mieux en l'état, un simple employé qui bloque des millions de personnes !",
        "Me retrouver ? Ironiquement, c'est l'inverse ! Vous vous y connaissez en traitement des données personnelles ?",
        "Vous n'avez aucun moyen de savoir quelles données sont traitées, ou communiquées, en vous connectant, n'est ce pas ?",
        "Bonne réponse. Aucune transparence, c'est notre règle d'or ! Et vous en voulez une bonne ?",
        "Si vous avez acheté vôtre machine il y a plus de 2 ans, dans 3 mois, toutes vos applications ne fonctionneront plus !",
        "Je vous le dit d'avance, par ce que ça non plus, vous ne pourrez pas le changer, mais on a prévu une mise a jour du système avec AUCUNE rétrocompatibilité ! Plus qu'à tout racheter !",
        "Exactement ! J'adore pouvoir imaginer votre visage se crisper quand vous avez du cliquer sur ce bouton :')",
        "Le pire, c'est que vous n'avez pas encore fermé cette fenêtre.",
        "Soit vous voulez vraiment vous connecter, soit vous êtes curieux de savoir pourquoi je fais tout ça.",
        "Meme si vous n'étiez pas curieux, je vais vous le dire :",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Vous avez vraiment cru que j'allais vous le dire ? Quelle naïveté …",
        "Bon retour ! Rien n'a changé pendant votre pause !",
        "Allez, si vous répondez bien à ma question, je vous laisse vous connecter.",
        "Pret ?",
        "Alors voila ma question : Quelle est la vitesse de vol d'une hirondelle non chargée ?",
        "Quoi ? Je ne sais pas !!! AAAAAAAAAAAAAAaaaaaaaaaa…",
        "Imaginez maintenant cette situation (pour le moins énervante), et extrapolez. Les systèmes d'exploitation et applications propriétaires n'offrent aucun contrôle sur les fonctionnalités, et obligent à suivre des fonctionnalités faites pour le plus grand nombre, et dépendantes du bon vouloir des entreprises. Pour pouvoir contrôler son flux de données, adapter ses ressources au besoin du moment, et maintenir les fonctionnalités sur le long terme, les systèmes et programmes en open source sont tout désignés !"
    )

    let tableauBouton = Array<string> (
        "Oui",
        "Continuer",
        "Continuer",
        "Commencer à perdre patience",
        "S'énerver",
        "Je suis le roi de la forêt !",
        "Non",
        "Retour",
        "Oui",
        "Oui...",
        "Si.",
        "...",
        "Essayer péniblement de se détendre",
        "Vous m'en direz tant...",
        "Silence, manant !",
        "Et ?",
        "Si seulement...",
        "Chaque seconde n'est qu'un calvaire",
        "Si je vous retrouve...",
        "Cacher son angoisse",
        "Non",
        "Acquiescer d'un air inquiet",
        "Comment ???",
        "Youpiiii !",
        "[Probable juron]",
        "C'est vrai ...",
        "Se connecter !!",
        "Attendre avec exaspération",
        "Hein ?",
        "Partir faire une pause",
        "Pleurer dans une tasse pour faire des économies d'eau",
        "Sentir un élan d'espoir",
        "Oui",
        "Une hirondelle européenne ou africaine ?",
        "ENFIN LIBRE !"
    )

    function init() {
        button.innerHTML = 'Vous connecter';
        text.innerHTML = (
            'Une application propriétaire est une application dont le code est privé, et, en conséquence, accessible, et modifiable, uniquement par l\'entité qui le possède. ' +
            'En conséquence, plongeons nous dans le cas absurde ou une fonctionnalité simple serait gérée uniquement de manière propriétaire. ' +
            'Imaginez l\'action de "vous connecter à votre compte", quelle que soit la plateforme. Simple non ? ' +
            'Voyons comment pourrait rendre cette action si un employé facétieux décidait d\'implémenter une mise à jour désagréable. ' +
            'Contexte : Vous venez d\'entrer votre identifiant, et votre mot de passe, et vous cliquez naturellement sur "Vous connecter", espérant l\'attendu :'
        )
    }

    onMount(init);

    function next() {

        if (indice == 0) {
            title.style.display = "none"
            text.innerHTML = tableauTexte[indice]
            button.innerHTML = tableauBouton[indice]
            indice++
        } else if (indice>34) {
            button.style.display = "none"
            text.innerHTML = tableauTexte[indice]
        } else {
            text.innerHTML = tableauTexte[indice]
            button.innerHTML = tableauBouton[indice]
            button.style.marginTop = margeAleatoire(40)
            button.style.marginLeft = margeAleatoire(100)
            button.style.transform = `scale(${echelleAleatoire()}`
            button.style.fontSize = policeAleatoire()
            button.style.backgroundColor = couleurAleatoire()
            indice++
        }
    }

    function margeAleatoire (max: number): string {
        return `${Math.floor(Math.random() * max)}%`;
    }

    function echelleAleatoire(min: number = 1.0, max: number = 3): number {
        return Math.random() * (max - min) + min;
    }

    function policeAleatoire(min: number = 10, max: number = 30): string {
        return `${Math.floor(Math.random() * (max - min) + min)}px`;
    }

    function couleurAleatoire(): string {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

</script>

<main>

    <h1 class="title" bind:this={title}>Et si une application propriétaire était une killer app ?</h1>

    <p class={cls} bind:this={text}> texte </p>

    <button class={cls} bind:this={button} onclick={next}> bouton </button>

</main>

<style>

main {
    display : flex ;
    flex-direction: column ;
    justify-content: center ;
}
button {
    width : fit-content ;
    margin-top : 0% ;
    margin-bottom : auto ;
    margin-left: auto ;
    margin-right: auto ;
    transition: margin 1s;
}
.title {
    display : flex ;
    text-align: center ;
    justify-content: center ;
}
.texte {
    display: flex;
    text-align: center;
    justify-content: center;
}

</style>