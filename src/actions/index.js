const SELECT_PAGE = 'SELECT_PAGE';
const FETCH_CONTENT = 'FETCH_CONTENT';

export function fetchContent(){
  // const request = axios.get('ENDPOINT_THAT_SENDSBACK_DATA_VIA_A_PROMISE');
  //
  // return {
  //   type: GET_PAGES,
  //   payload: request
  // }
  return {
    type: FETCH_CONTENT
  }
}

export function selectPage(page){
  return {
    type: SELECT_PAGE,
    payload: page
  }
}
