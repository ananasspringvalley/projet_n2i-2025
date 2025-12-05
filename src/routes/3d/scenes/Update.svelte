<script lang="ts">
    import { extend, T} from '@threlte/core'
    import { interactivity, GLTF } from '@threlte/extras'

    // Bricks by Quaternius (https://poly.pizza/m/Tvlvh8AAbs)

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
    const POSITION_SCREEN: Vec = [0.2555, 0.75, 2.94];

    // Laptop by Kenney (https://poly.pizza/m/GnbwSUiVty)
    const LAPTOP_URL = "/laptop.gltf" 
</script>

<T.Group>
    <GLTF
      url={LAPTOP_URL}
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
    </T.Mesh>
</T.Group>