import { ref, reactive } from "vue";
import * as pinia from 'pinia'
//
import { dogRandomImages } from "@/api";


// 創建小倉庫 
let useMainStore = pinia.defineStore({
    id: 'main',
    state: () => ({
        puppyList: [] as puppyImageList,
        overlay: ref(true) // 遮罩是否開啟 true:開啟 false:關閉
    }),
    actions: {
        // 初始化狗狗圖片資訊
        async initPuppyImageList() {
            this.overlay = true // 開啟遮罩
            // 清空數據
            // Object.assign(this, defaultStore)
            let randomNumber = getRandomNumber(3, 15)
            // console.log('randomNumber=', randomNumber)
            // 宣告一個變數 puppyImageList 它是個Array且內部必須是puppyImage的type
            let puppyImageList: puppyImageList = reactive([]);
            for (let i = 0; i < randomNumber; i++) {
                try {
                    let result = await dogRandomImages().then((response: any) => {
                        puppyImageList.push({ key: i, message: response.data.message })
                    }).catch((response) => {
                        // Do Nothing
                    });
                } catch (error: any) {
                    // do nothing
                    console.log(error.message)
                }

            } // end-for
            this.$state.puppyList = puppyImageList // 更新puppyImageList
            this.overlay = false // 關閉遮罩
        },// end initPuppyImageList()
    }, getters: {

    }

})
/**
 * 取得隨機的數字
 * @param minNumber 最小值 
 * @param maxNumber 最大值
 * @returns Number 取得介於(最小值~最大值)區間的一個數字
 */
function getRandomNumber(minNumber: number, maxNumber: number): number {
    return Math.round(Math.random() * (maxNumber - minNumber) + minNumber);
}

// 定義Store倉庫的存儲型別

// 定義接口用於限制 puppyImage
export interface puppyImage {
    key: number,
    message: string
}
// 定義接口用於限制 puppyImageList
export type puppyImageList = puppyImage[]

// 對外暴露mainStore
export default useMainStore;