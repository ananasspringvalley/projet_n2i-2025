<script lang="ts">
    import { onMount } from "svelte";
    import * as three from "three";

    let canvas: HTMLCanvasElement;
    let renderer: three.WebGLRenderer;
    let scene: three.Scene;
    let camera: three.PerspectiveCamera;

    let cube: three.Mesh;

    onMount(() => {
        renderer = new three.WebGLRenderer({
            canvas
        });
        scene = new three.Scene();
        camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
        renderer.setSize( window.innerWidth, window.innerHeight );

        const geometry = new three.BoxGeometry( 1.5, 3, 4 );
        const material = new three.MeshBasicMaterial( { color: 0x00ff00 } );
        cube = new three.Mesh( geometry, material );
        scene.add( cube );

        cube.position.set(0, 0, 0);

        camera.position.y = 10;
        camera.lookAt(cube.position);

        setInterval(animate, 5);
    });

    const RADIUS: number = 20.0;
    const SPEED: number = 0.005;

    function animate() {
        const time = Date.now() * SPEED;

        const x = Math.cos(time) * RADIUS;
        const z = Math.sin(time) * RADIUS;
        
        camera.position.x = x;
        camera.position.z = z;

        camera.lookAt(cube.position);

        renderer.render(scene, camera);
    }
    
</script>

<main>
    <canvas bind:this={canvas}></canvas>
</main>

<style>

</style>