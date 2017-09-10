import React from 'react'
import { Well, Row, Col } from 'react-bootstrap'
import Score from './Score'
import moment from 'moment'

export default function Comment({data, onUpvote, onDownvote}) {
  const { timestamp, body, author, voteScore, id } = data
  return (
   <Well bsSize={"sm"} >
    <Score score={voteScore} upVote={onUpvote} downVote={onDownvote} />
    <Col xs={9} className='vcenter'>
      <div style={{fontSize: '15px'}}>{body}</div>
    </Col>
    <Col xs={2} className='text-right vcenter'>
      <Row>
        {author}
      </Row>
      <Row>
        { moment(timestamp).format('MMM Do YY, h:mm a') }
      </Row>
    </Col>
   </Well> 
  )
}
