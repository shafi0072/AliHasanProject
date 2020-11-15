const overrideTheme = (theme) => {
  const overrides = {
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            color: '#000000',
            letterSpacing: '1px',
          },
        },
      },
      MuiAppBar: {
        root: {
          zIndex: 0,
        },
      },
      MuiPaper: {
        rounded: {
          borderRadius: '10px',
        },
        elevation1: {
          boxShadow: '0px 2px 10px rgba(192, 221, 248, 0.25)',
        },
      },
    },
  };

  return { ...theme, ...overrides };
};

export default overrideTheme;
