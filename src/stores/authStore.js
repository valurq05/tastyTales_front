import { defineStore } from 'pinia'
import { ref } from 'vue'
import { showSwalAlert } from '../alert.js'
import axios from 'axios'

export const useAuthStore = defineStore('user', () => {
  const token = ref()
  const authUser = ref(null);

  const access = async (use_mail, use_password) => {
    try {
      const res = await axios.post('/login', {
        userNombre: use_mail,
        userPassword: use_password
      })
      console.log(res.data);
      token.value = res.data.data.token
      authUser.value = res.data.user
      localStorage.setItem('Token', token.value);
      console.log(authUser.value);
      localStorage.setItem('User', authUser.value);
    } catch (error) {
      showSwalAlert('', error.response.data.message, 'error');
    }
  }

  const register = async (use_document, use_mail, use_password) => {
    try {
      const res = await axios.post('/register', {
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
    token,
    access,
    register,
    logout
  }

})
