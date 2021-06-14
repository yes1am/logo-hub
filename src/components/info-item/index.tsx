import React from 'react'

interface Props {
  /** 灵感来源链接 */
  link: string;
  /** 原图链接 */
  imgSrc: string;
  imgStyle?: React.CSSProperties;
}

const Index: React.FC<Props> = (props) => {
  const { link, imgSrc, imgStyle = { width: 200, height: 200 } } = props
  return (
    <>
      <li>灵感来源: <a target="_blank" href={link} rel="noreferrer">{link}</a>
      </li>
      <li>原图</li>
      <img style={imgStyle} src={imgSrc} alt="" />
      {props.children}
    </>
  )
}

export default Index
