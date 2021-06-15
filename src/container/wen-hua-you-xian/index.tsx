import React, { useRef } from 'react'
import styles from './index.module.less'
import Layout from '../../components/layout'
import InfoItem from '../../components/info-item'

const rotateStyle = {
  transform: 'rotate(352deg)'
}

const defaultMainText = '文化有限'
const defaultSubText = 'WE KNOW NOTHING'

interface Props {
  logoType: string;
}

const Index: React.FC<Props> = (props) => {
  const node = useRef<null | HTMLDivElement>(null)
  return <Layout
    logoType={props.logoType}
    infoContent={
      <InfoItem
        link="https://podcasts.apple.com/us/podcast/%E6%96%87%E5%8C%96%E6%9C%89%E9%99%90fm/id1482731836"
        imgSrc="https://raw.githubusercontent.com/yes1am/PicBed/master/img/313x0w.jpg"
      />
    }
    node={node}
  >
    <div ref={node} className={styles.container}>
      <div className={styles.text_container}>
        <div
          className={styles.main_text}
          style={rotateStyle}
          contentEditable
        >
          {defaultMainText}
        </div>
        <div
          className={styles.sub_text}
          style={rotateStyle}
          contentEditable
        >
          {defaultSubText}
        </div>
      </div>
    </div>
  </Layout>
}

export default Index
