import './App.css';
import FilterableProductTable from "./components/FilterableProductTable";

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="card">
                    <h5 className="card-header">Thinking as React (Product View)</h5>
                    <div className="card-body">
                        <FilterableProductTable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
