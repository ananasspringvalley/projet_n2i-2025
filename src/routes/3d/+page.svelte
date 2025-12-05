<script lang="ts">
    import { Canvas } from '@threlte/core'
    import Update from './scenes/Update.svelte';
    import PcRain from './scenes/PcRain.svelte';
    
    import Scene from './scenes/Scene.svelte';
</script>

<main>
    <div class ="containerDroite">
        <div>
            <h1>Obsolescence programée</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis amet magnam commodi quos fugiat laboriosam soluta, incidunt velit quidem repudiandae, deleniti esse quia explicabo deserunt sint. Eum ab possimus hic.            </p>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam reiciendis ab officia ipsum. Totam saepe soluta eum neque molestiae at architecto labore perferendis? Fuga ratione ullam quo nisi dolorum expedita!
            </p>
        </div>
        <div class="sceneGauche">
            <Scene>
                <Update/>
            </Scene>
        </div>
    </div>
    <div class ="containerDroite">
        <div>
            <h1>JSP encore</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam reiciendis ab officia ipsum. Totam saepe soluta eum neque molestiae at architecto labore perferendis? Fuga ratione ullam quo nisi dolorum expedita!
            </p>
        </div>
        <div class="sceneDroite">
            <Scene>
                <Update/>
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