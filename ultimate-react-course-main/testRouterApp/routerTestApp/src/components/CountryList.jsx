import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css"

function CountryList({countries}) {
  const uniqueCountries = countries.reduce((arr, city)=> {
    if (!arr.map((el)=> el.country).includes(city.country))
      return [...arr, {country: city.country, emoji: city.emoji}];
    else return arr;
  },[])

  return (
    <ul className={styles.countryList}>
      {uniqueCountries.map((country)=> (
        <CountryItem country={country} key={country.country}/>  
      )
      )}
    </ul>
  );
}

export default CountryList;