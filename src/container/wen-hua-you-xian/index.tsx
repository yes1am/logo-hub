import React, { useRef } from 'react'
import styles from './index.module.less'
import { Button } from 'antd'
import { download } from '../../util'
import Layout from '../../components/layout'

const rotateStyle = {
  transform: 'rotate(352deg)'
}

const defaultMainText = '文化有限'
const defaultSubText = 'WE KNOW NOTHING'

const Index: React.FC<{}> = () => {
  const node = useRef<null | HTMLDivElement>(null)
  return <Layout
    infoContent={
      <>
        <li>灵感来源: <a target="_blank" href="https://podcasts.apple.com/us/podcast/%E6%96%87%E5%8C%96%E6%9C%89%E9%99%90fm/id1482731836" rel="noreferrer">https://podcasts.apple.com/us/podcast/%E6%96%87%E5%8C%96%E6%9C%89%E9%99%90fm/id1482731836</a>
        </li>
        <li>原图</li>
        <img style={{ width: 200, height: 200 }} src="https://raw.githubusercontent.com/yes1am/PicBed/master/img/313x0w.jpg" alt="" />
      </>
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
