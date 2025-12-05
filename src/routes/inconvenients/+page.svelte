<script lang="ts">
    import Update from './scenes/Update.svelte';
    
    import Scene from './scenes/Scene.svelte';
    import Linux from './scenes/Linux.svelte';
    import PcTrash from './scenes/PcTrash.svelte';
</script>

<svelte:head>
    <title>Les inconvenients</title>
</svelte:head>

<audio id="player" src="appli3.mp3" autoplay loop></audio>

<main>
    <div id="articles">
        <div class="article">
            <div class="contents">
                <h1>Obsolescence programée</h1>
                <p>
                    la plus part des appareils électroniques produit par les grandes corporations sont conçus
                    dans la vision d'une durée de vie courte et programmés de telle sorte à réduire leur
                    durée de vie. Cela est appelé l'obsolescence programmée, cette pratique peut se faire de
                    plusieurs moyens, que cela soit par des logiciels qui demandent des composants neufs ou encore
                    des modifications sur les composants pour rendre la réparation plus difficile.
    
                </p>
            </div>
            <div class="scene">
                <Scene>
                    <Update/>
                </Scene>
            </div>
        </div>
        <div class ="article inverse">
            <div class="contents">
                <h1>Pollution</h1>
                <p>
                    La production des composants électroniques représente une grande partie de la pollution
                    produite dans le monde, cela à un lien avec la récolte et le traitement des matières
                    premières mais aussi avec la consommation des processus intermédiaire et de leur
                    utilisation. Pour information la production d'un ordinateur consomme 800 kg de
                    matières premières et leur utilisation régulière représente 125 kg de CO² par an.
                    De plus les serveurs représentent une consommation de 3000L d'eau par internaute et par
                    ans.
    
    
                </p>
            </div>
            <div class="scene">
                <Scene>
                    <PcTrash/>
                </Scene>
            </div>
        </div>
        <div class ="article">
            <div class="contents">
                <h1>Conclusion</h1>
                <p>
                    Cependant malgré tout les problèmes causés par les grandes corporations, il y a
                    toujours une solution, et c'est les logiciels "open source" et les systèmes
                    d'exploitation peu couteux en termes de puissance de calcul comme linux.
                    On peut encore changer nos habitudes pour passer à des méthodes libres de
                    droit et faire face aux grandes corporations.
    
                </p>
            </div>
            <div class="scene">
                <Scene>
                    <Linux/>
                </Scene>
            </div>
        </div>
    </div>
</main>

<style>
    h1 {
        color: yellow;
    }

    .article {
        padding: 8px;
        background-color: #1a1a2e;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }

    .contents {
        max-width: 60%;
    }

    #articles {
        display: flex;
        flex-direction: column;
        padding: 8px;
        gap: 8px;
    }

    .inverse {
        flex-direction: row-reverse;
    }

    .scene {
        width: 30%;
        max-width: 480px;

        border-radius: 10px;

        margin-right: 20px;
    }

    main {
        width: 100%;
        min-height: 100%;

        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #0f3460;
        color: #eee;

    }

    :global(canvas) {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 600px) {
        .article {
            flex-direction: column;
        }

        .scene {
            width: 100%;
            height: 100%;
        }
    }

</style>