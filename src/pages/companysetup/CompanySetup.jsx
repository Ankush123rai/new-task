import React, { useEffect,useRef } from "react";
import style from "./CompanySetup.module.css";
import { Autocomplete, Grid, TextField } from "@mui/material";


const CompanySetup = () => {
  const industry = [];
  const country = [];
  const finYear = [];
  const companyRef = useRef(null);

    const handleUpload = (e) => {
        e.preventDefault();
        const file = companyRef.current.files[0];
        console.log(file);
    }


  useEffect(() => {
    async function fetchIndustryData() {
      try {
        const Credentials = btoa("test:test123");

        const response = await fetch(
          "http://knowforth.online:3052/api/GetIndustryType",
          {
            headers: {
              Authorization: `Basic ${Credentials}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          // setIndustry(data);
          data.map((element) => {
            industry.push(element.indtype);
          });
        } else {
          console.error("Failed to fetch industry data.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchIndustryData();

    async function fetchCountryData() {
      try {
        const Credentials = btoa("test:test123");
        const res = await fetch(
          "http://knowforth.online:3052/api/GetCountries",
          {
            headers: {
              Authorization: `Basic ${Credentials}`,
            },
          }
        );
        if (res.ok) {
          const data = await res.json();
          data.map((element) => {
            country.push(element.countryname);
          });
          console.log("log",countryname);
        } else {
          console.error("Failed to fetch country data.");
        }

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchCountryData();
    
    async function fetchFinYearData() {
      try {
        const Credential = btoa("test:test123");
        const res = await fetch(
          "http://knowforth.online:3052/api/GetFisYear",
          {
            headers: {
                  Authorization: `Basic ${Credential}`,
            },
          }
        );
        if (res.ok) {
          const data = await res.json();
          data.map((element) => {
            finYear.push(element);
          });
          console.log("log",element);
        } else {
          console.error("Failed to fetch country data.");
        } 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }


  }, []);

  return (
    <div className={style.companySetup}>
      <div className={style.container}>
        <h1 className={style.heading}>Company Setup</h1>
        <form action="">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                className={style.input}
                id="companyName"
                label="Company Name"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <div className={style.flex_div}>
                <TextField
                  className={style.input}
                  variant="outlined"
                  value={companyRef.current?.files[0]?.name || ""}
                  onClick={() => companyRef.current.click()}
                />
                <button 
                className={style.upload_btn}
                onClick={() => companyRef.current.click()}
                >Upload</button>
              </div>
              <input type="file" 
              ref={companyRef}
              style={{display:"none"}}
              onChange={handleUpload}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={industry}
                renderInput={(params) => (
                  <TextField {...params} label="Industry" variant="outlined" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                className={style.input}
                id="businessType"
                options={["Sole Proprietorship", "Partnership", "LLC"]}
                renderInput={(params) => (
                  <TextField  {...params} label="Business Type" variant="outlined" />
                )}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                className={style.input}
                id="businessLocation"
                label="Business Location/Country"
                options={country}
                renderInput={(params) => (
                  <TextField {...params} label="Business Location/Country" variant="outlined" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                className={style.input}
                id="state"
                label="State"
                options={country}
                renderInput={(params) => (
                  <TextField {...params} label="State" variant="outlined" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                className={style.input}
                id="street1"
                label="Street-1"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                className={style.input}
                id="street2"
                label="Street-2"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                className={style.input}
                id="city"
                label="City/Town/Village"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                className={style.input}
                id="pincode"
                label="Pin Code"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                className={style.input}
                id="Phone"
                label="Phone Number"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                className={style.input}
                id="email"
                label="E-mail"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                className={style.input}
                id="website"
                label="Website"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Autocomplete
                className={style.input}
                id="finanicalYear"
                options={finYear}
                renderInput={(params) => (
                  <TextField {...params} label="Financial Year" variant="outlined" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Autocomplete
                className={style.input}
                id="Language"
                label="Language"
                options={["English", "Hindi", "Assamese"]}
                renderInput={(params) => (
                  <TextField {...params} label="Language" variant="outlined" />
                )}
              />
            </Grid><Grid item xs={12} sm={3}>
               <Autocomplete
                className={style.input}
                id="Date"
                options={["2021", "2022", "2023"]}
                renderInput={(params) => (
                  <TextField {...params} label="Date Format" variant="outlined" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                className={style.input}
                id="pan"
                label="PAN No."
                variant="outlined"
              />
            </Grid>
          </Grid>
          <button className={style.save_btn} type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompanySetup;
