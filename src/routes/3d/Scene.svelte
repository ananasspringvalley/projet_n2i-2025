<script lang="ts">
    import { extend, T} from '@threlte/core'
    import { CameraControls, interactivity, GLTF, HTML, Billboard, TransformControls } from '@threlte/extras'
    import Screen from './Screen.svelte';
    import { positionLocal } from 'three/tsl';

    // Bricks by Quaternius (https://poly.pizza/m/Tvlvh8AAbs)

    extend({Text, Billboard, TransformControls});

    interactivity()

    type Vec = [number, number, number]

    function radians(deg: number): number {
        return deg/360*Math.PI*2
    }

    let mesh;

    let lockedCamera: boolean = false;
    
    let scale = 20;

    const POSITION_PC: Vec = [2.9, -1, -1];

    const ROTATION_SCREEN: Vec = [radians(24.1), Math.PI, 0];
    const POSITION_SCREEN: Vec = [0.2555, 0.75, 2.94];

    // Laptop by Kenney (https://poly.pizza/m/GnbwSUiVty)
    const LAPTOP_URL = "/laptop.gltf" 
</script>

<T.PerspectiveCamera
  makeDefault
  
  position={[-10, 8, -10]}
>
    {#if !lockedCamera}
        <CameraControls enableZoom={false}/>
    {/if}
</T.PerspectiveCamera>

<T.AmbientLight color={0xFFFFFF} intensity={1} />

<GLTF
  url={LAPTOP_URL}
  {scale}
  position={POSITION_PC}
></GLTF>


<!-- L'ecran --> 
    <T.Mesh
            bind:this={mesh}
            rotation={ROTATION_SCREEN}
            position={POSITION_SCREEN}
        >
        <T.BoxGeometry args={[4.555, 2.555, 0.1]} />
        <T.MeshBasicMaterial color="blue" />
    </T.Mesh>

<T.Billboard>
  <T.Mesh>
    <HTML 
        position={[8, 0.1, 4]}>
        <Screen></Screen>
    </HTML>
  </T.Mesh>
</T.Billboard>

<style>

</style>