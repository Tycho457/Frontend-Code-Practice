// 定义类型

import { Dictionaries } from "../enum"
export type Key = string    // key类型
export type expire = Dictionaries.permanent | number    // 有效期类型
// 格式化data类型
export interface Data<T> {
    value: T
    [Dictionaries.expire]: Dictionaries.expire | number
}
// 返回值类型
export interface Result<T> {
    message: string,
    value: T | null
}
// class方法约束
export interface StorageCls {
    set: <T>(key: Key, value: T, expire: expire) => void
    get: <T>(key: Key) => Result<T | null>
    remove: (key: Key) => void
    clear: () => void
} 