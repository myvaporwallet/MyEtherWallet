import RegisterDomain from './RegisterDomain';
import VnsBidContainer from './containers/VnsBidContainer';
import InitialVNSStateContainer from './containers/InitialVNSStateContainer';
import NameForbiddenVNSContainer from './containers/NameForbiddenVNSContainer';
import AlreadyOwnedVNSContainer from './containers/AlreadyOwnedVNSContainer';
export default {
  path: 'dapps/register-domain',
  component: RegisterDomain,
  props: true,
  children: [
    {
      path: '',
      name: 'VNS initial state',
      component: InitialVNSStateContainer,
      props: true
    },
    {
      path: 'auction',
      name: 'Bid on VNS and start auction',
      component: VnsBidContainer,
      props: true
    },
    {
      path: 'bid',
      name: 'Bid on VNS',
      component: VnsBidContainer,
      props: true
    },
    {
      path: 'owned',
      name: 'VNS owned',
      component: AlreadyOwnedVNSContainer,
      props: true
    },
    {
      path: 'reveal',
      name: 'Reveal VNS bid',
      component: VnsBidContainer,
      props: true
    },
    {
      path: 'forbidden',
      name: 'VNS forbidden',
      component: NameForbiddenVNSContainer,
      props: true
    }
  ]
};
