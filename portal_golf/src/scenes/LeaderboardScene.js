import MenuListener from '../handlers/MenuListener.js';

class LeaderboardScene extends Phaser.Scene {
    constructor(){
        super({ key: 'Leaderboard' });
    }

    preload(){

    }

    async create(){
		//Set variables for item placement in scene
		const swidth = this.scale.width;
		const sheight = this.scale.height;
		const borderwidth = 5;

		//Add background image
		this.add.image(swidth/2, sheight/2, 'instructionsbg');

		//Leaderboard text
		const textx = swidth/2;
		const texty = sheight/2;
		const textStyle = {
			fontSize: '22px', 
			fill: '#ffffff', 
			align: 'center',
			wordWrap: { width: bwidth - borderwidth }
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
		const backy = bgy + bheight * 0.8;
		const backButton = this.add.image(backx, backy, 'backButton').setInteractive();
		backButton.on('pointerdown', this.back, this);

		const listener = new MenuListener(this);
    }

	back(){
		this.scene.resume('MenuScene');
		this.scene.stop('Leaderboard');
	}

}

export default InstructionsMenuScene;