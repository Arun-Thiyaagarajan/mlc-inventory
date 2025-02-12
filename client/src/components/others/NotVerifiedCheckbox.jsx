
const NotVerifiedCheckbox = () => {
  return (
    <StyledWrapper>
      <div className="col-md-6 reject-checkbox">
        <div className="mb-2 text-center">
          <div className="checkbox-wrapper">
            <input name="ehs_approval" className="form-check-label custom-radio-label" id="Rejected" type="checkbox" />
            <label htmlFor="Rejected">
              <div className="tick_mark">
                <div className="cross" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

export default NotVerifiedCheckbox;
