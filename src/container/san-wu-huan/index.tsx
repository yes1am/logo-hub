import React, { useRef } from 'react'
import styles from './index.module.less'
import Layout from '../../components/layout'

const defaultMainText = '三五环'
const defaultSubText = 'LIUFEI & HIS FRIENDS'

const Index: React.FC<{}> = () => {
  const node = useRef<null | HTMLDivElement>(null)
  return <Layout
    infoContent={
      <>
        <li>灵感来源: <a target="_blank" href="https://podcasts.apple.com/us/podcast/%E4%B8%89%E4%BA%94%E7%8E%AF/id1475113228" rel="noreferrer">https://podcasts.apple.com/us/podcast/%E4%B8%89%E4%BA%94%E7%8E%AF/id1475113228</a>
        </li>
        <li>原图</li>
        <img style={{ width: 200, height: 200 }} src="https://raw.githubusercontent.com/yes1am/PicBed/master/img/313x0w.png" alt="" />
      </>
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
