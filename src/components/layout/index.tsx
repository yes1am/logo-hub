import React, { RefObject, useRef, useEffect } from 'react'
import { Button } from 'antd'
import { download } from '../../util'
import styles from './index.module.less'
import ReactGA from 'react-ga'

interface Props {
  infoContent: React.ReactElement;
  node: RefObject<null | HTMLDivElement>;
  // 当前 logo 名称，用于 ga 统计
  logoType: string;
}

const useDebounce = (callback: () => unknown, delay: number) => {
  const latestCallback = useRef<() => unknown>()
  const latestTimeout = useRef<number>()

  useEffect(() => {
    latestCallback.current = callback
  }, [callback])

  return () => {
    if (latestTimeout.current) {
      clearTimeout(latestTimeout.current)
    }

    latestTimeout.current = window.setTimeout(() => {
      if (latestCallback.current) {
        latestCallback.current()
      }
    }, delay)
  }
}

const Index: React.FC<Props> = (props) => {
  const handleClick = useDebounce(() => {
    ReactGA.event({
      category: 'User',
      action: 'Export',
      label: props.logoType
    })
    download(props.node.current)
  }, 1000)
  return <div className={styles.container}>
    <div>
      {props.infoContent}
    </div>
    <li className={styles.text}>直接编辑图片中的文字, 生成类似 LOGO</li>
    {props.children}
    <div style={{ margin: '6px 0' }}>
      <Button type="primary" onClick={handleClick}>
        导出图片
      </Button>
    </div>
  </div>
}

export default Index
