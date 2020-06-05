'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var barWidth = 50;
var barGap = 80;

var renderCloud = function (ctx, x, y, color) {
  ctx.font = '16px PT Mono';
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

};

var getMaxElement = function (arr) {
  var maxElement = arr[0];


  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRandomArbitrary = function (min, max) {
  return Math.random() * (max - min) + min;
};


window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    var currentBarHeight = (BAR_HEIGHT * times[i]) / maxTime;
    var xPos = CLOUD_X + GAP + TEXT_WIDTH + barGap * i;
    var yPos = CLOUD_Y + GAP * 9 + (BAR_HEIGHT - currentBarHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.ceil(times[i]), xPos, yPos - GAP);
    ctx.fillText(players[i], xPos, CLOUD_HEIGHT);

    ctx.fillStyle = (players[i] === 'Вы') ? ctx.fillStyle = 'rgba(255, 0, 0, 1)' : ctx.fillStyle = 'hsl(240,' + getRandomArbitrary(20, 100) + '%, 50%)';


    ctx.fillRect(xPos, yPos, barWidth, currentBarHeight);

  }

  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + 50, CLOUD_Y * 3);
  ctx.fillText('Список результатов:', CLOUD_X + 50, CLOUD_Y * 5);
};
