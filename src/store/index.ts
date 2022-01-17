import Vue from "vue";
import Vuex from "vuex";
import * as types from "./mutation-types";
import VuexPersistence from "vuex-persist";
Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  state: {
    transcationHistory: [
      {
        name: "Hamleys",
        transcationDate: "20 May 2021",
        transcationDesc: "Refund on debit card",
        amount: 150,
        type: "credit",
      },
      {
        name: "Hamleys",
        transcationDate: "20 May 2021",
        transcationDesc: "Charged on debit card",
        amount: 150,
        type: "debit",
      },
      {
        name: "Hamleys",
        transcationDate: "20 May 2021",
        transcationDesc: "Refund on debit card",
        amount: 150,
        type: "refund",
      },
    ],
    cardDetails: [],
  },
  mutations: {
    [types.SET_TRANSCATION_HISTORY](state, transcationHistory) {
      state.transcationHistory = transcationHistory;
    },
    [types.SET_CARD_DETAILS](state, cardDetails) {
      state.cardDetails = cardDetails;
    },
  },
  actions: {
    changeTransactionHistory({ commit }, transcationHistory) {
      commit(types.SET_TRANSCATION_HISTORY, transcationHistory);
    },
    setCardDetails({ commit }, cardDetails) {
      commit(types.SET_CARD_DETAILS, cardDetails);
    },
  },
  modules: {},
  plugins: [vuexLocal.plugin],
});
