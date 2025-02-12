import StyledWrapper from "../../assets/wrappers/VerifiedCheckbox";

const VerifiedCheckbox = ({ checked }) => {
  return (
    <StyledWrapper>
      <div className="checkbox-wrapper animate-bounce">
        <input id="_checkbox-26" type="checkbox" checked={checked} readOnly/>
        <label htmlFor="_checkbox-26">
          <div className="tick_mark" />
        </label>
      </div>
    </StyledWrapper>
  );
};

export default VerifiedCheckbox;
