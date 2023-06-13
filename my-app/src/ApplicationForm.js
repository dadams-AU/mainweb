import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ApplicationForm.css';

export default function ApplicationForm() {
  const [state, handleSubmit] = useForm("xnqyenve");

  if (state.succeeded) {
    return <p>Application submitted successfully!</p>;
  }

  return (
<div className="form-wrapper">
    <form onSubmit={handleSubmit}>
	  
      <div className="name-field">
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input id="firstName" type="text" name="firstName" required />
          <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="mi">M.I.:</label>
          <input id="mi" type="text" name="mi" style={{ width: '30px' }} maxLength="1" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input id="lastName" type="text" name="lastName" required />
          <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
        </div>
      </div>
	  
	  	<label htmlFor="CWID">CWID:</label>
	  	<input id="CWID" type="text" name="CWID" pattern="\d{9}" required/>
	  	<ValidationError prefix="CWID" field="CWID" errors={state.errors} />
	 

      <label htmlFor="class">Class:</label>
      <select id="class" name="class" required>
        <option value="">Select...</option>
        <option value="sophomore">Sophomore</option>
        <option value="junior">Junior</option>
        <option value="senior">Senior</option>
        <option value="graduate">Graduate</option>
      </select>
      <ValidationError prefix="Class" field="class" errors={state.errors} />

      <label htmlFor="expectedGraduation">Expected Graduation:</label>
      <input id="expectedGraduation" type="date" name="expectedGraduation" required />
      <ValidationError prefix="Expected Graduation" field="expectedGraduation" errors={state.errors} />

      <label htmlFor="email">Email:</label>
      <input id="email" type="email" name="email" required />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

<div className="address-field">
    <div>
      <label htmlFor="address1">Address Line 1:</label>
      <input id="address1" type="text" name="address1" required />
      <ValidationError prefix="Address Line 1" field="address1" errors={state.errors} />
    </div>
    <div>
      <label htmlFor="address2">Address Line 2:</label>
      <input id="address2" type="text" name="address2" />
    </div>
</div>

<div className="city-state-zip-field">
    <div>
      <label htmlFor="city">City:</label>
      <input id="city" type="text" name="city" required />
      <ValidationError prefix="City" field="city" errors={state.errors} />
    </div>
    <div>
      <label htmlFor="state">State:</label>
      <input id="state" type="text" name="state" required />
      <ValidationError prefix="State" field="state" errors={state.errors} />
    </div>
    <div>
      <label htmlFor="zip">Zip:</label>
      <input id="zip" type="text" name="zip" required />
      <ValidationError prefix="Zip" field="zip" errors={state.errors} />
    </div>
</div>

      

      <label htmlFor="phone">Phone:</label>
      <input id="phone" type="tel" name="phone" required />
      <ValidationError prefix="Phone" field="phone" errors={state.errors} />

<div className="gpa-field">
    <div>
      <label htmlFor="cumulativeGPA">Cumulative GPA:</label>
      <input id="cumulativeGPA" type="number" step="0.01" name="cumulativeGPA" required />
      <ValidationError prefix="Cumulative GPA" field="cumulativeGPA" errors={state.errors} />
    </div>
    <div>
      <label htmlFor="politicalScienceGPA">Political Science GPA:</label>
      <input id="politicalScienceGPA" type="number" step="0.01" name="politicalScienceGPA" required />
      <ValidationError prefix="Political Science GPA" field="politicalScienceGPA" errors={state.errors} />
    </div>
</div>

<div className="units-field">
    <div>
      <label htmlFor="lowerDivisionUnits">Number of Lower Division Units Completed in Political Science:</label>
      <input id="lowerDivisionUnits" type="number" name="lowerDivisionUnits" required />
      <ValidationError prefix="Number of Lower Division Units Completed in Political Science" field="lowerDivisionUnits" errors={state.errors} />
    </div>
    <div>
      <label htmlFor="upperDivisionUnits">Number of Upper Division Units Completed in Political Science:</label>
      <input id="upperDivisionUnits" type="number" name="upperDivisionUnits" required />
      <ValidationError prefix="Number of Upper Division Units Completed in Political Science" field="upperDivisionUnits" errors={state.errors} />
    </div>
</div>
      
      
      <button type="submit" disabled={state.submitting}>Submit</button>
    </form>
</div>

  );
}
