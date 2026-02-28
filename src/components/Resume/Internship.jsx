import './Internship.css'

function Internship() {
  return (
    <div className="section">
      <heading>实习经历</heading>
      
      <div className="experience-item">
        <div className="item-header">
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="item-title">大数据算法工程师</div>
            <div className="item-subtitle">LeapMotor(杭州)</div>
          </div>
          <div className="item-date">2024.06 - 2024.09</div>
        </div>
        <div className="item-description">
          <p>负责零跑汽车电驱数据处理和分析，包括数据预处理、特征工程、模型训练和异常检测等</p>
          <ul>
            <li>设计并部署GRU-Transformer轻量化时序预测模型，实现车云网络中低mse误差，显著优于PatchTST等baseline，有效缓解数仓计算瓶颈，支撑多车辆健康状态监控与安全驾驶决策</li>
            <li>设计PINN与Multimode融合的预警框架，将机理与单模态的数据融合，使得多工况的车辆异常检测准确性与可信度提升</li>
            <li>基于聚类与PCA精准溯源IGBT关键参数组，强化电控质量管控，预防批次缺陷并提升电动汽车可靠性</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Internship
