/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
 */

import React from 'react';
import DefaultImage from '../../img/default_image.png';

const Science = ({ newsData, page, rowsPerPage, selected, toggle, timeConversion, articleComments}) => {
    return (
        <div className='Wrapper'>
            <div className="accordion">
                { newsData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((news_info, i) => (
                    <div className='news-item' key={i}>
                        <div className='news-title' onClick={() => toggle(i, news_info)}>
                        <h2 className='article-title'>{ news_info.headline ? news_info.headline.main : news_info.title }</h2>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <p>{news_info.abstract}</p>
                        <div className={selected === i ? 'content show' : 'content'}>
                            <div className="container-fluid" id="news_box">
                                <div className="row news_card" key={`news-${i}`}>
                                    <div className="col-lg-4 col-md-5 news_img">
                                    <img src={DefaultImage} alt={news_info.title} />
                                    </div>
                                    <div className="col-lg-8 col-md-7 news_content_col">
                                        <h4 className="news_title">{news_info.title}</h4>
                                        <div className="row news_author_published">
                                            <div className="col-lg-6 col-md-5">
                                                <p>Section- {(news_info.section)}</p>
                                            </div>
                                            <div className="col-lg-6 col-md-7">
                                                <p>Published- {timeConversion(`${news_info.published_date}`)}</p>
                                            </div>
                                        </div>
                                        <p className="news_description">{news_info.abstract}</p>
                                        <p className="mt-2"><a href={`${news_info}`} rel="noreferr">Read More...</a></p>
                                        <div className='comments'>
                                        <h6>Comments:</h6>
                                            {articleComments.length > 0 ? 
                                            <>
                                                { articleComments.map((comment, i) => (
                                                    <div className="comment-section rounded" key={i}>
                                                        <p className="p-3" key={i}>{`${comment.commentBody}`}</p>
                                                    </div>
                                                ))}
                                            </>
                                            :
                                            <p>No readers comments for this article</p>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  );
}

export default Science;
