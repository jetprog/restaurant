import { put, take, select } from "redux-saga/effects";
import { createSagas } from "redux-box";
import { getPlatesRequest } from "./api";
import request from "../../utils/api";

export const types = {
  GET_PLATES_REQUEST: "PLATES/GET_PLATES_REQUEST",
  GET_PLATES_SUCCESS: "PLATES/GET_PLATES_SUCCESS",
  GET_PLATES_FAILURE: "PLATES/GET_PLATES_FAILURE"
};

const state = {
  plates: [],
  isLoading: false
};

export const mutations = {
  [types.GET_PLATES_REQUEST]: (state, action) => {
    state.plates = [];
    state.isLoading = true;
  },
  [types.GET_PLATES_SUCCESS]: (state, action) => {
    state.plates = action.plates;
    state.isLoading = false;
  },
  [types.GET_PLATES_FAILURE]: (state, action) => {
    state.plates = [];
    state.isLoading = false;
  }
};

export const actions = {
  getPlates: () => ({ type: types.GET_PLATES_REQUEST })
};

export const sagas = createSagas({
  [types.GET_PLATES_REQUEST]: function*(action) {
    try {
      const response = yield* request(getPlatesRequest);
      console.log(response);
      yield put({ type: types.GET_PLATES_SUCCESS, plates: response });
    } catch (e) {
      console.log(e);
      yield put({ type: types.GET_PLATES_FAILURE, error: e.json });
    }
  }
});

export const selectors = {};

export var module = {
  name: "plates",
  types,
  state,
  actions,
  mutations,
  sagas,
  selectors
};
