import { saveAs } from 'file-saver'
import domtoimage from 'dom-to-image'
import { message } from 'antd'

export function download (node: null | HTMLDivElement) {
  if (node) {
    domtoimage.toBlob(node)
      .then(function (blob) {
        // const img = new Image()
        // img.src = dataUrl
        // document.body.appendChild(img)
        saveAs(blob, 'logo.png')
        message.success('下载成功')
      })
      .catch(function () {
        message.error('导出失败')
      })
  }
}
