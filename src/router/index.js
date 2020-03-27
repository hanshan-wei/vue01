import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Transfer from '@/components/children/Transfer'
import Table from '@/components/children/table'
Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }*/
// {
// 	path:'/',
// 	component:HelloWorld,
// 	children:[{
// 		path:'/',
// 		component:Transfer
// 	}]
// },
   {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
      {
      	path:'/home',
      	name:'Transfer',
      	component:Transfer
      },
      {
      	path:'/home',
      	name:'Table',
      	component:Table
      }
      ]
   }
  ]
})
