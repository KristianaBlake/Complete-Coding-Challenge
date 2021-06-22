import NameList from "./NameList.js";
import IdList from "./IdList.js"; 
import "./ItemTable.css";

const ItemTable = (props) => {

  const filteredNames = props.items.filter(function (item) {
    return item.name !== null && item.name !== "";
  });

  return (
    <table className="item-table">
        <thead>
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
  )
};

export default ItemTable;