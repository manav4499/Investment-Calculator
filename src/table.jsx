import { calculateInvestmentResults, formatter } from "./util/investment.js";

export default function Table({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const userInput = {
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  };

  const resultData = calculateInvestmentResults(userInput);
  const initialinvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment ;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th> 
        </tr>
      </thead>
      <tbody>
        {resultData.map((item) => {

          const totalInvestment = item.valueEndOfYear - (item.annualInvestment * item.year) - initialinvestment;
          const totalCaptial  = item.valueEndOfYear - totalInvestment ;
          return (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalInvestment)}</td>
              <td>{formatter.format(totalCaptial)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
