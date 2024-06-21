import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import "@babylonjs/loaders/glTF";
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, Mesh, MeshBuilder, Sound } from "@babylonjs/core";

class App {
    constructor() {
        // create the canvas html element and attach it to the webpage
        var canvas = document.createElement("canvas");
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.id = "gameCanvas";
        document.body.appendChild(canvas);

        // initialize babylon scene and engine
        var engine = new Engine(canvas, true);
        var scene = new Scene(engine);

        const createScene = () => {
            const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0, 0, 0));
            camera.attachControl(canvas, true);

            const light = new HemisphericLight("light", new Vector3(0, 1, 0));

            const box = MeshBuilder.CreateBox("box", {});
            box.position.y = 0.5;
            const ground = MeshBuilder.CreateGround("ground", {width:10, height:10});
            const bounce = new Sound("bounce", "sounds/bounce.wav", scene);
            setInterval(() => bounce.play(), 3000);
        }
        createScene();


        // run the main render loop
        engine.runRenderLoop(() => {
            scene.render();
        });
    }
}
new App();