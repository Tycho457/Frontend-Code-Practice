// 工厂模式
class DownJacket {
    production(){
      console.log('生产羽绒服')
    }
  }
  class Underwear{
    production(){
      console.log('生产内衣')
    }
  }
  class TShirt{
    production(){
      console.log('生产t恤')
    }
  }
  
  // 工厂类
  class clothingFactory {
    constructor(){
      this.downJacket = DownJacket
      this.underwear = Underwear
      this.t_shirt = TShirt
    }
    getFactory(clothingType){
      const _production = new this[clothingType]
      return _production.production()
    }
  }
  const clothing = new clothingFactory()
  clothing.getFactory('t_shirt')// 生产t恤