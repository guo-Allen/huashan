# 路由表

## 学生路由表

| 请求方法 |       请求路径      |                 作用                |
|----------|---------------------|-------------------------------------|
| GET      | /student            | 渲染 student/list.html 页面         |
| GET      | /student/add        | 渲染 student/add.html 页面          |
| POST     | /student/add        | 处理添加学生信息请求                |
| GET      | /student/edit/:id   | 渲染 student/edit.html 页面         |
| POST     | /student/edit/      | 处理编辑学生信息请求                |
| GET      | /student/remove/:id | 处理删除学生信息请求                |
| GET      | /student/list       | 获取所有学生信息集合，得到一个 JSON |
|          |                     |                                     |
