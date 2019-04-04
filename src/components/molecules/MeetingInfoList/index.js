import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { MeetingInfo } from '../MeetingInfo'
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


export const MeetingInfoList = ({ state, postRequest }) => {


//    console.log("state: " + state.meetingList)
    let sinceWhen,tilWhen

    if (localStorage.getItem("token") !== null) {
      const meetingList = state.meetingList

      if(meetingList !== null)
      {
        let meetingInfoList = JSON.parse(meetingList)
        console.log("meetingList molecule, meetingInfoList : " + meetingInfoList)
        const list = meetingInfoList.map( (meeting) => (< MeetingInfo sinceWhen = {meeting.sinceWhen} tilWhen = {meeting.tilWhen} id = {meeting.id}/>) )
      }

      return (
        <div>
          <div>
            <div>
              <div>
                <h2>sinceWhen :</h2>
                <input type = "datetime-local" id="sinceWhen_field" ref={val => {sinceWhen = val;}}/>
              </div>
              <div>
                <h2>tilWhen :</h2>
                <input type = "datetime-local" id="tilWhen_field" ref={val => {tilWhen = val;}}/>
              </div>
            </div>
            <button type="submit" onClick={() => postRequest(sinceWhen.value, tilWhen.value)}> 예약 </button>
          </div>
          <div>
            <div>

            </div>
          </div>
        </div>
      )
    }
    else{
      return (
        <div>
        </div>
      );
    }
}

MeetingInfoList.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default MeetingInfoList
