import { getBlog } from '@/api/index';

export default {
  namespace: 'blog',

  state: {
    blogList: [],
  },

  effects: {
    * list(_, { call, put }) {
      try {
        const apiResult = yield call(getBlog);
        if (apiResult.data.status === 'success') {
          yield put({
            type: 'saveList',
            payload: apiResult.data.data,
          })
        }
      } catch (e) {
        console.warn(e);
      }
    },
  },

  reducers: {
    saveList(state, action) {
      return {
        ...state,
        blogList: action.payload || [],
      };
    },
  },
};
