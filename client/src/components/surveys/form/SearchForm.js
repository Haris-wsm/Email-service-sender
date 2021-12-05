import React from 'react';

export default function SearchForm(props) {
  const { handleChange, handleSubmit, search } = props;
  return (
    <div className="card ">
      <div className="card-content grey-text">
        <span className="card-title">Search</span>

        <form onSubmit={handleSubmit}>
          <div class="input-field survetlist">
            <select name="sorted" onChange={handleChange} value={search}>
              <option value="" disabled defaultValue>
                Choose your option
              </option>
              <option name="title" value="title">
                Newest
              </option>
              <option name="choice" value="yes&&val=-1">
                Most votes (yes)
              </option>
              <option name="choice" value="no&&val=-1">
                Most votes (no)
              </option>
              <option name="choice" value="yes&&val=1">
                Least votes (yes)
              </option>
              <option name="choice" value="no&&val=1">
                Least votes (no)
              </option>
            </select>
            <label>Sorted By</label>
          </div>

          <button
            class="btn waves-effect waves-light "
            type="submit"
            name="action"
          >
            Submit
            <i class="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  );
}
