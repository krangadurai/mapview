import { Grid } from 'gridjs-react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';

const ListView =()=> {
    const list = useSelector((state)=>state.app.appdata.listLocation);
    // const row = () => [faker.name.findName(), faker.internet.email()];
    // const [data, setData] = useState([row()]);
    // const update = () => {
    //   setData(data.slice(0).concat([row()]));
    // }
    const columns = Object.keys(list[0]); // Get the keys of the first object to define columns

    const data = list.map(location => Object.values(location)); // Map the objects to arrays for data
  
    return (
      <div>
          <Link to="/AddItem"   className="btn btn-info add-btn"><i class="ri-add-fill me-1 align-bottom"></i>Add record</Link>

        <Grid
          data={data}
          columns={columns}
          pagination={{
            limit: 5,
          }}
        />
      </div>
    );
  }

export default ListView;