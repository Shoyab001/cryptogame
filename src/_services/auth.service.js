import apipath from '../api/api_path'
import axios from 'axios'

// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
export async function Loginapi(body) {
  try {
    const res = await axios.post(apipath.BASE_URL + apipath.LOGIN, body, {
      headers: {
        'x-testing-platform': 'web',
        'x-testing-version': '1.0.0',
        'Accept-Language': 'en',
      },
    })
    return res?.data
  } catch (error) {
    console.log(error)
    return error?.res?.data
  }
}

export async function Signup(body) {
  try {
    const res = await axios.post(apipath.BASE_URL + apipath.SIGNUP, body, {
      headers: {
        'x-testing-platform': 'web',
        'x-testing-version': '1.0.0',
        'accept-language': 'en',
      },
    })

    return res?.data
  } catch (error) {
    return error?.res?.data
  }
}

export async function Changepassword(body) {
  try {
    const res = await axios.post(apipath.BASE_URL + apipath.Changepassward, body, {
      headers: {
        'x-testing-platform': 'web',
        'x-testing-version': '1.0.0',
        'accept-language': 'en',
      },
    })

    return res?.data
  } catch (error) {
    return error?.res?.data
  }
}
