var numMap = {
  '0': [1,1,1,1,1,1,0],
  '1': [0,1,1,0,0,0,0],
  '2': [1,1,0,1,1,0,1],
  '3': [1,1,1,1,0,0,1],
  '4': [0,1,1,0,0,1,1],
  '5': [1,0,1,1,0,1,1],
  '6': [1,0,1,1,1,1,1],
  '7': [1,1,1,0,0,0,0],
  '8': [1,1,1,1,1,1,1],
  '9': [1,1,1,0,0,1,1]
};

function updateDigit($digit, number) {
  var map = numMap[number];
  var $lines = $digit.find('.number__line');

  $lines.removeClass('on');

  for (var i = 0; i < map.length; i++) {
    if (map[i]) {
      $lines.eq(i).addClass('on');
    }
  }
}

function updateCounter($counter, value) {
  var $digits = $counter.find('.number');
  var digitCount = $digits.length;

  var padded = String(value).padStart(digitCount, '0');

  $digits.each(function(i) {
    updateDigit($(this), padded[i]);
  });
}

$('.counter').each(function(index) {
  var $counter = $(this);
  var start = parseInt($counter.attr('data-start')) || 0;
  var end = parseInt($counter.attr('data-end')) || 9999999;

  var storageKey = 'counterValue_' + index;
  var saved = localStorage.getItem(storageKey);
  var current = saved !== null ? parseInt(saved) : start;

  if (isNaN(current) || current < start || current > end) {
    current = start;
  }

  updateCounter($counter, current);

  function runCounter() {
    var increment = Math.floor(Math.random() * 100) + 1;
    current += increment;

    if (current > end) {
      current = start;
    }

    localStorage.setItem(storageKey, current);
    updateCounter($counter, current);

    var nextDelay = Math.floor(Math.random() * 13000) + 200;
    setTimeout(runCounter, nextDelay);
  }

  var firstDelay = Math.floor(Math.random() * 13000) + 200;
  setTimeout(runCounter, firstDelay);
});