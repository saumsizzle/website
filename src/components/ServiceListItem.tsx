import CloseIcon from "@mui/icons-material/Close";
import { Fade, Modal, Paper, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

import { useState } from "react";

import css from "styled-jsx/css";

export default function ServiceItemList({ children, name, icon }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        // <div>
        <div className="container transform ease-in-out transition-transform duration-75 cursor-pointer overflow-hidden rounded-sm ">
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={handleOpen}>
                        <ListItemIcon>
                            {icon}
                        </ListItemIcon>
                        {name}
                    </ListItemButton>
                </ListItem>
            </List>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                    <Paper className="max-w-2xl w-full mx-auto px-8 h-screen bg-black text-white outline-none overflow-scroll rounded-none">
                        <div className="w-full flex justify-end">
                            <CloseIcon className="ml-auto" onClick={handleClose} />
                        </div>
                        <div>{children}</div>
                    </Paper>
                </Fade>
            </Modal>
        </div>
    );
}
