const MenuTriangleAtom = {
  '&::before': {
    content: "''",
    position: 'absolute',
    top: '-12px',
    right: '-1px',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: '0 11px 11px 11px',
    borderColor: 'transparent transparent #C0DDF8 transparent',
  },
  '&::after': {
    content: "''",
    position: 'absolute',
    top: '-10px',
    right: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: '0 10px 10px 10px',
    borderColor: 'transparent transparent #ffffff transparent',
  },
};

export default MenuTriangleAtom;
