<script lang="ts">
    import { extend, T} from '@threlte/core'
    import { interactivity, GLTF } from '@threlte/extras'
    import { onDestroy } from 'svelte';

    // Penguin by Poly by Google [CC-BY] (https://creativecommons.org/licenses/by/3.0/) via Poly Pizza (https://poly.pizza/m/fBXvsC6pe_V)

    extend({Text});

    interactivity()

    const SPEED = 0.1;

    function radians(deg: number): number {
        return deg/360*Math.PI*2
    }

    // Laptop by Kenney (https://poly.pizza/m/GnbwSUiVty)
    const PENGUIN_URL = "linux.glb" 

    let deg = 0;

    let rotateInterval = setInterval(() => {
        deg = (deg + SPEED) % 360;
    }, 0);

    onDestroy(() => {
        clearInterval(rotateInterval);
    })
</script>

<T.Group>
    <GLTF
      url={PENGUIN_URL}
      scale={0.08}
      position={[2, -1, 0]}
      rotation={[0, radians(deg), 0]}
    ></GLTF>
</T.Group>