import companies from "../data/companies";
import Companie from "./Companie";

function Companies() {
  return (
    <>
      {companies.map((obj) => 
        <Companie key={obj.code} title={obj.title}></Companie>
      )}
    </>
  );
}
export default Companies;
