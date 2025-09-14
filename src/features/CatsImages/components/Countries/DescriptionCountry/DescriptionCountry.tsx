import Flag from "react-world-flags";
import "./descriptionStyle.css";
import { useListCountriesDiscriptions } from "./useListCountriesDescriptions";

export const DescriptionCountry = () => {
  const { countryId, currentCountries } = useListCountriesDiscriptions();

  return (
    <div>
      {currentCountries.map((country) =>
        country.id === countryId ? (
          <article className="container-description" key={country.id}>
            <Flag code={country.code} className="country-flag" />
            <h1>{country.name}</h1>
            <p>{country.description}</p>
            <div className="containerImagesCountries">
              <div className="wrapperImages">
                {country.images?.map((image) => (
                  <img
                    key={image.id}
                    src={image.url}
                    className="images-currentCountry"
                  />
                ))}
              </div>
            </div>
          </article>
        ) : null
      )}
    </div>
  );
};
