import React, { useRef } from 'react'
import styles from './index.module.less'
import Layout from '../../components/layout'
import InfoItem from '../../components/info-item'

const defaultMainText = '支'

const Index: React.FC<{}> = () => {
  const node = useRef<null | HTMLDivElement>(null)
  return <Layout
    infoContent={
      <InfoItem
        link="https://apps.apple.com/cn/app/%E6%94%AF%E4%BB%98%E5%AE%9D-%E7%94%9F%E6%B4%BB%E5%A5%BD-%E6%94%AF%E4%BB%98%E5%AE%9D/id333206289"
        imgSrc="https://raw.githubusercontent.com/yes1am/PicBed/master/img/230x0w-2.png"
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
