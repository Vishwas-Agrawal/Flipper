import axios from "axios";
const Axios=axios.create({
	baseURL:'https://ezymailserver.herokuapp.com/'
});
export default Axios;
