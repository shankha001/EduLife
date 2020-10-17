import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '230px',
    height: '300px',
    margin: '15px',
    border: '1px solid grey',
    position: 'relative',
  },
  title: {
    color: 'orangered',
  },

  media: {
    height: 0,
    paddingTop: '25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  media_container: {
    position: 'relative',
    background: 'orange',
  },
  avatar: {
    backgroundColor: red[500],
    position: 'absolute',
    right: '20px',
    top: '-20px',
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  cardFooter: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    margin: '-10px',
  },
}));

export default function CourseCard(props) {
  const classes = useStyles();
  const { name, description, teacherName } = props.course;
  console.log(props.course.teacherName);
  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.title}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={teacherName}
      />
      <div className={classes.media_container}>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        <Avatar aria-label="recipe" className={classes.avatar} />
      </div>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardFooter} disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <Button
          component={Link}
          to="/dashboard/course/32123"
          className={classes.expand}
        >
          Join
        </Button>
      </CardActions>
    </Card>
  );
}
