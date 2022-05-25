import React,{ useState,useEffect } from 'react';
export default function DataTable(props){
    const [data,setData]=useState([]);
    const getData=()=>{
        fetch('data.json',{
            headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        }
        )
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            setData(myJson)
        });
    }
    useEffect(()=>{
    getData()
    },[]);

    const columns = React.useMemo(()=>["Name","Position","Office","Age","Start Date","Salary"],[]);
    const style={border:"1px solid lightgrey"};
    const [pageSize,setPageSize]= useState(15);
    let maxPage=((data.length/pageSize)+0.3).toFixed(0);
    const [currentPage,setCurrentPage]=useState(0);
    let pages=[];
    let canPreviousPage = currentPage > 0;
    let canNextPage= currentPage+1 < maxPage;
    let first =(pageSize)*(currentPage);
    let last=pageSize*(currentPage+1)<=data.length? pageSize*(currentPage+1):data.length;

    for(let i = 1; i<=maxPage;i++){
        pages.push(i);
    }
    return (
        <>
        <pre>
            <code>
                {JSON.stringify([{
                    "canNext":canNextPage,
                    "canPrev":canPreviousPage,
                    "current":currentPage,
                    "maxPage":maxPage
                }])}
            </code>
        </pre>
            <select
                id="choice"
                value={pageSize}
                onChange={e => {
                setPageSize(Number(e.target.value));
                }}>
                {[5,10,15 ,20, 25].map(pageSize => (
                <option key={pageSize} value={pageSize} selected>
                    {pageSize}
                </option>
                ))}
            </select>

            <label for="choice"> entries per page</label>

            <br></br>
            
            <input placeholder="Search ..." onChange={()=>setData(data.filter((e)=>e===null))}></input>
            
            <table style={style} cellPadding={11}>
                <thead style={{borderBottom:"2px solid black"}}>
                    {
                        columns.map((header)=>
                        <th>
                            {header}
                        </th>
                        )
                    }
                </thead>

                <tbody>
                    {
                        data.slice(first,last).map((person,index)=>
                        <tr key={index}>
                            <td style={style}>{person.Name}</td>
                            <td style={style}>{person.Position}</td>
                            <td style={style}>{person.Office}</td>
                            <td style={style}>{person.Age}</td>
                            <td style={style}>{person.StartDate}</td>
                            <td style={style}>{person.Salary}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
            <br></br>
            <hr></hr>
            <div className="pagination">
                <span>Showing{' '}
                    <strong>
                        {(pageSize)*(currentPage)+1} to {pageSize*(currentPage+1)<=data.length?pageSize*(currentPage+1):data.length} of {data.length} entries
                    </strong>
                </span>
                <span style={{
                    position:"absolute",
                    right:0,
                    }}>

                    <button onClick={() => setCurrentPage(currentPage-1)} disabled={!canPreviousPage}>
                    {'<'}
                    </button>

                    {pages.map((value)=>
                        <button onClick={()=>{
                            setCurrentPage(value-1)
                        }
                            }>
                            {value}
                        </button>
                    )}

                    <button onClick={() => setCurrentPage(currentPage+1)} disabled={!canNextPage}>
                        {'>'}
                    </button>
                </span>
            </div>
        </>
    )
    
}

