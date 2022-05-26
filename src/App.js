import './App.css';
import SideNav from './components/SideNav'
import DataTable from './components/DataTables';
import MyFooter from './components/Footer';
import { useState } from 'react';
function App(){
    let [toggle,setToggle]=useState(false);
    return (
        <div className={'sb-nav-fixed'+toggle?' sb-nav-toggled':''}>
            <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            (//Navbar Brand)
                <a class="navbar-brand ps-3" href="index.html">Start Bootstrap</a>
                (//Sidebar Toggle)
                <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"
                onClick={()=>setToggle(!toggle)}>
                    <i class="fas fa-bars"></i>
                </button>
                (//Navbar Search)
                <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    <div class="input-group">
                        <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                        <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
                    </div>
                </form>
                (//Navbar)
                <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#!">Settings</a></li>
                            <li><a class="dropdown-item" href="#!">Activity Log</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#!">Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div id="layoutSidenav">
                <SideNav/>
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid px-4">
                            <h1 className="mt-4">Tables</h1>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                <li className="breadcrumb-item active">Tables</li>
                            </ol>
                            <div className="card mb-4">
                                <div className="card-body">
                                    This table has been inspired by dataTables but developped from scratch using React Hooks.
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-header">
                                    <i className="fas fa-table me-1"></i>
                                    DataTable Example
                                </div>
                                <div className="card-body">
                                    <DataTable/>
                                </div>
                            </div>
                        </div>
                    </main>
                    <MyFooter/>
                </div>
            </div>
        </div>
    );
};
export default App;