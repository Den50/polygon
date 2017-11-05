import axios from 'axios';
import { apiPrefix } from '../../etc/configs.json';

export default {
    listUsers() {
        return axios.get(`${apiPrefix}/users`);
    }

    // createNote(data) {
    //     return axios.post(`${apiPrefix}/notes`, data);
    // },

    // deleteNote(noteId) {
    //     return axios.delete(`${apiPrefix}/notes/${noteId}`);
    // }
}
