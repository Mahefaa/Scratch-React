import './App.css';
import SideNav from './components/SideNav'
import DataTable from './components/DataTables';
import MyNav from './components/MyNav';
import MyFooter from './components/Footer';
function App(){
    return (
        <>
        <MyNav brand="Start Bootstrap" item1="Settings" item2="Activity Log" item3="Logout"/>
        <div id="layoutSidenav">
            <SideNav/>
            <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid px-4">
                        <h1 class="mt-4">Tables</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                            <li class="breadcrumb-item active">Tables</li>
                        </ol>
                        <div class="card mb-4">
                            <div class="card-body">
                                This Datatable has been generated with ReactTable. For more informations please refer to {' '}
                                <a target="_blank" href="https://react-table.tanstack.com" rel="noreferrer">{' '}official React-Tables documentation</a>
                                .
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-header">
                                <i class="fas fa-table me-1"></i>
                                DataTable Example
                            </div>
                            <div class="card-body">
                                <DataTable/>
                            </div>
                        </div>
                    </div>
                </main>
                <MyFooter/>
            </div>
        </div>
        </>
    );
};
export default App;