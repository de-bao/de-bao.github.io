import './WorkExperience.css'

function WorkExperience() {
  return (
    <div className="section">
      <heading>工作经历</heading>
      
      <div className="experience-item">
        <div className="item-header">
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="item-title">AI算法工程师</div>
            <div className="item-subtitle">ZTE(南京)</div>
          </div>
          <div className="item-date">2025.07 - Now</div>
        </div>
        <div className="item-description">
          <div className="sub-project-item">
            <div className="item-header">
              <div className="item-title">大模型轻量化推理平台</div>
              <div className="item-date">2025.12 - 2026.03</div>
            </div>
            <div className="item-subtitle">参与人 | 团队项目</div>
            <div className="item-description">
              <p>面向小规模集群环境，通过选择和调优vLLM或SGLang等引擎直接在GPU上进行性能提升，以提供轻量快捷的AI推理服务</p>
              <ul>
                <li>深入vLLM的源码，分析其Scheduler和Connector的实现，尤其是LMCache对KVCacheManager的插件化应用</li>
                <li>开发推理平台对vLLM及LMCache的层级适配，实现了NVIDIA/AMD下的三级KVCacheOffoading功能，同时完成benchmark</li>
                <li>对社区场景支持SGLang和Hicache的开源贡献<a href="https://github.com/gpustack/gpustack/pull/3540" target="_blank" rel="noopener noreferrer">PR#3540</a>补齐主流推理引擎的three-tier缓存卸载</li>
                <li>深入server/worker架构，开发了多机场景下的kvcache磁盘管理，在worker层实现实例清缴和缓存命中，从而提高推理速度和吞吐量</li>
              </ul>
            </div>
          </div>

          <div className="sub-project-item">
            <div className="item-header">
              <div className="item-title">大模型(1.7B)后训练</div>
              <div className="item-date">2025.10 - 2025.12</div>
            </div>
            <div className="item-subtitle">负责人 | 团队项目</div>
            <div className="item-description">
              <p>针对云计算领域适配的后训练，通过全量微调和参数高效微调技术提升模型在特定任务上的性能，实现模型CPU部署。</p>
              <ul>
                <li>构建了高质量的训练数据集（Alpaca/ShareGPT），通过数据清洗、去重和增强，提升模型的数据质量</li>
                <li>采用SFT和DFT等FFT技术，通过llamafactory进行微调，使1.7B模型充分吸收领域QA对，完成RLHF前的冷启动</li>
                <li>采用LoRA等PEFT技术，将训练参数量降低至全量微调的5%以下，拼接Adapter在微调时保留更多的泛化性</li>
                <li>通过OpenRLHF进行强化学习PPO和GRPO，使模型在特定任务上达到最优，包括对tool_call的奖励和cli的泛化性提升</li>
              </ul>
            </div>
          </div>

          <div className="sub-project-item">
            <div className="item-header">
              <div className="item-title">运维Agent中RAG知识图谱的构建</div>
              <div className="item-date">2025.07 - 2025.09</div>
            </div>
            <div className="item-subtitle">负责人 | 团队项目</div>
            <div className="item-description">
              <p>在云计算背景下，构建外场私域知识库，维护起向量数据库和图数据库，并设计基于KG2RAG的运维Agent，实现智能问答</p>
              <ul>
                <li>设计并实现了基于Neo4j的知识图谱构建模块，支持多源数据融合和知识推理，构建了包含1万+实体和5万+关系的运维知识图谱</li>
                <li>开发了基于Milvus向量数据库的混合检索系统和RAG评估系统，结合关键词检索和语义检索，协同过滤后响应时间控制在100ms以内</li>
                <li>将Neo4j与Milvus集成LangChain框架构建RAG pipeline，实现了与大语言模型的API对接，支持多轮对话和上下文理解与压缩</li>
                <li>将workflow与RAG pipeline结合，实现了智能问答，问答准确率达到85%以上，输出对应的专利一份</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkExperience
