import React, { RefObject } from 'react'
import { Button } from 'antd'
import { download } from '../../util'

interface Props {
  infoContent: React.ReactElement;
  node: RefObject<null | HTMLDivElement>
}

const Index: React.FC<Props> = (props) => {
  return <div>
    <div className="info-container" style={{ border: '1px solid #333', padding: '8px', margin: '8px 0' }} >
      <h2>相关介绍</h2>
      {props.infoContent}
    </div>
    <div className="work-container" style={{ border: '1px solid #333', padding: '8px', margin: '8px 0' }} >
      <h2>生成类似 LOGO</h2>
      {props.children}
      <div style={{ margin: '6px 0' }}>
        <Button type="primary" onClick={() => download(props.node.current)}>
          导出图片
        </Button>
      </div>
    </div>
  </div>
}

export default Index
