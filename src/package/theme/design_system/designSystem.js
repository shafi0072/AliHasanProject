import { makeStyles } from '@material-ui/core/styles';
import ButtonAtom from './Shared/atoms/Button_atom';
import HeaderOrganism from './Shared/organisms/Header/Header_organism';

const DesignSystem = {
  templates: {},
  atoms: {
    ButtonAtom: () => makeStyles(ButtonAtom),
  },
  molecules: {},
  organisms: {
    Header: {
      HeaderOrganism: () => makeStyles(HeaderOrganism),
    },
  },
  pages: {},
};

export default DesignSystem;
