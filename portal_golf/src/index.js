//Imports
import {SCREEN_HEIGHT, SCREEN_WIDTH} from './src/utils/constants.js';
import MenuScene from './src/scenes/MenuScene.js';
import GameScene from './src/scenes/GameScene.js';
import WinScene from './src/scenes/WinScene.js';
import InstructionsMenuScene from './src/scenes/InstructionsMenuScene.js';
import PauseMenuScene from './src/scenes/PauseMenuScene.js';

//Magic Phaser3 Configuration Stuff
const config = {
	parent: 'game-container',
	type: Phaser.AUTO,
	width: SCREEN_WIDTH,
	height: SCREEN_HEIGHT,
	scale: {
        mode: Phaser.Scale.FIT,   // Ensures the game scales to fit the screen
        autoCenter: Phaser.Scale.CENTER_BOTH, // Centers the game
    },
	physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false,
            fps: 120,  // Target FPS
            timeScale: 1, // Scale of the physics time, 1 is normal speed
            maxPhysicsSteps: 1, // Max number of physics steps per frame
        }
    },
	scene: [MenuScene, GameScene, WinScene, InstructionsMenuScene, PauseMenuScene]
};

//RUNS THE GAME
const game = new Phaser.Game(config);