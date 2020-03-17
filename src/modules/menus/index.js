import { put, take, select } from "redux-saga/effects";
import { createSagas } from "redux-box";
import { getMenusRequest } from "./api";
import request from "../../utils/api";

export const types = {
  GET_MENUS_REQUEST: "MENUS/GET_MENUS_REQUEST",
  GET_MENUS_SUCCESS: "MENUS/GET_MENUS_SUCCESS",
  GET_MENUS_FAILURE: "MENUS/GET_MENUS_FAILURE"
};

const state = {
  menus: [],
  isLoading: false
};

export const mutations = {
  [types.GET_MENUS_REQUEST]: (state, action) => {
    state.menus = [];
    state.isLoading = true;
  },
  [types.GET_MENUS_SUCCESS]: (state, action) => {
    state.menus = action.menus;
    state.isLoading = false;
  },
  [types.GET_MENUS_FAILURE]: (state, action) => {
    state.menus = [];
    state.isLoading = false;
  }
};

export const actions = {
  getMenus: () => ({ type: types.GET_MENUS_REQUEST })
};

export const sagas = createSagas({
  [types.GET_MENUS_REQUEST]: function*(action) {
    try {
      const response = yield* request(getMenusRequest);
      console.log(response);
      yield put({ type: types.GET_MENUS_SUCCESS, menus: response });
    } catch (e) {
      console.log(e);
      yield put({ type: types.GET_MENUS_FAILURE, error: e.json });
    }
  }
});

export const selectors = {};

export var module = {
  name: "menus",
  types,
  state,
  actions,
  mutations,
  sagas,
  selectors
};
