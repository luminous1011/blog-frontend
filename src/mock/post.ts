import WIN11_00 from '@/assets/win11-00.png'
import WIN11_01 from '@/assets/win11-01.png'
import WIN11_02 from '@/assets/win11-02.png'
import WIN11_03 from '@/assets/win11-03.png'

import VUE3_FILTERS_00 from '@/assets/vue3-filters-00.png'

interface IMessage{
    type:string,
    paragraph:string
}

interface IPost{
    articleId:number,
    cover:string,
    title:string,
    intro:string,
    message:IMessage[]
}

const config:IPost[] = [
    {
        articleId:1,
        cover:WIN11_00,
        title:'WIN11使用优化 & 常用命令',
        intro:'StartAllBack推荐使用美化软件StartAllBack，网址1：http://startallback.cn，网址2：https://startallback.com.cn让Win11任务栏永不合并，透明任务栏，右键显示更多等，更加自由的定义自己的电脑。可以解锁、锁定，增加多层任务栏......',
        message:[
            {
                type:'html',
                paragraph:`
                    <h1>StartAllBack</h1>
                    <p>
                    推荐使用美化软件StartAllBack，网址1：
                    <a href="http://startallback.cn">http://startallback.cn</a>
                    ，网址2：<a href="https://startallback.com.cn">https://startallback.com.cn</a>
                    </p>
                    <p>
                    让Win11任务栏永不合并，透明任务栏，右键显示更多等，更加自由的定义自己的电脑。<br/>
                    可以解锁、锁定，增加多层任务栏设置。<br/>
                    默认试用一个月。好用可在以上官网淘宝店20元购买永久激活。支持更换设备。<br/>
                    </p>
                    <img src="${WIN11_01}" alt="">
                    <img src="${WIN11_02}" alt="">
                    <img src="${WIN11_03}" alt="">
        
                    <h1>快捷管理员方式运行CMD</h1>
                    <p>WIN+R，输入cmd，CTRL + SHIFT + 回车</p>
                    <h1>右键默认显示更多选项</h1>
                    <p>
                    如果不想使用StartAllBack则可以直接cmd执行如下命令。
                    </p>
                `
            },
            {
                type:'code',
                paragraph:`reg.exe add "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve`,
            },
            {
                type:'html',
                paragraph:`
                    <h1>
                        关闭查看网络搜索结果
                    </h1>
                    <p>
                        如果你希望快速使用软件，通常按下WIN，输入检索信息，由于系统会调用搜索引擎使得搜索结果包含网络内容，导致速度缓慢，所以可禁用此操作。<br/>
                        WIN+R，输入regedit进入系统注册表，输入路径：
                    </p>
                `
            },
            {
                type:'code',
                paragraph:`计算机\\HKEY_CURRENT_USER\\Software\\Policies\\Microsoft\\Windows`,
            },
            {
               type:'html',
               paragraph:`
                <p>
                    右键点击<code class="code-inner">Windows</code>，选择<code class="code-inner">新建</code> -> <code class="code-inner">项</code>，
                    命名为<code class="code-inner">Explorer</code>。然后，右键点击<code class="code-inner">Explorer</code>的项，
                    新建一个<code class="code-inner">DWORD(32位)值</code>，命名为<code class="code-inner">DisableSearchBoxSuggestions</code>，
                    双击它，填写<code class="code-inner">1</code>，确定保存。最后通过任务管理器对<code class="code-inner">windows资源管理器</code>右键重新启动即可生效。
                </p>
                <h1>
                    开启本地组策略
                </h1>
                <p>
                    新建txt文本，将如下命令粘贴进去保存。改名文件后缀为bat <br/>
                    右键以管理员身份运行，等待下载完成即可。
                </p>
               ` 
            },
            {
                type:'code',
                paragraph:`@echo off
pushd "%~dp0"
dir /b C:\Windows\servicing\Packages\Microsoft-Windows-GroupPolicy-ClientExtensions-Package~3*.mum >List.txt
dir /b C:\Windows\servicing\Packages\Microsoft-Windows-GroupPolicy-ClientTools-Package~3*.mum >>List.txt
for /f %%i in ('findstr /i . List.txt 2^>nul') do dism /online /norestart /add-package:"C:\Windows\servicing\Packages\%%i"
pause`, 
            },
            {
                type:'html',
                paragraph:`
                    <h1>端口占用 & 进程与程序</h1>
                `
            },
            {
                type:'code',
                paragraph:`通过端口查看进程id
netstat -ano |findstr 80
                    
通过进程id查看进程名
tasklist|findstr 12345
                    
通过进程id查杀进程
taskkill /f /pid 12345`, 
            },
            {
                type:'html',
                paragraph:`
                    <h1>DNS缓存刷新</h1>
                `
            },
            {
                type:'code',
                paragraph:'ipconfig /flushdns'
            },
            {
                type:'html',
                paragraph:`
                    <h1>WIN开机自启文件夹</h1>
                `
            },
            {
                type:'code',
                paragraph:'C:\\Users\\Administrator\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup'
            }
        ]
    },
    {
        articleId:2,
        cover:VUE3_FILTERS_00,
        title: 'Vue3 filter过滤器',
        intro:'vue3直接移除了filter过滤器，官方推荐，如果要使用过滤器可以使用computed计算属性和method函数来代替。 如果使用了全局过滤器，官方也提供了一个属性来进行迁移修复，但是也只推荐用于迁移......',
        message:[
            {
                type:'html',
                paragraph:`
                    <p>vue3直接移除了<code class="code-inner">filter</code>过滤器，官方推荐，如果要使用过滤器可以使用<code class="code-inner">computed</code>计算属性和<code class="code-inner">method</code>函数来代替。</p>
                    <p>如果使用了全局过滤器，官方也提供了一个属性来进行迁移修复，但是也只推荐用于迁移。</p>
                `
            },
            {
                type:'code',
                paragraph:`const app = createApp(App)

//给当前app的全局属性上挂载一个过滤器对象
app.config.globalProperties.$filters = {
    currencyUSD(value) {
        return '$' + value
    }
}`
            },
            {
                type:'html',
                paragraph:'<p>使用的时候：</p>'
            },
            {
                type:'code',
                paragraph:`<template>
<h1>Bank Account Balance</h1>
<p>{{ $filters.currencyUSD(accountBalance) }}</p>
</template>`
            },
            {
                type:'html',
                paragraph:'<p>或者直接挂载方法：</p>'
            },
            {
                type:'code',
                paragraph:`app.config.globalProperties.currencyUSD = functionvalue) {
    return '$' + value 
}`
            },
            {
                type:'code',
                paragraph:`export default {
mounted() {
    console.log(this.currencyUSD(666))
    }
}`
            },
            {
                type:'html',
                paragraph:`<h1>注意：</h1>
                <p>如果全局挂载了<code class="code-inner">currencyUSD</code>方法，组件自身也有<code class="code-inner">currencyUSD</code>方法，那么组件的方法会覆盖全局的方法，以组件内自己的方法优先。</p>`
            },
        ]
    }
]

export default config