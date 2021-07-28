import styled from "styled-components";

// const BoxButton = styled.div`
//   border-radius: 6px;
//   box-shadow: 0 0.5em 10em -0.125em rgb(10 10 10 / 25%),
//     0 0 0 1px rgb(10 10 10 / 6%);
//   padding: 16px;
//   background: #eee;
// `;

const COLORS = {
  primary: {
    "--main": "indigo",
    "--accent": "white",
  },
  secondary: {
    "--main": "lavenderblush",
    "--accent": "indigo",
  },
};

function BoxButton({ variant = "fill", color = "primary", ...props }) {
  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  }

  return <Component style={COLORS[color]} {...props} />;
}

const ButtonBase = styled.button`
  cursor: pointer;
  font-size: 4rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 15%;
  text-decoration: none;
`;

const FillButton = styled(ButtonBase)`
  background-color: var(--main);
  color: var(--accent);

  &:hover {
    opacity: 0.9;
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: white;
  color: var(--main);
  border: 2px solid var(--main);

  &:hover {
    background: hsl(235deg 85% 97%);
  }
`;

export default BoxButton;
