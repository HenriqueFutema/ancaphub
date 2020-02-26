import React from 'react'
import {
  Box,
  Divider,
  Collapse,
  CardHeader,
  IconButton,
  CardContent,
  CardActions,
} from "@material-ui/core"
import {
  MoreVert as MoreVertIcon,
} from '@material-ui/icons';

import { connect } from 'react-redux';

import CommentForm from './commentForm';
import Comment from './comment'

const CommentBox = ({ authUser, expanded, post }) => {

  return (
    <Collapse in={expanded}>
      <Divider />
      <CommentForm post={post._id} />
      <Box px={2} pb={2} textAlign="center">
        {post.comments.reverse().map((comment, index) => (
          <Comment comment={comment} authUser={authUser} key={`comment-${index}`}/>
        ))}
      </Box>
    </Collapse>
  )
}

const mapStateToProps = state => ({ authUser: state.auth });

export default connect(mapStateToProps)(CommentBox)