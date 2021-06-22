import NameList from "./NameList.js";
import IdList from "./IdList.js"; 
import "./ItemTable.css";
import { directive } from "@babel/types";

const ItemTable = (props) => {

  const filteredNames = props.items.filter(function (item) {
    return item.name !== null && item.name !== "";
  });

  return (
    <div className="body">
      <table className="item-table">
          <thead className="table-header">
              <tr>
                  <th>List Id</th>
                  <th>Name</th>
              </tr>
          </thead>
          <tbody>
              
              {filteredNames.sort((a, b) => parseFloat(a.listId) - parseFloat(b.listId)).map((item, i) => (
                <tr key={item.id}>

                  <IdList key={item.id} listId={item.listId} />

                  <NameList key={item.id} name={item.name} /> 
                  
                </tr>
              ))}
          </tbody>

      </table>
    </div>
  )
};

export default ItemTable;