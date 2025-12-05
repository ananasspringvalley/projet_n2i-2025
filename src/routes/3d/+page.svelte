<script lang="ts">
    import { Canvas } from '@threlte/core'
    import Scene from './Scene.svelte';

    let scene: Scene;
</script>

<main>
    <Canvas>
        <Scene bind:this={scene}></Scene>
    </Canvas>
</main>

<style>
    main {
        height: 100%;
    }
</style>