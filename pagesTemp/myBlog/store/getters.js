const getters = {
  token: state => state.user.token,
  name: state => state.user.name,
  role: state=> state.user.role
}
export default getters