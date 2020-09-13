

const robot = require("robotjs");
const opn = require('opn');
const process = require('process');

// Speed up the mouse.
robot.setMouseDelay(2);

const twoPI = Math.PI * 2.0;
const screenSize = robot.getScreenSize();
const height = (screenSize.height / 2) - 10;
const width = screenSize.width;

//opn()  打开文件地址
opn('/Users/sexin/project')

let flag = true;

while (flag) {
    for (let x = 0; x < width; x++) {
        y = height * Math.sin((twoPI * x) / width) + height;
        robot.moveMouse(x, y);
    }
}

// robot.moveMouse(0,0);
// robot.mouseClick();