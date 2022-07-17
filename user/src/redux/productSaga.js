import { put, takeEvery } from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST } from './constant'

export function* getProducts() {
    try {
        let data = yield fetch('http://localhost:3500/shoes');
        data = yield data.json();
        console.warn("action is called", data)
        yield put({ type: SET_PRODUCT_LIST, data })
    }
    catch (error) {
        console.log(error)
    }
}

function* productSaga() {
    console.log("set action")
    yield takeEvery(PRODUCT_LIST, getProducts)
}

export default productSaga