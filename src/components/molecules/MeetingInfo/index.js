import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import Button from '../../atoms/Button'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const style = {
      border : '1px solid black',
      padding : '8px',
      margin : '8px'
    };


export const MeetingInfo = ({ state, deleteRequest }) => {


  return (
    <div>
      <div>sinceWhen : {sinceWhen}</div>
      <div>tilWhen : {tilWhen}</div>
      <div>id : {id}</div>
      <button onClick = {deleteRequest}>삭제</button>
    </div>
  )
}

MeetingInfo.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default MeetingInfo
