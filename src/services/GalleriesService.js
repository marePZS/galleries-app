import BaseService from './BaseService';

class GalleriesService extends BaseService {
    async getAllGalleries(filter){
        const {data} = await this.http.get('/', {params: {filter}});
        return data;
    }

    async getGallery(id){
        const {data} = await this.http.get(`/galleries/${id}` );
        return data;
    }

    async createGallery(gallery){
        const {data} = await this.http.post('/create', gallery);
        return data;
    }

    async updateGallery(id, gallery){
        const {data} = await this.http.put(`/edit-gallery/${id}`, gallery);
        return
    }

    async deleteGallery(id){
        const {data} = await this.http.delete(`/galleries/${id}`);
        return data;
    }
}

const galleriesService = new GalleriesService();
export default galleriesService;