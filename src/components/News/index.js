/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
 */

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import World from './world';
import Science from './science';
import Pagination from './pagination';
import SearchArticles from '../searchArticles';
import NewsService from '../../services/news-service';
import { connect } from "react-redux";
import Loader from '../loader';
import Home from '../home';
import './news.scss';

import { getTopStoriesData, getSearchStoriesData, getReaderCommentsData } from "../../store/actions";

const News = (props) => {
  const [value, setValue] = useState('world');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selected, setSelected] = useState(null);
  const [searchArticle, setSearchAticle] = useState(null)
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)

  const toggle = async(i, news) => {
    if(selected === i){
      return setSelected(null)
    }
    setSelected(i)

    // get article comments
    let comment_url = news.url === 'null' || news.url === '' || news.url === undefined ? null : news.url
   
    if(comment_url !== null){
      const responseComments = await NewsService.getReaderComments(comment_url)
      props.getReaderCommentsData(responseComments)
      setComments(props.comments.data.results.comments)
    }
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // handle pagination 
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSearchAticle(null)
  };

  // handle search article
  const searchArticles = (text) => {
    setSearchAticle(text)
  }

  // get top searching articles
  const handleTopStories = async() => {
    if(searchArticle === null || searchArticle === ''){
      const responseTopStories = await NewsService.getTopStories(value)
      console.log('responseTopStories', responseTopStories);
      props.getTopStoriesData(responseTopStories)
      setLoading(false)
    }else {
      const responseSearchArticles = await NewsService.getSearchArticles(value, searchArticle)
      props.getTopStoriesData(responseSearchArticles)
      setLoading(false)
    }
  }

  useEffect(() => {
    const fetchData = () => {
      handleTopStories()
    }
    fetchData();
  }, [value, searchArticle, selected])

  const timeConversion = (date) => {
    const publishedAt = new Date(date);
    return `${publishedAt.toDateString()} ${publishedAt.toLocaleTimeString()}`;
  }

  return (
    <>
    {props.access_token ?
    <div style={{padding: '50px'}}>
      <Box sx={{ width: '100%', typography: 'body1', padding: '50px', background: '#fff' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            
            <TabList onChange={handleChange} aria-label="news categories">
              <Tab label="World" value="world" />
              <Tab label="Science" value="science" />
              
            </TabList>
            <div style={{float: "right"}} className="w-25 mt-1">
              <SearchArticles searchArticles={searchArticles} />
            </div>
          </Box>
          <TabPanel value="world" className="mt-5">
            {!loading ?
              <>
                <World newsData={ props.top_stories ? props.top_stories.data.response? props.top_stories.data.response.docs : props.top_stories.data.results : [] } page={page} rowsPerPage={rowsPerPage} selected={selected} toggle={toggle} timeConversion={timeConversion} articleComments={comments} />
                <Pagination newsData={ props.top_stories ? props.top_stories.data.response ? props.top_stories.data.response.docs : props.top_stories.data.results : [] } page={page} rowsPerPage={rowsPerPage} handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage} />
              </>
              :
              <Loader />
            }
            </TabPanel>
            <TabPanel value="science" className="mt-5">
              {!loading ?
                <>
                  <Science newsData={ props.top_stories ? props.top_stories.data.response ? props.top_stories.data.response.docs : props.top_stories.data.results : [] } page={page} rowsPerPage={rowsPerPage} selected={selected} toggle={toggle} timeConversion={timeConversion} articleComments={comments} />
                  <Pagination newsData={ props.top_stories ? props.top_stories.data.response ? props.top_stories.data.response.docs : props.top_stories.data.results : [] } page={page} rowsPerPage={rowsPerPage} handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage} />
                </>
                : 
              <Loader />
            }
          </TabPanel>
        </TabContext>
      </Box>
    </div>
    : <Home/> }
    </>
  
  );
}

const mapStateToProps = (state) => {
  const { top_stories, search_stories, comments, access_token } = state;
  return { top_stories, search_stories, comments, access_token };
};

export default connect(mapStateToProps, { getTopStoriesData, getSearchStoriesData, getReaderCommentsData })(News);