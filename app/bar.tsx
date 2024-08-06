interface Props {
  height: number;
};

const Bar: React.FC<Props> = (props: Props): JSX.Element => {
  const { height } = props;

  return (
    <div class="border-solid border-2 border-black px-2" style={{
      height: height || 200,
      width: '40px',
      backgroundColor: 'green',
    }}>
    </div>
  )
}

export default Bar;
