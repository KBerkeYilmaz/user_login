const Main = (props) => {
  const classes = "main" + props.className;
  return <main className={`${classes} min-h-screen max-h-fit w-screen flex flex-col`}>{props.children}</main>;
};

export default Main;
