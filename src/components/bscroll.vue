<template>
    <div>
        <div class="head">head</div>
        <div class="content">
            <div class="left" ref="left">
                <ul>
                    <li v-for="(item,index) in left" :class="{current:index == currentIndex}" @click="selectItem(index,$event)" :key="index">
                        <span>{{item}}</span>
                    </li>
                </ul>
            </div>
            <div class="right" ref="right">
                <ul>
                    <li v-for="(item,index) in right" :key="index"  class="right-item-hook" >
                        <h2>{{item.name}}</h2>
                        <ul>
                            <li v-for="num in item.content" :key="num+index" class="lis">
                                <!-- <div>{{item.name + num}}</div> -->
                                <div>
                                    <ul class="ulThree">
                                        <li>
                                            <img  src="//img11.360buyimg.com/focus/s140x140_jfs/t1/130205/33/377/11997/5eccb5fdE4c3b46b6/a03fb2c9e640722b.jpg">
                                            <p>5G</p>
                                            <!-- 电脑 -->
                                        </li>
                                        <li>
                                            <img src="//img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png">
                                            <p>电脑</p>
                                            <!-- 电脑 -->
                                        </li>
                                        <li>
                                            <img src="//img20.360buyimg.com/focus/s140x140_jfs/t1/86638/37/11918/19572/5e3e4307E7606f742/0210ac72c0d9275e.jpg">
                                            <p>全屏手机</p>
                                            <!-- 电脑 -->
                                        </li>
                                    </ul>
                                    
                                    
                                    
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    // 单独引入js文件
    import BScroll from '@better-scroll/core'

    export default {
            data(){
                return {  
                    msg:'欢迎来到vue.js学习',
                    // left:["新品","众筹","小米手机","Redmi","黑鲨","5G合约"],
                    left:[
                        "热门推荐",
                        "手机数码",
                        "电脑办公",
                        "家用电器",
                        "计生情趣",
                        "美妆护肤",
                    ],
                    /* right:[
                    {name:"新品",content:[1,2,3,4,5]},
                    {name:"众筹",content:[1,2,3,4,5]},
                    {name:"小米手机",content:[1,2,3,4,5]},
                    {name:"Redmi",content:[1,2,3,4,5]},
                    {name:"黑鲨",content:[1,2,3,4,5]},
                    {name:"5G合约",content:[1,2,3,4,5]}], */

                    right:[
                    {name:"热门推荐",content:[1,2,3]},
                    {name:"手机数码",content:[1,2,3,4]},
                    {name:"电脑办公",content:[1,2,3]},
                    {name:"家用电器",content:[1,2,3,4]},
                    {name:"计生情趣",content:[1,2,3]},
                    {name:"美妆护肤",content:[1,2,3,4,5]}],
                    listHeight:[],//记录高度
                    scrollY:0
                }
            },
            // props:["left","right"],
            methods: {
                _initScroll(){
                    // 左边联动效果
                    this.lefts = new BScroll(this.$refs.left,{
                        click:true, //拥有触发事件
                        probeType:3 //滚动位置探针效果
                    })
                    // 右边联动效果
                    this.rights = new BScroll(this.$refs.right,{
                        probeType:3 //滚动位置探针效果
                    })
                    // 获取滚动效果高度
                    this.rights.on("scroll",this.onScrollfun)

                },

                onScrollfun(pos){
                    // console.log(pos.y);
                    this.scrollY =  Math.abs(Math.round(pos.y));//滚动条y轴
                        
                },
                // 获取高度
                _getHeight(){
                    // 获取每个类对象
                    let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                    let height = 0; //设置默认高度
                    this.listHeight.push(height);
                    // 循环对象获取各自到顶部高度
                    for(let i = 0;i < rightItems.length;i++){
                        let item = rightItems[i];
                        height += item.clientHeight; //对象高度
                        this.listHeight.push(height);
                    }

                },
                // 左侧点击效果
                selectItem(index,event){
                    // 当原生浏览器点击事件监听_constructed,把当时浏览器监听属性return掉
                    if(!event._constructed){
                        return;
                    }else{
                        // 联动效果
                        let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                        let el = rightItems[index];//通过下标获取对象
                        // 通过滚动事件指定目标元素
                        this.rights.scrollToElement(el);

                        // this.currentIndex = index; //左侧效果
                    }
                    
                }   
            },
            // 生命周期函数。目的让vue代码执行解释后，实例化第三方插件
            mounted() {
                // 能在虚拟DOM执行完后，在回调方法
                this.$nextTick(()=>{
                    this._initScroll(); //调用滚动效果
                    this._getHeight();//获取右边列表内容高度
                })
            },
            // 组件销毁前阻止滚动事件
            beforeDestroy(){
                this.rights.off("scroll",this.onScrollfun)
            },
            // 计算属性
            computed: {
                currentIndex(){
                    for(let i = 0;i <this.listHeight.length;i++){
                        let height = this.listHeight[i];
                        let height2 = this.listHeight[i+1];
                        
                        // 判断高度之间为当前左选项变化
                        if(!height2 || (this.scrollY >= height && this.scrollY < height2)){
                            // 左边联动
                            let leftItems = this.$refs.left.getElementsByTagName("li");
                            let elLI = leftItems[i];
                            this.lefts.scrollToElement(elLI);
                            return i;
                        }

                    }
                    // 如果没有高度值，默认为0，第一位
                    return 0;
                }
            },
    }
</script>

<style lang="scss" scoped>
        ul{
            list-style: none;
        }
        .head{
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: center;
        }
        .content{
            display: flex;
            position: absolute;
            /* 定位里面不写左右样式，不写高度，自动获取高度 */
            top:50px;
            bottom: 50px;
            background-color: #eeeeee;
            width: 100%;
            overflow: hidden;
        }
        .left{
            flex: 0 0 80px;
            width: 80px;
            background-color: #f8f8f8;
        }
        .left li{
            width: 100%;
            height: 100%;
        }
        .left li.current{
            background-color: #ffffff;
            color:#e94145;
            font-weight: bold;
        }
        .left li span{
            display: block;
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: center;
        }
        .right{
            flex:1;
            // background-color: azure;
            background-color: #ffffff;
        }

        // .right li{
        .right ul li ul li{
            height: 150px;
            text-align: center;
            // border: 1px solid yellow;
        }
        .right ul li h2{
            height: 34px;
            font-size: 18px;
            // text-align:center;
            line-height: 34px;
            padding-left: 5px;
        }

        .ulThree{
            display: flex;
            li{
                flex: 1;
                p{
                    // height: 50px;
                    display: block;
                    height: 30px;
                    line-height: 30px;
                }
            }
        }
</style>