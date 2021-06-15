import React, { useRef } from 'react'
import styles from './index.module.less'
import Layout from '../../components/layout'
import InfoItem from '../../components/info-item'

const defaultMainText = 'BOSS'
const defaultSubText = '直聘'

interface Props {
  logoType: string;
}

const Index: React.FC<Props> = (props) => {
  const node = useRef<null | HTMLDivElement>(null)
  return <Layout
    logoType={props.logoType}
    infoContent={
      <InfoItem
        link="https://apps.apple.com/cn/app/boss%E7%9B%B4%E8%81%98-%E6%8B%9B%E8%81%98%E6%B1%82%E8%81%8C%E6%89%BE%E5%B7%A5%E4%BD%9C%E7%A5%9E%E5%99%A8/id887314963"
        imgSrc="https://raw.githubusercontent.com/yes1am/PicBed/master/img/230x0w-1.png"
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
