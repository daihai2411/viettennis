type IProps = {
  phoneNumber: string;
};

export const TextPhoneNumber: React.FC<IProps> = ({ phoneNumber }) => {
  return <div style={{ fontSize: 24 }}>{phoneNumber}</div>;
};
