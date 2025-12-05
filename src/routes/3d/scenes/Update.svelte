<script lang="ts">
    import { extend, T} from '@threlte/core'
    import { interactivity, GLTF, Text } from '@threlte/extras'
    import { onDestroy } from 'svelte';
    import { radians, type Vec } from '../../../utils';

    extend({Text});

    interactivity()

    let mesh;
    
    let scale = 20;

    const POSITION_PC: Vec = [2.9, -1, -1];

    const ROTATION_SCREEN: Vec = [radians(24.1), Math.PI, 0];
    const POSITION_SCREEN: Vec = [0.2555, 0.75, 2.94];

    const ROTATION_TEXT: Vec = [radians(-5), 0, 0];

    const Y_TEXT = 0.5;

    const X_TEXT = -1.5;
    const Z_TEXT = 0.05;
    const OFFSET_Y_TEXT = -0.4;
    const SCALE_TEXT = 3;

    const LINES = ["Votre ordinateur est", "incompatible pour les", "mises à jour!"]

    let blink = true;
    const blinkInterval = setInterval(() => {
        blink = !blink;
    }, 1000);

    onDestroy(() => {
        clearInterval(blinkInterval);
    });
</script>

<T.Group
    position={[-8, 2, -7]}
    rotation={[0, radians(45), 0]}
    scale={2}
>
    <GLTF
      url={MODEL_LAPTOP}
      {scale}
      position={POSITION_PC}
    ></GLTF>
    <T.Mesh
            bind:this={mesh}
            rotation={ROTATION_SCREEN}
            position={POSITION_SCREEN}
        >
        <T.BoxGeometry args={[4.555, 2.555, 0.1]} />
        <T.MeshBasicMaterial color="blue" />

        {#if blink}
            <T.Group>
                {#each LINES as line, ind}    
                    <Text 
                        position={[X_TEXT, Y_TEXT+OFFSET_Y_TEXT*ind, Z_TEXT]}
                        rotation={ROTATION_TEXT}
                        scale={SCALE_TEXT}
                        text={line}
                        color="#FF0000"
                    />
                {/each}
            </T.Group>
        {/if}
    </T.Mesh>
</T.Group>