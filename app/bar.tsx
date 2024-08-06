interface Props {
  height: number;
};

const Bar: React.FC<Props> = (props: Props): JSX.Element => {
  const { height } = props;

  return (
    <div class="border-solid border-2 border-black" style={{
      height: height || 200,
      width: '50px',
      backgroundColor: 'green',
      rightPadding: '10px'
    }}>
    </div>
  )
}

export default Bar;
