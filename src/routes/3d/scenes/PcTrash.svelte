<script lang="ts">
    import { GLTF } from '@threlte/extras';
    import { onDestroy } from 'svelte';

    function easeInQuad(x: number): number {
        return x * x;
    }

    const SPEED = 0.5;

    let yFrom = 6;
    let y = 0;
    let x = 0;

    let lastNow = Date.now();
    let interval = setInterval(() => {
        let now = Date.now();
        let dt = (now-lastNow)/1000 * SPEED

        x += dt;

        if (x >= 1) {
            x = 0;
        }

        y = (1-easeInQuad(x))*yFrom;

        lastNow = now;
    }, 0);

    onDestroy(() => {
        clearInterval(interval);
    })
</script>


<GLTF position={[0, -4, 0]} url="./trashcan.glb" scale={10}></GLTF>
<GLTF position={[1, y, -0.5]} url="./laptop.gltf" scale={7}></GLTF>