export default [
    {
        path:"/guidepage",
        name:"引导页",
        component:()=>import("../../components/public/guidepage.vue")
    },{
        path:"/advertpage",
        name:"广告页",
        component:()=>import("../../components/public/advertpage.vue"),
        beforeEnter: (to, from, next) => {
            if(localStorage.advertpage){
                next();
            }else{
                localStorage.advertpage=true;
                next("/guidepage");
            }
        }
    }, 

]