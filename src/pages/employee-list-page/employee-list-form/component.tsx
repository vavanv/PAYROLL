import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import MUIDataTable from 'mui-datatables';

import {
  Typography,
  Divider,
  withStyles,
  WithStyles,
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core';
import { GridContainer, GridItem } from '../../../components';
import { Employee } from '../../../store/employee-list/types';
import { Payload } from '../../../store/types';
import { POPUP_TYPES } from '../../../store/ui/show-popup/constants';

import { CustomToolbar } from './components/custom-toolbar';
import { styles } from './styles';
import { messages } from './messages';

interface Props extends WithStyles<typeof styles>, InjectedIntlProps {
  classes: any;
  fetchEmployeeList: (params: any) => void;
  employeeList: Employee[];
  showPopup: ({ id, type }: Payload) => void;
}

function EmployeeListForm(props: Props) {
  React.useEffect(() => {
    props.fetchEmployeeList(null);
    // eslint-disable-next-line
  }, []);

  const { classes, employeeList, showPopup, intl } = props;

  const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MuiMenuItem: {
          root: {
            fontSize: '14px',
            minHeight: '24px',
          },
        },
        MuiSelect: {
          selectMenu: {
            fontSize: '14px',
            minHeight: '24px',
          },
        },
        MuiPaper: {
          root: {
            backgroundColor: '#fafafa',
          },
          elevation4: {
            boxShadow: 'none',
          },
        },
      },
    });

  const columns = [
    {
      label: 'id',
      name: 'id',
      options: {
        filter: false,
        searchable: false,
        display: 'false' as 'false',
      },
    },
    {
      label: intl.formatMessage({ id: messages.department }),
      name: 'department',
    },
    {
      label: intl.formatMessage({ id: messages.position }),
      name: 'position',
    },
    {
      label: intl.formatMessage({ id: messages.firstName }),
      name: 'firstName',
      options: {
        filter: false,
      },
    },
    {
      label: intl.formatMessage({ id: messages.lastName }),
      name: 'lastName',
      options: {
        filter: false,
      },
    },
    {
      label: intl.formatMessage({ id: messages.email }),
      name: 'email',
      options: {
        filter: false,
      },
    },
  ];

  const tooltipTitle = intl.formatMessage(
    { id: messages.addSmth },
    {
      smth: intl.formatMessage({ id: messages.employee }),
    },
  );

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>
          <Typography variant="h6" className={classes.titleMargin} align="left">
            {intl.formatMessage({ id: messages.employees })}
          </Typography>
          <Divider />
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <MuiThemeProvider theme={getMuiTheme()}>
                <MUIDataTable
                  title=""
                  data={employeeList}
                  columns={columns}
                  options={{
                    filterType: 'dropdown',
                    responsive: 'scrollMaxHeight',
                    selectableRows: 'none',
                    print: false,
                    viewColumns: false,
                    download: false,
                    onRowClick: (rowData: string[]) => {
                      showPopup({ id: rowData[0], type: POPUP_TYPES.employee });
                    },
                    customToolbar: () => {
                      return <CustomToolbar showPopup={showPopup} tooltipTitle={tooltipTitle} />;
                    },
                  }}
                />
              </MuiThemeProvider>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export const EmployeeListFormComponent = injectIntl(withStyles(styles)(EmployeeListForm));
