const { I } = inject();
const assert = require("assert");

module.exports = {
    fields:{
        menuSensor:"//span[contains(text(), 'Sensors')]",
        topRightBreadcumPanelSensor:"//div[@class='topRightBreadcumPanel' and contains(text(), 'Sensor')]",
        totalSensor:"//label[contains(text(), 'Total Sensors')]/following-sibling::label[1]",
        listOfSensor:"//div[span[contains(text(), 'of')]]/span[last()]",

    },

    async totalSensorAndListOfSensor(){
        I.waitForElement(this.fields.totalSensor,10);
        const actualTotalSensor = await I.grabTextFrom(this.fields.totalSensor);
        I.waitForElement(this.fields.listOfSensor,10);
        const expectedListOfSensor = await I.grabTextFrom(this.fields.listOfSensor);
        I.assert.equal(actualTotalSensor, expectedListOfSensor);
    },
}