## 使用方式

###  npm install  下载相关依赖

###  node app.js  启动服务器

###  localhost:3030

### 注意数据库名称为sys(看config.js)
用户表users {"name":"admin","password":"password"}
商品表products 

## 设计文档结构

```json
{
  "prod_name": "Apple MacBook Pro",
  "prod_description": "15.4英寸笔记本电脑 深空灰色（Multi-Touch Bar/Core i7/16GB/512GB MLH42CH/A）",
  "prod_price": 21488,
  "prod_weight": '3.36kg',
  "prod_image": "image.jpg"
}
```

## 路由设计

| 请求方法 |        请求路径        |        处理动作        |
|----------|------------------------|------------------------|
| GET      | /product               | 渲染 product.html      |
| GET      | /product/add           | 渲染 product_add.html  |
| POST     | /product/add           | 处理添加产品请求       |
| GET      | /product/remove?id=xxx | 处理删除产品请求       |
| GET      | /product/update?id=xxx | 渲染 product_edit.html |
| POST     | /product/update?id=xxx | 处理更新产品请求       |
|          |                        |                        |

## 项目初始化

- 在根目录提供一个入口文件 app.js
- 把所有设定好的页面放到 views 目录中
- 把所有的静态资源放到 public 目录中
