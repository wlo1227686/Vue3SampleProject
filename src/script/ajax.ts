// 將axios做二次封裝:使用請求與響應攔截器
import axios from "axios";

/** 發送請求後最長的等待時間 (ms) */
const timeout = 5000;

/** 請求模式 DELETE | GET | PATCH | POST */
export enum REQUEST_METHOD { DELETE = 'DELETE', GET = 'GET', PATCH = 'PATCH', POST = 'POST' }

/**
 * 發送請求至交易監控系統(MNM)Bankend
 * 
 * 基本
 * 
 * @param type 請求模式
 * @param url 請求網址
 * @param data 請求參數
 * @returns
 */
export function baseAjax(type: REQUEST_METHOD = REQUEST_METHOD.GET, url: string, data: params = {}) {

    /** 初始化 */
    const baseRequest = axios.create({ timeout: timeout, })

    return new Promise(function (resolve, reject) {
        let promise; // 返回值

        // 處理請求
        if (type === REQUEST_METHOD.GET) { // GET 請求
            // 處理url參數數據
            let dataStr = ''
            Object.keys(data).forEach(key => { dataStr += key + '=' + encodeURIComponent(data[key]) + '&' })
            // 處理Url網址
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            promise = baseRequest.get(url) // 發送

        } else if (type === REQUEST_METHOD.POST) { // POST 請求
            promise = baseRequest.post(url, data)

        } else if (type === REQUEST_METHOD.PATCH) { // PATCH 請求
            promise = baseRequest.patch(url, data)

        } else if (type === REQUEST_METHOD.DELETE) { // DELETE 請求
            promise = baseRequest.patch(url, data)

        } else {
            promise = reject('不支援的請求格式')
        }// end-if

        // 解析回傳結果
        promise?.then(function (response) {
            if (response.status === 200) { // 請求成功
                resolve(response) // 請求成功-調用 resolve()
            } else {
                reject(response.data.responseDesc) //  請求失敗-調用 reject()
            } // end-if
        }).catch(function (res) { // 例外事件
            let errorMessage = null;
            // 取用順序 (1) response.data.responseDesc
            try { errorMessage = res.response.data.responseDesc } catch (e) { }
            // 取用順序 (2) response.message
            if (errorMessage === null) { errorMessage = res.message }
            reject(errorMessage)  // 請求失敗-調用 reject()
        })
    })

}

/** 定義params是個key-value的物件 */
export interface params { [key: string]: any }