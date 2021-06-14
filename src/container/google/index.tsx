import React, { useRef, useState } from 'react'
import styles from './index.module.less'
import Layout from '../../components/layout'
import InfoItem from '../../components/info-item'
import { Input } from 'antd'

const defaultMainText = 'Google'

const Index: React.FC<{}> = () => {
  const node = useRef<null | HTMLDivElement>(null)
  const [text, setText] = useState(defaultMainText)
  return <Layout
    infoContent={
      <InfoItem
        link="https://www.google.com/"
        imgSrc="https://raw.githubusercontent.com/yes1am/PicBed/master/img/googlelogo_color_272x92dp.png"
        imgStyle={{}}
      >
        <li style={{ color: 'red' }}><strong>注意: </strong>
          {/* TODO: 这个导出似乎有 bug, 比如输入 Logohub，发现导出结果缺少字母 b, 而输入 BaidHub 却不会有 bug */}
          这个导出似乎有 bug, 比如输入 Logohub，发现导出结果缺少字母 b, 而输入 BaidHub 却不会有 bug
        </li>
      </InfoItem>
    }
    node={node}
  >
    <Input
      addonBefore="输入文案, (例如 Google)"
      value={text}
      onChange={e => setText(e.target.value)}
    />
    <div ref={node} className={styles.container}>
      <div className={styles.text_container}>
        <div
          className={styles.main_text}
        >
          {
            text.split('').map((item, index) => {
              return <span key={item + index}>
                {item}
              </span>
            })
          }
        </div>
      </div>
    </div>
  </Layout>
}

export default Index
