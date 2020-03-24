// components/tab-control/tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      titles:{
        type:Array,
        value:[]
      }
  },

  data: {
    currentIndex:0
  },

  methods: {
    handleItemClick(event){
      //1.取出index
      const index=event.currentTarget.dataset.index;
      console.log("---------",index);

      //2.修改currentIndex
      this.setData({
        currentIndex:index
      })
      //3.通知外部事件点击
      this.triggerEvent('itemclick',{index,title:this.properties.title[index]},{})
    }
  }
})
