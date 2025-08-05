import OLXlogo from "../assest/logotipo.svg";

const Logo = ({ w, h }) => {
  return (
    <img src={OLXlogo} alt="OLX Logo" width={w} height={h} />
  );
};

export default Logo;
