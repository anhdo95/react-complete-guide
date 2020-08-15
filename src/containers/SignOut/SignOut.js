import Cookies from 'js-cookie'

export default function SignOut() {
  if (Cookies.get('token')) {
    Cookies.remove('token')
    
    window.location = '/'
  }

  return null
}
