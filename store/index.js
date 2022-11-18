import axios from 'axios';

const initState = () => ({
  checkWord: '',
});

export default {
  namespaced: true,
  state: initState,
  actions: {
    async checkTheWordInDictionary(context, payload) {
      debugger
      //const url = `https://api.pons.com/v1/dictionaries?language=ru?q=` + payload ;
      const url = `https://api.pons.com/v1/dictionary?l=deen?q=` + payload ;
      const response = await axios.get(url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          'X-Secret' : '98b2a2e8927befd1d5e57957eb6983a39c9e20084406252400a627771547107c'
        }
      });
      context.commit("setCheckWordFromDictionary", response);
    },
  },
  mutations: {
    setCheckWordFromDictionary: (state, payload) => state.checkWord = payload,
  }
}
