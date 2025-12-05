<script lang="ts">
    import Update from './scenes/Update.svelte';
    
    import Scene from './scenes/Scene.svelte';
    import Linux from './scenes/Linux.svelte';
    import PcTrash from './scenes/PcTrash.svelte';
</script>

<main>
    <div class ="containerDroite">
        <div>
            <h1>Obsolescence programée</h1>
            <p>
                la plus part des appareille électroniques produit par les grandes corporations sont conçu
                dans la vision d'une durai de vie courte et programmer de tel sorte à réduire leur
                duré de vie. Cela est appeler l'obsolescence programmée, cette pratique peut se faire de
                plusieurs moyennes, que cela soit par des logiciel qui demande des composants neuf ou encore
                des modifications sur les composants pour rendre la réparation plus difficile.

            </p>
        </div>
        <div class="sceneDroite">
            <Scene>
                <Update/>
            </Scene>
        </div>
    </div>
    <div class ="containerGauche">
        <div>
            <h1>Pollution</h1>
            <p>
                La production des composant électroniques représente une grande partie de la pollution
                produit dans le monde, cela a un lien avec la récolte et traitement des matières
                première mais aussi avec la consommation des processus intermédiaire et de leur
                utilisation. Pour information la production d'un ordinateur consomme 800 kg de
                matières premières et leur utilisation régulière représente 125 kg de CO² par an.
                de plus les serveurs représente une consommation de 3000L d'eau par internaute et par
                ans.


            </p>
        </div>
        <div class="sceneGauche">
            <Scene>
                <PcTrash/>
            </Scene>
        </div>
    </div>
    <div class ="containerDroite">
        <div>
            <h1>conclusion</h1>
            <p>
                Cependant malgré tous les problèmes causés par les grandes corporations il y a
                toujours une solution, et c'est les logiciel open source et les système
                d'exploitation peu couteux en termes de puissances de calcule comme linux.
                on peut encore changer nos habitudes pour passer à des méthodes libres de
                droit et faire aux grandes corporations.

            </p>
        </div>
        <div class="sceneDroite">
            <Scene>
                <Linux/>
            </Scene>
        </div>
    </div>
</main>

<style>
    .containerDroite {
        background-color: #1a1a2e;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        margin: 10px;
    }

    .containerGauche {
        background-color: #1a1a2e;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-around;

        margin: 10px;
    }

    .sceneDroite {
        width: 860px;
        height: 400px;

        border: 2px solid black;
        border-radius: 10px;

        margin-left: 20px;
    }

    .sceneGauche {
        width: 860px;
        height: 400px;

        border: 2px solid black;
        border-radius: 10px;

        margin-right: 20px;
    }

    main {
        height: 100%;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #0f3460;
        color: #eee;

    }

    :global(Scene) {
        width: 100%;
        height: 100%;
    }

</style>