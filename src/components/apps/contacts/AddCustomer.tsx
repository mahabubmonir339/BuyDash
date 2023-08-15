import React from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  TextField,
  FormLabel,
  DialogContent,
  DialogContentText,
  Grid,
} from '@mui/material';
import { useSelector, useDispatch } from '../../../store/Store';
import { addContact } from '../../../store/apps/contacts/ContactSlice';
import user1 from 'public/images/profile/user-1.jpg';
import ControlledStateAutocomplete from '../../forms/form-elements/autoComplete/ControlledStateAutocomplete';
import { Delete } from '@mui/icons-material';

interface CustomerAddProps {
  modal: boolean; // Replace 'any' with the actual type of 'modal'
  setModal: (value: boolean) => void; // Replace 'any' with the actual type of 'setModal'
  btnLbl: string;
  dialogTitle: string;
  btnVisiblity: boolean;
}
 
const CustomerAdd:React.FC<CustomerAddProps> = ({ modal, setModal, btnLbl, dialogTitle, btnVisiblity }) => {



  const toggle = () => {
    setModal(!modal);
  };

  const [values, setValues] = React.useState({
    firstname: '',
    lastname: '',
    department: '',
    company: '',
    phone: '',
    email: '',
    address: '',
    notes: '',
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // dispatch(
    //   addContact(
    //     id,
    //     values.firstname,
    //     values.lastname,
    //     user1,
    //     values.department,
    //     values.company,
    //     values.phone,
    //     values.email,
    //     values.address,
    //     values.notes,
    //   ),
    // );
    setModal(!modal);
  };

  return (
    <>
      <Box px={3} pb={1}>
        {btnVisiblity ? <Button color="primary" variant="contained" fullWidth onClick={toggle}>
          {btnLbl ?? 'Add New'}
        </Button> : null}

      </Box>
      <Dialog
        open={modal}
        onClose={toggle}
        maxWidth="xl"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" variant="h5">

          {dialogTitle ?? ""}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontSize: '17px' }} id="alert-dialog-description">
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <p style={{ flex: 0.99 }}>
                Please fill the all field carefully and
                <br /> click on submit button.
              </p>
              {btnVisiblity ? null : <Button variant='contained' sx={{ padding: "2px", height: '40px', width: '40px', flex: 0.009 }}><Delete /></Button>}


            </div>

          </DialogContentText>
          <Box mt={3}>
            <form onSubmit={handleSubmit}>
              <Grid spacing={3} container>
                <Grid item xs={12} lg={4}>
                  <FormLabel>Login Account</FormLabel>
                  <TextField
                    id="firstname"
                    size="small"
                    variant="outlined"
                    fullWidth
                    value={values.firstname}
                    onChange={(e) => setValues({ ...values, firstname: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} lg={4}>
                  <FormLabel>Merchant Name</FormLabel>
                  <TextField
                    id="lastname"
                    size="small"
                    variant="outlined"
                    fullWidth
                    value={values.lastname}
                    onChange={(e) => setValues({ ...values, lastname: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} lg={4}>
                  <FormLabel>Contacts</FormLabel>
                  <TextField
                    id="contacts"
                    size="small"
                    variant="outlined"
                    fullWidth
                    value={values.department}
                    onChange={(e) => setValues({ ...values, department: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} lg={4}>
                  <FormLabel>Contact Number</FormLabel>
                  <TextField
                    id="contacts"
                    size="small"
                    variant="outlined"
                    fullWidth
                    value={values.department}
                    onChange={(e) => setValues({ ...values, department: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} lg={4}>
                  <FormLabel>Whether Collect the money</FormLabel>
                  <ControlledStateAutocomplete small={true} />

                </Grid>
                <Grid item xs={12} lg={4}>
                  <FormLabel>Merchant Address</FormLabel>
                  <TextField
                    id="phone"
                    size="small"
                    variant="outlined"
                    fullWidth
                    value={values.phone}
                    onChange={(e) => setValues({ ...values, phone: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} lg={4}>
                  <FormLabel>Exchange Rate</FormLabel>
                  <TextField
                    id="email"
                    type="email"
                    required
                    size="small"
                    variant="outlined"
                    fullWidth
                    value={values.email}
                    onChange={(e) => setValues({ ...values, email: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} lg={4}>
                  <FormLabel>Merchant Type</FormLabel>
                  <ControlledStateAutocomplete small={true} />

                </Grid>
                <Grid item xs={12} lg={4}>
                  <FormLabel>QR Code string</FormLabel>
                  <TextField
                    id="notes"
                    size="small"

                    variant="outlined"
                    fullWidth
                    value={values.notes}
                    onChange={(e) => setValues({ ...values, notes: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} lg={4}>
                  <FormLabel>Service Call</FormLabel>
                  <TextField
                    id="notes"
                    size="small"

                    variant="outlined"
                    fullWidth
                    value={values.notes}
                    onChange={(e) => setValues({ ...values, notes: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} lg={8}>
                  <FormLabel>Remark</FormLabel>
                  <TextField
                    id="notes"
                    size="small"

                    variant="outlined"
                    fullWidth
                    value={values.notes}
                    onChange={(e) => setValues({ ...values, notes: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} lg={12}>
                  <FormLabel>Service Description</FormLabel>
                  <TextField
                    id="notes"
                    size="small"
                    multiline
                    rows="4"
                    variant="outlined"
                    fullWidth
                    value={values.notes}
                    onChange={(e) => setValues({ ...values, notes: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} lg={8}>
                  <FormLabel>Reminder Contact</FormLabel>
                  <TextField
                    id="notes"
                    size="small"
                    multiline
                    rows="4"
                    variant="outlined"
                    fullWidth
                    value={values.notes}
                    onChange={(e) => setValues({ ...values, notes: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} lg={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mr: 1 }}
                    type="submit"
                    disabled={values.firstname.length === 0 || values.notes.length === 0}
                  >
                    Submit
                  </Button>
                  <Button variant="contained" color="error" onClick={toggle}>
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CustomerAdd;
