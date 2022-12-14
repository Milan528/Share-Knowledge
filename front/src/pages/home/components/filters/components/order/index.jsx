import React from 'react';
import Tab from '@mui/material/Tab';
import Time from '@mui/icons-material/AccessTime';
import { OrdersContainer } from './styles';
import Tabs from '@mui/material/Tabs';
import { useDispatch, useSelector } from 'react-redux';
import { setOrder } from '../../../../redux/slices';
import { loadPostsForHomepageFilters } from '../../../../reduxThunk/actions';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { orderEnum } from '../../../../../../utils/enums';

const Order = () => {
  const order = useSelector((state) => state.home.order);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    dispatch(setOrder(newValue));
    dispatch(loadPostsForHomepageFilters());
  };

  return (
    <OrdersContainer>
      <Tabs
        value={order}
        onChange={handleChange}
        TabIndicatorProps={{ style: { backgroundColor: '#0099feba' } }}
        textColor="inherit"
        variant="scrollable"
        scrollButtons={true}
        allowScrollButtonsMobile
      >
        <Tab value={orderEnum.newest} label="Najnovije" icon={<Time />} />
        <Tab
          value={orderEnum.like}
          label="Ocena"
          icon={<ThumbUpOffAltIcon />}
        />
        <Tab
          value={orderEnum.dislike}
          label="Ocena"
          icon={<ThumbDownOffAltIcon />}
        />
      </Tabs>
    </OrdersContainer>
  );
};

export default Order;
