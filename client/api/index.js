import axios from "axios"

import { apiPrefix } from '../../etc/configs.json'

export default {
	loadPosts: () =>{
		return axios.get(`${apiPrefix}/posts`)
	}
}