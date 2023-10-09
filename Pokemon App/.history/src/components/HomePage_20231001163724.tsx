
interface HomePageProps {
    data: object[];
}

function HomePage(props:HomePageProps) {
  return (
    <>
        <NavBar/>
        <FilterBar/>
        {props.data?.map(p=>{
            return(
                <Card data={p}/>
            )
        })}
        <Pagination/>
    </>
  )
}

export default HomePage