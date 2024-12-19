// estilo gerais form
import { FormContain, FormContent, FormWrapper } from "./Form.style";

// estilo button
import { Button } from "../../styles/components/Button.styles";

const Form = () => {
  return (
    <FormWrapper>
      <FormContent>
        <div className="container-desc-form">
          <h2 className="title">Make An Appointment Experience Elegance</h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet cons adipisicing elit. Consequatur odit
            labore vel incidunt eveniet assumenda.
          </p>
          <div className="detail">
            <span></span>
            <p>Or</p>
            <span></span>
          </div>
          <p className="number">Call Us +123 456 789</p>
        </div>
        <FormContain>
          <div className="container-input">
            <label htmlFor="name">Full Name</label>
            <input
              className="input"
              type="text"
              id="name"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="container-input">
            <label htmlFor="email">Email Address</label>
            <input
              className="input"
              type="email"
              id="email"
              placeholder="youremail@email.com"
              required
            />
          </div>
          <div className="container-input">
            <label htmlFor="service">Select Service*</label>
            <select
              className="input input-select"
              name="service"
              id="service"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="plano1">Plan Expert</option>
              <option value="plano2">Plan Intermediate</option>
              <option value="plano3">Plan Tradicional</option>
            </select>
          </div>
          <div className="container-input">
            <label htmlFor="date">Select Date and Time*</label>
            <input className="input" type="date" id="date" required />
          </div>
          <Button>Book Appointment</Button>
        </FormContain>
      </FormContent>
    </FormWrapper>
  );
};

export default Form;
