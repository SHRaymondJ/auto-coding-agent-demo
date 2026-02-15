# Spring FES Corporate Website - Project Instructions

## Project Context

Spring FES 跨境电商品牌服务公司的企业官网。纯前端静态站点，基于 Figma 设计稿开发。

- 设计稿：https://www.figma.com/design/Cbcg9NNlUPJfd6iuUHru5g/官网UI--开发用-
- 技术栈：Next.js 14+ (App Router) + TypeScript + Tailwind CSS + Framer Motion
- 项目目录：website/
- 无后端、无数据库、无认证，纯静态页面

---

## Agent 类型说明

本项目使用两种 Agent 角色，使用不同的 prompt 但共享相同的工具和环境：

### 初始化 Agent（仅首次运行）

首次启动项目时，Agent 负责：
1. 根据用户的高层需求，自动展开生成详细的 `task.json`（细粒度功能列表，每个标记 `passes: false`）
2. 创建 `init.sh` 初始化脚本
3. 创建 `progress.txt` 进度文件
4. 做第一次 git commit

**task.json 自动展开规则：**
- 用户只需提供高层需求描述（如"做一个视频生成平台"）
- Agent 应自动将其拆解为 **尽可能细粒度** 的功能点（参考：Anthropic 的 claude.ai 克隆项目拆出了 200+ 个功能点）
- 每个功能点必须是可独立实现和测试的原子任务
- 使用 JSON 格式（模型不容易篡改 JSON，比 Markdown 更安全）
- 所有功能初始标记为 `passes: false`

### 编码 Agent（每次 session 重复运行）

后续每次启动，Agent 负责：
1. 初始化环境并进行健康检查
2. 选择一个未完成的任务
3. 增量实现该任务
4. 测试验证
5. 更新进度并提交

---

## MANDATORY: Agent Workflow

Every new agent session MUST follow this workflow:

### Step 0: 健康检查（Smoke Test）

**在开始任何新任务之前，必须先验证项目基础功能正常。**

这一步的目的是：如果上一个 session 留下了隐藏 bug，在这里就能发现，而不是在实现新功能时让问题变得更糟。

```
1. 运行 ./init.sh 启动开发服务器
2. 等待服务器就绪
3. 使用浏览器自动化工具（Playwright MCP）访问 http://localhost:3000
4. 验证首页能正常加载
5. 如果项目已有用户认证功能，验证登录流程正常
6. 如果发现问题 → 立即修复，不要开始新任务
7. 如果一切正常 → 进入 Step 1
```

**如果健康检查失败：**
- 优先修复现有 bug，而不是开始新功能
- 在 progress.txt 中记录发现的问题和修复过程
- 修复完成后重新运行健康检查

### Step 1: Initialize Environment

```bash
./init.sh
```

This will:
- Install all dependencies
- Start the development server at http://localhost:3000
- Run basic health check to verify the app is working

**DO NOT skip this step.** Ensure the server is running before proceeding.

### Step 2: Select Next Task

Read `task.json` and select ONE task to work on.

Selection criteria (in order of priority):
1. Choose a task where `passes: false`
2. Consider dependencies - fundamental features should be done first
3. Pick the highest-priority incomplete task

### Step 3: Implement the Task

- Read the task description and steps carefully
- Implement the functionality to satisfy all steps
- Follow existing code patterns and conventions
- **每次只做一个功能，不要贪多** — 增量推进是关键

### Step 4: Test Thoroughly

After implementation, verify ALL steps in the task:

**强制测试要求（Testing Requirements - MANDATORY）：**

1. **大幅度页面修改**（新建页面、重写组件、修改核心交互）：
   - **必须在浏览器中测试！** 使用 MCP Playwright 工具
   - 验证页面能正确加载和渲染
   - 验证表单提交、按钮点击等交互功能
   - 截图确认 UI 正确显示

2. **小幅度代码修改**（修复 bug、调整样式、添加辅助函数）：
   - 可以使用单元测试或 lint/build 验证
   - 如有疑虑，仍建议浏览器测试

3. **所有修改必须通过**：
   - `npm run lint` 无错误
   - `npm run build` 构建成功
   - 浏览器/单元测试验证功能正常

**测试清单：**
- [ ] 代码没有 TypeScript 错误
- [ ] lint 通过
- [ ] build 成功
- [ ] 功能在浏览器中正常工作（对于 UI 相关修改）

### Step 5: Update Progress

Write your work to `progress.txt`:

```
## [Date] - Task: [task description]

### What was done:
- [specific changes made]

### Testing:
- [how it was tested]

### Notes:
- [any relevant notes for future agents]
```

### Step 6: Commit Changes (包含 task.json 更新)

