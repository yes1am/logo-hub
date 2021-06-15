import React, { useRef } from 'react'
import styles from './index.module.less'
import Layout from '../../components/layout'
import InfoItem from '../../components/info-item'

const defaultMainText = '晚风说'
const defaultSubText = '禅与宇宙维修艺术'

interface Props {
  logoType: string;
}

const Index: React.FC<Props> = (props) => {
  const node = useRef<null | HTMLDivElement>(null)
  return <Layout
    logoType={props.logoType}
    infoContent={
      <InfoItem
        link="https://podcasts.apple.com/cn/podcast/%E6%99%9A%E9%A3%8E%E8%AF%B4/id1475254987"
        imgSrc="https://raw.githubusercontent.com/yes1am/PicBed/master/img/313x0w.jpg"
      />
    }
    node={node}
  >
    <div ref={node} className={styles.container}>
      <div className={styles.text_container}>
        <div
          className={styles.main_text}
          contentEditable
        >
          {defaultMainText}
        </div>
        <div
          className={styles.sub_text}
          contentEditable
        >
          {defaultSubText}
        </div>
      </div>
    </div>
  </Layout>
}

export default Index
