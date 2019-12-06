
//封装localstorage本地存储
let storage = {
    // 信息存储
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    },
    get(key) {
        return JSON.parse(localStorage.getItem(key))
    },
    remove(key) {
        localStorage.removeItem(key)
    }
}
 
export default storage