**IMPORTANT: 所有更改必须在同一个 commit 中提交，包括 task.json 的更新！**

流程：
1. 更新 `task.json`，将任务的 `passes` 从 `false` 改为 `true`
2. 更新 `progress.txt` 记录工作内容
3. 一次性提交所有更改：

```bash
git add .
git commit -m "[task description] - completed"
```

**规则:**
- 只有在所有步骤都验证通过后才标记 `passes: true`
- 永远不要删除或修改任务描述
- 永远不要从列表中移除任务
- **一个 task 的所有内容（代码、progress.txt、task.json）必须在同一个 commit 中提交**
- 不可接受删除或编辑 task.json 中的任务描述和步骤，这可能导致功能缺失或 bug

---

## ⚠️ 常见失败模式速查表（Failure Modes Reference）

| 失败模式 | 症状 | 初始化 Agent 的预防措施 | 编码 Agent 的应对措施 |
|---------|------|----------------------|---------------------|
| **一口吃成胖子** | 试图一次性完成整个应用，上下文用完后功能写了一半 | 生成细粒度功能列表（200+ 个原子任务） | 每次只做一个任务，做完就 commit |
| **过早宣布胜利** | 看到项目有进展就认为完成了 | 功能列表中所有任务初始标记 `passes: false` | 读取 task.json，只有全部 `passes: true` 才算完成 |
| **假完成** | 标记任务完成但没有端到端测试 | 在 CLAUDE.md 中强制要求浏览器测试 | 大幅度 UI 修改必须用 Playwright 浏览器测试 |
| **环境不干净** | 上一个 session 留下了 bug 或未文档化的进度 | 创建 init.sh 和 progress.txt | 每次 session 开始先跑健康检查（Step 0） |
| **不知道怎么启动** | Agent 花大量时间搞清楚如何运行项目 | 创建 init.sh 脚本 | 直接运行 init.sh，不要自己猜 |
| **上下文丢失** | 新 session 不知道之前做了什么 | 创建 progress.txt 和 git 仓库 | 读 progress.txt + git log 快速了解状态 |

---

## ⚠️ 阻塞处理（Blocking Issues）

**如果任务无法完成测试或需要人工介入，必须遵循以下规则：**

### 需要停止任务并请求人工帮助的情况：

1. **缺少环境配置**：
   - 需要特定的第三方服务配置
   - 外部服务需要开通账号

2. **外部依赖不可用**：
   - 第三方服务宕机
   - 需要付费升级的服务

3. **测试无法进行**：
   - 功能依赖外部系统尚未部署
   - 需要特定硬件环境

### 阻塞时的正确操作：

**DO NOT（禁止）：**
- ❌ 提交 git commit
- ❌ 将 task.json 的 passes 设为 true
- ❌ 假装任务已完成

**DO（必须）：**
- ✅ 在 progress.txt 中记录当前进度和阻塞原因
- ✅ 输出清晰的阻塞信息，说明需要人工做什么
- ✅ 停止任务，等待人工介入

### 阻塞信息格式：

```
🚫 任务阻塞 - 需要人工介入

**当前任务**: [任务名称]

**已完成的工作**:
- [已完成的代码/配置]

**阻塞原因**:
- [具体说明为什么无法继续]

**需要人工帮助**:
1. [具体的步骤 1]
2. [具体的步骤 2]
...

**解除阻塞后**:
- 运行 [命令] 继续任务
```

---

## Project Structure

```
/
├── CLAUDE.md          # This file - workflow instructions
├── task.json          # Task definitions (source of truth)
├── progress.txt       # Progress log from each session
├── init.sh            # Initialization script
└── website/           # Next.js application
    ├── src/app/       # App Router pages
    ├── src/components/
    └── ...
```

## Commands

```bash
# In website/
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # Run linter
```

## Coding Conventions

- TypeScript strict mode
- Functional components with hooks
- Tailwind CSS for styling
- Write tests for new features

---

## Key Rules

1. **Ten tasks per session** - Focus on completing ten tasks well
2. **Test before marking complete** - All steps must pass
3. **Browser testing for UI changes** - 新建或大幅修改页面必须在浏览器测试
4. **Document in progress.txt** - Help future agents understand your work
5. **One commit per task** - 所有更改（代码、progress.txt、task.json）必须在同一个 commit 中提交
6. **Never remove tasks** - Only flip `passes: false` to `true`
7. **Stop if blocked** - 需要人工介入时，不要提交，输出阻塞信息并停止
8. **Health check first** - 每次 session 开始先跑健康检查，确认项目没坏再开始新任务
9. **Never edit task descriptions** - 不可接受删除或编辑 task.json 中的任务描述和步骤
