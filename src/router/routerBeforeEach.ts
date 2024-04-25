

export default async function routerBeforeEach(to: any, from: any) {
    // --------------------
    //  1. 從哪來?、想去哪?
    // --------------------
    console.log(`1. 從哪來 = ${from.fullPath} 想去哪 = ${to.fullPath}`)
}