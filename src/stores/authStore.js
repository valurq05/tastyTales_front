import { defineStore } from 'pinia'
import { ref } from 'vue'
import { showSwalAlert } from '../alert.js'
import axios from 'axios'

export const useAuthStore = defineStore('user', () => {
  const token = ref()
  const authUser = ref(null);
  const use_id = ref();

  const access = async (use_mail, use_password) => {
    try {
      const res = await axios.post('/login', {
        userNombre: use_mail,
        userPassword: use_password
      })
      console.log(res.data.data);
      token.value = res.data.data.token
      authUser.value = res.data.data.user
      use_id.value = res.data.data.user.userID
      localStorage.setItem('Token', token.value);
      console.log(authUser.value);
      localStorage.setItem('USE_ID', use_id.value);
      localStorage.setItem('User', JSON.stringify(authUser.value));
    } catch (error) {
      showSwalAlert('', error.response.data.message, 'error');
    }
  }

  const register = async (per_name, per_lastname, use_document, use_mail, use_password) => {
    try {
      const res = await axios.post('/register', {
        perName: per_name,
        perLastName: per_lastname,
        userDoc: use_document,
        userNombre: use_mail,
        userPassword: use_password
      })
      showSwalAlert('', res.data.message || 'El registro se ha realizado correctamente', 'success');
    } catch (error) {
      showSwalAlert('', error.response.data.message, 'error');
    }
  }

  const logout = async () => {
    try {
      const res = await axios({
        url: '/logout',
        method: 'POST',
      })
    console.log(res.data);
    } catch (error) {
    } finally {
      resetStore();
    }
  }

  const resetStore = () => {
    token.value = null
    authUser.value = null
    localStorage.removeItem('Token');
  }
  
 
  return {
    useAuthStore,
    authUser,
    token,
    access,
    register,
    logout
  }

})
