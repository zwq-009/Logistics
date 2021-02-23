<template>
    <div class="container">
        <header class="header">注册头部</header>
         <div class="content">
             <van-field
                 v-model="tel"
                 placeholder="请输入手机号"
                 :error-message="usertel"
                 
                  clearable
             />
             <van-field
                 v-model="password"
                 type="password"
                 placeholder="请输入密码"
                 :error-message="pass"
                
                 clearable
             />
             <van-field
                 v-model="sms"
                 center
                 clearable                
                 placeholder="请输入短信验证码"
                 :error-message="test"
              >
             <van-button :disabled="flag" slot="button" size="small" type="primary" @click="sendCode">{{ buttonmsg }}</van-button>
            
             </van-field>
              <van-button type="primary" :loading="loading" loading-text="注册..." size="large" :disabled="zhud" @click="register">注册</van-button>
              <van-divider @click="toLogin">去登录</van-divider>
         </div>
    </div>
</template>
<script>
import Vue from 'vue'
import { Field,Button,Toast,Divider } from 'vant'
import axios from 'axios'
Vue.use(Field)
Vue.use(Button)
Vue.use(Toast)
Vue.use(Divider)

export default {
    data () {
        return {
            tel:'',
            password:'',
            sms:'',
            buttonmsg:'点击发送验证码',
            flag:false,
            adminCode:'',
            zhud:false,
            loading:false
        }
    },
    computed: {
        usertel () {
            if (this.tel === ""){
                return ''
            }else if(!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.tel)){
                return '手机号格式错误'
            }else {
                return ''
            }
        },
        pass () {
            if (this.password === ""){
                return ''
            }else if(this.password.length<6){
                return '密码不可小于6位'
            }else {
                return ''
            }
        },
        test () {
            if (this.sms === ""){
                return ''
            }else if(this.sms.length !== 5){
                return '验证码格式错误'
            }else {
                return ''
            }
        }
    },
    methods: {
        toLogin () {
           this.$router.replace('/login') 
        },
        sendCode () {
            let time = 4
            let timer
            timer = setInterval(()=>{                           
                time --
                if(time === 0){
                    clearInterval(timer)
                    this.flag=false
                    this.buttonmsg = '点击发送验证码'
                    return
                }
                this.flag = true  
                this.buttonmsg = time + '秒后重新发送' 
                              
            },1000)
            this.getCode()
        },
        getCode () {
            if(!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.tel) || this.tel===""){
                Toast('手机号码输入有误')
            }else{
                axios.get('https://www.daxunxun.com/users/sendCode?tel='+this.tel).then(res=>{
                    if(res.data === 1){
                        Toast('用户名已注册，请更改')
                    }else if(res.data === 0){
                        Toast('获取验证码失败')
                    }else{
                        this.adminCode = res.data.code
                        console.log(this.adminCode)
                    }
                })
            }
        },
        register () {
            if (this.tel === '' || this.usertel === '手机号码格式错误') {
                Toast('手机号码输入有误')
                return
            }
            if (this.password === '' || this.pass === '密码格式错误，最少为6位') {
                Toast('密码输入有误')
                return
            }
            if (this.sms === '' || this.sms !== this.adminCode) {
                Toast('验证码输入有误')
                return
            }
            this.reallR()
        },
        reallR () {
            this.zhud=true
            this.loading=true
            axios.post('https://www.daxunxun.com/users/register', {
            username: this.tel,
            password: this.password
        }).then(res=>{
            this.zhud=false
            this.loading=false
            if (res.data === 2) {
                Toast('用户名已注册，请直接登录')
            } else if (res.data === 0) {
                Toast('注册失败')
            } else {
            Toast('注册成功')
            }
        })
        }
    }
}
</script>
