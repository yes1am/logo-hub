import React, { useRef } from 'react'
import styles from './index.module.less'
import Layout from '../../components/layout'
import InfoItem from '../../components/info-item'

const defaultMainText = '三五环'
const defaultSubText = 'LIUFEI & HIS FRIENDS'

interface Props {
  logoType: string;
}

const Index: React.FC<Props> = (props) => {
  const node = useRef<null | HTMLDivElement>(null)
  return <Layout
    logoType={props.logoType}
    infoContent={
      <InfoItem
        link="https://podcasts.apple.com/us/podcast/%E4%B8%89%E4%BA%94%E7%8E%AF/id1475113228"
        imgSrc="https://raw.githubusercontent.com/yes1am/PicBed/master/img/313x0w.png"
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
