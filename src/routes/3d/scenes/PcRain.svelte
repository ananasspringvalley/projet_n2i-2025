<script lang="ts">
    import { World, RigidBody, Collider } from "@threlte/rapier";

    import { GLTF } from '@threlte/extras'
    import { extend, T } from "@threlte/core";

    import { onDestroy } from "svelte";

    // Trashcan Small by Quaternius (https://poly.pizza/m/i7HDuYDLkx)

    extend({World});

    const LIFETIME: number = 10;

    let id = 0

    let positions: {[key: number]: [number, number, number]}

    type Computer = {
        position: [number, number, number],
        time: number,
    }
    let computers: Computer[] = $state([]);

    let spawnInterval = setInterval(() => {
        computers.forEach(pc => {
            pc.time -= 1;
        })

        for (let ind = computers.length-1; ind >= 0; ind--) {
            let pc = computers[ind];
            pc.time -= 1;

            if (pc.time < 0) {
                computers.splice(ind, 1);
            }
        }

        const new_pc: Computer[] = [{position: [0, 10, 0], time: LIFETIME}];

        computers = new_pc.concat(computers);

    }, 500);

    onDestroy(() => {
        clearInterval(spawnInterval);
    })

</script>

<GLTF url="./trashcan.glb" scale={10}></GLTF>

<!-- <div>
    <T.Group position={computer.position}>
        <RigidBody type="dynamic" oncreate={() => {console.log("Created!")}}>
            <Collider 
                contactForceEventThreshold={30}
                restitution={0.4}
                shape="ball"
                args={[0.5]}
            >
            <GLTF url="./laptop.gltf" scale={5}></GLTF>
            </Collider>
        </RigidBody>
    </T.Group>
</div> -->