// middleware/auth.js

export default function ({ $getToken, redirect }) {
  if (!$getToken()) {
    return redirect('/');
  }
}
