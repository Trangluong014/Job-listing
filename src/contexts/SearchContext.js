import React, { useState, createContext, useEffect } from "react";
import jobs from "../data.json";

const search = {
  arr: jobs,
  keyword: "",
  change: () => {},
};
export const SearchContext = createContext(search);

function SearchContextProvider({ children }) {
  const [jobsSearch, setJobsSearch] = useState(jobs);
  const [searchInput, setSearchInput] = useState("");
  const searchJob = (jobs, keyword) => {
    return jobs.filter((job) => {
      return (
        job.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 ||
        job.city.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 ||
        job.description.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 ||
        job.skills.join().toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      );
    });
  };
  useEffect(() => {
    setJobsSearch(searchJob(jobs, searchInput));
  }, [searchInput]);

  return (
    <SearchContext.Provider
      value={{
        arr: jobsSearch,
        keyword: searchInput,
        change: setSearchInput,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContextProvider;
