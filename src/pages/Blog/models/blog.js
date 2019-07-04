import * as api from '@/services/api';
import { renderStateWithKey, reducerPipe } from '@/utils/modelsUtils';
import { message } from 'antd';
import * as CONST from '@/constants';

const renderedState = renderStateWithKey([
  'alertList',
  'alertDetail',
  'alertStatisticsData',
  'assignAlert',
  'addToWatchList',
  'commentAlert',
]);

export default {
  namespace: 'alerts',

  state: renderedState,

  effects: {
    *fetchAlertsStatistics(action, { call, put }) {
      yield put({ type: 'getDataRequest', stateKey: 'alertStatisticsData' });
      const res = yield call(api.getAlertStatistics);
      if (res.status === 'success') {
        yield put({ type: 'getDataSuccess', stateKey: 'alertStatisticsData', payload: res.data });
      } else {
        yield put({ type: 'getDataFail', stateKey: 'alertStatisticsData', payload: res.message });
      }
    },
    *fetchAlertList({ payload }, { call, put }) {
      yield put({ type: 'getListRequest', stateKey: 'alertList' });
      const res = yield call(api.getAlertList, payload);
      if (res.status === 'success') {
        yield put({ type: 'getListSuccess', stateKey: 'alertList', payload: res.data });
      } else {
        yield put({ type: 'getListFail', stateKey: 'alertList', payload: res.message });
      }
    },
    *fetchAlert({ payload }, { call, put }) {
      yield put({ type: 'getDataRequest', stateKey: 'alertDetail' });
      const res = yield call(api.getAlertDetail, payload);
      if (res.status === 'success') {
        yield put({ type: 'getDataSuccess', stateKey: 'alertDetail', payload: res.data });
      } else {
        yield put({ type: 'getDataFail', stateKey: 'alertDetail', payload: res.message });
      }
    },
    *assignAlert({ payload, callback }, { call, put }) {
      yield put({ type: 'operateRequest', stateKey: 'assignAlert' });
      const res = yield call(api.assignAlert, payload);
      if (res.status === 'success') {
        if (callback) callback();
        yield put({ type: 'operateSuccess', stateKey: 'assignAlert' });
        message.success('Assign successfully');
        yield put({
          type: 'alerts/fetchAlertsStatistics',
          stateKey: 'alertStatisticsData',
        });
        yield put({
          type: 'alerts/fetchAlertList',
          stateKey: 'alertList',
          payload: {
            status: 'UNASSIGNED',
            priority: 0,
            pageNumber: CONST.DEFAULT_PAGE_NUMBER,
            pageSize: CONST.DEFAULT_PAGE_SIZE,
          },
        });
        yield put({
          type: 'admin/fetchUserList',
          stateKey: 'userList',
        });
      } else {
        yield put({ type: 'operateFail', stateKey: 'assignAlert', payload: res.message });
      }
    },
    *addToWatchList({ payload, callback }, { call, put }) {
      yield put({ type: 'operateRequest', stateKey: 'addToWatchList' });
      const res = yield call(api.addToWatchList, payload);
      if (res.status === 'success') {
        if (callback) callback();
        yield put({ type: 'operateSuccess', stateKey: 'addToWatchList' });
        message.success('Add to watch list successfully');
        yield put({
          type: 'alerts/fetchAlertsStatistics',
          stateKey: 'alertStatisticsData',
        });
        yield put({
          type: 'alerts/fetchAlert',
          stateKey: 'alertDetail',
          payload: { alertId: payload.alertId },
        });
      } else {
        yield put({ type: 'operateFail', stateKey: 'addToWatchList', payload: res.message });
      }
    },
    *commentAlert({ payload, callback }, { call, put }) {
      yield put({ type: 'operateRequest', stateKey: 'commentAlert' });
      const res = yield call(api.commentAlert, payload);
      if (res.status === 'success') {
        if (callback) callback();
        yield put({ type: 'operateSuccess', stateKey: 'commentAlert' });
        message.success('Operate successfully');
        yield put({
          type: 'alerts/fetchAlert',
          stateKey: 'alertDetail',
          payload: { alertId: payload.alertId },
        });
      } else {
        yield put({ type: 'operateFail', stateKey: 'commentAlert', payload: res.message });
      }
    },
  },

  reducers: {
    getListRequest(state, action) {
      return reducerPipe(state, action, 'request');
    },
    getListSuccess(state, action) {
      return reducerPipe(state, action, 'success');
    },
    getListFail(state, action) {
      return reducerPipe(state, action, 'fail');
    },
    getDataRequest(state, action) {
      return reducerPipe(state, action, 'request');
    },
    getDataSuccess(state, action) {
      return reducerPipe(state, action, 'success');
    },
    getDataFail(state, action) {
      return reducerPipe(state, action, 'fail');
    },
    operateRequest(state, action) {
      return reducerPipe(state, action, 'request');
    },
    operateSuccess(state, action) {
      return reducerPipe(state, action, 'success');
    },
    operateFail(state, action) {
      return reducerPipe(state, action, 'fail');
    },
  },
};
