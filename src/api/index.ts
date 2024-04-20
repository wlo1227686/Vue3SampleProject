/**
 * 統一管理API相關的接口
 */
import * as ajax from '@/utils/ajax'

// https://dog.ceo/api/breed/pembroke/images/random
const dogCeoUrl = 'https://dog.ceo/api/breed/pembroke/images/random'
const REQUEST_METHOD = ajax.REQUEST_METHOD

export const dogRandomImages = () => ajax.baseAjax(REQUEST_METHOD.GET, dogCeoUrl);

// API 接口需要攜帶參數ts類型
export interface responsePuppyImage {
    message: string,
    status: string
}
export interface ajaxObject {
    key: string,
    value: any
}