import { put, takeLatest, all } from '@redux-saga/core/effects';

function* actionWatcher() {
    yield takeLatest('GET_PRODUCT', fetchProduct)
}

function* fetchProduct() {
    // make an API call
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const data = yield fetch(url)
        .then(response => response.json())
        //.catch(error => error.json());

    // update the store, put
    yield put({ type: 'PRODUCT_RECEIVED', json: data })
}

export default function* rootSaga() {
    yield all([
        actionWatcher()
    ])
}