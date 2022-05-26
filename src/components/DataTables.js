import React,{ useEffect, useState} from 'react';
export default function DataTable(props){
    const [data,setData]=useState([]);
    const getData=()=>{
            fetch("data.json",{
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
        useEffect(()=>
        getData()
        ,[]);

    const columns = React.useMemo(()=>["Name","Position","Office","Age","Start Date","Salary"],[]);
    const tableStyle={border:"1px solid lightgrey"};
    const [search,setSearch]=useState("");
    const [pageSize,setPageSize]= useState(15);
    const [currentPage,setCurrentPage]=useState(0);

    let filtered=data.filter((e)=>{
        if(search===""){
            return true;
        }
        for (const prop of Object.keys(data[0])){
            if(e[prop].toString().toLowerCase().includes(search.toLowerCase()))
                return true;
        }
        return false;
    });

    let maxPage=((filtered.length/pageSize)+0.3).toFixed(0);
    let first =(pageSize)*(currentPage);
    let last=pageSize*(currentPage+1)<=filtered.length? pageSize*(currentPage+1):filtered.length;
    //[first,last]= index of currently displayed data
    let page=filtered.slice(first,last);
    let pages=[];
    let canPreviousPage = currentPage > 0;
    let canNextPage= currentPage+1 < maxPage;
    let resetPage=()=>setCurrentPage(0);
    for(let i = 1; i<=maxPage;i++){
        pages.push(i);
    }

    

    return (
        <>
            <div>
                <select
                    id="choice"
                    value={pageSize}
                    onChange={e => {
                    setPageSize(Number(e.target.value));
                    resetPage();
                    }}>
                    {[5,10,15 ,20, 25].map(pageSize => (
                    <option key={pageSize} value={pageSize} selected>
                        {pageSize}
                    </option>
                    ))}
                </select>

                <label for="choice"> entries per page</label>

                <br></br>

                <input type="text" placeholder="Search ..." onChange={(e)=>{
                    setSearch(e.target.value.toString());
                    resetPage();
                }} 
                    style={{
                        position:"relative",
                        right:0,
                        }}>

                </input>
            </div>
            <table style={tableStyle} cellPadding={11}>
                <thead style={{borderBottom:"2px solid black"}}>
                    {
                        columns.map((header)=>{
                            return(
                                <th>
                                    {header}
                                </th>
                            );
                        })
                    }
                </thead>

                <tbody>
                        {
                       page.map((person,index)=>
                        <tr key={index}>
                            <td style={tableStyle}>{person.Name}</td>
                            <td style={tableStyle}>{person.Position}</td>
                            <td style={tableStyle}>{person.Office}</td>
                            <td style={tableStyle}>{person.Age}</td>
                            <td style={tableStyle}>{person.StartDate}</td>
                            <td style={tableStyle}>{person.Salary}</td>
                        </tr>
                        )
                    }
                        
                </tbody>
            </table>
            <br></br>
            <hr></hr>
            <div classNameName="pagination">
                <span>Showing{' '}
                    <strong>
                        {(first+1)>filtered.length?filtered.length:first+1} to {last} of {filtered.length} entries
                    </strong>
                </span>
                <span style={{
                    position:"absolute",
                    right:0,
                    }}>

                    <button onClick={() => setCurrentPage(currentPage-1)} disabled={!canPreviousPage}>
                    {'<'}
                    </button>

                    {pages.map((value)=>{
                        if(value===currentPage+1)
                            return(
                                <button onClick={()=>{
                                    setCurrentPage(value-1)
                                }
                                }
                                style={{border:"white"}}
                                >
                                    {value}
                                </button>
                            )
                        else
                        return(
                            <button onClick={()=>
                                setCurrentPage(value-1)
                            }
                            >
                                {value}
                            </button>
                        )

                    })}

                    <button onClick={() => setCurrentPage(currentPage+1)} disabled={!canNextPage}>
                        {'>'}
                    </button>
                </span>
            </div>
        </>
    )
    
}