import React from 'react';
import {List, ListItem, ListItemIcon, ListItemText, Divider} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import HotelIcon from '@mui/icons-material/Hotel';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';




const Listas = () => {
    return (
        <div>           

             <List component='nav'>
             <ListItem button>
                    <ListItemIcon>
                        <DonutSmallIcon />
                    </ListItemIcon> 
                    <ListItemText primary="Dashboard" />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon> 
                    <ListItemText primary="Usuarios" />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <HotelIcon />
                    </ListItemIcon> 
                    <ListItemText primary="Reservas" />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <LibraryBooksIcon />
                    </ListItemIcon> 
                    <ListItemText primary="Listado" />
                </ListItem>

                <Divider />

                <ListItem button>
                    <ListItemIcon>
                        <PowerSettingsNewIcon />
                    </ListItemIcon> 
                    <ListItemText primary="Logout" />
                </ListItem>

                
             </List>
        </div>
    )
}


export  { Listas }