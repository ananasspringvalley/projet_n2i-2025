<script lang="ts">
    import { Canvas } from '@threlte/core'
    import Update from './scenes/Update.svelte';
</script>

<main>

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolor expedita, a dignissimos veniam rem suscipit debitis tenetur ab commodi nesciunt, iusto sint eius? Atque, nihil aliquid. Asperiores, quibusdam unde.
    <div class="scene">
        <Canvas>
            <Update/>
        </Canvas>
    </div>
</main>

<style>
    .scene {
        width: 360px;
        height: 300px;

        border: 2px solid black;
    }

    main {
        height: 100%;
        overflow: hidden;
    }
</style>