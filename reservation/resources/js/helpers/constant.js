const dateTimeFormat = 'yyyy-MM-dd hh:mm';
const yearMonthFormat = 'yyyy-MM';
const workTime = [
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
]
const listTableStyle = [
  {
    name: 'Any',
    value: '1'
  },
  {
    name: 'Table',
    value: '2'
  },
  {
    name: 'Counter',
    value: '3'
  },
  {
    name: 'Outside',
    value: '4'
  },
  {
    name: 'Semi-private',
    value: '5'
  },
  {
    name: 'Tatami',
    value: '6'
  },
]
const parseJwt = (token) =>{
  if(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  }else {
    return '';
  }
};

export {
  dateTimeFormat,
  yearMonthFormat,
  workTime,
  listTableStyle,
  parseJwt
}
