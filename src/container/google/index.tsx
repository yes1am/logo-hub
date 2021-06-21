import React, { useRef, useState } from 'react'
import styles from './index.module.less'
import Layout from '../../components/layout'
import InfoItem from '../../components/info-item'
import { Input } from 'antd'

const defaultMainText = 'Google'

interface Props {
  logoType: string;
}

const Index: React.FC<Props> = (props) => {
  const node = useRef<null | HTMLDivElement>(null)
  const [text, setText] = useState(defaultMainText)
  return <Layout
    logoType={props.logoType}
    infoContent={
      <InfoItem
        link="https://www.google.com/"
        imgSrc="https://raw.githubusercontent.com/yes1am/PicBed/master/img/googlelogo_color_272x92dp.png"
        imgStyle={{}}
      />
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
