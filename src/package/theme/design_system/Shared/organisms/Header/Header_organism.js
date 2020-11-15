import theme from '../../../../theme';
import LogoMolecule from '../../molecules/Header/Menu/Logo_molecule';

const HeaderOrganism = {
  mainNav: {
    overflow: 'hidden',
    padding: '0 40px',
    height: 110,
    background: theme.palette.common.white,
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
  },
  ...LogoMolecule,
};

export default HeaderOrganism;
