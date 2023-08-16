import * as React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import { format } from 'date-fns';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  IconButton,
  Tooltip,
  FormControlLabel,
  Typography,
  Avatar,
  TextField,
  InputAdornment,
  Paper,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import { IconDotsVertical, IconEdit, IconFilter, IconSearch, IconTrash } from '@tabler/icons-react';
import CustomCheckbox from '../../forms/theme-elements/CustomCheckbox';
import { useDispatch, useSelector } from '../../../store/Store';
import { fetchProducts } from '../../../store/apps/eCommerce/ECommerceSlice';
import { ProductType } from '../../../types/apps/eCommerce';
import CustomSwitch from '../../forms/theme-elements/CustomSwitch';
import { CustomerType } from '../../../types/apps/customer';
import CustomerAdd from '../../apps/contacts/AddCustomer';


function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }

    return a[1] - b[1];
  });

  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: string;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'id',
    numeric: false,
    disablePadding: false,
    label: 'ID',

  },
  {
    id: 'login',
    numeric: false,
    disablePadding: false,
    label: 'Log in Account',
  },

  {
    id: 'merchant_name',
    numeric: false,
    disablePadding: false,
    label: 'Merchant Name',
  },
  {
    id: 'superior_business_name',
    numeric: false,
    disablePadding: false,
    label: 'Superior Business Name',
  },
  {
    id: 'contacts',
    numeric: false,
    disablePadding: false,
    label: 'Contacts',
  },
  {
    id: 'contacts_number',
    numeric: false,
    disablePadding: false,
    label: 'Contacts Number',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'coupon_code',
    numeric: false,
    disablePadding: false,
    label: 'Coupon Code',
  },
  {
    id: 'remarks',
    numeric: false,
    disablePadding: false,
    label: 'Remarks',
  },
  {
    id: 'registration_time',
    numeric: false,
    disablePadding: false,
    label: 'Registration Time',
  },
  {
    id: 'action',
    numeric: false,
    disablePadding: false,
    label: 'Action',
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: any) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property: any) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <CustomCheckbox
            color="primary"
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
  handleSearch: React.ChangeEvent<HTMLInputElement> | any;
  search: string;
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { numSelected, handleSearch, search } = props;
  const [addModal,setAddModal] = React.useState(false);

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle2" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Box sx={{ flex: '1 1 100%', display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconSearch size="1.1rem" />
                </InputAdornment>
              ),
            }}
            placeholder="Search Point"

            onChange={handleSearch}
            value={search}
          />
          <CustomerAdd btnVisiblity={true} dialogTitle={"Add New Point"} btnLbl={"Add Point"}  modal={addModal} setModal={setAddModal} />

        </Box>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <IconTrash width="18" />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <IconFilter size="1.2rem" />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

const MachinesList = () => {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<any>('calories');
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [modify,setModifyModal] = React.useState(false);

  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const dispatch = useDispatch();

  //Fetch Products
  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // const getProducts: ProductType[] = useSelector((state) => state.ecommerceReducer.products);
  // const getProducts: CustomerType[] = useSelector((state) => state.ecommerceReducer.products);


  const sampleCustomers: CustomerType[] = [
    {
      id: '1',
      login: 'john_doe',
      merchant_name: 'ABC Merchants',
      superior_business_name: 'Enterprises',
      contacts: 800,
      contacts_number: 1234567890,
      status: 'Active',
      coupon_code: 'SALE20',
      remarks: 'Has been a loyal customer',
      registration_time: '2023-08-14',
    },
    {
      id: '2',
      login: 'jane_smith',
      merchant_name: 'XYZ Traders',
      superior_business_name: 'Global Inc.',
      contacts: 12,
      contacts_number: 9876543210,
      status: 'Inactive',
      coupon_code: 'DISCOUNT15',
      remarks: 'Regular shopper',
      registration_time: '2023-08-12',
    },
    // Add more sample data here...
    {
      id: '3',
      login: 'user_1',
      merchant_name: 'Merchant 1',
      superior_business_name: 'Business 1',
      contacts: 222,
      contacts_number: 1234567891,
      status: 'Active',
      coupon_code: 'CODE1',
      remarks: 'Random remarks 1',
      registration_time: '2023-08-15',
    },
    // ... Repeat the pattern to reach a total of 20 records
  ];

  const [rows, setRows] = React.useState<CustomerType[]>(sampleCustomers);
  const [search, setSearch] = React.useState('');



  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const filteredRows: ProductType[] = getProducts.filter((row) => {
    //   return row.title.toLowerCase().includes(event.target.value);
    // });
    // setSearch(event.target.value);
    // setRows(filteredRows);
  };

  // This is for the sorting
  const handleRequestSort = (event: React.MouseEvent<unknown>, property: any) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // This is for select all the row
  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n: any) => n.title);
      setSelected(newSelecteds);

      return;
    }
    setSelected([]);
  };

  // This is for the single row sleect
  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const theme = useTheme();
  const borderColor = theme.palette.divider;

  return (
    <Box>
      <Box>
    <CustomerAdd dialogTitle={"Modification For Point"} btnLbl={"Add Point"} btnVisiblity={false} setModal={setModifyModal} modal={modify} />

        <EnhancedTableToolbar
          numSelected={selected.length}
          search={search}
          handleSearch={(event: any) => handleSearch(event)}
        />
        <Paper variant="outlined" sx={{ mx: 2, mt: 1, border: `1px solid ${borderColor}` }}>
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={dense ? 'small' : 'medium'}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {rows.map((row: CustomerType, index) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <CustomCheckbox
                            onClick={(event) => handleClick(event, row.id)}

                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                          />
                        </TableCell>

                        <TableCell>
                          <Typography>{row.id}</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography>{row.login}</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography>{row.merchant_name}</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography>{row.superior_business_name}</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography>{row.contacts}</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography>{row.contacts_number}</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography>{row.status}</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography>{row.coupon_code}</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography>{row.remarks}</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography>{row.registration_time}</Typography>
                        </TableCell>

                        <TableCell>
                          <Tooltip title="Edit">

                            <IconButton onClick={() => { setModifyModal(true);}} size="small">
                              <IconEdit size="1.1rem" />
                            </IconButton>
                          </Tooltip>
                        </TableCell>

                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        <Box ml={2}>
          <FormControlLabel
            control={<CustomSwitch checked={dense} onChange={handleChangeDense} />}
            label="Dense padding"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MachinesList;
