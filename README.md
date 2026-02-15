# 全自动编程 Agent 实验

## 免责声明

本项目所有（100%）代码和提示词均由 AI 生成。运行前请自行审查，任何后果概不负责。

## 前提（由人类撰写）

所有内容，建立在以下前提下，如果不认可，速速关闭这个页面：

**即使在非常复杂的项目中，AI 已经能够帮我们写绝大部分（甚至全部）代码。如果不行，不是 AI 的问题，是使用者本身的问题。AI 不是程序员的 bottleneck，程序员错误和老旧的工作方式是 AI 的 bottleneck。写代码本身将会越来越没有价值。**

程序员的工作内容将会转变，从写代码，变成如何控制 AI。高效使用 AI 生成可用的项目，成为程序员新的核心竞争力。因此我们要探索的是：如何更好的在开发中使用 AI。

## 项目背景（由人类撰写）

起因是[这篇 Anthropic 的文章](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)，他们做了一个自动编程 Agent。

为了测试新发布的 GLM-5，同时切身感受这种超长自动编程 Agent 的表现（一箭双雕），我做了这个 10 小时的实验。你在 git commit 记录里能看到 10 个小时我让 AI 做的所有事。

这种开发方式的目的，不是为了用 AI 替代程序员。对 AI 的"掌控"仍然由程序员负责。我们仍然需要人工判断 AI 做的是否正确，为 AI 指引方向。并不是无脑开发。

[这个视频](https://www.bilibili.com/video/BV1zZcYz1EMy/)详细解释了项目的完整过程。一些观众评论，认为视频内容有吹牛成分。标题党确实是我的惯用手段（不然你也不会看到这个项目和视频😂）。但视频里所有展示的开发过程，都没有任何夸大，均为客观事实。

## 核心方法论

本项目的自动编程框架基于 Anthropic 文章的方法论，并在实践中做了以下改进：

### 基础架构（来自 Anthropic）

| 机制 | 作用 |
|------|------|
| 功能列表（JSON 格式） | 防止 Agent 一口吃成胖子或过早宣布胜利 |
| 增量推进（一次一个任务） | 确保每次 session 产出可控、可验证 |
| 进度文件 + Git 历史 | 让新 session 快速了解当前状态 |
| 初始化脚本 | Agent 不用浪费时间搞清楚怎么启动项目 |
| 浏览器端到端测试 | 防止"假完成"——只有真正能用才算数 |

### 实践改进（本项目新增）

| 改进 | 说明 |
|------|------|
| Session 启动健康检查 | 每次开始新任务前，先验证项目基础功能正常，防止在坏掉的基础上继续开发 |
| 阻塞处理机制 | 遇到缺 API Key、外部服务不可用等情况时，有明确的停止和求助流程 |
| 测试分级策略 | 大幅度 UI 修改必须浏览器测试，小修改可以用 lint/build 验证 |
| 原子提交纪律 | 代码 + progress.txt + task.json 必须在同一个 commit |
| 失败模式速查表 | 把常见 Agent 失败模式和应对策略写进提示词，让 Agent 自己能参考 |
| 初始化/编码 Agent 分离 | 明确区分首次运行和后续运行的职责 |
| task.json 自动展开 | 用户只需提供高层需求，Agent 自动拆解为细粒度原子任务 |

## 超长时间自动编程 Agent 的具体内容

完整开发流程定义在 `CLAUDE.md` 中：

1. **健康检查**：运行 `./init.sh`，验证项目基础功能正常
2. **选择任务**：读取 `task.json`，选择一个 `passes: false` 的任务
3. **实现任务**：按照任务描述的步骤实现功能
4. **测试验证**：运行 `npm run lint` 和 `npm run build` 确保代码正确。使用浏览器打开应用测试（需要安装 playwright mcp）
5. **更新进度**：将工作记录到 `progress.txt`
6. **提交更改**：一次性提交所有更改（包括 task.json 更新）

这些内容也全部由 AI 生成。

## Spring FES 企业官网

本仓库当前项目是 **Spring FES 企业官网**，一个跨境电商品牌服务公司的纯前端静态站点。

- 设计稿：https://www.figma.com/design/Cbcg9NNlUPJfd6iuUHru5g/官网UI--开发用-
- 技术栈：Next.js 14+ (App Router) + TypeScript + Tailwind CSS + Framer Motion
- 项目目录：website/

### 页面结构

- **首页** - Hero、核心服务、数据统计、品牌优势、CTA
- **服务子页面** - 店铺运营、仓储物流、客户服务、IT解决方案、内容直播、创意工作室、品牌增长
- **新闻/品牌洞察** - 列表页 + 详情页
- **文化** - 企业文化展示
- **关于我们** - 公司介绍、团队、发展历程
- **联系我们** - 联系表单 + 公司信息

## Prerequisites

- opencode / claude code
- playwright mcp 或 agent-browser（浏览器自动化测试）

## 使用方式

### 方式一：通过 Claude Code 运行（最稳妥）

手动启动 Claude Code，让 AI 执行下一个任务。

### 方式二：使用 dangerously skip permission 模式（次选）

使用 `--dangerously-skip-permissions` 参数运行 Claude Code，AI 可以在无需人工确认的情况下完成下一个任务。这是作者在实验中最常用的方式。

```bash
claude -p --dangerously-skip-permissions
```

### 方式三：使用自动化脚本（不推荐）

使用 `run-automation.sh` 脚本让 AI 循环运行多次：

```bash
./run-automation.sh 10  # 运行 10 次
```

**警告**：这种方式最危险，最容易浪费资源。人不在电脑边，又想让 AI 工作时可以使用。

## 开发命令

```bash
cd website
npm install
npm run dev      # 启动开发服务器 http://localhost:3000
npm run build    # 生产构建
npm run lint     # 代码检查
```
