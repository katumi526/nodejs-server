const moment = require('moment');
const oneWeekuLater = moment().add(7,'days').format('YYYY年MM月DD日');
console.log('一週間は:' + oneWeekuLater);

const birthday = moment('2007-08-03');
const age = moment().diff(birthday,'years');
console.log('あなたの年齢は:' + age +'歳です');

const start = moment('2025-01-01');
const end = moment('2025-05-14');
const daysBetween = end.diff(start,'days');
console.log('開始日から何日経った？→' + daysBetween + '日');

const dayOfWeek = moment().format('dddd');
console.log('今日は' + dayOfWeek +'です');

const threeDaysAgo = moment().subtract(3,'days').format('YYYY/MM/DD');
console.log('3日前は:' + threeDaysAgo);





