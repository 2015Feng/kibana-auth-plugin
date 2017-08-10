# kibana-auth-plugin
Kibana权限验证插件

Kibana版本：v5.1.2

#### 搭建Kibana开发环境

开发Kibana插件之前，需要先设置Kibana的开发环境，参考：[Setting Up Your Kibana Development Environment](https://github.com/elastic/kibana/blob/master/CONTRIBUTING.md#setting-up-your-development-environment)
，并将代码切换到相应的分支```git checkout v5.1.2```。

#### Kibana插件开发

使用[template-kibana-plugin](https://github.com/elastic/template-kibana-plugin/)可以快速生成一个hello world Kibana plugin框架。

**注意版本兼容性，选择相应的版本**。

kibana和kibana-auth-plugin插件目录层次如下：
```
├── kibana
└── kibana-auth-plugin
```

自动生成插件框架：
```
cd kibana-auth-plugin
sao kibana-plugin
# 根据提示完成向导
```

运行插件，可以通过如下方式将参数传递给Kibana：
```
npm start -- --elasticsearch.url 'http://10.0.1.99:9200' --no-ssl --no-base-path
```

运行报错，提示```Error: unknown export types translations in plugin kibana-auth-plugin```，貌似v5.1.2不支持国际化。在index.js中将translations注释掉：
```
// translations: [
//   resolve(__dirname, './translations/es.json')
// ],
```

打包插件，在./build目录下生成.zip插件包
```
npm run build
```

安装插件，参考：https://www.elastic.co/guide/en/kibana/current/_installing_plugins.html

配置登录用户名、密码
在config/kibana.yml中追加以下行：
```
# kibana-auth-plugin login user
kibana-auth-plugin.username: "admin"
kibana-auth-plugin.password: "123456"
```
kibana-auth-plugin与插件index.js中的name保持一致。