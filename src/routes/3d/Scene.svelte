<script lang="ts">
  import { extend, T, useThrelte } from '@threlte/core'
  import { CameraControls, interactivity, OrbitControls } from '@threlte/extras'
  import { Spring } from 'svelte/motion'

  interactivity()
  const scale = new Spring(1)
  
</script>

<T.PerspectiveCamera
  makeDefault
  
  position={[10, 10, 10]}
>
  <CameraControls />
</T.PerspectiveCamera>

<T.Mesh
  position.y={1}
  scale={scale.current}
  onpointerenter={() => {
    console.log("Here");
    scale.target = 1.5
  }}
  onpointerleave={() => {
    console.log("Out");
    scale.target = 1
  }}
>

  <T.BoxGeometry args={[1, 2, 3]} />
  <T.MeshBasicMaterial color="hotpink" />
</T.Mesh>