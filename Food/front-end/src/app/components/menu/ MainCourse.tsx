import * as React from "react";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
type Anchor = "right";
export default function MainCourse() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  // const list = (anchor: Anchor) => (
  //   <Box
  //     sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
  //     role="presentation"
  //     onClick={toggleDrawer(anchor, false)}
  //     onKeyDown={toggleDrawer(anchor, false)}
  //   >
  //     <List>
  //       {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //     <List>
  //       {["All mail", "Trash", "Spam"].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );
  return (
    <div>
      <div className="flex gap-5 justify-center mt-10 ">
        <Link href={`/menu`}>
          <button className="w-[280px] h-[43px] font-bold border border-gray-200 rounded-xl hover:bg-green-600 hover:text-white hover:rounded-xl">
            Breakfast
          </button>
        </Link>
        <Link href={`/soup`}>
          <button className="w-[280px] h-[43px] font-bold border border-gray-200 rounded-xl hover:bg-green-600 hover:text-white hover:rounded-xl">
            Soup
          </button>
        </Link>
        <Link href={`/maincourse`}>
          <button className="w-[280px] h-[43px] font-bold border border-gray-200 rounded-xl hover:bg-green-600 hover:text-white hover:rounded-xl">
            Main Course
          </button>
        </Link>
        <Link href={`/dessert`}>
          <button className="w-[280px] h-[43px] font-bold border border-gray-200 rounded-xl hover:bg-green-600 hover:text-white hover:rounded-xl">
            Dessert
          </button>
        </Link>
      </div>
      <div>
        <div className="flex flex-col mt-20">
          <div className="flex gap-10 justify-center">
            <div className="flex flex-col  justify-center mt-10 w-[282px] h-[253px]">
              <React.Fragment>
                <Button onClick={handleClickOpen}>
                  <img src="./eeg.png" alt="" className="" />
                </Button>
                <div className="">
                  <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                  >
                    <IconButton
                      aria-label="close"
                      onClick={handleClose}
                      sx={(theme) => ({
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                      })}
                    >
                      <CloseIcon />
                    </IconButton>
                    <div>
                      <div className="flex w-[981px] h-[500px]">
                        <Typography gutterBottom>
                          <img
                            src="./eeg.png"
                            alt=""
                            className=" w-[500px] h-[500px]"
                          />
                        </Typography>
                        <div className="flex flex-col mt-10 ml-5">
                          <div>
                            <h1 className="font-bold text-[28px]">
                              Main Pizza
                            </h1>
                            <h1 className="text-green-500">34,800₮</h1>
                          </div>
                          <div className="mt-5 w-[368px] h-[54px]">
                            <h1 className="font-bold">Орц</h1>
                            <h1 className="bg-[#F6F6F6] text-gray-500 mt-5">
                              Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын
                              үр
                            </h1>
                          </div>

                          <div className="mt-20">
                            <h1 className="font-bold">Тоо</h1>
                            <Button
                              variant="contained"
                              color="success"
                              className="w-[368px] h-[48px]  text-white"
                            >
                              Сагслах
                            </Button>
                            {/* <div>
                              {(["right"] as const).map((anchor) => (
                                <React.Fragment key={anchor}>
                                  <Button onClick={toggleDrawer(anchor, true)}>
                                    {anchor}
                                  </Button>
                                  <Drawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                  >
                                    {list(anchor)}
                                  </Drawer>
                                </React.Fragment>
                              ))}
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </BootstrapDialog>
                </div>
              </React.Fragment>
              <CardContent>
                <h1 className="font-bold"> Өглөөний хоол</h1>
                <div className="flex gap-3">
                  <h1 className="text-[#18BA51]">14,800₮</h1>
                  <h1>16,800₮</h1>
                </div>
              </CardContent>
            </div>

            <div className="flex flex-col  justify-center mt-10 w-[282px] h-[253px]">
              <img src="./tsairmag.png" alt="" />
              <CardContent>
                <h1 className="font-bold"> Зайрмаг</h1>
                <div className="flex gap-3">
                  <h1 className="text-[#18BA51]">4,800₮</h1>
                  <h1>6,800₮</h1>
                </div>
              </CardContent>
            </div>

            <div className="flex flex-col justify-center mt-10  w-[282px] h-[253px]">
              <img src="./cerail.png" alt="" />
              <CardContent>
                <h1 className="font-bold"> Өглөөний хоол</h1>
                <div className="flex gap-3">
                  <h1 className="text-[#18BA51]">24,800₮</h1>
                  <h1>26,800₮</h1>
                </div>
              </CardContent>
            </div>
            <div className="flex flex-col justify-center mt-10 w-[282px] h-[253px]">
              <img src="./salad.png" alt="" />
              <CardContent>
                <h1 className="font-bold text-[18px]">Breakfast </h1>
                <div className="flex gap-3">
                  <h1 className="text-[#18BA51]">24,800₮</h1>
                  <h1>26,800₮</h1>
                </div>
              </CardContent>
            </div>
          </div>
          <div className="flex flex-col mt-10">
            <div className="flex gap-10 justify-center mr-[650px]">
              <div className="flex flex-col justify-center  w-[282px] h-[253px]">
                <img src="./pizza.png" alt="Main Pizza" />
                <CardContent>
                  <h1 className="font-bold">Main Pizza</h1>
                  <div className="flex gap-3">
                    <h1 className="text-[#18BA51]">34,800₮</h1>
                  </div>
                </CardContent>
              </div>

              <div className="flex flex-col justify-center  w-[282px] h-[253px]">
                <img src="./meatpie.png" alt="Food tart" />
                <CardContent>
                  <h1 className="font-bold">Food tart</h1>
                  <div className="flex gap-3">
                    <h1 className="text-[#18BA51]">22,800₮</h1>
                  </div>
                </CardContent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}