import * as types from './types';

export function fetchContent(){
  // const request = axios.get('ENDPOINT_THAT_SENDSBACK_DATA_VIA_A_PROMISE');
  //
  // return {
  //   type: GET_PAGES,
  //   payload: request
  // }
  return {
    type: types.FETCH_CONTENT
  }
}

export function selectPage(page){
  return {
    type: types.SELECT_PAGE,
    payload: page
  }
}
