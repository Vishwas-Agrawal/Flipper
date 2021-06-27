import axios from "axios";
const Axios=axios.create({
	baseURL:'https://ezymailserver.herokuapp.com/',
	headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
});
export default Axios;
