## 项目创建
vue init webpack vue-cli

## 启动
npm run dev

## vue-router
```
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstPage from '@/components/FirstPage'
import Daluandou from '@/components/Daluandou'
import Moni from '@/components/Moni'
import Zhuangbei from '@/components/Zhuangbei'
import Hero from '@/components/Hero'
//配置路由
Vue.use(Router) 

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: Zhuangbei,
        right: Hero
      }
    },
    {
      path: '/firstPage',
      name: 'FirstPage',
      component: FirstPage,
      children: [
        // {
        //   path: '/',
        //   component: FirstPage
        // },
        {
          path: 'moni',
          name: 'Moni',
          component: Moni
        },
        {
          path: 'daluandou',
          name: 'Daluandou',
          component: Daluandou
        }
      ]
    }
  ]
})

```
- 在配置二级路由的时候，
1. path不能有/XX
2. 在页面上要加上`<router-view />`才可以生效

- 路由name跳转传参
```
//传递参数
<router-link :to="{name:'Moni',params:{username:'傲视勿念'}}">进入vue王者模拟战 </router-link>
//接收参数
<h2>
  召唤师-{{$route.params.username}} 模拟战欢迎您
</h2>
```

- 单页面多路由区域
```
{
  path: '/',
  name: 'HelloWorld',
  //注意是 components
  components: {
    default: HelloWorld,
    left: Zhuangbei,
    right: Hero
  }
},

<router-view/>
<router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
<router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
```

- url传参
```
{
  path: 'daluandou/:userName',
  name: 'Daluandou',
  component: Daluandou
}
<router-link to='/firstPage/daluandou/傲视勿念'>进入vue王者大乱斗 </router-link>
<h2>
  亲爱的 {{$route.params.userName}}召唤师  欢迎来到王者峡谷大乱斗
</h2>
```
还可以给出传递的参数进行类型限制，具体做法是
```
{
  path: 'daluandou/:userName(正则表达式)',
  name: 'Daluandou',
  component: Daluandou
}
```

- 重定向
```
{
  path: '/goHome',
  redirect: '/', 
  alias:'/', //两种效果相同 ，但是在页面上显示的路由不同
}
```

- 此处插播一条动画效果
```
<transition name="fade" mode="out-in">
  <router-view/>
</transition>

.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity .5s;
}
```

- 404
```
{
  path: '*',
  component: Error
}
```

- 可以在router配置文件中插入钩子函数
```
//router.js
{
  path:'/params/:newsId(\\d+)/:newsTitle',
  component:Params,
  beforeEnter:(to,from,next)=>{
    console.log('我进入了params模板');
    console.log(to);
    console.log(from);
    next();
},
//等同于 params.js的script中
  beforeRouteEnter:(to,from,next)=>{
    console.log("准备进入路由模板");
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开路由模板");
    next();
  }
}
```

- goBack() goGo()
```
this.$router.go(1);
this.$router.goBack(-1);
```