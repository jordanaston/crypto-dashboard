type Props = {
  color: string;
};

const SvgComponent: React.FC<Props> = ({ color }: Props): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width={8} height={6} fill={color}>
    <path
      fill={color}
      d="M3.584.624a.5.5 0 0 1 .832 0l3.066 4.599A.5.5 0 0 1 7.066 6H.934a.5.5 0 0 1-.416-.777L3.584.624Z"
    />
  </svg>
);
export default SvgComponent;
