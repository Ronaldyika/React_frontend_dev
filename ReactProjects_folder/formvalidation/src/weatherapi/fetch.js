import axios from "axios";
import React,{Component} from "react";


class FetchData extends Component{
    constructor(props){
        super()

        this.state=({
            querysetinfo:"",
            error:null
        })

    }

    componentDidMount(){
        axios.get("af0d27ada9e27549bbfcbd6265bd9704")
        .then(resp =>{
            const querysetinfo = resp.data
            this.setState({
                querysetinfo:querysetinfo,
                error:null
            })
        })
        .catch(error=>{
            this.setState({
                error:"problem found in  the request"
            })
        })
    }

    render() {
        const { querysetinfo, error } = this.state;
        if (!querysetinfo || !querysetinfo.length) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                {error ? (
                    <div>{error}</div>
                ) : (
                    <div>
                        {querysetinfo.length ? (
                            querysetinfo.map(post => (
                                <div key={post.id}>
                                    <p>Name: {post.time}</p>

                                    <p>Description: {post.Temperature}</p>
                                </div>
                            ))
                        ) : (
                            <div>No querysetinfo available</div>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default FetchData