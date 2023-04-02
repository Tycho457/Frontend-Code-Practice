import { createStore, useStore as baseUseStore, Store} from 'vuex';
import { InjectionKey } from "vue";
import { Product } from "@/interface";

export interface State{
  shoppingCart: Product[]
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state:{
    shoppingCart:[]
  },
})

export function useStore(){
  // 通过key给store提供类型
  return baseUseStore(key)
}

