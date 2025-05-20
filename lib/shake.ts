import { Accelerometer } from "expo-sensors";

//this is shake sensitivity - lowering this will give high sensitivity and increasing this will give lower sensitivity
const THRESHOLD = 150;

export class ShakeEventExpo {
  static isShaking = false;
  static cooldown = 1000; // ms to wait before allowing another shake

  static addListener(handler: () => void, minShakeCount: number = 1) {
    let last_x: number, last_y: number, last_z: number;
    let lastUpdate = 0;
    let shakeCount = 0,
      timeout = 0;
    Accelerometer.addListener((accelerometerData) => {
      let { x, y, z } = accelerometerData;
      let currTime = Date.now();
      if (currTime - lastUpdate > 100) {
        let diffTime = currTime - lastUpdate;
        lastUpdate = currTime;
        let speed =
          (Math.abs(x + y + z - last_x - last_y - last_z) / diffTime) * 10000;
        if (speed > THRESHOLD && !ShakeEventExpo.isShaking) {
          clearTimeout(timeout);
          shakeCount++;
          if (shakeCount >= minShakeCount) {
            ShakeEventExpo.isShaking = true;
            handler();
          }
          timeout = setTimeout(() => {
            ShakeEventExpo.isShaking = false;
            shakeCount = 0;
          }, ShakeEventExpo.cooldown);
        }
        last_x = x;
        last_y = y;
        last_z = z;
      }
    });
  }

  static removeListener() {
    Accelerometer.removeAllListeners();
  }
}
