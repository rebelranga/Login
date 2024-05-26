import {
    Avatar,
    AvatarGroup,
    Box,
    Divider,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
  } from "@mui/material";
  import React from "react";
  
  const Rightbar = () => {
    return (
      <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed" width={300}>
          <Typography variant="h6" fontWeight={100}>
            Online Friends
          </Typography>
          <AvatarGroup max={7}>
            <Avatar
              alt="Remy Sharp"
              src="https://www.bing.com/th?id=OIP.yIuRLi43WrarPFztX0YoUQHaJQ&w=146&h=183&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            />
            <Avatar
              alt="Travis Howard"
              src="https://th.bing.com/th/id/OIP.73HRe2k0eV24i2pP-lQ6MAHaJQ?w=205&h=256&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://th.bing.com/th?q=Dhoni+Latest+Pic%27s&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
            />
            <Avatar alt="Agnes Walker" src="" />
            <Avatar
              alt="Trevor Henderson"
              src="data:image/jpeg;base64,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"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://th.bing.com/th/id/OIP.pSLvTJZaLeZuIWGb1X7a5QHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/8.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/7.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/8.jpg"
            />
          </AvatarGroup>
          <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
            Latest Photos
          </Typography>
          <ImageList cols={3} rowHeight={100} gap={5}>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/breakfast.jpg"
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/burgers.jpg"
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/camera.jpg"
                alt=""
              />
            </ImageListItem>
          </ImageList>
          <Typography variant="h6" fontWeight={100} mt={2}>
            Latest Conversations
          </Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="https://th.bing.com/th/id/OIP.ucHbpiyyDKfIKXe9zkt8rgAAAA?w=199&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" />
          </ListItemAvatar>
          <ListItemText
            primary="I am prabhas "
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="https://th.bing.com/th/id/OIP.3XktK9IrQr910bcsoyvpRgHaHa?w=162&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" />
          </ListItemAvatar>
          <ListItemText
            primary="I am viratkohli"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {' — Do you have Paris recommendations? Have you ever…'}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
        </Box>
      </Box>
    );
  };
  
  export default Rightbar; 