import React, { useRef } from 'react'
import styles from './index.module.less'
import Layout from '../../components/layout'
import InfoItem from '../../components/info-item'
import cx from 'classnames'

const defaultMainText1 = '科'
const defaultMainText2 = '技'
const defaultMainText3 = '鲜'
const defaultMainText4 = '声'

interface Props {
  logoType: string;
}

const Index: React.FC<Props> = (props) => {
  const node = useRef<null | HTMLDivElement>(null)
  return <Layout
    logoType={props.logoType}
    infoContent={
      <InfoItem
        link="https://podcasts.apple.com/cn/podcast/%E7%A7%91%E6%8A%80%E9%B2%9C%E5%A3%B0/id1495947928"
        imgSrc="https://raw.githubusercontent.com/yes1am/PicBed/master/img/ke-ji-xian-sheng.png"
      />
    }
    node={node}
  >
    <div ref={node} className={styles.container}>
      <div className={styles.text_container}>
        <div className={cx(styles.item, styles.item1)}>
          <div
            className={cx(styles.main_text, styles.main_text1)}
            contentEditable
          >
            {defaultMainText1}
          </div>
        </div>
        <div className={cx(styles.item, styles.item2)}>
          <div
            className={cx(styles.main_text, styles.main_text2)}
            contentEditable
          >
            {defaultMainText2}
          </div>
        </div>
        <div className={cx(styles.item, styles.item3)}>
          <div
            className={cx(styles.main_text, styles.main_text3)}
            contentEditable
          >
            {defaultMainText3}
          </div>
        </div>
        <div className={cx(styles.item, styles.item4)}>
          <div
            className={cx(styles.main_text, styles.main_text4)}
            contentEditable
          >
            {defaultMainText4}
          </div>
        </div>
      </div>
    </div>
  </Layout>
}

export default Index
