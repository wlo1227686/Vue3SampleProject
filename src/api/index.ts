/**
 * 統一管理API相關的接口
 */
import * as ajax from '@/script/ajax'

// https://dog.ceo/api/breed/pembroke/images/random
const dogCeoUrl = 'https://dog.ceo/api/breed/pembroke/images/random'
const REQUEST_METHOD = ajax.REQUEST_METHOD

export const dogRandomImages = () => ajax.baseAjax(REQUEST_METHOD.GET, dogCeoUrl);
