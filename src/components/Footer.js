export default function MyFooter(props){
    const {website}=props;
    return(
        <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
                 <div className="d-flex align-items-center justify-content-between small">
                    <div className="text-muted">Copyright &copy; {website}</div>
                    <div>
                        <a href="#">Privacy Policy</a>
                        &middot;
                        <a href="#">Terms &amp; Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};