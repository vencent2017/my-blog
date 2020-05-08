## 考试系统重构（学生端）接口文档（初版）

### 登录

#### 1. 登录

| url    | 方法 | 备注 |
| ------ | ---- | ---- |
| /login | POST |      |

request:（输入参数）

| key   | 注解                                      |      |
| ----- | ----------------------------------------- | ---- |
| login | 用户名（手机号，用户名，身份证，邮箱...） |      |
| pwd   | 密码                                      |      |
|       |                                           |      |

response:（返回参数）

| key          | 注解                                                       |                         |
| ------------ | ---------------------------------------------------------- | ----------------------- |
| caid         | 一体化用户唯一标识（eg: 20b8246b845a44d780a892a31d5e12ad） |                         |
| token        | eg: DA7065994FC0710A7E951D55F98CB543DD55AFB3               |                         |
| errorCode    | 报错码                                                     |                         |
| errorMessage | 报错信息                                                   |                         |
| result       | 返回状态                                                   | string('true'; 'false') |
| userInfo     | 用户信息                                                   | object                  |

### 基本信息

#### 1. 用户信息

| url       | 方法 |      |
| --------- | ---- | ---- |
| /userHome | POST |      |

request: (输入参数)

| key     | 注解                                                         | 类型   |
| ------- | ------------------------------------------------------------ | ------ |
| token   | 登录授权码                                                   | string |
| caid    | 一体化用户ID                                                 | string |
| settype | 考试默认选择一体化机构角色规则类型：默认为3     0:默认加载上一次的用户操作 应用场景：之前选择了3:默认选择质量较高的机构和学生角色 应用场景：书包登录，默认学生 | string |

response: (返回参数)

| key          | 注解                     | 类型        |
| ------------ | ------------------------ | ----------- |
| result       | 执行结果（true;  false） | string      |
| errorMessage | 错误信息                 | string      |
| userInfo     | 用户信息详情             | object/json |
| institutes   | 用户机构列表             | array       |
| token        |                          | string      |
| caid         |                          | string      |

userInfo：（用户信息详情）

| key                  | 注解                 | type   |
| -------------------- | -------------------- | ------ |
| name                 | 用户名               | string |
| complete             | 是否完善信息         | string |
| account              | 账号                 | string |
| cellphone            | 手机号               | string |
| identificationNumber | 身份证号             | string |
| genderCode           | 性别                 | string |
| referenceYear        | 参培年份             | string |
| confirmStatus        | 基础信息确认状态     | string |
| imgStatus            | 图像采集状态         | string |
| imgUrl               | 图像链接             | string |
| majorCode            | 一体化专业编码       | string |
| majorName            | 一体化专业名称       | string |
| departments          | 所属科室信息         | []json |
| openTerminal         | 是否开通手机终端授权 | string |
| faceDetect           | 是否开通人脸识别     | string |
| bankIds              | 授权题库             | string |
| instituteId          | 一体化组织id         | string |
| instituteCode        | 一体化机构编码       | string |
| instituteName        | 一体化机构名称       | string |
| roleCode             | 考试中角色编码       | string |
| accountId            | 一体化用户id         | string |
| isHasAuthority       | 是否有考试授权       | string |



institutes: （用户机构列表）

| key           | 注解           | type     |
| ------------- | -------------- | -------- |
| instituteId   | 一体化机构id   | string   |
| name          | 一体化机构名称 | string   |
| instituteCode | 一体化机构code | string   |
| endDate       | 授权过期时间   | string   |
| selected      | 是否选中       | string   |
| roles         | 机构内用户角色 | []object |
|               |                |          |
|               |                |          |
|               |                |          |

#### 2. 修改密码

| url        | method |      |
| ---------- | ------ | ---- |
| /changePwd | POST   |      |

request: (请求参数)

| key    | 注解   | type   |
| ------ | ------ | ------ |
| token  |        | string |
| caid   |        | string |
| pwd    | 原密码 | string |
| newPwd | 新密码 | string |

response: (返回)

| key     | 注解     | type   |
| ------- | -------- | ------ |
| result  | 请求状态 | string |
| message | 返回信息 | string |
|         |          |        |

#### 3. 退出

| url     | method |      |
| ------- | ------ | ---- |
| /logout | POST   |      |

request: 

| key   | des  | type   |
| ----- | ---- | ------ |
| token |      | string |
| caid  |      | string |

### 首页

#### 1. 统计中心

#### 2. 我的考试

#### 3. 每日一练

#### 4. 练习记录

#### 5. 易错知识点

### 考试

#### 1. 当前考试

#####   0. 考试列表

#####   1. 信息确认

#####   2. 开始考试

######     1. 获取试卷

######     2. 验证解锁码

######     3. 提交试卷

#### 2. 获取试卷（考试码）

#### 3. 信息采集（获取）

#### 4. 信息采集（提交）

#### 5. 考前问卷（提交）

#### 6. 考前签到（地理位置 + 人脸）

#### 7. 首次信息采集与确认

#### 8. 考试记录

#####   0. 记录列表

#####   1. 查看考试

#####   2. 考试分析 

### 练习

#### 1. 学科练习

#####   1. 随机练习

######     1. 练习列表

​    2. 开始练习 

#####   2. 章节练习

######     1. 练习列表

​    2. 开始练习

#####   3. 同步测验

######     1. 测验列表

######     2. 开始测验

#####   4. 查找试题

#####   5. 答题记录提交(答案+ 收藏)

#####   6. 纠错（获取试题是否纠过错）

#####   7. 提交纠错信息

#### 2. 测试练习

##### 1. 练习结构

#### 3. 历年习题

##### 1. 习题结构

### 我的

#### 1. 我的错题

#####   1. 错题列表

#####   2. 删除试题

#### 2. 我的收藏

#####   1. 收藏列表

#### 3. 我的笔记

#####   1. 笔记列表

#### 4. 答题统计

#####   1. 统计信息

#### 5. 已购试卷

#####   1. 试卷列表

### 帮助

### 通关包

### 医视在线（对接）

### 年度考核（对接）
