import { useState, useEffect } from "react";

export default function useGuest() {
  const [guests, setGuests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/MarzeeQ/guests")
      .then((res) => res.json())
      .then((json) => {
        setGuests(json.data);

        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setIsLoading(false);
      });
  }, []);
  return { guests, isLoading, error };
}
