import React, { useEffect, useState } from 'react';
import './detailBlog.scss';
import Axios from 'axios';
import { Gap, Link } from '../../components';
import { useHistory, withRouter } from 'react-router-dom';

const DetailBlog = (props) => {
    const [data, setData] = useState({});

    useEffect(() => {
        const id = props.match.params.id;
        Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
        .then(res => {
            setData(res.data.data)
        })
        .catch(err => {
            console.log('err: ', err);
        })
    }, [props]);

    const history = useHistory();
    
    if(data.author) {
        return (
            <div className="detail-blog-wrapper">
                <Link title="Kembali Ke Home" onClick={() => history.push('/')} />
                <Gap height={20} />
                <img className="img-cover" src={`http://localhost:4000/${data.image}`} alt="Thumb" />
                <p className="blog-title">{data.title}</p>
                <p className="blog-author">{data.author.name} - {new Date(data.createdAt).toDateString()}</p>
                <p className="blog-body">{data.body}</p>
                <Gap height={20} />
            </div>
        )
    };
    return <p>Loading Data ...</p>
}

export default withRouter(DetailBlog);
