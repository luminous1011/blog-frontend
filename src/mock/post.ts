import WIN11_00 from '@/assets/win11-00.png'
import WIN11_01 from '@/assets/win11-01.png'
import WIN11_02 from '@/assets/win11-02.png'
import WIN11_03 from '@/assets/win11-03.png'

import VUE3_FILTERS_00 from '@/assets/vue3-filters-00.png'

import SCRIPT_00 from '@/assets/script-00.png'
import SCRIPT_01 from '@/assets/script-01.png'
import SCRIPT_02 from '@/assets/script-02.jpg'
import SCRIPT_03 from '@/assets/script-03.jpg'
import SCRIPT_04 from '@/assets/script-04.jpg'
import SCRIPT_05 from '@/assets/script-05.jpg'

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
    },
    {
        articleId:3,
        cover:SCRIPT_00,
        title: '图解 script 标签中 defer 和 async ',
        intro:'图解浏览器解析HTML的时候，如果遇到一个没有任何属性的script标签，与script 标签中带有的 async 和 defer 属性时的区别......',
        message:[
            {
                type:'html',
                paragraph:`
                    <h1>HTML</h1>
                    <p><code class="code-inner">script</code>：会阻碍 HTML 的解析，只有下载好并执行完脚本才会继续解析HTML。<br/>
                    <code class="code-inner">async script</code>：解析HTML过程中进行脚本的异步下载，下载成功立马执行，有可能会阻断HTML的解析。<br/>
                    <code class="code-inner">defer script</code>：完全不会阻碍HTML的解析，解析完成之后再按照顺序执行脚本。</p>
                    <p>下面清晰的展示了三种 script 的过程：</p>
                    <img src="${SCRIPT_01}"/>
                    <h1>&lt;script&gt;</h1>
                    <p>
                    浏览器解析HTML的时候，如果遇到一个<code class="code-inner">没有任何属性</code>的script标签，就会暂停解析，先发送网络请求获取改js脚本的代码内容，然后让js引擎执行该代码，当代码执行完毕后恢复解析，整个过程如图下所示：
                    </p>
                    <img src="${SCRIPT_02}"/>
                    <p>可以看到，script阻塞了浏览器对于HTML的解析，如果获取js脚本的网络请求迟迟得不到响应，或者js脚本执行时间过长，都会导致白屏，用户看不到页面内容。</p>
                    <h1>&lt;script async&gt;</h1>
                    <p>当浏览器遇到带有 <code class="code-inner">async</code> 属性的 script 时，请求该脚本的网络请求是异步的，不会阻塞浏览器解析 HTML，一旦网络请求回来之后，如果此时 HTML 还没有解析完，浏览器会暂停解析，先让 JS 引擎执行代码，执行完毕后再进行解析，图示如下：</p>
                    <img src="${SCRIPT_03}"/>
                    <p>当然，如果在 JS 脚本请求回来之前，HTML 已经解析完毕了，那就啥事没有，立即执行 JS 代码，如下图所示：</p>
                    <img src="${SCRIPT_04}"/>
                    <p>所以 async 是<code class="code-inner">不可控的</code>，因为执行时间不确定，你如果在异步 JS 脚本中获取某个 DOM 元素，有可能获取到也有可能获取不到。而且如果存在多个 async 的时候，它们之间的执行顺序也不确定，完全依赖于网络传输结果，谁先到执行谁。</p>
                    
                    <h1>&lt;script defer&gt;</h1>
                    <p>当浏览器遇到带有<code class="code-inner"> defer</code> 属性的 script 时，获取该脚本的网络请求也是异步的，不会阻塞浏览器解析 HTML，一旦网络请求回来之后，如果此时 HTML 还没有解析完，浏览器不会暂停解析并执行 JS 代码，而是等待 HTML 解析完毕再执行 JS 代码，图示如下：</p>
                    <img src="${SCRIPT_05}"/>
                    <p>如果存在多个 defer script 标签，浏览器（IE除外）会保证它们按照在 HTML 中出现的<code class="code-inner">顺序执行</code> ，不会破坏 JS 脚本之间的依赖关系。</p>

                    <h1>总结</h1>
                    <blockquote>
                        <p><code class="code-inner">&lt;script&gt;</code>：按照	<code class="code-inner">在 HTML 中的顺序</code> 执行，<code class="code-inner">阻塞</code><br/>
                        <code class="code-inner">&lt;async script&gt;</code>：按照	<code class="code-inner">网络请求返回顺序</code> 执行，<code class="code-inner">可能阻塞，也可能不阻塞</code><br/>
                        <code class="code-inner">&lt;defer script&gt;</code>：按照	<code class="code-inner">在 HTML 中的顺序</code> 执行，<code class="code-inner">不阻塞</code></p>
                    </blockquote>
                    `
            }
        ]   
    }
]

export default config