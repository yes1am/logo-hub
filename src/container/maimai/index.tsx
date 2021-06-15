import React, { useRef } from 'react'
import styles from './index.module.less'
import Layout from '../../components/layout'
import InfoItem from '../../components/info-item'

const defaultMainText = '脉'

interface Props {
  logoType: string;
}

const Index: React.FC<Props> = (props) => {
  const node = useRef<null | HTMLDivElement>(null)
  return <Layout
    logoType={props.logoType}
    infoContent={
      <InfoItem
        link="https://apps.apple.com/cn/app/id718659370"
        imgSrc="https://raw.githubusercontent.com/yes1am/PicBed/master/img/230x0w.png"
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
      </div>
    </div>
  </Layout>
}

export default Index
