import { getBlog } from '@/api/index';

export default {
  namespace: 'blog',

  state: {
    error: null,
    blogList: [],
    blogDetail: null,
  },

  effects: {
    * list(_, { call, put }) {
      try {
        const apiResult = yield call(getBlog);
        if (apiResult.data.status === 'success') {
          yield put({
            type: 'saveList',
            payload: apiResult.data.data,
          });
        }
      } catch (e) {
        yield put({
          type: 'saveError',
          payload: e,
        });
      }
    },
  },

  reducers: {
    saveError(state, action) {
      return {
        ...state,
        error: action.payload,
      };
    },
    saveList(state, action) {
      return {
        ...state,
        blogList: action.payload || [],
      };
    },
  },
};
