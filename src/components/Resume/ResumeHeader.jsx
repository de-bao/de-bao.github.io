import './ResumeHeader.css'

function ResumeHeader() {
  return (
    <div className="header">
      <div className="header-content">
        <p style={{ textAlign: 'center' }}>
          <name>[Bao De]鲍德</name>
        </p>
        <p style={{ textAlign: 'center' }}>
          <subname>LLM应用 | AI算法 | AI Infra工程师</subname>
        </p>
        <p style={{ textAlign: 'center' }}>
          <font size="2">
            <a href="mailto:de-bao@foxmail.com">de-bao@foxmail.com</a>
            &nbsp;/&nbsp;
            +86 156-2322-7696
            &nbsp;/&nbsp;
            湖北黄冈
          </font>
        </p>
      </div>
      <div className="header-image">
        <img 
          src="/resume/QQMail_1716874829663.jpg" 
          alt="鲍德" 
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.onerror = null
          }}
        />
      </div>
    </div>
  )
}

export default ResumeHeader
