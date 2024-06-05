type Props = {
  content: string;
};

const EmailTemplate = (props: Props) => {
  const { content } = props;
  return <div>{content}</div>;
};

export default EmailTemplate;
