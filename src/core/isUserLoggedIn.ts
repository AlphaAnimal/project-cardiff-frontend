// TODO: change to hook useLoggedInUser
export function isUserLoggedIn() {
  const user = localStorage.getItem("user");
  if (!user) return false;
  return true;
}
