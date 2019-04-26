var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
var yearPassed = parseInt((day / 365) * 100);
var year = now.getFullYear();

function move(passed) {
	var elem = document.getElementById('year');
	var width = 1;
	var id = setInterval(frame, 10);

	function frame() {
		if (width >= passed) {
			clearInterval(id);
		} else {
			width++;
			elem.style.width = width + '%';
			if (day < 11) {
				elem.innerHTML = day + ' / ' + 365 + ' Days';
			} else {
			elem.innerHTML = day + ' / ' + 365 + ' Days';
			}
		}
	}
}

if (yearPassed > 11) {
	move(yearPassed);
} else  {
	move(11);
}
document.getElementById('title').innerHTML = year;
document.getElementById('subTitle').innerHTML = yearPassed + '% complete!';