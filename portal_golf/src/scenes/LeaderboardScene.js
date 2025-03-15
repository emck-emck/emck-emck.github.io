import MenuListener from '../handlers/MenuListener.js';
import {ASSET_FILEPATH_LEADERBOARD} from '../utils/constants.js';

class LeaderboardScene extends Phaser.Scene {
    constructor(){
        super({ key: 'Leaderboard' });
    }

    preload(){
		this.load.image('leaderbordScreen', ASSET_FILEPATH_LEADERBOARD + 'leaderboard_bg.png');
		this.load.image('leaderboardBackButton', ASSET_FILEPATH_LEADERBOARD + 'leaderboard_back.png');
    }

    async create(){
		//Set variables for item placement in scene
		const swidth = this.scale.width;
		const sheight = this.scale.height;
		const borderwidth = 5;

		//Add background image
		this.add.image(swidth/2, sheight/2, 'leaderbordScreen');

		//Leaderboard text
		const textx = swidth/2;
		const texty = sheight/2;
		const textStyle = {
			fontSize: '22px', 
			fill: '#ffffff', 
			align: 'center',
			wordWrap: { width: 5 }
		};

		//Get text
		this.add.text(swidth/2, 100, "Leaderboard", textStyle);

        let leaderboardText = this.add.text(textx, texty, "Loading...", textStyle);

        try {            
            let leaderboardString = scores
                .slice(0, 10) // Show top 10
                .map((entry, index) => `${index + 1}. ${entry[0]} - ${entry[1]}`)
                .join("\n");

            leaderboardText.setText(leaderboardString);
        } catch (error) {
            console.error("Error loading leaderboard:", error);
            leaderboardText.setText("Failed to load leaderboard.");
        }
		
		
		//Back button
		const backx = swidth/2;
		const backy = sheight * 0.75;
		const backButton = this.add.image(backx, backy, 'leaderboardBackButton').setInteractive();
		backButton.on('pointerdown', this.back, this);

		const listener = new MenuListener(this);
    }

	back(){
		this.scene.resume('MenuScene');
		this.scene.stop('Leaderboard');
	}

}

export default LeaderboardScene;