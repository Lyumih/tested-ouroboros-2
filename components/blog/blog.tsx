import "./blog.module.scss";
import "./page-navigation.module.scss";
import Link from "next/link";
import ReactPaginate from 'react-paginate'
import {useEffect, useState} from "react";
import {Router, useRouter, withRouter} from "next/router";

interface BlogProps {
  items: [
    {
      title:string,
      img:string,
      id: string,
      date: string,
      fileContent: string
    }
  ]
}
const Blog = (props) => {
  const {items} = props

  const [isLoading, setLoading] = useState(false); //State for the loading indicator
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  const router = useRouter()
  // console.log(router)

  /*
    Posts fetching happens after page navigation,
    so we need to switch Loading state on Router events.
  */
  useEffect(() => { //After the component is mounted set router event handlers
    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', stopLoading);

    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', stopLoading);
    }
  }, [])

  const paginationHandler = (page) => {
    const currentPath = router.pathname;
    const currentQuery = router.query;
    currentQuery.page = page.selected + 1;

    props.router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  let content = null
  let page: number = +router.query.page || 1

  const slicedItems =items.slice((page-1) * props.perPage, page * (props.perPage))

  if (isLoading) content = <div>Loading</div>
  else {
    // console.log(page * props.perPage, page* (props.perPage+1))
    content = (
      <div className="news-project-w">
      </div>
    )
  }

  // console.log(props)

  return (
    <div id="news-project-w">
      <div id="news-project">
        <h2>Новости проекта</h2>
        <div className="news-project-w">
          {slicedItems.map(item=> {
            return (
                <Link  href={`/news/${item.id}`} key={item.id}>
                  <a className="news-project">
                    <img src={item.img} alt="" />
                    <p>{item.title}</p>
                    <div className="clear"></div>
                  </a>
                </Link>            )
          })}
          <div className="clear"></div>
        </div>
        <ReactPaginate
          containerClassName={'page-navigation'}
          activeLinkClassName='active-page-button'
          breakLinkClassName='page-button'
          pageLinkClassName='page-button'
          previousLinkClassName='previous-button'
          nextLinkClassName='next-button'
          nextLabel={"Следующая"}
          previousLabel={"Предыдущая"}


          // initialPage={page - 1}
          pageCount={props.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={paginationHandler}
        />
        {/*<br/>*/}
        {/*<br/>*/}
        {/*<PageNavigation current={1} limit={10} total={4} onClick={()=>{console.log("hhello")}}/>*/}
        <div className="clear"></div>
      </div>
    </div>
  );
}

export default withRouter(Blog)