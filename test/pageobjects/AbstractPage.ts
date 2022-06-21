const crypto = require('crypto');

export default class AbstractPage {
    public async waitForSeconds(seconds: number) {
        await browser.pause(seconds * 1000);
    }

    public async setFullHDResolution() {
        await browser.setWindowSize(1920, 1080);
    }

    public async setNetwokSpeedTo4G(speed) {
        await browser.throttle(speed)
    }

    public async takeScreenshot(name: string, path: string) {
        await browser.saveScreenshot(`${name}.png, ${path}`);
    }

    public async generateRandomNumber(){
        return Math.floor(Math.random() * 100000 + 1);
    }

    public async generateRandomString(length: number) {
        return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
    }
}