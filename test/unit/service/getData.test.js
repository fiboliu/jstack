import {cityGuess, hotCity, groupCity} from '@/service/getData'

test('cityGuess', () => {
  cityGuess().then(res => {
    console.log('cityGuess: ' + JSON.stringify(res))
  })
})

// http://cangdu.org:8001/v1/cities?type=hot
test('hotCity', () => {
  hotCity().then(res => {
    console.log('hotCity: ' + JSON.stringify(res))
  })
})

test('groupCity', () => {
  groupCity().then(res => {
    console.log('groupCity: ' + JSON.stringify(res))
  })
})
