/******************* 
 * Experiment Test *
 *******************/

import { PsychoJS } from './lib/core-2020.2.js';
import * as core from './lib/core-2020.2.js';
import { TrialHandler } from './lib/data-2020.2.js';
import { Scheduler } from './lib/util-2020.2.js';
import * as visual from './lib/visual-2020.2.js';
import * as sound from './lib/sound-2020.2.js';
import * as util from './lib/util-2020.2.js';
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1, 1, 1]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'experiment';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructRoutineBegin());
flowScheduler.add(instructRoutineEachFrame());
flowScheduler.add(instructRoutineEnd());
flowScheduler.add(timerRoutineBegin());
flowScheduler.add(timerRoutineEachFrame());
flowScheduler.add(timerRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'dataset/325.png', 'path': 'dataset/325.png'},
    {'name': 'dataset/152.png', 'path': 'dataset/152.png'},
    {'name': 'dataset/327.png', 'path': 'dataset/327.png'},
    {'name': 'dataset/171.png', 'path': 'dataset/171.png'},
    {'name': 'dataset/220.png', 'path': 'dataset/220.png'},
    {'name': 'dataset/239.png', 'path': 'dataset/239.png'},
    {'name': 'dataset/31.png', 'path': 'dataset/31.png'},
    {'name': 'dataset/24.png', 'path': 'dataset/24.png'},
    {'name': 'dataset/311.png', 'path': 'dataset/311.png'},
    {'name': 'dataset/322.png', 'path': 'dataset/322.png'},
    {'name': 'dataset/169.png', 'path': 'dataset/169.png'},
    {'name': 'dataset/204.png', 'path': 'dataset/204.png'},
    {'name': 'dataset/215.png', 'path': 'dataset/215.png'},
    {'name': 'dataset/51.png', 'path': 'dataset/51.png'},
    {'name': 'dataset/200.png', 'path': 'dataset/200.png'},
    {'name': 'dataset/254.png', 'path': 'dataset/254.png'},
    {'name': 'dataset/300.png', 'path': 'dataset/300.png'},
    {'name': 'dataset/90.png', 'path': 'dataset/90.png'},
    {'name': 'dataset/98.png', 'path': 'dataset/98.png'},
    {'name': 'dataset/218.png', 'path': 'dataset/218.png'},
    {'name': 'dataset/291.png', 'path': 'dataset/291.png'},
    {'name': 'dataset/55.png', 'path': 'dataset/55.png'},
    {'name': 'dataset/8.png', 'path': 'dataset/8.png'},
    {'name': 'dataset/183.png', 'path': 'dataset/183.png'},
    {'name': 'dataset/80.png', 'path': 'dataset/80.png'},
    {'name': 'dataset/294.png', 'path': 'dataset/294.png'},
    {'name': 'dataset/11.png', 'path': 'dataset/11.png'},
    {'name': 'dataset/274.png', 'path': 'dataset/274.png'},
    {'name': 'dataset/247.png', 'path': 'dataset/247.png'},
    {'name': 'dataset/268.png', 'path': 'dataset/268.png'},
    {'name': 'dataset/145.png', 'path': 'dataset/145.png'},
    {'name': 'dataset/173.png', 'path': 'dataset/173.png'},
    {'name': 'dataset/224.png', 'path': 'dataset/224.png'},
    {'name': 'dataset/199.png', 'path': 'dataset/199.png'},
    {'name': 'dataset/228.png', 'path': 'dataset/228.png'},
    {'name': 'dataset/111.png', 'path': 'dataset/111.png'},
    {'name': 'dataset/236.png', 'path': 'dataset/236.png'},
    {'name': 'dataset/135.png', 'path': 'dataset/135.png'},
    {'name': 'dataset/101.png', 'path': 'dataset/101.png'},
    {'name': 'dataset/295.png', 'path': 'dataset/295.png'},
    {'name': 'dataset/45.png', 'path': 'dataset/45.png'},
    {'name': 'dataset/158.png', 'path': 'dataset/158.png'},
    {'name': 'dataset/318.png', 'path': 'dataset/318.png'},
    {'name': 'dataset/82.png', 'path': 'dataset/82.png'},
    {'name': 'dataset/245.png', 'path': 'dataset/245.png'},
    {'name': 'dataset/104.png', 'path': 'dataset/104.png'},
    {'name': 'dataset/63.png', 'path': 'dataset/63.png'},
    {'name': 'dataset/182.png', 'path': 'dataset/182.png'},
    {'name': 'dataset/154.png', 'path': 'dataset/154.png'},
    {'name': 'dataset/54.png', 'path': 'dataset/54.png'},
    {'name': 'dataset/131.png', 'path': 'dataset/131.png'},
    {'name': 'dataset/102.png', 'path': 'dataset/102.png'},
    {'name': 'dataset/242.png', 'path': 'dataset/242.png'},
    {'name': 'dataset/324.png', 'path': 'dataset/324.png'},
    {'name': 'dataset/341.png', 'path': 'dataset/341.png'},
    {'name': 'dataset/190.png', 'path': 'dataset/190.png'},
    {'name': 'dataset/342.png', 'path': 'dataset/342.png'},
    {'name': 'dataset/315.png', 'path': 'dataset/315.png'},
    {'name': 'dataset/321.png', 'path': 'dataset/321.png'},
    {'name': 'dataset/60.png', 'path': 'dataset/60.png'},
    {'name': 'dataset/105.png', 'path': 'dataset/105.png'},
    {'name': 'dataset/214.png', 'path': 'dataset/214.png'},
    {'name': 'dataset/129.png', 'path': 'dataset/129.png'},
    {'name': 'dataset/264.png', 'path': 'dataset/264.png'},
    {'name': 'dataset/319.png', 'path': 'dataset/319.png'},
    {'name': 'dataset/187.png', 'path': 'dataset/187.png'},
    {'name': 'dataset/276.png', 'path': 'dataset/276.png'},
    {'name': 'dataset/222.png', 'path': 'dataset/222.png'},
    {'name': 'dataset/74.png', 'path': 'dataset/74.png'},
    {'name': 'dataset/260.png', 'path': 'dataset/260.png'},
    {'name': 'dataset/328.png', 'path': 'dataset/328.png'},
    {'name': 'dataset/97.png', 'path': 'dataset/97.png'},
    {'name': 'dataset/113.png', 'path': 'dataset/113.png'},
    {'name': 'dataset/64.png', 'path': 'dataset/64.png'},
    {'name': 'dataset/262.png', 'path': 'dataset/262.png'},
    {'name': 'dataset/32.png', 'path': 'dataset/32.png'},
    {'name': 'dataset/282.png', 'path': 'dataset/282.png'},
    {'name': 'dataset/56.png', 'path': 'dataset/56.png'},
    {'name': 'dataset/191.png', 'path': 'dataset/191.png'},
    {'name': 'dataset/30.png', 'path': 'dataset/30.png'},
    {'name': 'dataset/180.png', 'path': 'dataset/180.png'},
    {'name': 'dataset/233.png', 'path': 'dataset/233.png'},
    {'name': 'dataset/335.png', 'path': 'dataset/335.png'},
    {'name': 'dataset/121.png', 'path': 'dataset/121.png'},
    {'name': 'dataset/195.png', 'path': 'dataset/195.png'},
    {'name': 'dataset/269.png', 'path': 'dataset/269.png'},
    {'name': 'dataset/106.png', 'path': 'dataset/106.png'},
    {'name': 'dataset/250.png', 'path': 'dataset/250.png'},
    {'name': 'dataset/219.png', 'path': 'dataset/219.png'},
    {'name': 'dataset/86.png', 'path': 'dataset/86.png'},
    {'name': 'dataset/77.png', 'path': 'dataset/77.png'},
    {'name': 'dataset/309.png', 'path': 'dataset/309.png'},
    {'name': 'dataset/332.png', 'path': 'dataset/332.png'},
    {'name': 'dataset/95.png', 'path': 'dataset/95.png'},
    {'name': 'dataset/211.png', 'path': 'dataset/211.png'},
    {'name': 'dataset/16.png', 'path': 'dataset/16.png'},
    {'name': 'dataset/108.png', 'path': 'dataset/108.png'},
    {'name': 'dataset/23.png', 'path': 'dataset/23.png'},
    {'name': 'dataset/246.png', 'path': 'dataset/246.png'},
    {'name': 'dataset/305.png', 'path': 'dataset/305.png'},
    {'name': 'dataset/205.png', 'path': 'dataset/205.png'},
    {'name': 'dataset/57.png', 'path': 'dataset/57.png'},
    {'name': 'dataset/290.png', 'path': 'dataset/290.png'},
    {'name': 'dataset/248.png', 'path': 'dataset/248.png'},
    {'name': 'dataset/161.png', 'path': 'dataset/161.png'},
    {'name': 'dataset/288.png', 'path': 'dataset/288.png'},
    {'name': 'dataset/67.png', 'path': 'dataset/67.png'},
    {'name': 'dataset/79.png', 'path': 'dataset/79.png'},
    {'name': 'dataset/316.png', 'path': 'dataset/316.png'},
    {'name': 'dataset/39.png', 'path': 'dataset/39.png'},
    {'name': 'dataset/115.png', 'path': 'dataset/115.png'},
    {'name': 'dataset/170.png', 'path': 'dataset/170.png'},
    {'name': 'dataset/270.png', 'path': 'dataset/270.png'},
    {'name': 'dataset/271.png', 'path': 'dataset/271.png'},
    {'name': 'dataset/226.png', 'path': 'dataset/226.png'},
    {'name': 'dataset/40.png', 'path': 'dataset/40.png'},
    {'name': 'dataset/166.png', 'path': 'dataset/166.png'},
    {'name': 'dataset/256.png', 'path': 'dataset/256.png'},
    {'name': 'dataset/301.png', 'path': 'dataset/301.png'},
    {'name': 'dataset/20.png', 'path': 'dataset/20.png'},
    {'name': 'dataset/257.png', 'path': 'dataset/257.png'},
    {'name': 'dataset/240.png', 'path': 'dataset/240.png'},
    {'name': 'dataset/0.png', 'path': 'dataset/0.png'},
    {'name': 'dataset/306.png', 'path': 'dataset/306.png'},
    {'name': 'dataset/36.png', 'path': 'dataset/36.png'},
    {'name': 'dataset/266.png', 'path': 'dataset/266.png'},
    {'name': 'dataset/159.png', 'path': 'dataset/159.png'},
    {'name': 'dataset/194.png', 'path': 'dataset/194.png'},
    {'name': 'dataset/142.png', 'path': 'dataset/142.png'},
    {'name': 'dataset/272.png', 'path': 'dataset/272.png'},
    {'name': 'dataset/124.png', 'path': 'dataset/124.png'},
    {'name': 'dataset/265.png', 'path': 'dataset/265.png'},
    {'name': 'dataset/21.png', 'path': 'dataset/21.png'},
    {'name': 'dataset/59.png', 'path': 'dataset/59.png'},
    {'name': 'dataset/87.png', 'path': 'dataset/87.png'},
    {'name': 'dataset/130.png', 'path': 'dataset/130.png'},
    {'name': 'dataset/251.png', 'path': 'dataset/251.png'},
    {'name': 'dataset/241.png', 'path': 'dataset/241.png'},
    {'name': 'dataset/176.png', 'path': 'dataset/176.png'},
    {'name': 'dataset/280.png', 'path': 'dataset/280.png'},
    {'name': 'dataset/19.png', 'path': 'dataset/19.png'},
    {'name': 'dataset/147.png', 'path': 'dataset/147.png'},
    {'name': 'dataset/84.png', 'path': 'dataset/84.png'},
    {'name': 'dataset/91.png', 'path': 'dataset/91.png'},
    {'name': 'dataset/312.png', 'path': 'dataset/312.png'},
    {'name': 'dataset/244.png', 'path': 'dataset/244.png'},
    {'name': 'dataset/237.png', 'path': 'dataset/237.png'},
    {'name': 'dataset/229.png', 'path': 'dataset/229.png'},
    {'name': 'dataset/314.png', 'path': 'dataset/314.png'},
    {'name': 'dataset/277.png', 'path': 'dataset/277.png'},
    {'name': 'dataset/119.png', 'path': 'dataset/119.png'},
    {'name': 'dataset/149.png', 'path': 'dataset/149.png'},
    {'name': 'dataset/225.png', 'path': 'dataset/225.png'},
    {'name': 'dataset/48.png', 'path': 'dataset/48.png'},
    {'name': 'dataset/75.png', 'path': 'dataset/75.png'},
    {'name': 'dataset/188.png', 'path': 'dataset/188.png'},
    {'name': 'dataset/329.png', 'path': 'dataset/329.png'},
    {'name': 'dataset/76.png', 'path': 'dataset/76.png'},
    {'name': 'dataset/162.png', 'path': 'dataset/162.png'},
    {'name': 'dataset/206.png', 'path': 'dataset/206.png'},
    {'name': 'dataset/17.png', 'path': 'dataset/17.png'},
    {'name': 'dataset/43.png', 'path': 'dataset/43.png'},
    {'name': 'dataset/323.png', 'path': 'dataset/323.png'},
    {'name': 'dataset/202.png', 'path': 'dataset/202.png'},
    {'name': 'dataset/134.png', 'path': 'dataset/134.png'},
    {'name': 'dataset/164.png', 'path': 'dataset/164.png'},
    {'name': 'dataset/208.png', 'path': 'dataset/208.png'},
    {'name': 'dataset/35.png', 'path': 'dataset/35.png'},
    {'name': 'dataset/110.png', 'path': 'dataset/110.png'},
    {'name': 'dataset/103.png', 'path': 'dataset/103.png'},
    {'name': 'dataset/298.png', 'path': 'dataset/298.png'},
    {'name': 'dataset/213.png', 'path': 'dataset/213.png'},
    {'name': 'dataset/343.png', 'path': 'dataset/343.png'},
    {'name': 'dataset/14.png', 'path': 'dataset/14.png'},
    {'name': 'dataset/156.png', 'path': 'dataset/156.png'},
    {'name': 'dataset/340.png', 'path': 'dataset/340.png'},
    {'name': 'dataset/210.png', 'path': 'dataset/210.png'},
    {'name': 'dataset/61.png', 'path': 'dataset/61.png'},
    {'name': 'dataset/255.png', 'path': 'dataset/255.png'},
    {'name': 'dataset/38.png', 'path': 'dataset/38.png'},
    {'name': 'dataset/26.png', 'path': 'dataset/26.png'},
    {'name': 'dataset/143.png', 'path': 'dataset/143.png'},
    {'name': 'dataset/150.png', 'path': 'dataset/150.png'},
    {'name': 'dataset/167.png', 'path': 'dataset/167.png'},
    {'name': 'dataset/44.png', 'path': 'dataset/44.png'},
    {'name': 'dataset/231.png', 'path': 'dataset/231.png'},
    {'name': 'dataset/336.png', 'path': 'dataset/336.png'},
    {'name': 'dataset/122.png', 'path': 'dataset/122.png'},
    {'name': 'dataset/217.png', 'path': 'dataset/217.png'},
    {'name': 'dataset/7.png', 'path': 'dataset/7.png'},
    {'name': 'dataset/223.png', 'path': 'dataset/223.png'},
    {'name': 'dataset/281.png', 'path': 'dataset/281.png'},
    {'name': 'dataset/333.png', 'path': 'dataset/333.png'},
    {'name': 'dataset/58.png', 'path': 'dataset/58.png'},
    {'name': 'dataset/78.png', 'path': 'dataset/78.png'},
    {'name': 'dataset/49.png', 'path': 'dataset/49.png'},
    {'name': 'dataset/284.png', 'path': 'dataset/284.png'},
    {'name': 'dataset/66.png', 'path': 'dataset/66.png'},
    {'name': 'dataset/278.png', 'path': 'dataset/278.png'},
    {'name': 'dataset/207.png', 'path': 'dataset/207.png'},
    {'name': 'dataset/267.png', 'path': 'dataset/267.png'},
    {'name': 'dataset/123.png', 'path': 'dataset/123.png'},
    {'name': 'dataset/302.png', 'path': 'dataset/302.png'},
    {'name': 'dataset/46.png', 'path': 'dataset/46.png'},
    {'name': 'dataset/126.png', 'path': 'dataset/126.png'},
    {'name': 'dataset/285.png', 'path': 'dataset/285.png'},
    {'name': 'dataset/259.png', 'path': 'dataset/259.png'},
    {'name': 'dataset/15.png', 'path': 'dataset/15.png'},
    {'name': 'dataset/296.png', 'path': 'dataset/296.png'},
    {'name': 'dataset/5.png', 'path': 'dataset/5.png'},
    {'name': 'dataset/53.png', 'path': 'dataset/53.png'},
    {'name': 'dataset/151.png', 'path': 'dataset/151.png'},
    {'name': 'dataset/94.png', 'path': 'dataset/94.png'},
    {'name': 'dataset/184.png', 'path': 'dataset/184.png'},
    {'name': 'dataset/163.png', 'path': 'dataset/163.png'},
    {'name': 'dataset/304.png', 'path': 'dataset/304.png'},
    {'name': 'dataset/203.png', 'path': 'dataset/203.png'},
    {'name': 'dataset/25.png', 'path': 'dataset/25.png'},
    {'name': 'dataset/193.png', 'path': 'dataset/193.png'},
    {'name': 'dataset/68.png', 'path': 'dataset/68.png'},
    {'name': 'dataset/275.png', 'path': 'dataset/275.png'},
    {'name': 'dataset/100.png', 'path': 'dataset/100.png'},
    {'name': 'dataset/216.png', 'path': 'dataset/216.png'},
    {'name': 'dataset/186.png', 'path': 'dataset/186.png'},
    {'name': 'dataset/160.png', 'path': 'dataset/160.png'},
    {'name': 'dataset/334.png', 'path': 'dataset/334.png'},
    {'name': 'dataset/37.png', 'path': 'dataset/37.png'},
    {'name': 'dataset/34.png', 'path': 'dataset/34.png'},
    {'name': 'dataset/22.png', 'path': 'dataset/22.png'},
    {'name': 'dataset/326.png', 'path': 'dataset/326.png'},
    {'name': 'dataset/179.png', 'path': 'dataset/179.png'},
    {'name': 'dataset/96.png', 'path': 'dataset/96.png'},
    {'name': 'dataset/1.png', 'path': 'dataset/1.png'},
    {'name': 'dataset/289.png', 'path': 'dataset/289.png'},
    {'name': 'dataset/10.png', 'path': 'dataset/10.png'},
    {'name': 'dataset/303.png', 'path': 'dataset/303.png'},
    {'name': 'dataset/337.png', 'path': 'dataset/337.png'},
    {'name': 'dataset/286.png', 'path': 'dataset/286.png'},
    {'name': 'dataset/141.png', 'path': 'dataset/141.png'},
    {'name': 'dataset/168.png', 'path': 'dataset/168.png'},
    {'name': 'dataset/139.png', 'path': 'dataset/139.png'},
    {'name': 'dataset/338.png', 'path': 'dataset/338.png'},
    {'name': 'dataset/177.png', 'path': 'dataset/177.png'},
    {'name': 'dataset/12.png', 'path': 'dataset/12.png'},
    {'name': 'dataset/243.png', 'path': 'dataset/243.png'},
    {'name': 'dataset/198.png', 'path': 'dataset/198.png'},
    {'name': 'dataset/116.png', 'path': 'dataset/116.png'},
    {'name': 'dataset/52.png', 'path': 'dataset/52.png'},
    {'name': 'dataset/235.png', 'path': 'dataset/235.png'},
    {'name': 'dataset/27.png', 'path': 'dataset/27.png'},
    {'name': 'dataset/72.png', 'path': 'dataset/72.png'},
    {'name': 'dataset/125.png', 'path': 'dataset/125.png'},
    {'name': 'dataset/279.png', 'path': 'dataset/279.png'},
    {'name': 'dataset/212.png', 'path': 'dataset/212.png'},
    {'name': 'dataset/308.png', 'path': 'dataset/308.png'},
    {'name': 'dataset/136.png', 'path': 'dataset/136.png'},
    {'name': 'dataset/197.png', 'path': 'dataset/197.png'},
    {'name': 'dataset/62.png', 'path': 'dataset/62.png'},
    {'name': 'dataset/155.png', 'path': 'dataset/155.png'},
    {'name': 'dataset/88.png', 'path': 'dataset/88.png'},
    {'name': 'dataset/148.png', 'path': 'dataset/148.png'},
    {'name': 'dataset/4.png', 'path': 'dataset/4.png'},
    {'name': 'dataset/3.png', 'path': 'dataset/3.png'},
    {'name': 'dataset/192.png', 'path': 'dataset/192.png'},
    {'name': 'dataset/252.png', 'path': 'dataset/252.png'},
    {'name': 'dataset/181.png', 'path': 'dataset/181.png'},
    {'name': 'dataset/140.png', 'path': 'dataset/140.png'},
    {'name': 'dataset/28.png', 'path': 'dataset/28.png'},
    {'name': 'dataset/238.png', 'path': 'dataset/238.png'},
    {'name': 'dataset/153.png', 'path': 'dataset/153.png'},
    {'name': 'dataset/41.png', 'path': 'dataset/41.png'},
    {'name': 'dataset/185.png', 'path': 'dataset/185.png'},
    {'name': 'dataset/42.png', 'path': 'dataset/42.png'},
    {'name': 'dataset/196.png', 'path': 'dataset/196.png'},
    {'name': 'dataset/118.png', 'path': 'dataset/118.png'},
    {'name': 'dataset/99.png', 'path': 'dataset/99.png'},
    {'name': 'dataset/81.png', 'path': 'dataset/81.png'},
    {'name': 'dataset/89.png', 'path': 'dataset/89.png'},
    {'name': 'dataset/209.png', 'path': 'dataset/209.png'},
    {'name': 'dataset/253.png', 'path': 'dataset/253.png'},
    {'name': 'dataset/65.png', 'path': 'dataset/65.png'},
    {'name': 'dataset/117.png', 'path': 'dataset/117.png'},
    {'name': 'dataset/165.png', 'path': 'dataset/165.png'},
    {'name': 'dataset/93.png', 'path': 'dataset/93.png'},
    {'name': 'dataset/258.png', 'path': 'dataset/258.png'},
    {'name': 'dataset/2.png', 'path': 'dataset/2.png'},
    {'name': 'dataset/232.png', 'path': 'dataset/232.png'},
    {'name': 'dataset/230.png', 'path': 'dataset/230.png'},
    {'name': 'dataset/227.png', 'path': 'dataset/227.png'},
    {'name': 'dataset/283.png', 'path': 'dataset/283.png'},
    {'name': 'dataset/133.png', 'path': 'dataset/133.png'},
    {'name': 'dataset/313.png', 'path': 'dataset/313.png'},
    {'name': 'dataset/292.png', 'path': 'dataset/292.png'},
    {'name': 'dataset/73.png', 'path': 'dataset/73.png'},
    {'name': 'dataset/330.png', 'path': 'dataset/330.png'},
    {'name': 'dataset/128.png', 'path': 'dataset/128.png'},
    {'name': 'dataset/138.png', 'path': 'dataset/138.png'},
    {'name': 'dataset/261.png', 'path': 'dataset/261.png'},
    {'name': 'dataset/299.png', 'path': 'dataset/299.png'},
    {'name': 'dataset/339.png', 'path': 'dataset/339.png'},
    {'name': 'dataset/263.png', 'path': 'dataset/263.png'},
    {'name': 'dataset/69.png', 'path': 'dataset/69.png'},
    {'name': 'dataset/112.png', 'path': 'dataset/112.png'},
    {'name': 'dataset/317.png', 'path': 'dataset/317.png'},
    {'name': 'dataset/201.png', 'path': 'dataset/201.png'},
    {'name': 'dataset/293.png', 'path': 'dataset/293.png'},
    {'name': 'dataset/50.png', 'path': 'dataset/50.png'},
    {'name': 'dataset/71.png', 'path': 'dataset/71.png'},
    {'name': 'dataset/172.png', 'path': 'dataset/172.png'},
    {'name': 'dataset/157.png', 'path': 'dataset/157.png'},
    {'name': 'dataset/221.png', 'path': 'dataset/221.png'},
    {'name': 'dataset/189.png', 'path': 'dataset/189.png'},
    {'name': 'dataset/174.png', 'path': 'dataset/174.png'},
    {'name': 'dataset/setdesc.csv', 'path': 'dataset/setdesc.csv'},
    {'name': 'dataset/331.png', 'path': 'dataset/331.png'},
    {'name': 'dataset/85.png', 'path': 'dataset/85.png'},
    {'name': 'dataset/307.png', 'path': 'dataset/307.png'},
    {'name': 'dataset/107.png', 'path': 'dataset/107.png'},
    {'name': 'dataset/6.png', 'path': 'dataset/6.png'},
    {'name': 'dataset/249.png', 'path': 'dataset/249.png'},
    {'name': 'dataset/178.png', 'path': 'dataset/178.png'},
    {'name': 'dataset/47.png', 'path': 'dataset/47.png'},
    {'name': 'dataset/114.png', 'path': 'dataset/114.png'},
    {'name': 'dataset/127.png', 'path': 'dataset/127.png'},
    {'name': 'dataset/146.png', 'path': 'dataset/146.png'},
    {'name': 'dataset/175.png', 'path': 'dataset/175.png'},
    {'name': 'dataset/9.png', 'path': 'dataset/9.png'},
    {'name': 'dataset/132.png', 'path': 'dataset/132.png'},
    {'name': 'dataset/144.png', 'path': 'dataset/144.png'},
    {'name': 'dataset/137.png', 'path': 'dataset/137.png'},
    {'name': 'dataset/18.png', 'path': 'dataset/18.png'},
    {'name': 'dataset/234.png', 'path': 'dataset/234.png'},
    {'name': 'dataset/92.png', 'path': 'dataset/92.png'},
    {'name': 'dataset/297.png', 'path': 'dataset/297.png'},
    {'name': 'dataset/29.png', 'path': 'dataset/29.png'},
    {'name': 'dataset/120.png', 'path': 'dataset/120.png'},
    {'name': 'dataset/273.png', 'path': 'dataset/273.png'},
    {'name': 'dataset/70.png', 'path': 'dataset/70.png'},
    {'name': 'dataset/287.png', 'path': 'dataset/287.png'},
    {'name': 'dataset/83.png', 'path': 'dataset/83.png'},
    {'name': 'dataset/320.png', 'path': 'dataset/320.png'},
    {'name': 'dataset/109.png', 'path': 'dataset/109.png'},
    {'name': 'dataset/310.png', 'path': 'dataset/310.png'},
    {'name': 'dataset/33.png', 'path': 'dataset/33.png'},
    {'name': 'dataset/13.png', 'path': 'dataset/13.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.8';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var instructClock;
var instruct_text;
var ready;
var timerClock;
var timer1;
var timer2;
var timer3;
var timergo;
var trialClock;
var image;
var text;
var key_resp;
var thanksClock;
var text_2;
var key_resp_2;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "instruct"
  instructClock = new util.Clock();
  instruct_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruct_text',
    text: 'Instructions\n1. Test\n2. Test\n3. Test\n\nPress any key to start!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: 1,
    depth: 0.0 
  });
  
  ready = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "timer"
  timerClock = new util.Clock();
  timer1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer1',
    text: '3',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  timer2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer2',
    text: '2',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  timer3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer3',
    text: '1',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  timergo = new visual.TextStim({
    win: psychoJS.window,
    name: 'timergo',
    text: 'Start!\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [1, 0.75],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: "Press 'up' if the trend was increasing.\nPress 'down' if the trend was decreasing.\n",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Thank you for participating!\n\nPress any key to exit.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _ready_allKeys;
var instructComponents;
function instructRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instruct'-------
    t = 0;
    instructClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    ready.keys = undefined;
    ready.rt = undefined;
    _ready_allKeys = [];
    // keep track of which components have finished
    instructComponents = [];
    instructComponents.push(instruct_text);
    instructComponents.push(ready);
    
    for (const thisComponent of instructComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


var continueRoutine;
function instructRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instruct'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instructClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruct_text* updates
    if (t >= 0.0 && instruct_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruct_text.tStart = t;  // (not accounting for frame time here)
      instruct_text.frameNStart = frameN;  // exact frame index
      
      instruct_text.setAutoDraw(true);
    }

    
    // *ready* updates
    if (t >= 0.0 && ready.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ready.tStart = t;  // (not accounting for frame time here)
      ready.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ready.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ready.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ready.clearEvents(); });
    }

    if (ready.status === PsychoJS.Status.STARTED) {
      let theseKeys = ready.getKeys({keyList: [], waitRelease: false});
      _ready_allKeys = _ready_allKeys.concat(theseKeys);
      if (_ready_allKeys.length > 0) {
        ready.keys = _ready_allKeys[_ready_allKeys.length - 1].name;  // just the last key pressed
        ready.rt = _ready_allKeys[_ready_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instruct'-------
    for (const thisComponent of instructComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ready.keys', ready.keys);
    if (typeof ready.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('ready.rt', ready.rt);
        routineTimer.reset();
        }
    
    ready.stop();
    // the Routine "instruct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var timerComponents;
function timerRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'timer'-------
    t = 0;
    timerClock.reset(); // clock
    frameN = -1;
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    timerComponents = [];
    timerComponents.push(timer1);
    timerComponents.push(timer2);
    timerComponents.push(timer3);
    timerComponents.push(timergo);
    
    for (const thisComponent of timerComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


var frameRemains;
function timerRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'timer'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = timerClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *timer1* updates
    if (t >= 0.0 && timer1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer1.tStart = t;  // (not accounting for frame time here)
      timer1.frameNStart = frameN;  // exact frame index
      
      timer1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((timer1.status === PsychoJS.Status.STARTED || timer1.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      timer1.setAutoDraw(false);
    }
    
    // *timer2* updates
    if (t >= 1.0 && timer2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer2.tStart = t;  // (not accounting for frame time here)
      timer2.frameNStart = frameN;  // exact frame index
      
      timer2.setAutoDraw(true);
    }

    frameRemains = 1.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((timer2.status === PsychoJS.Status.STARTED || timer2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      timer2.setAutoDraw(false);
    }
    
    // *timer3* updates
    if (t >= 2.0 && timer3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer3.tStart = t;  // (not accounting for frame time here)
      timer3.frameNStart = frameN;  // exact frame index
      
      timer3.setAutoDraw(true);
    }

    frameRemains = 2.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((timer3.status === PsychoJS.Status.STARTED || timer3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      timer3.setAutoDraw(false);
    }
    
    // *timergo* updates
    if (t >= 3.0 && timergo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timergo.tStart = t;  // (not accounting for frame time here)
      timergo.frameNStart = frameN;  // exact frame index
      
      timergo.setAutoDraw(true);
    }

    frameRemains = 3.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((timergo.status === PsychoJS.Status.STARTED || timergo.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      timergo.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of timerComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function timerRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'timer'-------
    for (const thisComponent of timerComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'dataset/setdesc.csv',
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(trialRoutineBegin(snapshot));
    trialsLoopScheduler.add(trialRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(trialRoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var _key_resp_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    image.setImage(path);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(image);
    trialComponents.push(text);
    trialComponents.push(key_resp);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0.5 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    frameRemains = 0.5 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((image.status === PsychoJS.Status.STARTED || image.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      image.setAutoDraw(false);
    }
    
    // *text* updates
    if (t >= 2.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.5 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['up', 'down'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var thanksComponents;
function thanksRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'thanks'-------
    t = 0;
    thanksClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    thanksComponents = [];
    thanksComponents.push(text_2);
    thanksComponents.push(key_resp_2);
    
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


function thanksRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'thanks'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: [], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thanksRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'thanks'-------
    for (const thisComponent of thanksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "thanks" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
