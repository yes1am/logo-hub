import React, { useRef } from 'react'
import styles from './index.module.less'
import Layout from '../../components/layout'
import InfoItem from '../../components/info-item'

const defaultMainText = '海天酱油'
const defaultSubText = 'HADAY SOY SAUCE'

interface Props {
  logoType: string;
}

const Index: React.FC<Props> = (props) => {
  const node = useRef<null | HTMLDivElement>(null)
  return <Layout
    logoType={props.logoType}
    infoContent={
      <InfoItem
        link="https://item.jd.com/743677.html"
        imgSrc="https://raw.githubusercontent.com/yes1am/PicBed/master/img/O1CN01LMhof61NvxNZSjS0q_!!925431633-0-lubanu-s.jpg_430x430q90.jpg"
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
        <div className={styles.sub_text_wrap}>
          <div className={styles.left}>
          </div>
          <div
          className={styles.sub_text}
          contentEditable
        >
            {defaultSubText}
          </div>
          <div className={styles.right}>
          </div>
        </div>
      </div>
    </div>
  </Layout>
}

export default Index
