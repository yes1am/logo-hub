import React from 'react'
import styles from './App.module.less'
import WenHuaYouXian from './container/wen-hua-you-xian'
import SanWuHuan from './container/san-wu-huan'
import MaiMai from './container/maimai'
import BOSSZhiPin from './container/boss-zhipin'
import ZhiFuBao from './container/zhi-fu-bao'
import Google from './container/google'
import { StickyContainer, Sticky } from 'react-sticky'
import { Tag } from 'antd'
import cx from 'classnames'

const LOGO_LIST = [
  {
    title: '文化有限',
    link: 'wen-hua-you-xian',
    component: WenHuaYouXian
  },
  {
    title: '三五环',
    link: 'san-wu-huan',
    component: SanWuHuan
  },
  {
    title: '脉脉',
    link: 'mai-mai',
    component: MaiMai
  },
  {
    title: 'BOSS 直聘',
    link: 'boss-zhipin',
    component: BOSSZhiPin
  },
  {
    title: '支付宝',
    link: 'zhi-fu-bao',
    component: ZhiFuBao
  },
  {
    title: 'Google',
    link: 'google',
    component: Google
  }
]

function App () {
  return (
    <div className={styles.app}>
      <div className="header">
        <h1 className={styles.h1}>
          <img
            width="200px"
            src="https://raw.githubusercontent.com/yes1am/PicBed/master/img/localhost_3000_logo-hub%20(2).png"
            alt=""
          />
        </h1>
      </div>
      <a className={styles.fork} target="_blank" href="https://github.com/yes1am/logo-hub" rel="noreferrer">
        <img src="https://raw.githubusercontent.com/yes1am/PicBed/master/img/forkme_right_orange_ff7600.png" alt="" />
      </a>
      <div style={{ fontSize: 20, margin: '8px 0' }}>
        一款用于快速生成 Logo 的应用，Logo 灵感来源于播客 Logo, APP Logo, 以及各类网站.
      </div>
      <StickyContainer>
        <Sticky>
          {
            ({ style, isSticky }) => {
              return <div className={cx(styles.sticky, isSticky ? styles.is_sticky : styles.nav_border)} style={{ ...style }}>
                <div className={styles.nav}>
                  <span style={{ display: 'inline-block', marginRight: 8 }}>
                    Logo 列表:
                  </span>
                  {
                    LOGO_LIST.map(logo => {
                      return <Tag style={{ marginBottom: 4 }} key={logo.link} color="cyan">
                        <a href={`#${logo.link}`}>{logo.title}</a>
                      </Tag>
                    })
                  }
                </div>
              </div>
            }
          }
        </Sticky>
        <div className="body">
          <div className="list">
            {
              LOGO_LIST.map((logo, index) => {
                return <div key={logo.link} className={styles.item}>
                  <h2 id={logo.link}>{index + 1}. {logo.title}</h2>
                  <logo.component logoType={logo.link} />
                </div>
              })
            }
          </div>
        </div>
        <div>
          <div style={{ textAlign: 'center' }}>
            <a target="_blank" href="https://github.com/yes1am/logo-hub" rel="noreferrer">
              如果觉得这个项目有趣，可以给我一个 <img src="https://img.shields.io/badge/star-green.svg" alt="" />
            </a>
          </div>
        </div>
      </StickyContainer>
    </div>
  )
}

export default App
