import BaseService from './BaseService';

class CommentsService extends BaseService{

    async createComment(comment){
        const {data} = await this.http.post(`/galleries/${id}`, comment);
        return data;
    }

    async deleteComment(id){
        const {data} = await this.http.delete(`/comments/${id}`);
        return data;
    }

}

const commentsService = new CommentsService();
export default commentsService;