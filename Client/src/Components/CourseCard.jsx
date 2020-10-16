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
    maxWidth: '230px',
    maxHeight: '300px',
    margin: '15px',
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
}));

export default function CourseCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.title}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Maths"
        subheader="Mr. XYZ"
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quis
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
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
