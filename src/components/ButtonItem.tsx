const ButtonItem = (props: any) => {
  const { classes, content } = props;

  return <button class={`btn ${classes}`}>{content}</button>;
};

export default ButtonItem;
