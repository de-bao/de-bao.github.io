import './Awards.css'

function Awards() {
  const awards = [
    { year: '2025年', text: '校友会云视科技奖学金（唯四）' },
    { year: '2024年', text: '张江高科奖励基金会奖学金（唯四）' },
    { year: '2022年', text: '东南大学研究生学业奖学金' },
    { year: '2021年', text: '武汉科技大学本科优秀毕业设计（唯二）' },
    { year: '2020年', text: '全国大学生数学建模竞赛国家二等奖' },
    { year: '2020年', text: '湖北大学生数学建模竞赛省级一等奖' },
    { year: '2019年', text: '全国大学生数学建模竞赛国家二等奖' },
    { year: '2019年', text: '湖北大学生数学建模竞赛省级一等奖' },
    { year: '2019年', text: '国家励志奖学金' },
    { year: '2019年', text: '武汉科技大学二等奖学金' },
    { year: '2018年', text: '武汉科技大学三等奖学金' },
    { year: '2018年', text: '武汉科技大学优秀学生' },
  ]

  return (
    <div className="section">
      <heading>获奖情况</heading>
      <ul className="awards-list">
        {awards.map((award, index) => (
          <li key={index}>
            <strong>{award.year}</strong> - {award.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Awards
