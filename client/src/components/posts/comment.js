import React from 'react'
import {
  Link,
  Card,
  CardHeader,
  IconButton,
  CardContent,
  CardActions,
} from "@material-ui/core"
import {
MoreVert as MoreVertIcon,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core'
import ProfilePicture from '../profile/profilePicture';
import ShowName from '../profile/showName'
import moment from 'moment-timezone/builds/moment-timezone-with-data';
import ptBr from 'moment/locale/pt-br'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: 10
  },
  avatar: {
    marginRight: 8
  },
  commentContent: {
    background: 'rgba(0,0,0,0.05)',
    padding: 10,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  userName: {
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
  },
  commentText:{
    display: 'flex',
    flexDirection: 'row',
    padding: 0, 
    margin:0,
    textAlign: 'left'
  },
  commentSettings:{
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '0 !important'
  },
  padding0:{
    padding: 0
  },
  date: {fontSize: 13, color: theme.palette.text.secondary, marginTop:5}
}))

const Comment = ({ comment, authUser }) => {
  const classes = useStyles()
  const ownProfile = authUser.isAuthenticated && comment.user._id === authUser.user._id;

  return (
    <div className={classes.root}>
      <ProfilePicture avatar={comment.user.avatar} height="35" width="35" className={classes.avatar} />
      <div className={classes.commentContent}>
        <p className={classes.commentText}>
          <ShowName user={comment.user} fontSize={14}/> 
          <p>{" " + comment.content}</p>

        <div className={classes.commentSettings}>
        {ownProfile && (
          <IconButton aria-label="Settings" className={classes.padding0}>
            <MoreVertIcon />
          </IconButton>
        )}
        </div>      
        </p>
        <span className={classes.date}>{moment(comment.date).tz('America/Sao_Paulo').locale('pt-br', ptBr).startOf(comment.date).fromNow()}</span>
      </div>
    </div>
  )
}

export default Comment