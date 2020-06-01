let covid19 = "https://api.covid19api.com/summary";
window
  .fetch(covid19)
  .then((data) => {
    data
      .json()
      .then((covid) => {
        console.log(covid.Global);
        let Global = covid.Global;
        document.getElementById("covidBlock").innerHTML = `
        <section>
        <div>
             <h4 class="badge badge-danger">Total Confirmed</h4>
             <span>${Global.TotalConfirmed}</span>
          </div>
          <div>
             <h4 class="badge badge-danger">Total Deaths</h4>
             <span>${Global.TotalDeaths}</span>
          </div>
          <div>
             <h4 class="badge badge-danger">New Confirmed</h4>
             <span>${Global.NewConfirmed}</span>
          </div>
          <div>
             <h4 class="badge badge-danger">New Deaths</h4>
             <span>${Global.NewDeaths}</span>
          </div>
          <div>
             <h4 class="badge badge-success">New Recovered</h4>
             <span>${Global.NewRecovered}</span>
          </div>
          <div>
             <h4 class="badge badge-success">Total Recovered</h4>
             <span>${Global.TotalRecovered}</span>
          </div>
        </section>
        `;
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => {
    console.log(err);
  });
