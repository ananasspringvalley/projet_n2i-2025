<script lang="ts">
    import { extend, T} from '@threlte/core'
    import { interactivity, GLTF } from '@threlte/extras'
    import { onDestroy } from 'svelte';
    import { radians } from '../../../utils';

    import { MODEL_PINGUIN } from "../../../assets";

    extend({Text});

    interactivity()

    const SPEED = 0.1;

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
      url={MODEL_PINGUIN}
      scale={0.08}
      position={[2, -1, 0]}
      rotation={[0, radians(deg), 0]}
    ></GLTF>
</T.Group>