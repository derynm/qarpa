export default function ({ redirect, $auth }) {
  if ($auth.state.loggedIn) {
    return redirect('/dashboard')
  }
}
