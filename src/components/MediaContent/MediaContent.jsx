import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/CardContent';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    media: {
        height: 200,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 3, 1),
    },

}));

type cardDataProps = {
    image: String;
    title: String;
    description: String;
}

const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});


export default function MediaCard({ cardData }: cardDataProps) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [newBeerFromId, setnewBeerFromId] = React.useState();


 
    const handleOpen = (e, id) => {
        setOpen(true);
        setnewBeerFromId(id);
// NOTE: Here I was planning on setting a timer and use react contexts to count how long the person was viewing the content (but ran out of time)
            // const interval = setInterval(() => {
            //   console.log('This will run every second!');
            // }, 1000);
            // return () => clearInterval(interval);

    };

    const handleClose = (interval) => {
        setOpen(false);
        // clearInterval(interval);

    };



    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <div className={classes.root}>
            {!matches ?
                <Grid container spacing={3}>
                    {
                        cardData.map((content) => (
                            <Grid item xs={12}>
                                <Card width="100%">
                                    <CardActionArea 
                                    // onClick={handleOpen}
                                    onClick={((e) => handleOpen(e, content.id))}

                                    >
                                        {content.image ? <CardMedia className={classes.media} image={content.image} /> : null}
                                        {content.title || content.description ?
                                            <CardContent>
                                                {content.title ? <Typography gutterBottom variant="h5" component="h2">{content.title}</Typography> : null}
                                                {content.description ? <Typography variant="body2" color="textSecondary" component="p">{content.description}</Typography> : null}
                                            </CardContent>
                                            : null}
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
                :
                <Grid container spacing={3}>
                    {
                        cardData.map((content) => (
                            <Grid item xs={4}>
                                <Card width="100%">
                                    <CardActionArea 
                                    // onClick={handleOpen}
                                    onClick={((e) => handleOpen(e, content.id))}
                                    >
                                        {content.image ? <CardMedia className={classes.media} image={content.image} /> : null}
                                        {content.title || content.description ?
                                            <CardContent>
                                                {content.title ? <Typography gutterBottom variant="h5" component="h2">{content.title}</Typography> : null}
                                                {content.description ? <Typography variant="body2" color="textSecondary" component="p">{content.description}</Typography> : null}
                                            </CardContent>
                                            : null}
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            }
            <div>
            {cardData.filter(d => d.id === newBeerFromId).map(data => (

                <Modal
                    aria-label="opened-media-content"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >

                    <Fade in={open}>
                        <div className={classes.paper}>
                            <iframe width="100%" height="100%" src={data.href} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h2 id="spring-modal-title">{data.title}</h2>
                            <p id="spring-modal-description">{data.description}</p>
                        </div>
                    </Fade>
                </Modal>
                          ))
                        }
            </div>
  

        </div>
    );
}
