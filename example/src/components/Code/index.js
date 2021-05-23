/**
 * Created by liekkas on 2017/1/19.
 */
import React from 'react'
import {Card} from '../../../../index'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/styles'
import {Button} from 'antd'
import styled from 'styled-components'

const Detail = styled.div`
  position: absolute;
  right: 20px;
  top: 12px;
`

const Code = ({title,codeStr,detailUrl}) => {
  return (
    <Card headerText={title}>
      <Detail>
        <Button type={'ghost'} icon={'double-right'} onClick={()=> window.open(detailUrl)}>
          more
        </Button>
      </Detail>
      <SyntaxHighlighter language='javascript' style={github}>{codeStr}</SyntaxHighlighter>
    </Card>
  )
}

Code.propsType = {
  codeStr: React.PropTypes.string
}

export default Code
