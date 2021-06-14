import React, { RefObject } from 'react'
import { Button } from 'antd'
import { download } from '../../util'
import styles from './index.module.less'

interface Props {
  infoContent: React.ReactElement;
  node: RefObject<null | HTMLDivElement>
}

const Index: React.FC<Props> = (props) => {
  return <div className={styles.container}>
    <div>
      {props.infoContent}
    </div>
    <li className={styles.text}>点击下面的文字, 生成类似 LOGO</li>
    {props.children}
    <div style={{ margin: '6px 0' }}>
      <Button type="primary" onClick={() => download(props.node.current)}>
        导出图片
      </Button>
    </div>
  </div>
}

export default Index
