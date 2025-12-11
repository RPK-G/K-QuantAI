📊 AI 驱动的去中心化量化交易平台概览

项目名称: Quant AI Platform (QAP)
核心理念: 结合 Nuxt.js 的优秀前端体验、区块链的去中心化信任，以及 DeepSeek AI 的智能策略能力，构建一个新一代量化交易平台。

💻 一、技术栈与架构

本项目采用经典的三层架构，并结合 Web3 特性，实现前端、后端和区块链的解耦。

1. 前端 (Presentation Layer)

技术

角色

说明

框架

Nuxt 4 (Vue 3)

基础全栈框架，负责路由、服务端渲染/数据预取。

UI 组件

Nuxt UI

Nuxt 官方组件库，基于 Tailwind CSS，原生支持暗黑模式。

UI 风格

Tailwind CSS

基于 Tailwind utilities 进行快速定制，实现 Web3/DeFi 风格。

Web3 库

Ethers.js (前端适配)

钱包连接、读取链上数据、发起支付交易。

2. 后端与策略核心 (Application & Strategy Layer)

技术

角色

说明

服务框架

Node.js (推荐 NestJS)

负责 API 服务、数据处理、JWT 认证、Web3 交易签名。

AI/策略

Python 服务 (FastAPI/RPC)

负责调用 DeepSeek API、执行量化计算和生成交易信号。

Web3 核心

Ethers.js (后端)

负责钱包监控（确认支付）、交易签名和向区块链广播交易。

身份认证

JWT + 钱包地址

基于 SiWE (简化版) 模式，通过签名验证身份，发放 JWT 凭证。

🌐 二、核心页面与功能

平台的核心目标是让用户能够配置、监控和执行由 AI 驱动的交易策略。

1. 仪表盘 (Dashboard / /)

功能: 策略表现的中心化监控页面。

关键指标 (KPIs): 总资产、实时收益率 (今日/累计)、最大回撤。

图表展示: 策略收益曲线图、实时 K 线图。

策略状态: 当前运行策略的列表和健康状态 (运行中/暂停/错误)。

持仓与订单: 实时显示当前持仓和等待成交的限价订单。

2. 策略配置 (Strategy Config / /strategy-config)

功能: 用户与 DeepSeek AI 策略核心交互的界面。

AI 参数配置 (UForm/UInput):

风险偏好 (保守/激进)。

交易对选择 (BTC/USDT, ETH/USDT 等)。

DeepSeek Prompt 模板调整（例如：要求 AI 基于 RSI 指标生成策略）。

回测控制: 发起历史数据回测，并展示回测报告。

实盘部署: 授权策略使用资产，并一键启动实盘交易。

3. 交易与资产 (Transactions / /transactions)

功能: 透明化展示链上和链下活动。

交易历史 (UTable): 详细的买入/卖出记录，包括成交时间、价格、数量。

链上记录: 针对链上交易，显示 Tx Hash (交易哈希) 和 Gas 费用。

钱包管理: 显示当前连接的钱包地址、网络 ID，以及资产余额。

4. 权限与支付 (Subscription / /subscribe)

功能: 实现 Web3 风格的付费和权限管理闭环。

VIP 权限展示: 明确区分免费用户和付费用户的功能限制。

订阅支付:

显示订阅价格（例如 100 USDC/月）。

支付按钮: 触发 Ethers.js 转账到指定收款地址。

权限解锁: 后端确认链上支付后，自动更新用户 VIP 状态。

🔒 三、Web3 身份与支付闭环 (核心逻辑)

本项目采用钱包地址作为身份标识，而非传统用户名/密码。

登录/注册: 用户连接钱包即完成身份识别。

权限控制: 后端 API (例如 /api/strategy/run) 都会通过 JWT 验证用户地址，并查询数据库 User 表中的 vip_expiry 字段来决定是否提供服务。

付费流程:

前端引导用户向指定地址发送稳定币 (USDC/USDT)。

后端 Ethers.js 进程持续监控收款钱包，一旦确认交易，立即更新数据库中该地址的权限状态。