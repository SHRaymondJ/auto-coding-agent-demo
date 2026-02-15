# Spring FES 企业官网

## 项目简介

Spring FES 跨境电商品牌服务公司的企业官网。基于 Figma 设计稿开发，使用 Next.js + TypeScript + Tailwind CSS 构建。

设计稿：https://www.figma.com/design/Cbcg9NNlUPJfd6iuUHru5g/官网UI--开发用-

## 技术栈

| 层级 | 技术 |
|------|------|
| 框架 | Next.js 14+ (App Router) |
| 语言 | TypeScript (strict mode) |
| 样式 | Tailwind CSS |
| 动画 | Framer Motion |
| 多语言 | next-intl |
| 部署 | Vercel |

## 页面结构

- **首页** - Hero、核心服务、数据统计、品牌优势、CTA
- **服务子页面** - 店铺运营、仓储物流、客户服务、IT解决方案、内容直播、创意工作室、品牌增长
- **新闻/品牌洞察** - 列表页 + 详情页
- **文化** - 企业文化展示
- **关于我们** - 公司介绍、团队、发展历程
- **联系我们** - 联系表单 + 公司信息

## 开发

```bash
cd website
npm install
npm run dev      # 启动开发服务器 http://localhost:3000
npm run build    # 生产构建
npm run lint     # 代码检查
```

## 自动化开发流程

本项目使用 AI Agent 增量开发。流程定义在 `CLAUDE.md` 中：

1. 运行 `./init.sh` 启动环境
2. 读取 `task.json` 选择下一个任务
3. 实现并测试
4. 更新 `progress.txt` 和 `task.json`
5. 提交 git
