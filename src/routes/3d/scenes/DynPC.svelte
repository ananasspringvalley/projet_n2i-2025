<script lang="ts">
    import { RigidBody, Collider } from "@threlte/rapier";

    import { GLTF } from '@threlte/extras'
    import { T } from "@threlte/core";

    export let position: [number, number, number];
    export let radius: number;
    export let scale: number;
    export let url: string;
</script>

<T.Group {position}>
    <RigidBody type="dynamic">
        <Collider 
            contactForceEventThreshold={30}
            restitution={0.4}
            shape="ball"
            args={[radius]}
        >
        <GLTF {url} {scale}></GLTF>
        </Collider>
    </RigidBody>
</T.Group>