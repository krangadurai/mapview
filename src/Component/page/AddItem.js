import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLocationData } from "../../app/reducer";
const AddItem = () => {
  const latitudeRef = useRef(null);
  const longitudeRef = useRef(null);
  const [Location, setLocation] = useState("");
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      latitude: latitudeRef.current.value,
      longitude: longitudeRef.current.value,
      Location: Location,
    };
    setFormData(formData);

    dispatch(setLocationData(formData))
    // TODO: Save formData as JSON or perform any other desired action
  };



  const fetchSuggestions = async (value) => {
    try {
      const response = await axios.get(
        `https://api.locationiq.com/v1/autocomplete?q=${value}&autocomplete=1&key=pk.87f2d9fcb4fdd8da1d647b46a997c727&format=json&dedupe=1`
      );

      // Extract the suggestions from the response
      const suggestions = response.data;
      setSuggestions(suggestions);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const [suggestions, setSuggestions] = useState([]);

  const handleLocationInputChange = (event) => {
    const value = event.target.value;
    setLocation(value);

    // Fetch suggestions from the API
    fetchSuggestions(value);
  };

  const handleSuggestionSelect = (suggestion) => {
    // Update the input value with the selected suggestion
    setLocation(suggestion.address.name);
    latitudeRef.current.value = suggestion.lat;
    longitudeRef.current.value = suggestion.lon;
    setSuggestions([]);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="row g-3">
          <div className="col-lg-6">
            <div
              class="autoComplete_wrapper"
              role="combobox"
              aria-owns="autoComplete_list_2"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <input
                id="autoCompleteCars"
                type="text"
                dir="ltr"
                spellcheck="false"
                autocomplete="off"
                autocapitalize="off"
                aria-controls="autoComplete_list_2"
                aria-autocomplete="both"
                placeholder="Search for Location..."
                value={Location}
                className="form-control"
                onChange={handleLocationInputChange}
              />
             <ul id="autoComplete_list_2" role="listbox" hidden="">
                {suggestions.map((suggestion) => (
                  <li
                    id="autoComplete_result_0"
                    role="option"
                    key={suggestion.place_id}
                    onClick={() => handleSuggestionSelect(suggestion)}
                  >
                    {suggestion.display_name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-floating">
              <input
                ref={latitudeRef}
                type="text"
                value={latitudeRef.current?.value || ""}
                className="form-control"
                onChange={(e) => (latitudeRef.current.value = e.target.value)}
              />
              <label htmlFor="latitudeInput">Latitude</label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-floating">
              <input
                ref={longitudeRef}
                type="text"
                value={longitudeRef.current?.value || ""}
                className="form-control"
                onChange={(e) => (longitudeRef.current.value = e.target.value)}
              />
              <label htmlFor="longitudeInput">Longitude</label>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="text-end">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>

      {Object.keys(formData).length > 0 && (
        <div>
          <h2>Form Data:</h2>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default AddItem;
