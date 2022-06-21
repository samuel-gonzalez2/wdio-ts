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

}