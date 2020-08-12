# 跨域 CORS 使用示例



<a name="bvkFF"></a>
### 跨域是什么


> 同源策略
> 协议+域名+端口一致


<br />浏览器为了安全考虑，默认拒绝接受违反同源策略的请求返回结果。<br />
<br />跨域就是突破上述限制进行正常通信。<br />
<br />跨域的解决方案非常多，本项目提供的主要是基于 CORS 技术的几种应用场景的 demo。<br />

<a name="CORS"></a>
### CORS

<br />**CORS**是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。 它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。 CORS需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能，IE浏览器不能低于IE10。<br />  <br />浏览器将CORS跨域请求分为简单请求和非简单请求。<br />只要同时满足以下两个条件，就属于简单请求

1. 请求方法限于：
   - head
   - get
   - post
2.  Header 限于：
   - Accept
   - Accept-Language
   - Content-Language
   - Content-Type 限于 application/x-www-form-urlencoded、multipart/form-data、text/plain


<br />简单请求不会触发 CORS 预检（preflight）<br />
<br />

<a name="UZgzL"></a>
#### 预检请求
预检请求要求必须首先使用 OPTIONS 方法发起，判断服务段是否允许。<br />

```http
Access-Control-Request-Method: POST  
Access-Control-Request-Headers: X-PINGOTHER, Content-Type
```
前者告知请求方法，后者告知自定义头。<br />

- **Access-Control-Allow-Methods**：必选

  返回的是所有支持的方法，而不单是浏览器请求的那个方法，这是为了避免多次"预检"请求。

- **Access-Control-Allow-Headers**

  如果浏览器请求包括Access-Control-Request-Headers字段，则Access-Control-Allow-Headers字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段，不限于浏览器在"预检"中请求的字段。

- **Access-Control-Allow-Credentials**：可选

  该字段与简单请求时的含义相同。

- **Access-Control-Max-Age**：可选

  用来指定本次预检请求的有效期，单位为秒。<br />
<br />

