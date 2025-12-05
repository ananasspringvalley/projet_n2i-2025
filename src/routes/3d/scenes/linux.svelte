<script lang="ts">
    import { extend, T} from '@threlte/core'
    import { interactivity, GLTF } from '@threlte/extras'

    // Penguin by Poly by Google [CC-BY] (https://creativecommons.org/licenses/by/3.0/) via Poly Pizza (https://poly.pizza/m/fBXvsC6pe_V)

    extend({Text});

    interactivity()

    type Vec = [number, number, number]

    function radians(deg: number): number {
        return deg/360*Math.PI*2
    }

    let mesh;
    
    let scale = 20;

    const POSITION_PC: Vec = [2.9, -1, -1];

    const ROTATION_SCREEN: Vec = [radians(24.1), Math.PI, 0];
    const POSITION_SCREEN: Vec = [0,0,0];

    // Laptop by Kenney (https://poly.pizza/m/GnbwSUiVty)
    const PENGUIN_URL = "linux.glb" 
</script>

<T.Group>
    <GLTF
      url={PENGUIN_URL}
      {scale}
      position={POSITION_PC}
    ></GLTF>
    <T.Mesh
            bind:this={mesh}
            rotation={ROTATION_SCREEN}
            position={POSITION_SCREEN}
            scale={[0.11,0.1,0.1]}
        >
    </T.Mesh>
</T.Group>