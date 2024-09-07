---
title: MusicLive v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.17"

---

# MusicLive

> v1.0.0

Base URLs:

* <a href="http://127.0.0.1:3000">本地环境: http://127.0.0.1:3000</a>

# 用户

## POST 注册账号

POST /user/register

> Body 请求参数

```yaml
email: 1052508138@qq.com
code: "12345"
user_name: jouei

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» email|body|string| 否 |none|
|» code|body|string| 否 |none|
|» user_name|body|string| 否 |none|

> 返回示例

> 成功

```json
{
  "code": 400,
  "time": "2024-09-07T06:47:39.165Z",
  "message": "验证码无效",
  "path": "/user/register"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 发送邮箱验证码

POST /user/sendCode

> Body 请求参数

```yaml
email: 1052508138@qq.com

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» email|body|string| 否 |none|

> 返回示例

> 成功

```json
{
  "code": 201,
  "message": "success",
  "success": true,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 数据模型

