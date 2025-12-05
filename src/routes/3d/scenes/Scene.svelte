<script lang="ts">
    import { Canvas, extend, T} from '@threlte/core'
    import { CameraControls, TransformControls } from '@threlte/extras'

    extend({TransformControls});
</script>

<Canvas>
    <T.AmbientLight color="#FFFFFF" intensity={1}></T.AmbientLight>

    <T.PerspectiveCamera
    makeDefault
    position={[-10, 8, -10]}
    
    >
        <CameraControls enableZoom={false}/>
    </T.PerspectiveCamera>
    
    <slot></slot>
</Canvas>