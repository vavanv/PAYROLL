import * as React from 'react';
import { Typography, withStyles, WithStyles } from '@material-ui/core';
import { GridContainer, GridItem, InfoArea } from '../../../../components';

import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  classes: any;
}

function ProductSectionComponent(props: Props) {
  return (
    <div className={props.classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={props.classes.title}>Let`s talk product</h2>
          <Typography variant="h6" align="center">
            {'This is the paragraph where you can write more details about your.'}
          </Typography>
        </GridItem>
      </GridContainer>
      <>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Free Chat"
              description=""
              icon="fa fa-commenting-o"
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Verified Users"
              description=""
              icon="fa fa-user-circle-o"
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Fingerprint"
              description=""
              icon="fa fa-hand-o-up"
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </>
    </div>
  );
}

export const ProductSection = withStyles(styles)(ProductSectionComponent);
