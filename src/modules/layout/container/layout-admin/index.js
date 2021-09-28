import React from 'react'
import { Navbar } from "../../component/header-admin";
import { Main } from "../../component/main-admin";
import theme from '../../../../temaConfig';

import{
  Hidden,
  makeStyles
} from '@mui/material'




const estilos = makeStyles(them => ({
  root: {
      display: 'flex'
  },
  toolbar: theme.mixins.toolbar,

  content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
  },
}))

export function LayoutAdmin(props) {
  const { children } = props;

  const classes = estilos()
    const [abrir, setAbrir] = React.useState(false)

    const accionAbrir = () => {
        setAbrir(!abrir)
    }

  return (
    <div className="layout-admin">
      <div className={classes.root}>
        <Navbar accionAbrir={accionAbrir} />            
            <Hidden xsDown>
                <Main
                    variant="permanent"
                    open={true}

                />
            </Hidden>

            <Hidden smUp>
                <Main
                    variant="temporary"
                    open={abrir}
                    onClose={accionAbrir}
                />
            </Hidden>
            
            <div className={classes.content}>
                <div className={classes.toolbar}></div>                  
                 

                  
                  Contenido 
            </div>   
            
        </div>
    </div>
  );
}
