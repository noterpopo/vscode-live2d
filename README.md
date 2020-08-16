# Live2D看板娘 for VsCode

一个简单的Live2D看板娘插件，修改自[vscode-nest](https://github.com/vscode-extension/vscode-nest)项目.

## 特征
![exm](https://raw.githubusercontent.com/noterpopo/vscode-live2d/master/resources/exm.png)

## 要求

* VS Code（版本1.28.0或更高版本）
* 需要以管理员身份运行
* 卸载插件前请先将插件配置`live2d.enabled` 设置为 false，或者卸载后手动关闭再打开vscode自动执行清理操作，然后重启。

## 扩展设置

|配置 | 描述
|-------|------------
|`live2d.enabled`| true:启用插件、false:禁用插件
|`live2d.opacity`| 透明度，范围0.1 - 1
|`live2d.width`| 看板娘宽，范围1 - 500 
|`live2d.height`| 看版娘高，范围1 - 500
|`live2d.hOffset`| 水平偏移，范围-500 - 500
|`live2d.vOffsett`| 垂直偏移，范围-500 - 500
|`live2d.model`| 模型名字



## 发行说明

#### ver 0.1.0 (2020/3/31)
	第一版发布
-----------------------------------------------------------------------------------------------------------
### 感谢
	没有这些开源项目，就不会有这个插件的出现
* [Canvas-nest.js](https://github.com/hustcc/canvas-nest.js)
* [live2d-widget.js](https://github.com/xiazeyu/live2d-widget.js)
* [vscode-fix-checksums](https://github.com/lehni/vscode-fix-checksums)

**Enjoy!**
