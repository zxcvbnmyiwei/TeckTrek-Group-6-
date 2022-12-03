import styled from "styled-components";

const Logo = () => {
    return (
      <Wrapper className="display">
        <h2>
          DigiBank
        </h2>
      </Wrapper>
    );
  };
  
  const Wrapper = styled.nav`
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  `;
  
  export default Logo;