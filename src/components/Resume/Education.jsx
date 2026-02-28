import './Education.css'

function Education() {
  return (
    <div className="section">
      <heading>教育背景</heading>
      
      <div className="education-item">
        <div className="item-header">
          <div className="item-title">东南大学|自动化学院</div>
          <div className="item-date">2022.09 - 2025.06</div>
        </div>
        <div className="item-description">
          <p>控制科学与工程(硕士),GPA:82/100</p>
        </div>
      </div>

      <div className="education-item">
        <div className="item-header">
          <div className="item-title">武汉科技大学|人工智能与自动学院<sup>*</sup></div>
          <div className="item-date">2017.09 - 2021.06</div>
        </div>
        <div className="item-description">
          <p>自动化(学士),GPA:3.2/4.0,CET-6</p>
        </div>
      </div>
    </div>
  )
}

export default Education
