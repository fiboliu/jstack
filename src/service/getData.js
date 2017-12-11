import fetch from '@/config/fetch.js'
import {getStore} from '@/common/js/utils.js'

/**
 * 获取首页默认地址
 */
export const cityGuess = () => fetch('/v1/cities', {
  type: 'guess'
})

/**
 * 获取首页热门城市
 */
export const hotCity = () => fetch('/v1/cities', {
  type: 'hot'
})

/**
 * 获取首页所有城市
 */
export const groupCity = () => fetch('/v1/cities', {
  type: 'group'
})

/**
 * 获取用户信息
 */
export const getUser = () => fetch('/v1/user', {
  user_id: getStore('user_id')
})

/**
 * 获取短信验证码
 */
export const mobileCode = phone => fetch('/v4/mobile/verify_code/send', {
  mobile: phone,
  scene: 'login',
  type: 'sms'
}, 'POST')

/**
 * 获取图片验证码
 */
export const getCaptchas = () => fetch('/v1/captchas', {}, 'POST')

/**
 * 检测帐号是否存在
 */
export const checkExist = (checkNumber, type) => fetch('/v1/users/exists', {
  [type]: checkNumber,
  type
})

/**
 * 发送帐号
 */
export const sendMobile = (sendData, captchaCode, type, password) => fetch('/v1/mobile/verify_code/send', {
  action: 'send',
  captchaCode,
  [type]: sendData,
  type: 'sms',
  way: type,
  password
}, 'POST')

/**
 * 账号密码登录
 */
export const accountLogin = (username, password, captchaCode) => fetch('/v2/login', {username, password, captchaCode}, 'POST')

/**
 * 退出登录
 */
export const signout = () => fetch('/v2/signout')
