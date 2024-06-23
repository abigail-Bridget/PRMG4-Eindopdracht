import { ImageSource, Loader } from 'excalibur';
import { TiledResource } from '@excaliburjs/plugin-tiled';

// voeg hier jouw eigen resources toe
const Resources = {

    Enemy: new ImageSource('images/trol.png'),
    RedMoonPotion: new ImageSource('images/redMoonPotion.png'),
    PinkMoonPotion: new ImageSource('images/pinkMoonPotion.png'),
    PurpleMoonPotion: new ImageSource('images/purpleMoonPotion.png'),
    BlueMoonPotion: new ImageSource('images/blueMoonPotion.png'),
    BlackMoonPotion: new ImageSource('images/blackMoonPotion.png'),
    TurquoiseMoonPotion: new ImageSource('images/turquoiseMoonPotion.png'),
    YellowMoonPotion: new ImageSource('images/yellowMoonPotion.png'),
    Map: new TiledResource('images/season.tmx'),
    StartScene: new ImageSource('images/introScene.png'),
    GameOver: new ImageSource('images/gameOverScene.png'),
    Instruction: new ImageSource('images/instructionScene.png'),
    End: new ImageSource('images/endScene.png'),


    PlayerIdleRight: new ImageSource('images/B_witch_right_idle.png'),
    PlayerIdleLeft: new ImageSource('images/B_witch_left_idle.png'),
    PlayerRunRight: new ImageSource('images/B_witch_right_run.png'),
    PlayerRunLeft: new ImageSource('images/B_witch_left_run.png'),
    PlayerCharge: new ImageSource('images/B_witch_right_charge.png'),




}

const ResourceLoader = new Loader([


    Resources.Enemy,
    Resources.RedMoonPotion,
    Resources.PlayerIdleLeft,
    Resources.PlayerIdleRight,
    Resources.PlayerRunLeft,
    Resources.PlayerRunRight,
    Resources.PlayerCharge,
    Resources.Map,
    Resources.StartScene,
    Resources.Instruction,
    Resources.End,
    Resources.GameOver,
    Resources.PinkMoonPotion,
    Resources.PurpleMoonPotion,
    Resources.BlueMoonPotion,
    Resources.BlackMoonPotion,
    Resources.YellowMoonPotion,
    Resources.TurquoiseMoonPotion,
   



])

export { Resources, ResourceLoader };