import React from "react";
import {StyledTableCell, StyledTableRow, useStyles} from "./style";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Cohortes } from "./cohortes";
import AddIcon from "@material-ui/icons/Add";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import "../../styles/components/TabCohortes.scss";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import DialogAdd from "./DialogAdd";
import DialogDel from "./DialogDel";
import DialogEdit from "./DialogEdit";


export default function CustomizedTables(props) {

const classes = useStyles();
const columnas = ["Nombre de cohorte", "Nombre del instructor"];

const [openDel, setOpenDel] = React.useState(false);
const theme = useTheme();
const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

const handleDelClickOpen = () => {
   setOpenDel(true);
};

const handleDelClose = () => {
   setOpenDel(false);
};

const [openAdd, setOpenAdd] = React.useState(false);

const handleAddClickOpen = () => {
   setOpenAdd(true);
};

const handleAddClose = () => {
   setOpenAdd(false);
};

const [openEdit, setOpenEdit] = React.useState(false);

const handleEditClickOpen = () => {
   setOpenEdit(true);
};

const handleEditClose = () => {
   setOpenEdit(false);
};

   return (
      <TableContainer className={classes.container} component={Paper}>
         <Table className={classes.table} aria-label="customized table">
            <TableHead>
               <TableRow>
                  {columnas.map((columna) => (
                     <StyledTableCell key={columna} align="center">{columna}</StyledTableCell >
                  ))}
                  <StyledTableCell align="center">
                     <button className="addIcon" onClick={handleAddClickOpen} >
                        <AddIcon />
                     </button>
                  </StyledTableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {Cohortes.map((el) => (
                  <StyledTableRow key={el.name}>
                     <StyledTableCell
                        align="center"
                        component="th"
                        scope="cohorte"
                     >
                        {el.name}
                     </StyledTableCell>
                     <StyledTableCell align="center">
                        {el.instructor}
                     </StyledTableCell>
                     <StyledTableCell
                        className={classes.botones}
                        align="center"
                     >
                        <button className="viewIcon">
                           <VisibilityIcon />
                        </button>
                        <button className="editIcon" onClick={handleEditClickOpen} >
                           <EditIcon />
                        </button>
                        <button className="deleteIcon" onClick={handleDelClickOpen} >
                           <DeleteIcon />
                        </button>
                     </StyledTableCell>
                  </StyledTableRow>
               ))}
            </TableBody>
         </Table>
      <DialogDel openDel={openDel} handleDelClose={handleDelClose} fullScreen={fullScreen} />
      <DialogAdd openAdd={openAdd} handleAddClose={handleAddClose} />
      <DialogEdit openEdit={openEdit} handleEditClose={handleEditClose} />
      </TableContainer>
   );
}