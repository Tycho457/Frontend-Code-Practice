// ts封装axios,开发微信小程序
import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    Canceler
  } from 'axios-miniprogram'

class HttpRequest {
    private baseUrl: string
    private pending: Record<string,Canceler>

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
        this.pending = {}
    }

    // 获取axios配置
    getInsideConfig(){
        const config = {
            baseUrl: this.baseUrl,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            timeout: 10000
        }
        return config
    }

    removePending(key:string, isRequest = false) {
        if(this.pending[key] && isRequest) {
            this.pending[key]('取消重复请求')
        }
        delete this.pending[key]
    }

    // 设置拦截器
    interceptors(instance: AxiosInstance){
        // 请求拦截器
        instance.interceptors.request.use(
            config => {
                return config
            }, err => {
                console.log(err)
                return Promise.reject(err)
            }
        )
        // 响应拦截器
        instance.interceptors.response.use(
            res => {},
            err => {
                console.log(err)
                return Promise.reject(err)
            }
        )
    }

    // 创建实例
    
}